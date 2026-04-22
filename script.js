// Initialize WOW.js
new WOW().init();

// 1. Music Overlay Logic
const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('music-overlay');
const audio = document.getElementById('bgAudio');

if (enterBtn) {
    enterBtn.addEventListener('click', function() {
        if (audio) {
            audio.play().catch(err => console.log("Music blocked by browser"));
        }
        if (overlay) {
            overlay.style.display = 'none';
        }
    });
}

// 2. BMI Calculator Logic
function calcBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value / 100;
    const res = document.getElementById('bmi-result');
    if (w > 0 && h > 0) {
        const bmi = (w / (h * h)).toFixed(1);
        res.innerText = "Your BMI: " + bmi;
        if (bmi < 18.5) res.style.color = "#ffcc00";
        else if (bmi <= 24.9) res.style.color = "#00ff00";
        else res.style.color = "#ff0000";
    }
}

// 3. Quiz Data
const quizData = [
    {
        question: "What is your main priority?",
        options: [
            { text: "Just the basics & cardio", score: "Elite" },
            { text: "24/7 access & flexibility", score: "Elite Plus" },
            { text: "Full amenities & locker rooms", score: "Premium" }
        ]
    },
    {
        question: "Do you need 24/7 access?",
        options: [
            { text: "No, standard hours are fine", score: "Elite" },
            { text: "Yes, I need flexibility", score: "Elite Plus" },
            { text: "Absolutely, plus premium services", score: "Premium" }
        ]
    }
];

let currentQ = 0;
let quizScores = { "Elite": 0, "Elite Plus": 0, "Premium": 0 };

// 4. Quiz Functions
window.loadQuiz = function() {
    const q = quizData[currentQ];
    const qText = document.getElementById("question-text");
    const optionsDiv = document.getElementById("options-space");
    if (qText && optionsDiv) {
        qText.innerText = q.question;
        optionsDiv.innerHTML = "";
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt.text;
            btn.className = "btn";
            btn.style.width = "100%";
            btn.style.marginBottom = "10px";
            btn.onclick = () => {
                quizScores[opt.score]++;
                currentQ++;
                if (currentQ < quizData.length) loadQuiz();
                else showQuizResult();
            };
            optionsDiv.appendChild(btn);
        });
    }
};

window.showQuizResult = function() {
    document.getElementById("question-space").style.display = "none";
    document.getElementById("result-space").style.display = "block";
    const winner = Object.keys(quizScores).reduce((a, b) => quizScores[a] > quizScores[b] ? a : b);
    document.getElementById("recommended-plan").innerText = winner + " Membership";
};

// 5. Scroll function for the Quiz
function scrollToPricing() {
    document.getElementById('price').scrollIntoView({ behavior: 'smooth' });
}

// 6. Navigation & Accordion (jQuery)
$(document).ready(function() {
    $(".ham-burger").click(function() {
        $(".nav").toggleClass("open");
        $(this).toggleClass("active");
    });

    $(".accordian-container .head").click(function() {
        $(this).parent(".accordian-container").toggleClass("active");
        $(this).next(".body").slideToggle();
    });

    loadQuiz();
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    
    if(name.length < 3) {
        alert("Please enter a valid name.");
    } else {
        alert(`Success! Thanks ${name}, we will get back to you shortly.`);
        contactForm.reset();
    }
});
function calcBMI() {
            let w = document.getElementById('weight').value;
            let h = document.getElementById('height').value / 100;
            if (w && h) {
                let bmi = (w / (h * h)).toFixed(1);
                document.getElementById('bmi-result').innerText = "Your BMI: " + bmi;
            }
        }
})
