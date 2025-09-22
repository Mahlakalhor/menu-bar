
const menuEl = document.getElementById("menu");
const crossEl = document.getElementById("cross");
const sideBarEl = document.getElementById("side-bar");

menuEl.addEventListener("click", () => {
  sideBarEl.classList.toggle("sidebarihide"); 
});
crossEl.addEventListener("click", () => {
  sideBarEl.classList.add("sidebarihide"); 
});