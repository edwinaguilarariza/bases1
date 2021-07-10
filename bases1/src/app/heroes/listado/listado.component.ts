import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string [] = ['spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado : string= '';
  

  borrarHeroe() {
    console.log('borrando..');
    this.heroeBorrado =this.heroes.shift() || '';// .shift sirve para borrar elemento de la primera pocicion
    
  }

}
