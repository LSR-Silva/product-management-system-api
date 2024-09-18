import { Request, Response } from "express";
import { CreateProductsService } from "../services/CreateProductsService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description, quantity } = request.body;

    const createProductService = new CreateProductsService();

    const result = await createProductService.execute({
      name,
      price,
      description,
      quantity
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
