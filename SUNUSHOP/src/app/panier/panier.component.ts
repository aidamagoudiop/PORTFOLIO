import { Component, OnInit } from '@angular/core';
import { buffer } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})

export class PanierComponent implements OnInit {
      
  
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      let cart = document.querySelector(".plan-cart");  
      let cartIcon = document.getElementById("#cart-icon");
      let closeCart = document.querySelector("#close-cart");

      if (cartIcon) {
        
        cartIcon.addEventListener("click", () => {
          cart!.classList.add("active");
        });
      }
      if (closeCart) {
        closeCart.addEventListener("click", () => {
          cart!.classList.remove("active");
        });
      }


      if(document.readyState == "loading"){
        document.addEventListener("DOMContentLoaded", ready);
      }else{
        ready();
      }

      function ready(){
        var reomveCartButtons = document.getElementsByClassName('cart-remove');
        console.log(reomveCartButtons)
        for(var i = 0; i<reomveCartButtons.length; i++){
          var button = reomveCartButtons[i];
          button.addEventListener('click', removeCartItem);
        }
        var quantityInputs = document.getElementsByClassName("cart-quantity");
        for(var i =0; i<quantityInputs.length; i++){
          var input = quantityInputs[i];
          input.addEventListener("change", quantityChanged);
        }

        var addCart = document.getElementsByClassName("add-cart");
        for(var i=0; i<addCart.length; i++){
          var button = addCart[i];
          // button.addEventListener("click", addCartClicked);
        }
      }

      function removeCartItem(event: Event) {
        const buttonClicked = event.target as HTMLElement;
        if (buttonClicked && buttonClicked.parentElement) {
          buttonClicked.parentElement.remove();
          updatetotal();
        }
      }
      
      function quantityChanged(event: Event){
          const input = event.target as HTMLInputElement;
          if (input && input.parentElement) {
            if(isNaN(input.valueAsNumber) || input.valueAsNumber <=0){
              input.value = '1';
            }
            updatetotal();
          }
      }
      



      // function addCartClicked(event: Event){
      //   var button = event.target;
      //   var shopProducts = button.parentElement;
      //   var title
      //    = shopProducts.getElementsByClassName('product-title')[0].innerText;
      //   console.log(title);

      // }




      function updatetotal(){
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        var total = 0;
        
        for(var i=0; i<cartBoxes.length; i++){
          var cartBox = cartBoxes[i]
          var priceElement = cartBox.getElementsByClassName('cart-price')[0];
          var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
          // var price = parseFloat(priceElement.innerText.replace("$", ""));
          var price: number = parseFloat(priceElement.textContent!.replace("FCFA", ""));
          // var quantity = quantityElement.value;
          var quantity: number = parseFloat((quantityElement as HTMLInputElement).value);

          total = total + (price * quantity);
          total = Math.round(total * 100 / 100);

          // document.getElementsByClassName('total-price')[0].innerText = '$' + total;
          (document.getElementsByClassName('total-price')[0] as HTMLElement).textContent =  total + ' ' + 'FCFA';

        }
      }

      // function removeCartItem(event: Event){
      //   var buttonClicked = event.target;
      //   buttonClicked.parentElement.remove();
      // }

    });



      
  }
}
  
//   products: any[]  = [];

//   ngOnInit(): void {
//           this.products = [

//               {
//                   id: 1,
//                   image: '../assets/RougeVersace.jpg',
//                   title: 'Rouge_Versace',
//                   price: 120
//               },
//               {
//                   id: 2,
//                   image: '../assets/christian_Dior1.png',
//                   title: 'Christian_Dior',
//                   price: 120
//               },
//               {
//                   id: 3,
//                   image: '../assets/LV1.png',
//                   title: 'Louis_Vuiton',
//                   price: 120
//               },
//               {
//                 id: 4,
//                 image: '../assets/versace1.png',
//                 title: 'Versace',
//                 price: 120
//               },
//               {
//                 id: 5,
//                 image: '../assets/sac-doree3.jpeg',
//                 title: 'sac_doree',
//                 price: 120
//               },
//               {
//                 id: 6,
//                 image: '../assets/sac-noir3.jpeg',
//                 title: 'sac_noir',
//                 price: 120
//               },
//               {
//                 id: 7,
//                 image: '../assets/sac-orange1.jpg',
//                 title: 'sac_orange',
//                 price: 120
//               },
//               {
//                 id: 8,
//                 image: '../assets/sac-meuve1.jpeg',
//                 title: 'sac_meuve',
//                 price: 120
//               },
//               {
//                 id: 9,
//                 image: '../assets/sac-marron.jpeg',
//                 title: 'sac_marron',
//                 price: 120
//               },
//               {
//                 id: 10,
//                 image: '../assets/sac-doree2.jpeg',
//                 title: 'sac_doree',
//                 price: 120
//               },
//               {
//                 id: 11,
//                 image: '../assets/sac-noir2.jpeg',
//                 title: 'sac_noir',
//                 price: 120
//               },
//               {
//                 id: 12,
//                 image: '../assets/sac-doree4.jpeg',
//                 title: 'sac_doree',
//                 price: 120
//               } 
//     ];

//     const categories = [...new Set(this.products.map(item => item.title))];
//     let i = 0;
//     const rootElement = document.getElementById('root');
//     if (rootElement) {
//       rootElement.innerHTML = categories
//         .map(product => {
//           const { image, title, price } = product;
//           return `
//           <div class='container'>
//             <div class='box' *ngFor="let product of products>
//                 <div class='img-box'>
//                     <img class='images' [src]="product.image"></img>
//                 </div>
//                 <div class='bottom'>
//                   <p>{{ product.title }}</p>
//                   <h2>{{ product.price }}.00</h2>
//                   <button (click)="addtocart(product)">Ajouter au panier</button>
//                 </div>
//             </div>
//           </div>`;
//         }).join('')


//         // <div class='box'>
//         //       <div class='img-box' *ngFor="let product of products">
//         //           <img [src]="${image}"></img>
//         //       </div>
//         //         <div class='bottom'>
//         //           <p>{{title}}</p>
//         //           <h2>{{price}}.00</h2>
//         //           <button click='addtocart(${i++})'>Ajouter au panier</button>
//         //         </div>
//         //     </div>


//         const cart: any[] = [];
//         function addtocart(a: number){
//           cart.push({...categories[a]});
//           displaycart();
//         }

//         function displaycart(a: any = null){
//           let j=0;
//           if (rootElement) {
//             if(cart.length==0){
//               // document.getElementById('articles').innerHTML = "votre panier est vide";
//               rootElement.innerHTML = "votre panier est vide";
//             }
//             else{
//               rootElement.innerHTML = cart.map((item)=>
//               {
//                 var {image, title, price} = item;
//                 return(
//                   `<div class='articles'>

//                   <div class='row-img' *ngFor="let product of products">
//                 <img class='rowimg' [src]=${image} [alt]="product.title" />
//                 </div>
//                 <p style='font-size:12px;'>${title}</p>
//                 <h2 style='font-size:15px;'>${price}.00</h2>`+
//                   "<i class='fa-solid fa-trash' onclink='delElement("+ (j++) +")'></i></div>"
              
//                 );
//               }).join('')
//             }
//           }
//       }
      
//     }
//   }
          

//           // // rootElement.innerHTML = cart.map(...).join('');
//           // const rootElement = document.getElementById('articles');
     
          

// }















