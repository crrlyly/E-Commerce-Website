// import { createClient } from "redis";

// console.log("REDIS_URL loaded:", !!process.env.REDIS_URL);

// const redisClient = createClient({
//   url: process.env.REDIS_URL,
// });

// redisClient.on("error", (error) => {
//   console.error("Redis error:", error);
// });

// await redisClient.connect();

// console.log("Connected to Redis!");

// export default redisClient;

import { createClient } from "redis";

const redisClient = createClient({
    url: process.env.REDIS_URL,
    socket: {
        connectTimeout: 10000,
        reconnectStrategy: (retries) => {
            if (retries > 5) return false;
            return Math.min(retries * 500, 3000);
        }
    }
});

redisClient.on("error", (err) => {
    console.error("Redis error:", err.message);
});

redisClient.on("ready", () => {
    console.log("Redis connected successfully!");
});

redisClient.on("reconnecting", () => {
    console.log("Redis reconnecting...");
});

try {
    await redisClient.connect();
    console.log("Redis PING:", await redisClient.ping());
} catch (err) {
    console.error("Redis connection failed:", err.message);
}

export default redisClient;