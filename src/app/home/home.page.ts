import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonIcon, IonButton,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {eyeOutline} from'ionicons/icons';
import { RouterLink } from '@angular/router' ;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ RouterLink ,IonHeader, IonToolbar, IonTitle, IonContent ,IonIcon, IonButton,],
})
export class HomePage {
  constructor() {
    addIcons({eyeOutline});
  }
  
}
