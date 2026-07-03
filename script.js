const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")

searchIcon.addEventListener("click", () => {
  searchForm.classList.add("active");
  cartItemsContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon")
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
  cartItemsContainer.classList.add("active");
  searchForm.classList.remove("active");
});


const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const cartItemCloseIcons = document.querySelectorAll('.cart-item span');

cartItemCloseIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.parentElement.remove();
    });
});


document.addEventListener('click', (e) => {
    if (!cartItemsContainer.contains(e.target) && !cartIcon.contains(e.target)) {
        cartItemsContainer.classList.remove('active');
    }
});