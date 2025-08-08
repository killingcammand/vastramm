// import Redis from "ioredis";

// const redis = new Redis({
//   host: process.env.UPSTASH_REDIS_REST_URL,
//   port: 6379,
//   password: process.env.UPSTASH_REDIS_REST_TOKEN,
//   tls: {}  // required for secure Upstash connection
// });

// export default redis;

import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redis = new Redis({
  host: process.env.UPSTASH_REDIS_HOST,
  port: parseInt(process.env.UPSTASH_REDIS_PORT),
  username: process.env.UPSTASH_REDIS_USERNAME,
  password: process.env.UPSTASH_REDIS_PASSWORD,
  tls: {} // Required for secure (TLS) Upstash Redis
});

redis.on("connect", () => {
  console.log("✅ Connected to Redis");
});

redis.on("error", (err) => {
  console.error("❌ Redis connection error:", err);
});

export default redis;
