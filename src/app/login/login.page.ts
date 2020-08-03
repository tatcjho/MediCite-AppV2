import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  correo: string
  contrasena: string
  showPassword = false
  passwordToggleIcon = 'eye-outline'

  ngOnInit() {
  }

  togglePassword(){

    this.showPassword = !this.showPassword;

    if(this.showPassword==false){

      this.passwordToggleIcon = 'eye-outline'

    }else{

      this.passwordToggleIcon = 'eye-off-outline'

    }
    
  }

  async redirect(){
    
    const messege = this.auth.emailPasswordLogin(this.correo, this.contrasena)

    if(messege===undefined){

      console.log(messege, "Correo o contraseña incorrectos")

    }else{

      this.router.navigate(["home"])

    }
    

  }

}
