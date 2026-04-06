import { authMiddleware } from "../../../middlewares/authMiddleware";
import { creatClientController } from "../controller/createClientController";
import { listenClientController } from "../controller/listenClientController";

export async function clientRoutes(app) {

  app.post(
    "/",
    { preHanlder: authMiddleware},
    creatClientController   
  );

  app.get(
    "/",
    {preHanlder: authMiddleware},
    listenClientController
  )
}