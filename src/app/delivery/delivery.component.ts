import { Component } from '@angular/core';
import { RussiaMapComponent } from '../russia-map/russia-map.component';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [RussiaMapComponent],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent {}
