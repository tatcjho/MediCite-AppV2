import { MedicamentoDetalle } from './MedicamentoDetalle';

export class Diagnostico {

    uid: string;
    tipo: string;
    descripcion: string;
    //Receta
    prescripcion: MedicamentoDetalle[];

}