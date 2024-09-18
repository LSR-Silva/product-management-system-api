import { dataSource } from "../database";
import { Product } from "../entities/Product";

export const ProductRepository = () => {
  return dataSource.getRepository(Product);
};
