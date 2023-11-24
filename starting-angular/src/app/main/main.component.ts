import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

interface userInterface {
  email : string,
  id : number,
  name : string,
  username : string,
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private http: HttpClient){}

  ye(something: any){
    console.log(something)
  }

  elTexto = ''
  variable = false
  superform = {}

  usuarios : Array<userInterface> = []

  cargarUsuarios(){
    this.http.get<[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe((response) => {
      console.log(response)
      for (let e in response){
        let user = response[e]
        this.usuarios.push(user)
      }
    })

  }
}
