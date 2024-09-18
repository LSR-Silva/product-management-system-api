import { Router } from "express";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { CreateProductController } from "./controllers/CreateProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";

const routes = Router();

routes.get("/products", new GetAllProductsController().handle);
routes.post("/products", new CreateProductController().handle);
routes.put("/products/:id", new UpdateProductController().handle);
routes.delete("/products/:id", new DeleteProductController().handle);

export default routes;
