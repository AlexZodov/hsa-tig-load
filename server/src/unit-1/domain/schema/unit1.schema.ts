import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Unit1Document = Unit1Model & Document;

@Schema({ collection: 'unit1', timestamps: true })
export class Unit1Model {
  @Prop({ isRequired: true, type: String })
  id: string;

  @Prop({ isRequired: true, type: String })
  type: string;

  @Prop({ isRequired: true, type: Date })
  createdAt: Date;

  @Prop({ isRequired: true, type: Date })
  updatedAt: Date;
}

export const Unit1Schema = SchemaFactory.createForClass(Unit1Model);
