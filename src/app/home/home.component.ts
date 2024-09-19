import { Component } from '@angular/core';
import { DescribtionComponent } from '../describtion/describtion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DescribtionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
