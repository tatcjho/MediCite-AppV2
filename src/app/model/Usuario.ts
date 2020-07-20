import { DocumentReference } from '@angular/fire/firestore';
import { Reference } from '@angular/fire/storage/interfaces';

export class Usuario {

    uid: string;
    nombre: string;
    apellido: string;
    sexo: string;
    fecha_nac: string;
    correo: string;
    contrasena: string;
    especialidad: string;
    telf: string;
    direccion: string;
    peso: string;
    estatura: string;
    pregunta_seguridad: string;
    rol: Reference;

}