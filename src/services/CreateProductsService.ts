import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories";

type ProductRequest = {
  name: string;
  price: number;
  description?: string;
  quantity?: number;
};

export class CreateProductsService {
  async execute({ name, description, price, quantity }: ProductRequest): Promise<Product | Error> {

    const repo = ProductRepository();

    if (await repo.findOne({ where: { name } })) {
      return new Error("O produto já existe!");
    }

    const product = repo.create({
      name,
      price,
      description,
      quantity
    });

    await ProductRepository().save(product);

    return product;
  }
}
