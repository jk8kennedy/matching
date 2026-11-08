
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
        { jp: "おちゃ", romaji: "Ocha", en: "Tea" }
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
        { jp: "十", romaji: "Juu", en: "Ten" }
    ],

    Greetings: [
        { jp: "こんにちは", romaji: "Konnichiwa", en: "Hello" },
        { jp: "おはよう", romaji: "Ohayou", en: "Good morning" },
        { jp: "こんばんは", romaji: "Konbanwa", en: "Good evening" },
        { jp: "さようなら", romaji: "Sayounara", en: "Goodbye" },
        { jp: "ありがとう", romaji: "Arigatou", en: "Thank you" },
        { jp: "すみません", romaji: "Sumimasen", en: "Excuse me" },
        { jp: "ごめんなさい", romaji: "Gomennasai", en: "I'm sorry" },
        { jp: "はい", romaji: "Hai", en: "Yes" },
        { jp: "いいえ", romaji: "Iie", en: "No" },
        { jp: "おやすみ", romaji: "Oyasumi", en: "Good night" }
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
        { jp: "せんせい", romaji: "Sensei", en: "Teacher" },
        { jp: "がくせい", romaji: "Gakusei", en: "Student" }
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
        { jp: "まど", romaji: "Mado", en: "Window" }
    ]

};


// ======================================
// 2. GAME VARIABLES
// ======================================

let currentSubject = "";
let selectedCards = [];
let matchedPairs = 0;
let lockBoard = false;


// ======================================
// 3. START THE GAME
// ======================================

function startGame(subject) {

    currentSubject = subject;
    selectedCards = [];
    matchedPairs = 0;
    lockBoard = false;

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    document.getElementById("subjectTitle").textContent = subject;
    document.getElementById("score").textContent = 0;
    document.getElementById("message").textContent = "";

    const board = document.getElementById("gameBoard");
    board.innerHTML = "";

    // Select 10 random vocabulary entries

    let words = [...vocabulary[subject]];

    words.sort(() => Math.random() - 0.5);

    let selectedWords = words.slice(0, 10);

    // Create two cards for each word

    let cards = [];

    selectedWords.forEach((word, index) => {

        cards.push({
            type: "japanese",
            content: word.jp,
            romaji: word.romaji,
            pair: index
        });

        cards.push({
            type: "english",
            content: word.en,
            pair: index
        });

    });

    // Shuffle all 20 cards

    cards.sort(() => Math.random() - 0.5);

    // Display the cards

    cards.forEach((card, index) => {

        const cardElement = document.createElement("div");

        cardElement.classList.add("card");
        cardElement.dataset.pair = card.pair;
        cardElement.dataset.type = card.type;
        cardElement.dataset.index = index;

        cardElement.addEventListener("click", () => {
            flipCard(cardElement, card);
        });

        board.appendChild(cardElement);

    });

}


// ======================================
// 4. FLIP A CARD
// ======================================

function flipCard(element, card) {

    if (lockBoard) return;

    if (element.classList.contains("flipped")) return;

    if (element.classList.contains("matched")) return;

    element.classList.add("flipped");

    if (card.type === "japanese") {

        element.innerHTML = `
            <span class="japanese">${card.content}</span>
            <span class="romaji">${card.romaji}</span>
        `;

    } else {

        element.innerHTML = `
            <span class="english">${card.content}</span>
        `;

    }

    selectedCards.push({
        element: element,
        card: card
    });

    if (selectedCards.length === 2) {
        checkMatch();
    }

}


// ======================================
// 5. CHECK WHETHER CARDS MATCH
// ======================================

function checkMatch() {

    lockBoard = true;

    const first = selectedCards[0];
    const second = selectedCards[1];

    const isMatch =
        first.card.pair === second.card.pair &&
        first.card.type !== second.card.type;

    if (isMatch) {

        first.element.classList.add("matched");
        second.element.classList.add("matched");

        matchedPairs++;

        document.getElementById("score").textContent = matchedPairs;

        selectedCards = [];
        lockBoard = false;

        if (matchedPairs === 10) {

            document.getElementById("message").textContent =
                "🎉 Excellent! You found all 10 pairs!";

        }

    } else {

        setTimeout(() => {

            first.element.classList.remove("flipped");
            second.element.classList.remove("flipped");

            first.element.innerHTML = "";
            second.element.innerHTML = "";

            selectedCards = [];
            lockBoard = false;

        }, 1000);

    }

}


// ======================================
// 6. RETURN TO MAIN MENU
// ======================================

function showMenu() {

    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");

}

