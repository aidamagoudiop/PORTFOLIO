import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit{
  
  constructor(){}
  
  @Input() Produit : any;
  @Output() achatAction = new EventEmitter();
  ngOnInit(): void { 
  }
  gestionnaire(){
    // this.Produit.etatProduit=true;
    this.Produit.etatProduit=true;
    this.achatAction.emit(this.Produit);
  }

  // changeVote(){
  //   this.etatAchat=!this.etatAchat
  //   console.log(this.etatAchat)
  // }
}
