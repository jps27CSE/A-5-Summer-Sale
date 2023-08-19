let total_Price = 0;

function itemHandler(data) {
  const nameOfProd = data.childNodes[5].childNodes[1].innerText;
  const list_products = document.getElementById("list_products");
  const count = list_products.childElementCount;
  const li = document.createElement("li");
  li.classList.add("font-bold");
  list_products.style.listStyleType = "none";
  li.innerText = `${count + 1}. ${nameOfProd}`;
  list_products.appendChild(li);

  const price = data.childNodes[5].childNodes[3].innerText.split(" ")[0];
  const priceToFloat = parseFloat(price);

  total_Price = parseFloat(total_Price) + priceToFloat;
  const totalPriceElement = document.getElementById("total_price");
  totalPriceElement.innerText = total_Price.toFixed(2);

  const purchase_button = document.getElementById("purchase_button");

  if (total_Price > 0) {
    purchase_button.disabled = false;
  }

  const applyButton = document.getElementById("apply_button");

  if (total_Price >= 200) {
    applyButton.disabled = false;
  }

  const discountPriceElement = document.getElementById("discount_price");
}

function coupon_button_click() {
  const coupon_input_field =
    document.getElementById("coupon_input_field").value;
  if (coupon_input_field === "SELL200") {
    const disCount = total_Price * 0.2;
    const grandTotal = total_Price - disCount;
    const discountElement = document.getElementById("discount_price");
    const grandTotalElement = document.getElementById("grand_total");
    discountElement.innerText = disCount.toFixed(2);
    grandTotalElement.innerText = grandTotal.toFixed(2);
    document.getElementById("coupon_input_field").value = "";
  } else {
    alert("Invalid Coupon");
    document.getElementById("coupon_input_field").value = "";
  }
}
