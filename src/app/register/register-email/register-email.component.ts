import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { InteractionService } from './../../_services/interaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { Reference } from '@angular/fire/storage/interfaces';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.scss'],
})
export class RegisterEmailComponent implements OnInit {
  pwHidden = true;
  loginCredentialForm: FormGroup;
  emailErrMsg = '';
  formSubmitted = false;

  usuario: Usuario

  rol: Reference

  isdCodes = [
    {
      name: 'Femenino',
    },
    {
      name: 'Masculino',
    },
    {
      name: 'Otro',
    },
   
  ];

  constructor(
    private title: Title,
    private interact: InteractionService,
    private nav: NavController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginCredentialForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.email]),
      pw: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        ),
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if(this.router.getCurrentNavigation().extras.state){
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario
      }

    })

    this.usuario = {

      uid: "",
      nombre: "",
      apellido: "",
      sexo: "",
      fecha_nac: "",
      correo: "",
      contrasena: "",
      especialidad: "",
      telf: this.usuario.telf,
      direccion: "",
      peso: "",
      estatura: "",
      pregunta_seguridad: "",
      rol: this.rol,
  
    };

    this.interact.changeAllowance(false)

  }

  ionViewDidEnter() {
    this.title.setTitle('Step 2 | Doctor Registration');
  }

  async onSubmit(e) {
    this.formSubmitted = true;
    this.interact.changeAllowance(true);
    setTimeout(() => {
      this.nav.navigateForward('/register/create-profile');
    },         1500);
  }
}
