import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  ye(something: any){
    console.log(something)
  }

  elTexto = ''
  variable = false
  superform = {}
}
