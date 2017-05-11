import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../services/heroes.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( _heroesService:HeroesService ) { }

  ngOnInit() {
  }

  buscarHeroe(texto:string){
    console.log(texto);
    
    //console.log(_heroesService)
  }

}
