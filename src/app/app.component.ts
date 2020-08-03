import { NgModule,Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { InteractionService } from './_services/interaction.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/login/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  offline: boolean;
  darkmode = false;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private interact: InteractionService,
    private store: Storage,
    private router: Router,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
    window.addEventListener('offline', () => this.offline = true);
    window.addEventListener('online', () => this.offline = false);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.statusBar.styleDefault();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#3F51B5');
        this.splashScreen.hide();
      }

      this.auth.getCurrentUser().then(user=>{
        console.log(user)
        if(user){
          //this.router.navigate(['home'])
        }else{
          this.router.navigate(['welcome'])
        }

      }
      )

    });
    this.setUIMode();
  }

  setUIMode() {
    this.interact.isDarkMode().subscribe((dark) => {
      this.darkmode = dark ? true : false;
    });
    this.store.get('darkmode')
      .then((mode) => this.darkmode = mode ? true : false);
  }
}
