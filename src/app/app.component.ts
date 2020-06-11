import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // diretiva que vai virar uma tag html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  name: string = "Cleís"; 
}
