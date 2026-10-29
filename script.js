// INTRODUCE ME


function introduceMe() {

    const visitorName =
        document.getElementById("visitorName").value.trim();

    const greetingResult =
        document.getElementById("greetingResult");

    let message;

    if (visitorName === "") {

        message =
            "Please enter your name first! 😊";

    } else {

        message = `Hello, ${visitorName}! 👋 Nice to meet you! I'm Aira Joy M. Lintan — a 3rd-year BSIT student focused on Service Management. Welcome to my page.`;

    }

    greetingResult.classList.remove("show");
    typeMessage(greetingResult, message, 25).then(() => {
        greetingResult.classList.add("show");
    });
}

async function typeMessage(el, text, delay = 30) {
    el.textContent = "";
    for (let i = 0; i < text.length; i++) {
        el.textContent += text.charAt(i);
        await new Promise(r => setTimeout(r, delay));
    }
}

function ensureProfileImage() {
    const img = document.querySelector('.profile-img');
    const wrapper = img ? img.closest('.profile-wrapper') : null;
    if (!img || !wrapper) return;

    function applyFallback() {
        try {
            wrapper.classList.add('fallback');
            wrapper.style.backgroundImage = "url('images/personal.jpg')";
            console.warn('Profile <img> failed to load — using background fallback.');
        } catch (e) {
            console.error('Fallback failed', e);
        }
    }

    if (img.complete && img.naturalWidth === 0) {
        applyFallback();
        return;
    }

    img.addEventListener('error', () => applyFallback());

    setTimeout(() => {
        if (!img.complete || img.naturalWidth === 0) applyFallback();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', ensureProfileImage);

const BEST_QUOTE = { text: "Meaningful work begins with listening—then doing with care.", author: "— Aira Joy" };

const THOUGHT_QUOTES = [
    { text: "Meaningful work begins with listening—then doing with care.", author: "— Aira Joy" },
    { text: "Small improvements compound: help one process, help many people.", author: "— Aira Joy" },
    { text: "Learning with purpose turns knowledge into service.", author: "— Aira Joy" }
];

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('heroQuote');
    if (hero) hero.textContent = `"${BEST_QUOTE.text}" ${BEST_QUOTE.author}`;

    const thoughtText = document.getElementById('thoughtText');
    const thoughtAuthor = document.getElementById('thoughtAuthor');
    const nextBtn = document.getElementById('nextThoughtBtn');
    if (!thoughtText || !thoughtAuthor || !nextBtn) return;

    let current = 0;
    function showThought(idx) {
        const q = THOUGHT_QUOTES[idx % THOUGHT_QUOTES.length];
        thoughtText.textContent = `"${q.text}"`;
        thoughtAuthor.textContent = q.author;
        thoughtText.classList.remove('fade-in');
        void thoughtText.offsetWidth;
        thoughtText.classList.add('fade-in');
    }

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % THOUGHT_QUOTES.length;
        showThought(current);
    });

    showThought(current);
});


// CONTACT FORM

function submitForm() {

    const name =
        document.getElementById("fullName").value;

    const message =
        document.getElementById("message").value;

    if (name === "" || message === "") {

        alert("Please complete the required fields.");

        return false;

    } else {

        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.classList.add('btn-success');
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.classList.remove('btn-success');
        }, 2500);

        return false;
    }
}