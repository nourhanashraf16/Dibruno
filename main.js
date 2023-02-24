var loader = document.querySelector(".overlay-loading");
window.addEventListener("load", function () {
  this.setTimeout(showPage, 2000);
});
function showPage() {
  loader.style.display = "none";
  document.body.style.overflow = "auto";
}
// side section
const btnsOPen = document.querySelectorAll(".cart");
const closeBtn = document.querySelector(".closeBtn");
const sideSec = document.getElementById("sideSec");
console.log(btnsOPen);
btnsOPen.forEach(function (bttn) {
  bttn.addEventListener("click", function (e) {
    e.preventDefault();
    sideSec.classList.toggle("open");
  });
});
closeBtn.addEventListener("click", function () {
  sideSec.classList.toggle("open");
});

// items bestseller
const items = [
  {
    id: 0,
    img: "img/seller1.jpg",
    title: "SANT'ILARIO PERSIMMON CONSERVE",
    details: "unique antipasto,with sleek serving dish/lid",
    price: 20,
    amount: 1,
  },
  {
    id: 1,
    img: "img/firelli_hot_sauce-1-2__74311.jpg",
    title: "FIRELLI ITALIAN HOT SAUCE",
    details: "italian-approved hot sauce for pizza",
    price: 6,
    amount: 1,
  },
  {
    id: 2,
    img: "img/large__31043.jpg",
    title: "CASELLA PROSCIUTTO SPECIALE",
    details: "supple,salty,pure bliss",
    price: 15,
    amount: 1,
  },
  {
    id: 3,
    img: "img/antipasto-2022__66693.jpg",
    title: "ANTIPASTO GIFT BOXSANT'ILARIO PERSIMMON CONSERVE",
    details: "use code : antipasto & save!",
    price: 85,
    amount: 1,
  },
  {
    id: 4,
    img: "img/pretzel_club_thumb__86311.jpg",
    title: "SOFT PRETZEL PAIRING CLUB",
    details: "the ultimate philly pretzel experience,delivered monthly.",
    price: 200,
    amount: 1,
  },
  {
    id: 5,
    img: "img/balsamico-suite-2__92725.jpg",
    title: "DI BRUNO BROS.BALSAMICO SUIT",
    details: "sweet and syrupy aged balsamic vinegar from modena, italy",
    price: 30,
    amount: 1,
  },
  {
    id: 6,
    img: "img/pop_zup_popcorn_ecom-1__31125.jpg",
    title: "POPZUP CHEDDAR HEAD POPCORN",
    details: "because everything's better with cheese.",
    price: 7,
    amount: 1,
  },
  {
    id: 7,
    img: "img/sabatino_truffle_crisps-1_2__79775.jpg",
    title: "SABATINO TRUFFLE",
    details: "indulgent crackers with black truffle seasoning",
    price: 8,
    amount: 1,
  },
];
// render items
function renderItems() {
  const row = document.getElementById("parentItems");
  let cols = "";
  items.forEach(function (item) {
    cols += `<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
    <div class="card">
      <div class="box">
        <div class="bg-image">
          <img
            src="${item.img}"
            alt=""
          />
        </div>
        <div class="addToCart">
          <span><a href="">Quick View</a></span>
          <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a href="">${item.title}</a>
        </h5>
        <p class="card-text">
          ${item.details}
        </p>
      </div>
      <div class="card-foot">
        <span>$${item.price}.00</span>
        <button
          type="button"
          class="btn btn-outline-warning cartBtn"
          data-mdb-ripple-color="dark"
          data-id=${item.id}
        >
          add to cart
        </button>
      </div>
    </div>
  </div>`;
    row.innerHTML = cols;
  });
}
renderItems();

//2 render cartitemsArray
let cartItemsArray = [];
const parentBody = document.getElementById("bodyTable");
function renderCartItemsArray() {
  let rowsBody = "";
  cartItemsArray.forEach(function (cartItem) {
    rowsBody += `<tr>
    <td>${cartItem.id}</td>
    <td class="image"><img src="${cartItem.img}" alt="" /></td>
    <td class="title">${cartItem.title}</td>
    <td>
    <span class="updateBtn" onclick="updateCartItems('increase',${
      cartItem.id
    })">+</span>${cartItem.amount}<span class="updateBtn"
      onclick="updateCartItems('decrese',${cartItem.id})"
      >-</span
    >
  </td>
    <td>${cartItem.price}.00$</td>
    <td>${cartItem.price * cartItem.amount}.00$</td>
    <td><button class="deleteBtn" onclick= deleteCartItem(${
      cartItem.id
    })>Delete</button></td>
  </tr>`;
  });
  console.log(true);
  parentBody.innerHTML = rowsBody;
  document.querySelector(".cart span").innerHTML = cartItemsArray.length;
  document.getElementById("cart-2").innerHTML = cartItemsArray.length;
}

cartBtns = document.querySelectorAll(".cartBtn");
cartBtns.forEach(function (cartBtn) {
  cartBtn.addEventListener("click", function () {
    console.log(cartBtn.dataset.id);
    items.forEach(function (item) {
      if (item.id == cartBtn.dataset.id) {
        console.log(item.id);
        if (cartItemsArray.some((e) => e.id == cartBtn.dataset.id)) {
          alert("product already here...");
        } else {
          cartItemsArray.push(item);
          renderCartItemsArray();
        }
      }
    });
  });
});

// delete item
// ex id= 2 //// e.id = 2,1,3
function deleteCartItem(id) {
  cartItemsArray = cartItemsArray.filter((e) => e.id != id);
  if (cartItemsArray.length == 0) {
    parentBody.innerHTML = "";
  }
  renderCartItemsArray();
}
// delete all
const deleteAllBtn = document.querySelector(".deleteAll");
deleteAllBtn.addEventListener("click", function () {
  parentBody.innerHTML = "";
  cartItemsArray = [];
  renderCartItemsArray();
});

// update cartItemsArray
function updateCartItems(action, id) {
  console.log(id);
  cartItemsArray.forEach(function (cartItem) {
    if (cartItem.id == id) {
      console.log(cartItem.id);
      if (action == "increase") {
        cartItem.amount += 1;
      } else {
        if (cartItem.amount > 1) {
          cartItem.amount -= 1;
        }
      }
      renderCartItemsArray();
    }
  });
}
