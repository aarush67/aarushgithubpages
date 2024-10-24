document.addEventListener("DOMContentLoaded", function () {
    const animatedSteps = document.querySelectorAll(".animated-step");

    window.addEventListener("scroll", () => {
        animatedSteps.forEach(step => {
            const stepPosition = step.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (stepPosition < screenPosition) {
                step.classList.add("show");
            }
        });
    });
});
