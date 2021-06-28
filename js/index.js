// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let priceNum = parseFloat(price.innerText);
  let quantityNum = quantity.valueAsNumber;
  let cost = priceNum * quantityNum;

  let costToShow = product.querySelector('.subtotal span');
  costToShow.innerText = cost;
  return cost;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATIONS 2 and 3
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = total.toFixed(2);
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
