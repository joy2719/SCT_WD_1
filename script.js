const searchIcon= document.querySelector('.iserach-icon');
const searchForm= document.querySelector('.serach-form');

searchIcon.addEventListener("click", () => {
    searchForm.classlist.add("active");
});