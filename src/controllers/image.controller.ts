import { Response, Request } from "express";
import deleteImage from "../middlewares/deleteImage";

export default {
  post: async (req: Request, res: Response) => {
    if (!req.file?.path) {
      res.status(500).json({
        success: false,
        message: "Image Upload failed!",
      });
    }
    const fileName = req.file?.filename;
    res.status(201).json({
      success: true,
      message: "Image upload successful!",
      route: fileName,
    });
  },
  delete: async (req: Request, res: Response) => {
    if (!deleteImage(req.params.id)) {
      res.status(500).json({
        success: false,
        message: "Image deletion failed!",
      });
    }
    res.status(200).json({
      success: true,
      message: `Image ${req.params.id} has been deleted`,
    });
  },
  other: async (req: Request, res: Response) => {
    res.status(405).json({
      message: `${req.method} method Not Allowed`,
    });
  },
};
