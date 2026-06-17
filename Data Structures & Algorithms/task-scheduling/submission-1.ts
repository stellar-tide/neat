type ScheduledTask = { name: string, count: number };
type CoolingTask = { countdown: number, task: ScheduledTask };

class MaxHeap {
    #heap: ScheduledTask[] = [];
    #comparator = (a: ScheduledTask, b: ScheduledTask) => (a.count - b.count);

    constructor(tasks?: ScheduledTask[]) {
        if (tasks) {
            this.#heap = tasks;
            this.#heap.sort(this.#comparator);
        }
    }

    push(task: ScheduledTask) {
        this.#heap.push(task);
        this.#heap.sort(this.#comparator);
    }

    pop(): ScheduledTask {
        return this.#heap.pop();
    }

    get size(): number {
        return this.#heap.length;
    }
}

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const groupedTasks = new Map<string, ScheduledTask>();
        for (const name of tasks) {
            const scheduled: ScheduledTask = groupedTasks.get(name) ?? { name, count: 0 }
            groupedTasks.set(name, { ...scheduled, count: scheduled.count + 1 });
        }

        const heap = new MaxHeap(Array.from(groupedTasks.values()));
        let cooling: CoolingTask[] = [];
        let cycles = 0;

        while (heap.size || cooling.length) {
            if (heap.size) {
                const { name, count } = heap.pop();
                if (count > 1) {
                    cooling.push({ countdown: n+1, task: { name, count: count - 1 }});
                }
            }
            const cooled = [];
            for (const { countdown, task } of cooling) {
                if (countdown > 1) {
                    cooled.push({ countdown: countdown - 1, task });
                } else {
                    heap.push(task);
                }
            }
            cooling = cooled;
            cycles++;
        }

        return cycles;
    }
}
/**
 * Given: array of string names tasks (A-Z) (with length m), integer n
 * Find: min cpu cycles to complete all tasks, identical tasks require n cycle cooldown
 * Assume: 1 to 1000 tasks, 0 to 100 for n
 * Goal:
 * 
 * Idea:
 * (a)  max queue on count of tasks + map of cooldowns (task -> cycles)
 *          while cooling down pop out of queue
 * 
 * Alg:
 * group tasks into map of task -> count        O(m) time and space
 * init heap with all task count pairs          O(m) time, O(m) space
 * init cooling array empty
 * init cycles = 0
 * 
 * while heap not empty and cooling not empty
 *      if heap size > 0:
 *          pop {task, count}
 *          if count > 1
 *              cooldown push { n + 1, {task, count - 1} }
 *      for { countdown, task } in cooling:
 *          cooled = []
 *          if countdown > 1
 *              cooled.push { countdown - 1, task }
 *          else
 *              heap.push task
 *          cooling = cooled
 *      cycles++
 * 
 * return cycles
 *      
 */