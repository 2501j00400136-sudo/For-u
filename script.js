// ========================================
// BESTIE SURPRISE WEBSITE
// ========================================

const pages = [

    // ====================================
    // PAGE 1
    // ====================================

    {
        emoji: "💌",

        title: "There's Something I Want To Tell You...",

        text: "But you'll have to open it first. 👀",

        button: "Open 💗"
    },

    // ====================================
    // PAGE 2
    // ====================================

    {
        emoji: "🫠🥹",

        title: "Your Smile",

        text: "Aap ki Hasi to Hamari Har Marz ki Dawa He. 💗",

        button: "Next 💕"
    },


    


    // ====================================
    // PAGE 3
    // ====================================

    {
        emoji: "💗",

        title: "Your Kindness",

        text: "You have such a beautiful heart, and the way you care about people is something I really love about you.",

        button: "Next ✨"
    },


   


    // ====================================
    // PAGE 4
    // ====================================

    {
        emoji: "🫠",

        title: "Sukun",

        text: "Itni Badi Duniya He Pr Sukun Sirf Aap ke Pass hi Milta he . 🫠🥹",

        button: "Next 😭"
    },


    // ====================================
    // PAGE 5
    // ====================================

    {
        emoji: "🫶",

        title: "You Mean The World To Me",

        text: "You're My whole world And the most important person in it And i never wanna to lose u.Never leave Me Alone 😭 ",

        button: "Next 💗"
    },





    // ====================================
    // PAGE 6
    // ====================================

    {
        emoji: "✨",

        title: "What You Mean To Me",

        text: "U Are my everything in this world.  I hope Ham Hamehsa Sath Rhe انشاء اللہ ❤️‍🩹😭🌍 ",

        button: "One More 💗"
    },


    // ====================================
    // PAGE 7 - FINAL
    // ====================================

    {
        final: true,

        title: "Kleshhhhhhhhh😂🙂 ❤️",

        text: "Hamara koi Pichle Janam Ka klesh Baki hoga Isliye shyad Ham  Mile 😂. And I love uuuu so muchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh 🥹🫶",

        button: "Forever Loveeeee Shife 💋💕"
    }

];


// ========================================
// CURRENT PAGE
// ========================================

let currentPage = 0;


// ========================================
// GET HTML ELEMENTS
// ========================================

const content = document.getElementById("content");

const nextButton = document.getElementById("nextButton");


// ========================================
// SHOW PAGE
// ========================================

function showPage() {

    const page = pages[currentPage];

    // Remove previous content
    content.innerHTML = "";


    // ====================================
    // FINAL PAGE
    // ====================================

    if (page.final) {

        content.innerHTML = `

            <div class="final-heart">
                ❤️
            </div>

            <h1>
                ${page.title}
            </h1>

            <p>
                ${page.text}
            </p>

            <p>
                Thank you for being you. 💗
            </p>

            <p>
                I hope we stay besties forever. 🫶
            </p>

        `;
    }


    // ====================================
    // PHOTO PAGE
    // ====================================

    else if (page.html) {

        content.innerHTML = page.html;
    }


    // ====================================
    // NORMAL PAGE
    // ====================================

    else {

        content.innerHTML = `

            <div class="big-emoji">
                ${page.emoji}
            </div>

            <h1>
                ${page.title}
            </h1>

            <p>
                ${page.text}
            </p>

        `;
    }


    // ====================================
    // BUTTON TEXT
    // ====================================

    nextButton.textContent = page.button;


    // ====================================
    // PAGE NUMBER
    // ====================================

    const progress = document.createElement("div");

    progress.className = "progress";

    progress.textContent =
        `${currentPage + 1} / ${pages.length}`;

    content.appendChild(progress);
}


// ========================================
// NEXT BUTTON
// ========================================

nextButton.addEventListener("click", function () {

    if (currentPage < pages.length - 1) {

        currentPage++;

    } else {

        // Start again from Page 1

        currentPage = 0;
    }

    showPage();

});


// ========================================
// START WEBSITE
// ========================================

showPage();
