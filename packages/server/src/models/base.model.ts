import {
  Table,
  Model,
  Column,
  PrimaryKey,
  IsUUID,
  Default,
} from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';

@Table
@ObjectType()
export abstract class Base extends Model {
  @Field(() => String)
  @PrimaryKey
  @IsUUID(4)
  @Default(uuidv4())
  @Column
  id: string;
}
