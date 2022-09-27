import { Express } from "express";
import imageRoutes from "./routes/image.routes";

function router(server: Express) {
  server.use("/image", imageRoutes);
}

export default router;
