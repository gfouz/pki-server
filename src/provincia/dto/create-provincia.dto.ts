import * as mongoose from "mongoose";

interface Municipio_type {
	name: string;
	type: string;
	enabled: boolean;
}

export class CreateProvinciaDto {
	name: string;
	type: string;
	enabled: boolean;
	municipios: Municipio_type[];
}
