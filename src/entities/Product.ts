import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("products")
export class Product extends BaseEntity {
  @Column('varchar', {
    length: 100
  })
  name: string;
  
  @Column('text', {
    default: ''
  })
  description: string;
  
  @Column('numeric', {
    precision: 10,
    scale: 2
  })
  price: number;

  @Column('integer', {
    default: 0
  })
  quantity: number;

  @Column('varchar', {
    length: 1,
    default: 'T'
  })
  is_active: string;
}
