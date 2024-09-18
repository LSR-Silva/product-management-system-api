import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories";

type ProductIdRequest = {
  id: string;
}

export class DeleteProductService {
  async execute({ id }: ProductIdRequest): Promise<Product | Error> {
    const repo = ProductRepository();

    const deletedProduct = await repo.createQueryBuilder()
    .delete()
    .where('id = :id', { id })
    .execute();

    if (deletedProduct.affected === 0) {
      return new Error("O produto não existe!");
    }

    return deletedProduct.raw;
  }
}
