var arr = [
  {
    p_id: "01",
    p_price: "2000",
    p_img:
      "https://img.freepik.com/premium-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg",
  },
  {
    p_id: "02",
    p_price: "2000",
    p_img:
      "https://img.freepik.com/premium-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg",
  },
  {
    p_id: "03",
    p_price: "2000",
    p_img:
      "https://img.freepik.com/premium-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg",
  },
];

var getDiv = document.getElementById("abc");

// Creating Elements Manually

for (var i = 0; i < arr.length; i++) {
  var products = arr[i];

  var pid = document.createElement("p");
  pid.innerHTML = products.p_id;
  getDiv.appendChild(pid);

  var price = document.createElement("p");
  price.innerHTML = products.p_price;
  getDiv.appendChild(price);

  var img = document.createElement("img");
  img.src = products.p_img;
  getDiv.appendChild(img);
}

// Adding Bootstrap

for (var i = 0; i < arr.length; i++) {
  var products = arr[i];

  getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${products.p_img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.p_id}</h5>
    <p class="card-text">${products.p_price}</p>
  </div>
  </div>`;
}

// var getDiv = document.getElementById("abc");

// var img = document.createElement("img");
// img.src =
//   "https://img.freepik.com/premium-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg";
// getDiv.appendChild(img);
