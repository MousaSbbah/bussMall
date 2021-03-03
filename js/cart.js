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
  // tableRows = document.getElementsByTagName ('tr'); غالبا ما اله داعي 
  table.innerHTML='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let table = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (let i = 0 ; i < cart.items.length; i++){
  // TODO: Create a TR
  tableRows = document.createElement ('tr');
  table.appendChild (tableRows);
  // TODO: Create a TD for the delete link, quantity,  and the item
  deleteLinkTableData = document.createElement ('td');
  deleteLink = document.createElement ('a')
  deleteLink.textContent = 'X';
  deleteLink.setAttribute =('href' , removeItemFromCart());
  deleteLinkTableData.appendChild (deleteLink);

  deleteQuantity = document.createElement ('td');
  deleteQuantity.textContent (cart.items[i].quantity);

  deleteItem = document.createElement('td');
  deleteItem.textContent = (cart.items[i].product);
  // deleteItem.setAttribute ('id', i);

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tableRows.appendChild (deleteLinkTableData); 
  tableRows.appendChild (deleteQuantity);
  tableRows.appendChild (deleteItem);
  tableRows.setAttribute ('id',i)
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let selectItem = event.target
  let selectedItemId = selectItem.id
  cart.removeItem (selectedItemId);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  // TODO: Re-draw the cart table
  renderCart ();

}

// This will initialize the page and draw the cart on screen
renderCart();
