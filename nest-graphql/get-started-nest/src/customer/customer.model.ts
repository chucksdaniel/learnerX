import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { InvoiceModel } from '../invoice/invoice.model';

@ObjectType()
@Entity()
export class CustomerModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column({ length: 30, nullable: false })
  name: string;
  @Field()
  @Column('text', { nullable: false })
  email: string;
  @Field()
  @Column('varchar', { nullable: false })
  phone: string;
  @Field()
  @Column('text')
  address: string;
  @Field((type) => [InvoiceModel], { nullable: false })
  @OneToMany((type) => InvoiceModel, (invoice) => invoice.customer)
  invoices: InvoiceModel[];
  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
