import { createClient } from "redis";

console.log("REDIS_URL loaded:", !!process.env.REDIS_URL);

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on("error", (error) => {
  console.error("Redis error:", error);
});

await redisClient.connect();

console.log("Connected to Redis!");

export default redisClient;