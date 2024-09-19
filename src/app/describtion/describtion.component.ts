import { Component } from '@angular/core';
import { RussiaMapComponent } from '../russia-map/russia-map.component';

@Component({
  selector: 'app-describtion',
  standalone: true,
  imports: [RussiaMapComponent],
  templateUrl: './describtion.component.html',
  styleUrl: './describtion.component.css',
})
export class DescribtionComponent {}
