import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryControllers.js";

const categoryRouter = express.Router();

categoryRouter.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
  );


categoryRouter.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );


categoryRouter.get("/get-category", categoryController);


categoryRouter.get("/single-category/:slug", singleCategoryController);


categoryRouter.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryController
  );

  export default categoryRouter;
