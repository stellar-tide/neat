class MinHeap {
    #heap: TimedUserTweetIndex[] = [];
    #comparator = (a: TimedUserTweetIndex, b: TimedUserTweetIndex) => (b.time - a.time);

    push(timed: TimedUserTweetIndex) {
        this.#heap.push(timed);
        this.#heap.sort(this.#comparator);
    }

    pop(): TimedUserTweetIndex {
        return this.#heap.pop();
    }

    get size(): number {
        return this.#heap.length;
    }
}

type TimedTweet = { time: number, tweetId: number };
type TimedUserTweetIndex = { time: number, userId: number, index: number };

class Twitter {
    #tweets: Map<number, TimedTweet[]> = new Map();
    #time: number = 0;
    #following: Map<number, Set<number>> = new Map();

    constructor() {}

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        const userTweets: TimedTweet[] = this.#tweets.get(userId) ?? [];
        userTweets.push({ time: this.#time, tweetId });
        this.#tweets.set(userId, userTweets);
        this.#time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        // add self to followers if needed
        const following = this.#following.get(userId) ?? new Set();
        following.add(userId);
        this.#following.set(userId, following);

        // initialize data structures
        const followedLatestHeap = new MinHeap();   // compare on time
        const latestTweetsHeap = new MinHeap();     // compare on -time
        const feed: number[] = [];

        // build min heap of max size 10 from each followed user's latest tweet
        for (const followed of following) {
            if (!this.#tweets.get(followed)) continue;

            const index = this.#tweets.get(followed).length - 1;
            const time = this.#tweets.get(followed)[index].time;
            followedLatestHeap.push({ time, userId: followed, index });

            if(followedLatestHeap.size > 10) followedLatestHeap.pop();
        }
        console.log(following);
        console.log(followedLatestHeap);
        // populate max heap of max size 10 from followers heaps tweets
        while (followedLatestHeap.size) {
            let timed = followedLatestHeap.pop();
            timed.time = -timed.time;   // invert time so min heap acts as max
            latestTweetsHeap.push(timed);
        }

        // pop latest tweet from max heap, pushing user's prev tweet if one exists, until feed is built
        while (feed.length < 10 && latestTweetsHeap.size > 0) {
            let { userId: followedUserId, index } = latestTweetsHeap.pop();
            feed.push(this.#tweets.get(followedUserId)[index].tweetId);
            if (index > 0) {
                const prevTweet = this.#tweets.get(followedUserId)[index - 1];
                latestTweetsHeap.push({ userId: followedUserId, time: -prevTweet.time, index: index - 1 });
            }
        }

        return feed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        const following = this.#following.get(followerId) ?? new Set();
        following.add(followeeId);
        this.#following.set(followerId, following);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        const following = this.#following.get(followerId) ?? new Set();
        following.delete(followeeId);
        this.#following.set(followerId, following);
    }
}
/**
 * Given: twitter
 * Find: implement it :)
 * Assume: user ids between 1 and 100, tweet ids between 0 and 1000
 *          getting news feed does not remove tweets from news feed
 *          tweets unbounded but only need to keep 10 most recent per user
 * 
 * Ideas:
 * ------
 * (a)  tweets map from userId to array
 *      following map from userId to set of userIds
 * 
 * type TimedTweet = { time: number, tweetId: number }
 * type TimedUserTweetIndex = { time, userId, index }
 * 
 * follow
 * ======
 * followers = following.get(followee) ?? new Set()
 * followers.add(follower)
 * following.set(followee, followers)
 * 
 * unfollow
 * ========
 * followers = following.get(followee) ?? new Set()
 * followers.delete(follower)
 * following.set(followee, followers)
 * 
 * postTweet
 * =========
 * userTweets = tweets.get(userId) ?? []
 * userTweets.push { tweetId, time }
 * time++
 * 
 * getNewsFeed (only one tweet per followee)
 * ===========
 * add self to following map
 * 
 * followingLatestHeap = new MinHeap of TimedUserTweetIndex (min on time) -> evict oldest tweets
 * latestTweetsHeap = new MinHeap of TimedUserTweetIndex (min on -time) -> evict newest tweets
 * feed = []
 * 
 * for followed of following.get(userId)
 *      if (!tweets.get(followed)) continue
 *      index = tweets.get(followed).length - 1
 *      time = tweets.get(followed)[index].time
 *      followingLatestHeap push { userId, time, index }
 *      if followingLatestHeap.size > 10
 *          followingLatestHeap pop
 * 
 * while followingLatestHeap.size
 *      let timed = followingLatestHeap.pop
 *      timed.time = -1 * timed.time; // for min heap comparator
 *      latestTweetsHeap.push(timed)
 * 
 * while feed.size < 10 || latestTweetsHeap.size
 *      let { userId, time, index } = latestTweetsHeap.pop
 *      feed.push tweets.get(userId)[index].tweetId
 *      if index > 0
 *          previous = { userId, time: tweets.get(userId)[index - 1].time, index: index - 1}
 *          latestTweetsHeap push previous
 * 
 * return feed
 * 
 */
