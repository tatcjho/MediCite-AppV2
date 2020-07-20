import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';
import { Router, NavigationExtras } from '@angular/router';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-type-of-register',
  templateUrl: './type-of-register.page.html',
  styleUrls: ['./type-of-register.page.scss'],
})
export class TypeOfRegisterPage implements OnInit {

  rol: DocumentReference

  constructor(private RegisterServices: RegisterService, private router: Router) { }

  ngOnInit() {
  
  }

  redirectPaciente(){

    this.rol = this.RegisterServices.getRol("paciente")

    
    
    let extras: NavigationExtras={
      state:{
        rol: this.rol.path
      }
    }

    this.router.navigate(['registerv2'],extras)
  }

  redirectMedico(){

    this.rol = this.RegisterServices.getRol("medico")

    
    
    let extras: NavigationExtras={
      state:{
        rol: this.rol.path
      }
    }

    this.router.navigate(['registerv2'],extras)
  }
}

