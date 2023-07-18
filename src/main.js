const mobileNav = document.querySelector('.mobile');
const menu = document.querySelector('.Menu');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	mobileNav.classList.toggle('display');
});
