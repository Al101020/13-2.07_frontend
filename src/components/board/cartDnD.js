let actualCart;

const onMouseOver = (e) => {
  console.log(e);
  console.log('onMouseOver');

  actualCart.style.top = e.clientY + 'px';
  actualCart.style.left = e.clientX + 'px';
};

const onMouseUp = () => {
  console.log('onMouseUp');
  actualCart.classList.remove('dragged');
  actualCart = undefined;

  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver);
};


function mousedown(e) {  // console.log('cartDnD');
  e.preventDefault();

  const carts = document.querySelectorAll('.cart');

  if (carts.length === 0) {
    console.log('нет карточек');
    return;
  } // console.log(carts.length);   // console.log(e.target);
  if (e.target.classList.contains('cart')) {
    console.log(`здесь cart есть, всего - ${carts.length}`);
    actualCart = e.target;
  } else if (e.target.parentElement.classList.contains('cart')) {
// console.log(`У родителя cart-очки есть, всего - ${carts.length}`);
    actualCart = e.target.parentElement;
  } else { // console.log('Класса cart нет');
    actualCart = undefined;
    return;
  } //
//   console.log(actualCart);

  // if (e.target.classList.con)
  // actualCart = e.target;

  actualCart.classList.add('dragged'); //
  console.log(actualCart);
  console.log(actualCart.classList);

  document.documentElement.addEventListener('mouseup', onMouseUp);
  document.documentElement.addEventListener('mouseover', onMouseOver);
}

export { mousedown, onMouseUp, onMouseOver };
