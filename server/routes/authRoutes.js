// authRoutes.js
import express from 'express';
import { registerController,loginController,testController, forgotPasswordController,
  updateProfileController, getOrdersController, getAllOrdersController,
  orderStatusController }
  from "../controllers/authControllers.js";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();


authRouter.post('/register',registerController);

authRouter.post("/login",loginController);

authRouter.post('/forgot-password',forgotPasswordController)


authRouter.get("/test", requireSignIn, isAdmin, testController);

authRouter.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

authRouter.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

authRouter.put("/profile", requireSignIn, updateProfileController);


authRouter.get("/orders", requireSignIn, getOrdersController);

authRouter.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

authRouter.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default authRouter;
 