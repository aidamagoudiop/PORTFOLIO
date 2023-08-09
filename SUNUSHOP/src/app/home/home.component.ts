import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(){}
  // voteArray: Array<boolean> =[];
  
    // voteArray=[{
  Produit =[{
    id:1,
    etatProduit:false,
    name:'sac rouge',
    cover: '',
    price: 12998 
  },
  {
    id:2,
    etatProduit:false,
    name:'sac vert',
    cover: '',
    price: 7980
  },
  {
    id:3,
    etatProduit:false,
    name:'sac rose',
    cover:'',
    price: 10000
  },
  {
    id:4,
    etatProduit:false,
    name: 'sac meuve',
    cover: "",
    price: 3990
  },
  {
    id:5,
    etatProduit:false,
    name:'sac orange',
    cover: '',
    price: 13000
  },
  {
    id:6,
    etatProduit:false,
    name:'sac ',
    cover: "",
    price: 7000
  }
];

  ngOnInit(): void {
      // this.voteArray = new Array<boolean>(5).fill(false);
  }

  verificationProduit($event:any,index:number){
    this.Produit.map((data:any)=>{
      data.etatProduit = false;
    })
    this.Produit[index].etatProduit=true;
  }
  // allowOneVote(){
  //   this.vote
  // }
  // this.voteArray.map((data:any)=>{

}
