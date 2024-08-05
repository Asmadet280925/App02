import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton,IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton , IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [ IonButton, IonButtons , IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton ,IonGrid, IonRow, IonCol]
})
export class ProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
