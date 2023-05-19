import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Municipio } from "../models/municipio.schema";
const Types = mongoose.Types;
export type ProvinciaDocument = Provincia & Document;
@Schema()
export class Provincia {
    @Prop({required:true, unique:true, lowercase: true})
    name: string;
    @Prop({required:false})
    type: string;
    @Prop({default: true})
    enabled: boolean;
    @Prop({ type: Types.ObjectId, ref: "Municipio" })
    municipios: Municipio[];
}
export const ProvinciaSchema = SchemaFactory.createForClass(Provincia)