import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'Imprimiendo números del 1 al 100';
    public numeros = [];
    constructor(){
        for( var x = 1; x < 101; x++){
            console.log(this.obtenerValor(x));
            this.numeros.push(this.obtenerValor(x));
        }
  } 
obtenerValor(x){
    if(x % 3 === 0 || x % 5 === 0){
        return ["Linio","",""][x%3]+["IT", "", "", "", ""][x%5];
    }
    return x;
  }

}


