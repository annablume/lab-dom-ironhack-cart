// ITERATION 1
const cart = document.querySelectorAll('#cart tbody');
const calc = document.getElementById('calculate'); 

function updateSubtotal(product) {

    const priceSpan = product.querySelector('.price span');
    const priceValue = priceSpan.innerText;

    const quantityInput = product.querySelector('input');
    const quantityValue = quantityInput.value;

  //maybe the normal calculation doesn't work with floating numbers as in Iteration 2
    const subtotalPrice = parseFloat(priceValue) * parseInt(quantityValue);
    const subtotalSpan = product.querySelector('.subtotal span');
    
    // set the subtotal price to the corresponding DOM element.
    subtotalSpan.innerText = subtotalPrice;

    // return

    return subtotalPrice;
  }

// ITERATION 2 *3

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  // call the function updateSubtotal with every tr.product DOM node in the table#cart.
  const allProducts = document.querySelectorAll('tr.product');
  
  //define totalSum state
  let total = 0;

  for (let product of allProducts) {
    // call the function updateSubtotal
    //let subtotal = updateSubtotal(product);
    //define totalSum
    total += updateSubtotal(product);
    
  }

  // get the h2 span __ //This is not working 
  let totalSpan = document.querySelector('#total-value span');
  totalSpan.innerText = total; 

}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
