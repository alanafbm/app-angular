import { Component } from '@angular/core';
import { ConnecterService } from '../connecter.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent {
  estConnecte:Boolean = false;

  constructor(private servConnecter:ConnecterService){

  }

  ngOnInit(){
    this.estConnecte = this.servConnecter.getEtatConnexion();
  }

  changeConnexion(){
    this.estConnecte = !this.estConnecte;
    this.servConnecter.setEtatConnexion(this.estConnecte);
    console.log(this.estConnecte);
    
  }
}
