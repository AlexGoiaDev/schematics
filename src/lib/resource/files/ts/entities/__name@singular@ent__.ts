<% if (type === 'graphql-code-first') { %>import { ObjectType, Field, Int } from '@nestjs/graphql';


@ObjectType()
export class <%= singular(classify(name)) %> {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}<% } else { %>
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()  
export class <%= singular(classify(name)) %> {
  @PrimaryGeneratedColumn()
  id: number;
}<% } %>
