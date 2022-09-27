import fs from "fs";

const deleteImage = (imageName: string): boolean => {
  let deleted: boolean = true;
  if (imageName === null) {
    deleted = false;
  } else {
    try {
      fs.unlinkSync(`./uploads/${imageName}`);
      console.log("[+] Deleted successfully!");
    } catch (e: any) {
      deleted = false;
    }
  }
  return deleted;
};

export default deleteImage;
