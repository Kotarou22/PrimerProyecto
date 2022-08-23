import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  public contador: number = 0;
  public scroll: number = 0;
  public alto: number = 30;
  public ancho: number = 50;
  public color: string = '';
  public mostrar: boolean = false;
  public imagen: string = 'https://media.istockphoto.com/photos/beautiful-little-ginger-kitten-sits-in-human-boats-on-the-setting-sun-picture-id1345472306?k=20&m=1345472306&s=612x612&w=0&h=hPOgnJ7zzQf3c5Pj0lq5Ujf46yyirfTmWM-6KA1iqc0='
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public capturarAlto(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.ancho = valor;
  }
  public capturarColor(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }
}
