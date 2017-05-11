import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(  private _heroesService: HeroesService,
                private router: Router,
                private activatedRoute:ActivatedRoute) {

    }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{

      if (params['termino']!=""){
        //console.log(params['termino'])
        this.heroes = this._heroesService.buscarHeroes(params['termino'])
      }else{
        this.heroes = this._heroesService.getHeroes()
      }
      });

    //this.heroes = this._heroesService.getHeroes();
    //console.log( this.heroes );

  }

  verHeroe( idx:number ) {

    this.router.navigate( ['/heroe',idx] );

}

}
