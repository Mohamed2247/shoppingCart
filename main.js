const loginDiv = document.getElementById("login");
const appDiv = document.getElementById("app");
const welcome = document.getElementById("welcome");

function checkLogin() {
  const user = localStorage.getItem("userName");
  const password = localStorage.getItem("password");
  if (user && password) {
    loginDiv.style.display = "none";
    appDiv.style.display = "block";
    welcome.textContent = `Welcome ${user}`;
  }
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username) return alert("Enter your Name");
  if (!password) return alert("Enter your password");
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters, contain uppercase, lowercase and special character"
    );
    return;
  }

  localStorage.setItem("userName", username);
  localStorage.setItem("password", password);
  checkLogin();
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("password");
  localStorage.removeItem("cart");
  location.reload();
}

checkLogin();

const products = [
  { id: 1, name: "Laptop", price: 15000 },
  { id: 2, name: "Phone", price: 8000 },
  { id: 3, name: "Head phones", price: 1200 },
  { id: 4, name: "Smart Watch", price: 3000 },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let ordersQueue = [];

const productsDiv = document.getElementById("products");

products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <strong>${product.name}</strong>  ${product.price} EGP
    <button onclick="addToCart(${product.id})">Add</button>
  `;
  productsDiv.appendChild(div);
});

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  saveCart();
  renderCart();
}

function undoCart() {
  if (cart.length === 0) return alert("Empty Cart");
  cart.pop();
  saveCart();
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.textContent = item.name;
    cartDiv.appendChild(div);
  });
}

function placeOrder() {
  if (cart.length === 0) return alert("Empty Cart");
  ordersQueue.push([...cart]);
  cart = [];
  saveCart();
  renderCart();
  renderOrders();
}

function renderOrders() {
  const ordersUl = document.getElementById("orders");
  ordersUl.innerHTML = "";
  ordersQueue.forEach((order, index) => {
    const li = document.createElement("li");
    li.textContent = `Order ${index + 1} - ${order.length} Products`;
    ordersUl.appendChild(li);
  });
}

function clearCart() {
  if (confirm("Are you sure?")) {
    cart = [];
    saveCart();
    renderCart();
  }
}

function saveCart() {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch {
    alert("Storage error");
  }
}

let time = 60;
const offer = document.getElementById("offer");

setInterval(() => {
  if (time >= 0) {
    offer.textContent = `The offer ends ${time--} in a second.`;
  } else {
    offer.textContent = "offer ended";
  }
}, 1000);

renderCart();
renderOrders();
