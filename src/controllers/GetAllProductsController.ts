import { Request, Response } from "express";
import { GetAllProductsService } from "../services/GetAllProductsService";
import { Product } from "../entities/Product";

export class GetAllProductsController {
  async handle(request: Request, response: Response) {

    const getAllProductsService = new GetAllProductsService();

    const result = await getAllProductsService.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
