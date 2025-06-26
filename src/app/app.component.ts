import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPortafolio';

  currentComponent: 'info' | 'skills' | 'projects' | 'contacts' = 'info';

  animando: boolean = false;


  imagenActual: string = 'assets/Tubos_L2/info_L.png'; // imagen por defecto




  infoComponent(){
    this.currentComponent = 'info';
    this.reproducirAnimacion('assets/Tubos_L2/info_L.png');
  }

  skillsComponent(){
    this.currentComponent = 'skills';
    this.reproducirAnimacion('assets/Tubos_L2/skill_L.png');
  }

  projectsComponent(){
    this.currentComponent = 'projects';
    this.reproducirAnimacion('assets/Tubos_L2/experiencia_L.png');
  }

  contactComponent(){
    this.currentComponent = 'contacts';
    this.reproducirAnimacion('assets/Tubos_L2/contactos_L.png');
  }

  reproducirAnimacion(imagenFinal: string) {
  if (this.animando) return;
  this.animando = true;

  const totalFrames = 17;
  let frame = 1;

  const intervalo = setInterval(() => {
    this.imagenActual = `assets/giro2/${frame}.png`;
    frame++;

    if (frame > totalFrames) {
      clearInterval(intervalo);
      setTimeout(() => {
        this.imagenActual = imagenFinal;
        this.animando = false;
      }, 100);
    }
  }, 55);
}

}
