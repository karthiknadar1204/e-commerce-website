// authRoutes.js
import express from 'express';
import { registerController,loginController,testController, forgotPasswordController, updateProfileController } from "../controllers/authControllers.js";
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

export default authRouter;
 