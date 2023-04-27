function highlight(element) {
    var squares = document.querySelectorAll(".square");

    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("darkened");
    }

    element.classList.remove("darkened");
    element.addEventListener("mouseleave", function () {
        element.classList.remove("active");
    });
}

function removeHighlight(element) {
    var squares = document.querySelectorAll(".square");

    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove("darkened");
    }
}
const toggleButton = document.getElementById("toggle-gap");
const grid = document.querySelector(".grid");
toggleButton.addEventListener("click", function () {
    var gap = window
        .getComputedStyle(grid)
        .getPropertyValue("grid-row-gap");

    if (gap === "0px") {
        grid.style.gridGap = "12px";
        grid.style.gridColumnGap = "12px";
    } else {
        grid.style.gridRowGap = "0px";
        grid.style.gridColumnGap = "0px";
    }
});