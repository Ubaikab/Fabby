import sharp from "sharp";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category } =
      req.body;

    if (!req.files) {
        return res.json({ success: false, message: "No images provided" });
    }

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    if (images.length === 0) {
        return res.json({ success: false, message: "Please upload at least one image" });
    }

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        const compressedPath = item.path + '-compressed.webp';
        
        await sharp(item.path)
            .webp({ quality: 80 })
            .resize({ width: 1200, withoutEnlargement: true })
            .toFile(compressedPath);

        let result = await cloudinary.uploader.upload(compressedPath, {
          resource_type: "image",
        });

        // Cleanup both the original multer file and the sharp compressed file
        try { fs.unlinkSync(item.path); } catch(e){}
        try { fs.unlinkSync(compressedPath); } catch(e){}

        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      image: imageUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProduct = async (req, res) => {
  try {


    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}



export { addProduct, listProducts, removeProduct, singleProduct };
