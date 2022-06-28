import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FOOD MENU';
  totalCart: number=0;

inventory = [
  {
  "id": 1,
  "name": "Fries",
  "description": "Salty and hot",
  "inStock": 19,
  "Price" : 2.99,
  "brand": "KFC",
  "image":"assets/French_Fries.jpg",
  "featured": false,
  "qty" :0,  //set this is always set to 0


},

{
  "id": 2,
  "name": "Soda",
  "description": "Cold and sweet",
  "inStock": 16,
  "Price": 1.99,
  "brand": "Coca-cola",
  "image":"assets/soda.jpg",
  "featured": true,
  "qty" :0, //set this is always set to 0



},

{
  "id": 3,
  "name": "Burger",
  "description": "Cheesy and yummy",
  "inStock": 15,
  "Price": 4.99,
  "brand": "McDonalds",
  "image":"assets/burger.jpg", 
  "featured": false,
  "qty" : 0, //set this is always set to 0




}
]
totalInventory(){
let sum = 0;
for (let x of this.inventory){
 sum = sum + x.inStock;
}
return sum;

}
increaseQty(inventory: any){
  if(inventory.qty < inventory.inStock){
    inventory.qty++;
  }


}
decreaseQty(inventory: any){
  if(inventory.qty > 0){
    inventory.qty--;
  }


}
totalPrice(){
  let totalPrice = 0.00;
for(let x of this. inventory){
if(x.qty <= x.inStock && x.qty >=0){
  totalPrice = totalPrice + (x.qty * x.Price);
}

}
return totalPrice;
}

getCart(){
  this.totalCart = 0;
   for(let x of this.inventory){
     if(x.qty <= x.inStock && x.qty >=0 )
   this.totalCart = this.totalCart +( 1 * x.qty);
 }
 return this.totalCart;
 }

search(){
this.inventory = this.inventory.filter(res=>{
  return res.name.toLocaleLowerCase()
});
}



}