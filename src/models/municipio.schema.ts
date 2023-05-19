import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Provincia } from "./provincia.schema";

export type MunicipioDocument = Municipio & Document;
@Schema()
export class Municipio {
    @Prop({required:true, unique:true, lowercase: true})
    name: string;
    @Prop({required:true})
    type: string;
    @Prop({required:true})
    enabled: boolean;
    @Prop({required:true})
    provincia: { type: Number, ref: 'Provincia' }
    @Prop({default: Date.now() })
    createdDate: Date
}
export const MunicipioSchema = SchemaFactory.createForClass(Municipio)