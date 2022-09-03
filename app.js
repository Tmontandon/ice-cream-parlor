const iceCream = [
  {
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
  },
  {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
  },
  {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
  }
]

const vessels = [
  {
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
  },
  {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
  }
]

const toppings = [
  {
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
  },
  {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
  }
]

// NOTE This works but for professionalism I gotta seperate this big ol function

// function drawShopContents() {
//   let iceCreamDisplay = document.getElementById('iceCream')
//   let vesselDisplay = document.getElementById('vessels')
//   let toppingsDisplay = document.getElementById('toppings')

//   let ICtemplate = ''
//   let Vtemplate = ''
//   let Ttemplate = ''

//   iceCream.forEach(ic => {
//     ICtemplate += `
//     <div class="col-md-4 ">
//       <img src="${ic.image}" class="img-fluid rounded" alt=":)">
//       <div class="d-flex justify-content-between">
//         <h6>${ic.name}</h4>
//         <h6>$${ic.price}</h4>
//       </div>
//     </div>
//     `
//   });

//   vessels.forEach(ic => {
//     Vtemplate += `
//     <div class="col-md-4 ">
//       <img src="${ic.image}" class="img-fluid rounded" alt=":)">
//       <div class="d-flex justify-content-between">
//         <h6>${ic.name}</h4>
//         <h6>$${ic.price}</h4>
//       </div>
//     </div>
//     `
//   });

//   toppings.forEach(ic => {
//     Ttemplate += `
//     <div class="col-md-4 ">
//       <img src="${ic.image}" class="img-fluid rounded" alt=":)">
//       <div class="d-flex justify-content-between">
//         <h6>${ic.name}</h4>
//         <h6>$${ic.price}</h4>
//       </div>
//     </div>
//     `
//   });

//   console.log('hi');

//   // @ts-ignore
//   iceCreamDisplay.innerHTML = ICtemplate
//   // @ts-ignore
//   vesselDisplay.innerHTML = Vtemplate
//   // @ts-ignore
//   toppingsDisplay.innerHTML = Ttemplate
// }

function drawIceCream() {
  let ICdisplay = document.getElementById('iceCream')
  let ICtemplate = ''

  iceCream.forEach(ic => {
    ICtemplate += `
    <div class="col-md-3 my-2 p-1 text-light shadow bg-primary rounded-2 d-flex flex-column justify-content-around" onclick="addIceCreamToCart('${ic.name}')">
      <img src="${ic.image}" class="img-fluid rounded" alt=":)">
      <div class="d-flex justify-content-between">
        <h6>${ic.name}</h4>
        <h6>$${ic.price}</h4>
      </div>
    </div>
    `

  })
  // @ts-ignore
  ICdisplay.innerHTML = ICtemplate
}

function drawVessels() {
  let vesselDisplay = document.getElementById('vessels')
  let Vtemplate = ''

  vessels.forEach(v => {
    Vtemplate += `
    <div class="col-md-3 my-2 p-1 text-light shadow bg-primary rounded-2 d-flex flex-column justify-content-around" onclick="addVesselToCart('${v.name}')">
      <img src="${v.image}" class="img-fluid rounded" alt=":)">
      <div class="d-flex justify-content-between">
        <h6>${v.name}</h4>
        <h6>$${v.price}</h4>
      </div>
    </div>
    `
  })
  // @ts-ignore
  vesselDisplay.innerHTML = Vtemplate
}

function drawToppings() {
  let toppingsDisplay = document.getElementById('toppings')
  let Ttemplate = ''

  toppings.forEach(t => {
    Ttemplate += `
    <div class="col-md-3 my-2 p-1 text-light shadow bg-primary rounded-2 d-flex flex-column justify-content-around" onclick="addToppingsToCart('${t.name}')">
      <img src="${t.image}" class="img-fluid rounded" alt=":)">
      <div class="d-flex justify-content-between">
        <h6>${t.name}</h4>
        <h6>$${t.price}</h4>
      </div>
    </div>
    `
  })

  // @ts-ignore
  toppingsDisplay.innerHTML = Ttemplate
}

function addIceCreamToCart(name) {
  console.log(name)
  let iceCreamKind = iceCream.find(ic => ic.name == name)
  // @ts-ignore
  iceCreamKind.quantity++
  drawCart()
}
function addVesselToCart(name) {
  console.log(name)
  let vessel = vessels.find(v => v.name == name)
  // @ts-ignore
  vessel.quantity++
  console.log(vessel)
  drawCart()
}
function addToppingsToCart(name) {
  console.log(name)
  let topping = toppings.find(t => t.name == name)
  console.log(topping);
  // @ts-ignore
  topping.quantity++


  drawCart()
}


function drawCart() {
  let cart = document.getElementById('cart')
  let Ctemplate = ''
  iceCream.forEach(ic => { })
  vessels.forEach
  toppings.forEach

}

function drawCartContents() {

}

function drawShopContents() {
  console.log('drawing shop itemss');
  drawIceCream()
  drawVessels()
  drawToppings()
}
drawShopContents()
drawCartContents()