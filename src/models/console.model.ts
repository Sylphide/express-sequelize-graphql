import { Table, Model, Column } from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';

@Table
@ObjectType()
export class Console extends Model {
  @Field(() => String)
  @Column
  name: string;
}
