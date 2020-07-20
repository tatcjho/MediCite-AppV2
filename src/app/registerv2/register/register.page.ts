import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/model/Rol';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  rol: Rol
  
  usuario: Usuario = {

    uid: "",
    nombre: "",
    apellido: "",
    sexo: "",
    fecha_nac: "",
    correo: "",
    contrasena: "",
    especialidad: "",
    telf: "",
    direccion: "",
    peso: "",
    estatura: "",
    pregunta_seguridad: "",
    rol: this.rol,

  }
  
  constructor(private route: ActivatedRoute, private router: Router, private RegisterService: RegisterService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.rol = this.router.getCurrentNavigation().extras.state.rol
      
    })

    console.log("subscribe",this.rol)
    
  }

  redirect(){

    this.RegisterService.insertUsuario(this.usuario)


  }

}