import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    getCurrentYear() {
        const currentYear = new Date().getFullYear(); 
        return currentYear;
    }
}
