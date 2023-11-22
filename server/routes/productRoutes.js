import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productControllers.js";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const productRouter = express.Router();

productRouter.post( 
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);


productRouter.get(
    "/get-product", 
    getProductController
);

productRouter.get(
    "/get-product/:slug",
     getSingleProductController
);

productRouter.get(
    "/product-photo/:pid",
     productPhotoController
);
 
productRouter.delete(
    "/product/:pid",
    deleteProductController
);

productRouter.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
  
  productRouter.delete("/delete-product/:pid", deleteProductController);

  productRouter.get("/product-count", productCountController);

  productRouter.get("/product-list/:page", productListController);

  productRouter.post("/product-filters", productFiltersController);

  productRouter.get("/search/:keyword", searchProductController);

  productRouter.get("/related-product/:pid/:cid", relatedProductController);

  productRouter.get("/product-category/:slug", productCategoryController);

export default productRouter;
