let dismissItem = document.getElementsByClassName("fa-xmark");

for (let i = 0; i < dismissItem.length; i++) {
    dismissItem[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}