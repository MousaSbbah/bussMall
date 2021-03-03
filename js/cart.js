/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector ('tbody').removeChild;

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const table = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0 ; i < cart.items.length; i++){
  // TODO: Create a TR
  let tableRows = document.createElement ('tr');
  table.appendChild (tableRows);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteLinkTableData = document.createElement ('td');
  // deleteLink = document.createElement ('a')
  // deleteLink.textContent = 'X';
  // deleteLink.setAttribute =('href' , removeItemFromCart());
  // deleteLinkTableData.appendChild (deleteLink);
  tableRows.appendChild (deleteLinkTableData);
  deleteLinkTableData.textContent = 'X';
  deleteLinkTableData.onclick='removeItemFromCart(event)';
  
  let deleteQuantity = document.createElement ('td');
  tableRows.appendChild (deleteQuantity);
  deleteQuantity.textContent =cart.items[i].quantity;

  let deleteItem = document.createElement('td');
  tableRows.appendChild (deleteItem);
  deleteItem.textContent = cart.items[i].product;
  

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
   
 
  
  
  }
  
}

function removeItemFromCart(event) {
  const clickedItem = event.target;
  const tablebodey = document.querySelector('tbody')
 const rowNumber=clickedItem.parentNode.rowIndex;
 
 tablebodey.removeChild(tablebodey.childNodes[rowNumber-1]);
 console.log(rowNumber);
//  console.log(tablebodey.childNodes)
//   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem ();
//   // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart.items));
// // TODO: Re-draw the cart table
//    renderCart ();

}

// This will initialize the page and draw the cart on screen
renderCart();
