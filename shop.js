

function filterCategories() {
  const checkboxes = document.querySelectorAll(".category-filter");
  const products = document.querySelectorAll(".product-card");

  const selectedCategories = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  let visibleCount = 0;

  products.forEach(product => {
    const category = product.dataset.category;

    if (selectedCategories.includes(category)) {
      product.classList.remove("hidden");
      visibleCount++;
    } else {
      product.classList.add("hidden");
    }
  });

  document.querySelector("#product-count").textContent =
    `Showing ${visibleCount} products`;
}

document.querySelectorAll(".category-filter").forEach(checkbox => {
  checkbox.addEventListener("change", filterCategories);
});

filterCategories();
