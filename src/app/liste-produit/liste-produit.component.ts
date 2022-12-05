import { Component } from '@angular/core';
import { ConnecterService } from '../connecter.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent {

    salutation:String = "";
    estEditable:Boolean = false;
    produit:Produit[] = [];
    // produit:Array<Object>;

    constructor( private servConnecter:ConnecterService){

    }

    ngOnInit():void{
      if(this.salutation === ""){
        this.salutation = "Bonjour";
      }

      this.produit = [...Array(15)].map((item, index)=>{
        return {
                id: index+1, 
                nom: "Mon produit" + index, 
                prix: Math.ceil(Math.random() * (100)),
                editable: false
              }
      })
      // console.log(this.produit);
      
    }
    rendreEditable(){
      if(this.servConnecter.getEtatConnexion()){
        this.estEditable = !this.estEditable;
      }else{
        this.estEditable = false;
      }
    }
}
