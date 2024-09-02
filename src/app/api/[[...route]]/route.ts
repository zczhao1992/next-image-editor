import { Hono } from "hono";
import { handle } from "hono/vercel";
import images from "./images";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

const routes = app.route("/images", images);

app.get("/test", (c) => {
  return c.json({ name: "Hello Hono!" });
});

export const GET = handle(app);

export type AppType = typeof routes;
