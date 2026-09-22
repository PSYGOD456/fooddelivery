const foods=[
 {id:1,name:"Chicken Burger",restaurant:"Burger House",price:149},
 {id:2,name:"Margherita Pizza",restaurant:"Pizza Corner",price:199},
 {id:3,name:"Veg Fried Rice",restaurant:"Spice Kitchen",price:129},
 {id:4,name:"Chicken Biriyani",restaurant:"Malabar Kitchen",price:180},
 {id:5,name:"French Fries",restaurant:"Burger House",price:99}
];
let cart=[]; let loggedIn=false;

function login(){
 const email=document.getElementById("email").value.trim();
 const password=document.getElementById("password").value.trim();
 const msg=document.getElementById("loginMsg");
 if(!email || !password){msg.className="error";msg.textContent="Please enter email and password.";return;}
 loggedIn=true; msg.className="success"; msg.textContent="Login successful.";
}

function renderMenu(){
 const q=document.getElementById("search").value.toLowerCase();
 const menu=document.getElementById("menu");
 const results=foods.filter(f=>f.name.toLowerCase().includes(q)||f.restaurant.toLowerCase().includes(q));
 menu.innerHTML=results.length?results.map(f=>`<div class="food"><span><b>${f.name}</b><br><small>${f.restaurant} · ₹${f.price}</small></span><button onclick="addToCart(${f.id})">Add</button></div>`).join(""):"<p>No food item found.</p>";
}

function addToCart(id){const item=foods.find(f=>f.id===id);const existing=cart.find(f=>f.id===id);if(existing)existing.qty++;else cart.push({...item,qty:1});renderCart();}
function removeFromCart(id){cart=cart.filter(f=>f.id!==id);renderCart();}
function renderCart(){const box=document.getElementById("cart");box.innerHTML=cart.length?cart.map(f=>`<div class="cart-item"><span>${f.name} × ${f.qty}</span><span>₹${f.price*f.qty} <button onclick="removeFromCart(${f.id})">Remove</button></span></div>`).join(""):"<p>Your cart is empty.</p>";document.getElementById("total").textContent="Total: ₹"+cart.reduce((s,f)=>s+f.price*f.qty,0);}
function placeOrder(){const msg=document.getElementById("orderMsg");if(!loggedIn){msg.className="error";msg.textContent="Please login before placing an order.";return;}if(!cart.length){msg.className="error";msg.textContent="Your cart is empty.";return;}msg.className="success";msg.textContent="Order placed successfully! Order #FD"+Math.floor(Math.random()*9000+1000);cart=[];renderCart();}
renderMenu();renderCart();
