import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ProduitComponent } from './produit/produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ProduitComponent,
    ListeProduitComponent,
    AccueilComponent,
    NonTrouveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
