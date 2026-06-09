class ListNode {
    val: number;
    prev?: ListNode;
    next?: ListNode;

    constructor(val: number, prev?: ListNode, next?: ListNode) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    #capacity: number;
    #valueMap: Map<number, number>;
    #nodeMap: Map<number, ListNode>;
    #lru: ListNode;
    #mru: ListNode;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#valueMap = new Map();
        this.#nodeMap = new Map();
        this.#lru = new ListNode(-Infinity);
        this.#mru = new ListNode(-Infinity);
        this.#lru.next = this.#mru;
        this.#mru.prev = this.#lru;
    }

    #use(key: number): void {
        let node: ListNode;

        if (this.#nodeMap.has(key) && this.#mru.prev.val !== key) {
            node = this.#nodeMap.get(key);
            node.prev.next = node.next;
            node.next.prev = node.prev;
        } else if (this.#nodeMap.has(key)) {
            return;
        }    
        else {
            node = new ListNode(key);
            this.#nodeMap.set(key, node);
        }

        node.prev = this.#mru.prev;
        node.next = this.#mru;
        this.#mru.prev.next = node;
        this.#mru.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const value = this.#valueMap.get(key) ?? -1;
        if (value !== -1) this.#use(key);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.#valueMap.set(key, value);
        this.#use(key);

        if (this.#valueMap.size > this.#capacity) {
            const evicted = this.#lru.next;
            this.#valueMap.delete(evicted.val);
            this.#nodeMap.delete(evicted.val);
            this.#lru.next = evicted.next;
            evicted.next.prev = this.#lru;
        }
    }
}

/**
 * Given: LRUCache class
 * Find: implementation where put evicts least recently get/put key/value
 * Assume: 1 <= capacity <= 100, 0 <= key, value <= 1000
 * Goal: O(1) average time for get and put
 * 
 * Examples
 * --------
 * 
 * Ideas
 * -----
 * (1)  map for cached kv pairs, doubly linked list (front least recent, back most recent -- queue like)
 *      constructor:
 *          set internal size limit to capacity value
 *          initialize empty value map
 *          initialize empty node map
 *          initialize dummy lru <-> mru nodes
 *      get:
 *          use key
 *              
 *          return map get key or fallback to -1
 *      put:
 *          set value map key -> value
 *          use key
 *          if size value map > capacity:
 *              evicted = lru.next
 *              value map delete evicted.value
 *              node map delete evicted.value
 *              lru.next = evicted.next
 * 
 *      use:
 *          if nodeMap has key and mru.prev.value is not key:
 *              node = nodeMap.get key
 *              node.prev.next = node.next
 *              node.next.prev = node.prev
 *          else:
 *              node = new node with value key
 *              node map set key -> node
 *          
 *              node.prev = mru.prev
 *              mru.prev.next = node
 *              node.next = mru
 *              mru.prev = node
 */
