// authRoutes.js
import express from 'express';
import { registerController,loginController,testController } from "../controllers/authControllers.js";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();


authRouter.post('/register',registerController);

authRouter.post("/login",loginController);

authRouter.get("/test", requireSignIn, isAdmin, testController);

authRouter.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default authRouter;
