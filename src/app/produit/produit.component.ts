import { Component, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {
  @Input() produit:Produit;
  @Input() estEditable:Boolean = false;



  constructor(){}

  changeEditable(){
    this.estEditable = !this.estEditable;
  }

  
}
