import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, price, description, quantity } = request.body;

    const editProductController = new UpdateProductService();

    const result = await editProductController.execute({ id, name, price, description, quantity });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).json();
  }
}
