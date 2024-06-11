const firstBasket = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");
const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");

let totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

right.addEventListener("click", function () {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

left.addEventListener("click", function () {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

/* Three Mian Reasons to use React JS
   1 : Declarative Programming
   2 : Component Based Architecture
   3 : Single Page Applications
*/
