function startLoader() {
    // Select Elements
    let counterElement = document.querySelector(".count p");

    // Initialize Value
    let currentValue = 0;

    // Update Counter
    // Generate increment randomly based on number between 1 & 10
    // Update counter value
    // Set Counter Element to the updated currentValue variable

    function updateCounter() {
        if (currentValue < 100) {
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue;

            // delay fade out by 3.5 seconds
            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        }
    }

    updateCounter();
}

// initialize preloader
startLoader();
gsap.to(".count", {
    opacity: 0,
    delay: 3.5,
    duration: 1,
    ease: "power2.inOut",
});

// Set individual letters animation
let textWrapper = document.querySelector(".ml16");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

// gsap animation timeline

anime
    .timeline({ loop: false })
    .add({
        targets: ".ml16 .letter",
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i,
    })
    .add({
        targets: ".ml16 .letter",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: (el, i) => 2000 + 30 * i
    });

// preloader tween animations

gsap.to(".pre-loader", {
    scale: 0.5,
    ease: "power4.inOut",
    duration: 2,
    delay: 3,
});

gsap.to(".loader", {
    height: "0",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
});

gsap.to(".loader-bg", {
    height: "0",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4,
});

gsap.to(".loader-2", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.5,
});

gsap.from(".header h1", {
    y: 200,
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
    stagger: 0.05,
});

gsap.to(".img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4.5,
    stagger: 0.05,
});
