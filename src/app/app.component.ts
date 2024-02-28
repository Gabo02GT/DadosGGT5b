import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dados';
  dadoIzquierdo = '../assets/images/dice1.png';
  dadoDerecho = '../assets/images/dice4.png';
  numero1 : number = 1;
  numero2 : number = 2;

  tirarDados(): void{
    this.numero1 = Math.round(Math.random() * 5) + 1;	
    this.numero2 = Math.round(Math.random() * 5) + 1;

    this.dadoIzquierdo = '../assets/images/dice' + this.numero1 + '.png';
    this.dadoDerecho = '../assets/images/dice' + this.numero2 + '.png';

    //console.log(this.numero1);
    //console.log(this.numero2);
  }
}
