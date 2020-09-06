var productsData = [{
      "productName" : "White Face Cap",
      "price": "$200",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/cap-1.jpg",
      "category": "Caps"
    },
    {
      "productName": "Brown Face Cap",
      "price": "$250",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/cap-2.jpg",
      "category": "Caps"
    },
    {
      "productName": "Red Face Cap",
      "price": "$180",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/cap-3.jpg",
      "category": "Caps"
    },
    {
      "productName": "Black Face Cap",
      "price": "$210",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/cap-4.jpg",
      "category": "Caps"
    },
    {
      "productName": "Pink Face Cap",
      "price": "$270",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/cap-5.jpg",
      "category": "Caps"
    },
    {
      "productName": "Brown Slim-Fitted Pants",
      "price": "$400",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/pants-1.jpg",
      "category": "Pants"
    },
    {
      "productName": "Blue Crazy Denim Jeans",
      "price": "$390",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/pants-2.jpg",
      "category": "Pants"
    },
    {
      "productName": "Pink Trousers",
      "price": "$430",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/pants-3.jpg",
      "category": "Pants"
    },
    {
      "productName": "Adidas Shoe",
      "price": "$350",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shoe-1.jpg",
      "category": "Shoes"
    },
    {
      "productName": "Black and White Sports Shoe",
      "price": "$360",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shoe-2.jpg",
      "category": "Shoes"
    },
    {
      "productName": "Heel Shoe",
      "price": "$380",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shoe-3.jpg",
      "category": "Shoes"
    },
    {
      "productName": "Red Sneakers",
      "price": "$405",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shoe-4.jpg",
      "category": "Shoes"
    },
    {
      "productName": "Black Sports Shoe",
      "price": "$320",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shoe-5.jpg",
      "category": "Shoes"
    },
    {
      "productName": "White Tennis Shoe",
      "price": "$420",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shoe-6.jpg",
      "category": "Shoes"
    },
    {
      "productName": "Long-sleeved Checked Shirt",
      "price": "$300",
      "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
      "imageSrc": "./images/shirt-1.jpg",
      "category": "Shirts"
    },
    {
    "productName": "Ash Plain Shirt",
    "price": "$390",
    "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
    "imageSrc": "./images/shirt-2.jpg",
    "category": "Shirts"
    },
    {
    "productName": "Black Suits",
    "price": "$360",
    "description": "mattisenim ut tellus elementum sagittis vitae et leo duis",
    "imageSrc": "./images/shirt-3.jpg",
    "category": "Shirts"
    },
    {
    "productName": "Pink Striped Shirts",
    "price": "$270",
    "description": "mattis enim ut tellus elementum sagittis vitae et leo duis",
    "imageSrc": "./images/shirt-4.jpg",
    "category": "Shirts"
}]

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function display(productsData) {
  var markUp = ""
  shuffleArray(productsData)
  for (let i of productsData) {
    markUp += `
      <div class="card product-card" data-desc=${i.description} data-category=${i.category} data-index=${i}>
        <img src=${i.imageSrc} class="card-img-top" loading="lazy" alt=${i.productName} />
        <div class="card-body">
          <p class="card-text">
            <b>${i.productName}</b>
            ${i.price}
          </p>
       </div>
     </div>`
   }
   //alert(markUp)
   $("section .row").html(markUp)
   
   
   $(".product-card").click(function (event) {
   markup = `<div class="myProduct ">
   <div>
   <h1 class="mr-3 mt-2">&times;</h1>
   </div>
   <div>
   <img src= ${$(this).find('img').attr('src')} />
   </div>
   <h2>${$(this).find('b').text()}</h2>
   <i>${$(this).find('p').text()}</i>
   <div class="line"></div>
   <p>${$(this).attr('data-desc')}</p>
   <div class="plus">+</div>
   </div>`
   $('#container').addClass("blur");
   $("#card").show()
   $('#card').html(markup);
   $("#card").css("position","fixed")
   $('#card h1, .plus').click(function() {
   $(this).parents('#card').hide("slow")
   $('#container').removeClass("blur")
   })
   })
   
}



$(document).ready( function(){
  display(productsData)
  //const productsHTML = $('.card:visible')
  $("span").click(function() {
    if ($(this).css('color') == "rgb(51, 51, 51)") {
      $(this).css('color','#fa3d67');
    }
    else {
      $(this).css("color", "#333333")
    }
   var none = $("span:visible")
     .filter( function() {
   return $(this).css("color") == "rgb(250, 61, 103)"
   }).text()
   
   
   var filteredProducts = productsData.filter( product => 
     none.includes(product.category) || none.includes('All')
   )
   //alert(filteredProducts.length)
   display(filteredProducts)
   
  })
})