const toggleBtn = document.querySelector('.toggleBtn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const Open = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = Open
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}