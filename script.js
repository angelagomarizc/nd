
document.addEventListener("DOMContentLoaded", () => {
    const moveBtn = document.getElementById("move-btn");
    moveBtn.addEventListener("mouseover", () => {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;
        moveBtn.style.position = "absolute";
        moveBtn.style.left = `${x}px`;
        moveBtn.style.top = `${y}px`;
    });
});
