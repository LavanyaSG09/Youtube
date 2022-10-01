const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".side-bar");
menu.onclick = function()
{
    sidebar.classList.toggle("show-sidebar");
}
