// ======================================
// 1. VOCABULARY BANK
// ======================================

const vocabulary = {

    Food: [

        { jp: "りんご", romaji: "Ringo", en: "Apple" },
        { jp: "ごはん", romaji: "Gohan", en: "Rice / Meal" },
        { jp: "みず", romaji: "Mizu", en: "Water" },
        { jp: "パン", romaji: "Pan", en: "Bread" },
        { jp: "たまご", romaji: "Tamago", en: "Egg" },
        { jp: "さかな", romaji: "Sakana", en: "Fish" },
        { jp: "にく", romaji: "Niku", en: "Meat" },
        { jp: "やさい", romaji: "Yasai", en: "Vegetables" },
        { jp: "くだもの", romaji: "Kudamono", en: "Fruit" },
        { jp: "おちゃ", romaji: "Ocha", en: "Tea" },
        { jp: "ぎゅうにゅう", romaji: "Gyuunyuu", en: "Milk" },
        { jp: "チーズ", romaji: "Chiizu", en: "Cheese" },
        { jp: "とりにく", romaji: "Toriniku", en: "Chicken" },
        { jp: "ぶたにく", romaji: "Butaniku", en: "Pork" },
        { jp: "ぎゅうにく", romaji: "Gyuuniku", en: "Beef" },
        { jp: "しお", romaji: "Shio", en: "Salt" },
        { jp: "さとう", romaji: "Satou", en: "Sugar" },
        { jp: "しょうゆ", romaji: "Shouyu", en: "Soy sauce" },
        { jp: "みそ", romaji: "Miso", en: "Miso" },
        { jp: "ジュース", romaji: "Juusu", en: "Juice" }

    ],


    Numbers: [

        { jp: "一", romaji: "Ichi", en: "One" },
        { jp: "二", romaji: "Ni", en: "Two" },
        { jp: "三", romaji: "San", en: "Three" },
        { jp: "四", romaji: "Yon", en: "Four" },
        { jp: "五", romaji: "Go", en: "Five" },
        { jp: "六", romaji: "Roku", en: "Six" },
        { jp: "七", romaji: "Nana", en: "Seven" },
        { jp: "八", romaji: "Hachi", en: "Eight" },
        { jp: "九", romaji: "Kyuu", en: "Nine" },
        { jp: "十", romaji: "Juu", en: "Ten" },
        { jp: "十一", romaji: "Juuichi", en: "Eleven" },
        { jp: "十二", romaji: "Juuni", en: "Twelve" },
        { jp: "十三", romaji: "Juusan", en: "Thirteen" },
        { jp: "十四", romaji: "Juuyon", en: "Fourteen" },
        { jp: "十五", romaji: "Juugo", en: "Fifteen" },
        { jp: "十六", romaji: "Juuroku", en: "Sixteen" },
        { jp: "十七", romaji: "Juunana", en: "Seventeen" },
        { jp: "十八", romaji: "Juuhachi", en: "Eighteen" },
        { jp: "十九", romaji: "Juukyuu", en: "Nineteen" },
        { jp: "二十", romaji: "Nijuu", en: "Twenty" }

    ],


    Greetings: [

        { jp: "こんにちは", romaji: "Konnichiwa", en: "Hello" },
        { jp: "おはよう", romaji: "Ohayou", en: "Good morning" },
        { jp: "おはようございます", romaji: "Ohayou gozaimasu", en: "Good morning (polite)" },
        { jp: "こんばんは", romaji: "Konbanwa", en: "Good evening" },
        { jp: "さようなら", romaji: "Sayounara", en: "Goodbye" },
        { jp: "またね", romaji: "Mata ne", en: "See you" },
        { jp: "じゃあまた", romaji: "Jaa mata", en: "See you later" },
        { jp: "おやすみ", romaji: "Oyasumi", en: "Good night" },
        { jp: "おやすみなさい", romaji: "Oyasuminasai", en: "Good night (polite)" },
        { jp: "ありがとう", romaji: "Arigatou", en: "Thank you" },
        { jp: "ありがとうございます", romaji: "Arigatou gozaimasu", en: "Thank you (polite)" },
        { jp: "どういたしまして", romaji: "Dou itashimashite", en: "You're welcome" },
        { jp: "すみません", romaji: "Sumimasen", en: "Excuse me" },
        { jp: "ごめんなさい", romaji: "Gomennasai", en: "I'm sorry" },
        { jp: "はい", romaji: "Hai", en: "Yes" },
        { jp: "いいえ", romaji: "Iie", en: "No" },
        { jp: "お願いします", romaji: "Onegaishimasu", en: "Please" },
        { jp: "はじめまして", romaji: "Hajimemashite", en: "Nice to meet you" },
        { jp: "いただきます", romaji: "Itadakimasu", en: "Said before eating" },
        { jp: "ごちそうさまでした", romaji: "Gochisousama deshita", en: "Thanks for the meal" }

    ],


    People: [

        { jp: "ひと", romaji: "Hito", en: "Person" },
        { jp: "おとこ", romaji: "Otoko", en: "Man" },
        { jp: "おんな", romaji: "Onna", en: "Woman" },
        { jp: "こども", romaji: "Kodomo", en: "Child" },
        { jp: "ともだち", romaji: "Tomodachi", en: "Friend" },
        { jp: "かぞく", romaji: "Kazoku", en: "Family" },
        { jp: "おかあさん", romaji: "Okaasan", en: "Mother" },
        { jp: "おとうさん", romaji: "Otousan", en: "Father" },
        { jp: "あね", romaji: "Ane", en: "Older sister (my family)" },
        { jp: "あに", romaji: "Ani", en: "Older brother (my family)" },
        { jp: "いもうと", romaji: "Imouto", en: "Younger sister" },
        { jp: "おとうと", romaji: "Otouto", en: "Younger brother" },
        { jp: "せんせい", romaji: "Sensei", en: "Teacher" },
        { jp: "がくせい", romaji: "Gakusei", en: "Student" },
        { jp: "いしゃ", romaji: "Isha", en: "Doctor" },
        { jp: "かんごし", romaji: "Kangoshi", en: "Nurse" },
        { jp: "かいしゃいん", romaji: "Kaishain", en: "Office worker" },
        { jp: "てんいん", romaji: "Tenin", en: "Shop assistant" },
        { jp: "おじいさん", romaji: "Ojiisan", en: "Grandfather" },
        { jp: "おばあさん", romaji: "Obaasan", en: "Grandmother" }

    ],


    "Everyday Objects": [

        { jp: "ほん", romaji: "Hon", en: "Book" },
        { jp: "ペン", romaji: "Pen", en: "Pen" },
        { jp: "つくえ", romaji: "Tsukue", en: "Desk" },
        { jp: "いす", romaji: "Isu", en: "Chair" },
        { jp: "かばん", romaji: "Kaban", en: "Bag" },
        { jp: "でんわ", romaji: "Denwa", en: "Telephone" },
        { jp: "とけい", romaji: "Tokei", en: "Clock / Watch" },
        { jp: "くつ", romaji: "Kutsu", en: "Shoes" },
        { jp: "かぎ", romaji: "Kagi", en: "Key" },
        { jp: "まど", romaji: "Mado", en: "Window" },
        { jp: "ドア", romaji: "Doa", en: "Door" },
        { jp: "くるま", romaji: "Kuruma", en: "Car" },
        { jp: "じてんしゃ", romaji: "Jitensha", en: "Bicycle" },
        { jp: "かさ", romaji: "Kasa", en: "Umbrella" },
        { jp: "さいふ", romaji: "Saifu", en: "Wallet" },
        { jp: "めがね", romaji: "Megane", en: "Glasses" },
        { jp: "えんぴつ", romaji: "Enpitsu", en: "Pencil" },
        { jp: "けしゴム", romaji: "Keshigomu", en: "Eraser" },
        { jp: "カメラ", romaji: "Kamera", en: "Camera" },
        { jp: "テレビ", romaji: "Terebi", en: "Television" }

    ],

"Travel & Places": [
        { jp: "えき", romaji: "Eki", en: "Station" },
        { jp: "くうこう", romaji: "Kuukou", en: "Airport" },
        { jp: "ホテル", romaji: "Hoteru", en: "Hotel" },
        { jp: "きっぷ", romaji: "Kippu", en: "Ticket" },
        { jp: "ちず", romaji: "Chizu", en: "Map" },
        { jp: "みち", romaji: "Michi", en: "Road / Way" },
        { jp: "くに", romaji: "Kuni", en: "Country" },
        { jp: "まち", romaji: "Machi", en: "Town / City" },
        { jp: "おてらい", romaji: "Otera", en: "Temple" },
        { jp: "じんじゃ", romaji: "Jinja", en: "Shrine" },
        { jp: "うみ", romaji: "Umi", en: "Sea / Beach" },
        { jp: "やま", romaji: "Yama", en: "Mountain" },
        { jp: "こうはん", romaji: "Kouen", en: "Park" },
        { jp: "みせ", romaji: "Mise", en: "Shop / Store" },
        { jp: "レストラン", romaji: "Resutoran", en: "Restaurant" },
        { jp: "トイレ", romaji: "Toire", en: "Restroom" },
        { jp: "バス", romaji: "Basu", en: "Bus" },
        { jp: "でんしゃ", romaji: "Densha", en: "Train" },
        { jp: "ひこうき", romaji: "Hikouki", en: "Airplane" },
        { jp: "かばん", romaji: "Ryokou", en: "Travel" }
    ]

};


// Get category emoji for the back of cards
function getSubjectEmoji(subject) {
    return subjectIcons[subject] || "✨";
}


// ======================================
// 2. GAME VARIABLES
// ======================================

let currentSubject = "";
let selectedCards = [];
let matchedPairs = 0;
let lockBoard = false;

const numberOfPairs = 10;


// Sound Effect Generator (Web Audio API)
function playMatchSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // Play a cheerful two-tone chime (E5 -> A5)
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 major chord arpeggio
    notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.value = freq;

        const startTime = ctx.currentTime + index * 0.08;
        const stopTime = startTime + 0.25;

        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, stopTime);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(stopTime);
    });
}


// ======================================
// 3. SUBJECT ICONS
// ======================================

const subjectIcons = {
    Food: "🍱",
    Numbers: "🔢",
    Greetings: "👋",
    People: "👥",
    "Everyday Objects": "🏠",
    "Travel & Places": "✈️"  // <-- Added here
};


// ======================================
// 4. SHUFFLE FUNCTION
// ======================================

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


// ======================================
// 5. START THE GAME
// ======================================

function startGame(subject) {

    currentSubject = subject;
    selectedCards = [];
    matchedPairs = 0;
    lockBoard = false;

    // Change screens

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    // Update game heading

    document.getElementById("subjectTitle").textContent = subject;

    document.getElementById("gameIcon").textContent =
        subjectIcons[subject];

    // Reset progress

    updateProgress();

    document.getElementById("message").textContent = "";

    const board = document.getElementById("gameBoard");

    board.innerHTML = "";


    // Select 10 random vocabulary entries

    const words = shuffleArray(vocabulary[subject]);

    const selectedWords = words.slice(0, numberOfPairs);


    // Create two cards for each word

    let cards = [];

    const categoryEmoji = getSubjectEmoji(subject);

    selectedWords.forEach((word, index) => {

        cards.push({
            type: "japanese",
            content: word.jp,
            romaji: word.romaji,
            pair: index,
            emoji: categoryEmoji
        });

        cards.push({
            type: "english",
            content: word.en,
            pair: index,
            emoji: categoryEmoji
        });

    });


    // Shuffle all 20 cards

    cards = shuffleArray(cards);


    // Create the cards on screen

    cards.forEach(card => {

        const cardElement = document.createElement("button");

        cardElement.type = "button";
        cardElement.classList.add("card");
        cardElement.setAttribute("aria-label", "Hidden memory card");

        cardElement.innerHTML = `

            <div class="card-inner">

                <div class="card-face card-back">
                    <span class="card-back-emoji" aria-hidden="true">${card.emoji}</span>
                </div>

                <div class="card-face card-front">

                    ${
                        card.type === "japanese"

                        ? `
                            <span class="japanese">${card.content}</span>
                            <span class="romaji">${card.romaji}</span>
                          `

                        : `
                            <span class="english">${card.content}</span>
                          `
                    }

                </div>

            </div>

        `;


        // Add click event

        cardElement.addEventListener("click", () => {

            flipCard(cardElement, card);

        });


        board.appendChild(cardElement);

    });

}


// ======================================
// 6. FLIP A CARD
// ======================================

function flipCard(element, card) {

    // Don't allow clicks while checking a pair

    if (lockBoard) return;

    // Don't allow an already flipped card

    if (element.classList.contains("flipped")) return;

    // Don't allow a matched card

    if (element.classList.contains("matched")) return;


    // Flip the card

    element.classList.add("flipped");

    element.setAttribute(
        "aria-label",
        card.type === "japanese"
            ? `${card.content}, ${card.romaji}`
            : card.content
    );


    // Add card to selected cards

    selectedCards.push({

        element: element,
        card: card

    });


    // Check when two cards have been selected

    if (selectedCards.length === 2) {

        checkMatch();

    }

}


// ======================================
// 7. CHECK FOR A MATCH
// ======================================

function checkMatch() {

    lockBoard = true;

    const first = selectedCards[0];
    const second = selectedCards[1];


    // Cards must have the same pair ID
    // but different types (Japanese and English)

    const isMatch =

        first.card.pair === second.card.pair &&

        first.card.type !== second.card.type;


    if (isMatch) {

        // Correct match!

        first.element.classList.add("matched");
        second.element.classList.add("matched");

        // Play victory chime sound
        playMatchSound();

        matchedPairs++;

        selectedCards = [];

        lockBoard = false;

        updateProgress();


        // Check if all pairs have been found

        if (matchedPairs === numberOfPairs) {

            document.getElementById("message").textContent =
                "🎉 Amazing! You found all 10 pairs!";

        }

    } else {

        // Incorrect match
        // Turn cards back over after one second

        setTimeout(() => {

            first.element.classList.remove("flipped");
            second.element.classList.remove("flipped");

            first.element.setAttribute("aria-label", "Hidden memory card");
            second.element.setAttribute("aria-label", "Hidden memory card");

            selectedCards = [];

            lockBoard = false;

        }, 1000);

    }

}


// ======================================
// 8. UPDATE PROGRESS
// ======================================

function updateProgress() {

    document.getElementById("score").textContent =

        `${matchedPairs} / ${numberOfPairs} pairs`;


    const percentage =

        (matchedPairs / numberOfPairs) * 100;


    document.getElementById("progressBar").style.width =

        percentage + "%";

}


// ======================================
// 9. RETURN TO MAIN MENU
// ======================================

function showMenu() {

    document.getElementById("game").classList.add("hidden");

    document.getElementById("menu").classList.remove("hidden");

}
