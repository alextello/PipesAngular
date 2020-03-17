import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'CaPitÁN aMéricA';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 8699.25;
  fecha = new Date();
  idioma = 'es-GT';
  videoURL = 'https://www.youtube.com/embed/pKO9UjSeLew';
  contrasenia = 'topsecret';
  activarContrasenia = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4000);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

}
