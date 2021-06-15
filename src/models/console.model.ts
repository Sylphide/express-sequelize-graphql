import { Table, Column } from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';
import { Base } from './base.model';

@Table
@ObjectType()
export class Console extends Base {
  @Field(() => String)
  @Column
  name: string;
}
