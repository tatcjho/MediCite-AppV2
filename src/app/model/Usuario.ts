import { Rol } from './Rol';

export class Usuario {

    uid: string;
    nombre: string;
    apellido: string;
    genero: string;
    fecha_nac: Date;
    correo: string;
    contrasena: string;
    especialidad: string;
    telf: string;
    direccion: string;
    peso: string;
    estatura: string;
    pregunta_seguridad: string;
    rol: Rol;

}