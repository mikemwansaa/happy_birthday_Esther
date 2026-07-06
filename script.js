document.addEventListener("DOMContentLoaded", () => {
// DOM Elements
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const passwordScreen = document.getElementById("passwordScreen");
const mainSite = document.getElementById("mainSite");
const errorText = document.getElementById("error");
const bgMusic = document.getElementById("bgMusic");
const startJourney = document.getElementById("startJourney");
const giftButton = document.getElementById("giftButton");
const finalMessage = document.getElementById("finalMessage");
const counter = document.getElementById("daysCounter");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const heroName = document.querySelector(".hero h2");

// Config Answers
const acceptedAnswers = ["manchester city", "man city", "mcfc"];

// 1. Password Unlock Control Loop
unlockBtn.addEventListener("click", () => {
const answer = passwordInput.value.toLowerCase().trim();

if (acceptedAnswers.includes(answer)) {
// Fade out login screen smoothly
passwordScreen.style.opacity = "0";

setTimeout(() => {
passwordScreen.style.display = "none";
mainSite.style.display = "block";
window.scrollTo(0, 0);

// Initialize premium background visual updates
launchBackgroundHearts();
if(typeof initializeScrollAnimations === "function") {
initializeScrollAnimations();
}

}, 800);

// Attempt music playback stream
bgMusic.play().catch((err) => {
console.log("Audio waiting for user gestureinteraction.", err);
});

} else {
errorText.innerHTML = "Oops! Try again. ";
}
});

// Support entering password via Enter key
passwordInput.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
unlockBtn.click();
}
});

// 2. Journey Navigation Scroll
if (startJourney) {
startJourney.addEventListener("click", () => {
document.getElementById("story").scrollIntoView({
behavior: "smooth"
});
});
}

// 3. Days Calculation Engine System
const startDate = new Date("2025-02-19");
const today = new Date();
const difference = today - startDate;
const daysTogether = Math.floor(difference / (1000 * 60 * 60 * 24));

if (counter) {
counter.innerHTML = `We've been friends for ${daysTogether} days`;
}

// 4. Hero Name Easter Egg Click Handler
let clicks = 0;
if (heroName) {
heroName.addEventListener("click", () => {
clicks++;
if (clicks === 5) {
alert(" I will always be here for youu! ");
clicks = 0;
}
});
}

// 5. Letter Scroll Highlight System
const letterParagraphs = document.querySelectorAll(".letter-paragraph");
const letterObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
}, { threshold: 0.15 });

letterParagraphs.forEach((paragraph) => {
letterObserver.observe(paragraph);
});

// 6. Intersection Observer for Cards, Reasons, Images
function initializeScrollAnimations() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
}, { threshold: 0.15 });

const animatedItems = document.querySelectorAll(".story-card, .reason, .dream-card");
animatedItems.forEach(item => {
item.style.opacity = "0";
item.style.transform = "translateY(50px)";
item.style.transition = "all 1s ease";
observer.observe(item);
});
}

// 7. Lightbox Controller Logic
const galleryImages = document.querySelectorAll(".gallery-grid img");
galleryImages.forEach((img) => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImage.src = img.src;
});
});

closeLightbox.addEventListener("click", () => {
lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
if (e.target === lightbox) {
lightbox.style.display = "none";
}
});

// 8. Background Drifting Hearts Stream (Continuously falling across the whole page experience)
function launchBackgroundHearts() {
const heartEmojis = ["❤️", "💖", "💝", "💕"];

setInterval(() => {
const heart = document.createElement("div");
heart.classList.add("heart");

// Random styling constraints for organic depth effect
heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = Math.random() * 15 + 15 + "px"; // Sizes between 15px - 30px

// Set animation settings
const duration = Math.random() * 6 + 6; // Deliberately slow velocity drift (6s - 12s)
heart.style.animation = `floatHeart ${duration}s linear forwards`;

document.body.appendChild(heart);

// Auto clean memory
setTimeout(() => {
heart.remove();
}, duration * 1000);
}, 500); // Emits a new background heart card every 500ms
}

// 9. Surprise Reveal Blast (Massive Heart Explosion focused directly on button location)
if (giftButton && finalMessage) {
giftButton.addEventListener("click", (e) => {
finalMessage.style.display = "block";
giftButton.style.display = "none";

// Grab explicit coordinate matrix position of user click event to anchor origin explosion burst
const origX = e.clientX;
const origY = e.clientY;

massiveHeartExplosion(origX, origY);

// Smoothly carry view focus onto final layout update block container
setTimeout(() => {
finalMessage.scrollIntoView({ behavior: "smooth" });
}, 100);
});
}

function massiveHeartExplosion(x, y) {
const heartEmojis = ["❤️", "💖", "💝", "💕"];
const explosionCount = 100;

for (let i = 0; i < explosionCount; i++) {
const heart = document.createElement("div");
heart.classList.add("explosion-heart");
heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

// Anchor element layout securely right where user clicked
heart.style.left = x + "px";
heart.style.top = y + "px";
heart.style.fontSize = Math.random() * 20 + 15 + "px";

// Map trigonometric math angles vectors to produce radial scatter blast layout
const angle = Math.random() * Math.PI * 2;
const distance = Math.random() * 300 + 100; // Explode out by 100px - 400px
const tx = Math.cos(angle) * distance;
const ty = Math.sin(angle) * distance;

// Pass distance trajectories as inline runtime variable arguments safely into CSS animations
heart.style.setProperty("--tx", `${tx}px`);
heart.style.setProperty("--ty", `${ty}px`);

const duration = Math.random() * 1.5 + 1; // 1s - 2.5s duration velocity curves
heart.style.animationDuration = `${duration}s`;

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, duration * 1000);
}
}
});