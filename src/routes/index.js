import { Router } from "express";
import PostRouter from "./PostRouter.js";
import UserRouter from "./UserRouter.js";

const Routes = Router();

Routes.use("/users", UserRouter);
Routes.use("/posts", PostRouter);

export default Routes;
