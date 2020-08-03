import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InteractionService } from './../../_services/interaction.service';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { Router, NavigationExtras } from '@angular/router';
import { Rol } from 'src/app/model/Rol';

// import dialCodesJson from '../../../assets/dummy/dialCodes.json';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.scss'],
})
export class SendOtpComponent implements OnInit {
  mobileNoForm: FormGroup;
  formSubmitted = false;

  rol: Rol

  usuario: Usuario = {

    uid: "",
    cedula: "",
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

  };

  /*
  isdCodes = [
    {
      name: 'Ecuador',
      dial_code: '+593',
      code: 'EC',
    },
    {
      name: 'India',
      dial_code: '+91',
      code: 'IN',
    },
    {
      name: 'United Arab Emirates',
      dial_code: '+971',
      code: 'AE',
    },
    {
      name: 'United Kingdom',
      dial_code: '+44',
      code: 'GB',
    },
    {
      name: 'United States',
      dial_code: '+1',
      code: 'US',
    },
  ];*/

  mobileErrMsg = '';
  mobileError = false;

  constructor(
    private title: Title,
    private interact: InteractionService,
    private nav: NavController,
    private router: Router
    ) {
    this.mobileNoForm = new FormGroup({
      //isdCode: new FormControl('', Validators.required),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^0|[1-9]\d*$/),
        Validators.maxLength(10),
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit() {
    /*
    const lowCodes = this.isdCodes.map(a => {
      a.code = a.code.toLowerCase();
      return a;
    });
    this.isdCodes = lowCodes.sort((a, b) => a.name.localeCompare(b.name));*/
  }

  ionViewDidEnter() {
    this.title.setTitle('Step 1 | Doctor Registration');
  }

  async checkMobile() {}

  async onSubmit(e) {

    let extras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    }

    this.formSubmitted = true;
    this.interact.changeAllowance(true);
    setTimeout(() => {
      //this.nav.navigateForward('/register/associate-email');
      this.router.navigate(['/register/associate-email'], extras)
    }, 1500);
  }
}
