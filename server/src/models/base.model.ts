import {
  Table,
  Model,
  Column,
  PrimaryKey,
  IsUUID,
  Default,
} from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';
import { uuid } from 'uuidv4';

@Table
@ObjectType()
export abstract class Base extends Model {
  @Field(() => String)
  @PrimaryKey
  @IsUUID(4)
  @Default(uuid())
  @Column
  id: string;
}
