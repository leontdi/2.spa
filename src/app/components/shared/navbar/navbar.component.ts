import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../services/heroes.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              //private _heroesService:HeroesService
              ) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){

    //console.log(texto);
    //console.log(this._heroesService.buscarHeroes(texto));

    this.router.navigate( ['/heroes',termino] );

  }

}
