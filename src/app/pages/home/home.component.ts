import { Component } from '@angular/core';
import { ApodComponent } from '../../components/home/apod/apod.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ApodComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
