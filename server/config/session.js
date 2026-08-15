import session from "express-session";
import { RedisStore } from "connect-redis";
import redisClient from "./redis.js";

const isProduction =
  process.env.NODE_ENV === "production";

const sessionMiddleware = session({
  store: new RedisStore({
    client: redisClient,
    prefix: "shop:",
  }),

  name: isProduction
    ? "__Host-shop"
    : "shop_session",

  secret: process.env.SESSION_SECRET, 
  // node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

  resave: false,
  saveUninitialized: false,

  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
});

export default sessionMiddleware;