function itemHandler(data) {
  const nameOfProd = data.childNodes[5].childNodes[1].innerText;
  const list_products = document.getElementById("list_products");
  const count = list_products.childElementCount;
  const li = document.createElement("li");
  li.classList.add("font-bold");
  list_products.style.listStyleType = "none";
  li.innerText = `${count + 1}. ${nameOfProd}`;

  list_products.appendChild(li);
}
