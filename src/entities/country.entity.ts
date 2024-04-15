import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    code: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    emoji: string;   
}

@InputType()
export class InputCreate {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field()
    emoji: string;
}