let scrollContainer = document.querySelector('.gallery');
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener('wheel', (e) => {
    e.defaultPrevented();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 1000
});

prevBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 1000;
});
