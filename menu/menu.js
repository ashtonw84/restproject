localStorage.setItem('DONUT TOWER', '9.49');
localStorage.setItem('FUDGE-FILLED COOKIES', '7.99');
localStorage.setItem('SUNDAE', '2.99');
localStorage.setItem('BROWNIE CAKE', '5.99');
localStorage.setItem('MUDD PIE', '7.49');
localStorage.setItem('PIG OUT TAVERN BURGER', '10.19');
localStorage.setItem('WHISKEY RIVER BBQ BURGER', '12.89');
localStorage.setItem('BANZAI BURGER', '12.89');
localStorage.setItem('BLACK AND BLEU BURGER', '15.19');
localStorage.setItem('SMOKE & PEPPER BURGER', '13.19');
localStorage.setItem('WEDGIE BURGER', '13.19');
localStorage.setItem('SOUTHERN CHARM BURGER', '14.89');
localStorage.setItem('BACON CHEESEBURGER', '13.49');
localStorage.setItem('ROYAL BURGER', '13.18');
localStorage.setItem('CLUCKS & FRIES', '12.89');
localStorage.setItem('MOZZARELLA STICKS', '8.49');
localStorage.setItem('WINGS', '10.59');
localStorage.setItem('PRETZEL BITES', '5.49');
localStorage.setItem('TOWERING ONION RINGS', '9.49');
localStorage.setItem('FRIED PICKLE NICKLES', '5.49');


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let names = $('.cart-item-title')
    let prices = $('.cart-price')
    let quan = $('.cart-quantity-input')
    for(let i = 0; i<names.length; i++){
        arr1.push(names[i].innerText)
        arr2.push(prices[i+1].innerText)
        arr3.push(quan[i].value)
    }
    localStorage.setItem('namelist', arr1)
    localStorage.setItem('pricelist', arr2)
    localStorage.setItem('qlist', arr3)
    console.log(localStorage)
    
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    $('#paybtn').show();
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}



function CheckBrowser() {
    if ('updateCartTotal' in window && window['updateCartTotal'] !== null) {
       
        return true;
    } else {
            return false;
    }
}

function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        
}
}


   /* $(document).ready(function(){
    $('#paybtn').hide();
  }
)

  function showHideLink(btn)
  {
    if(btn=='button')
    {
      $('#button').hide();
    }
    else
    {
      $('#button').show();
    }
  }
*/ 

  $(document).ready(function(){
    $('#paybtn').hide();
  }
)

  function showHideLink(btn)
  {
    if(btn=='button')
    {
      $('#button').hide();
    }
    else
    {
      $('#button').show();
    }
  }

 $('shop-item-button').click(function(){
    $('#paybtn').show();
 })
 
