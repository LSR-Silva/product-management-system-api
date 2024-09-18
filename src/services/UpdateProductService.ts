import { UpdateResult } from "typeorm";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories";

type ProductIdRequest = {
  id: string;
  name: string;
  price: number;
  description?: string;
  quantity?: number;
}

export class UpdateProductService {
  async execute({ id, name, price, description, quantity }: ProductIdRequest): Promise<UpdateResult | Error> {
    const repo = ProductRepository();

    const updateProduct: Partial<Product> = {};

    if (name !== undefined && name !== null && name !== '') {
      updateProduct.name = name;
    }

    if (price!== undefined && price!== null && price > 0) {
      updateProduct.price = price;
    }

    if (description!== undefined && description !== null && description !== '') {
      updateProduct.description = description;
    }

    if (quantity !== undefined && quantity !== null &&  quantity > 0) {
      updateProduct.quantity = quantity;
    }


    const result = await repo.createQueryBuilder()
    .update(Product)
    .set(updateProduct)
    .where("id = :id", { id })
    .execute();

    if (result.affected === 0) {
      return new Error("O produto não foi encontrado!");
    }

    return result;
  }
}
