/* =========================================================
   NEGOCIO'26 - JAVASCRIPT
   Countdown + Event Information Modal
   ========================================================= */


/* ================= COUNTDOWN ================= */

const festDate = new Date("October 16, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = festDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* ================= EVENT INFORMATION ================= */

const events = {

    "Best Manager": {
    fee: "₹500/person",
    prize: "1st Prize: ₹10,000",
    description:
        "A competitive management event designed to test leadership, decision-making, communication and managerial abilities.",
    rules:
    "1. This event is exclusive for individual participants.<br>" +
    "2. Registration fee: Rs. 500 per person.<br>" +
    "3. PG students (MBA, PGDM, MCA, M.Com) are eligible to participate in the event.<br>" +
    "4. Participants are requested to carry a college ID card or an authorized letter from the college authority.<br>" +
    "5. Multiple participants are eligible from a college.<br>" +
    "6. Participants are expected to follow the formal dress code during the event.<br>" +
    "7. Rules and details of each round will be communicated on the spot before its commencement.<br>" +
    "8. Use of mobile phones is strictly prohibited during the event unless permitted by the coordinators.<br>" +
    "9. Any participant found to be indulged in inappropriate behaviour will be disqualified.<br>" +
    "10. Participants are requested to strictly follow the guidelines.<br>" +
    "11. Participants should carry one laptop with an internet connection.<br>" +
    "12. The organizers' and judges' decision will be final and binding."
    
},

    "Finance Game": {
        fee: "₹350/person",
        prize: "1st: ₹5,000 | 2nd: ₹3,000",
        description:
            "An exciting finance-based competition that challenges participants to demonstrate financial knowledge and analytical thinking.",
        rules:
    "1. Each team must have 4 participants.<br>" +
    "2. There will be three rounds.<br>" +
    "3. All cases are fictional and created for the competition.<br>" +
    "4. Participants must submit answers within the allotted time.<br>" +
    "5. Mobile phones and internet access are not permitted unless specifically allowed by the organizers.<br>" +
    "6. Calculators may be permitted.<br>" +
    "7. Teams may discuss answers only within their own team.<br>" +
    "8. Teams cannot exchange clues or answers with other teams.<br>" +
    "9. Points may be deducted for late submissions.<br>" +
    "10. Judges will evaluate the logic and financial reasoning, not merely the final answer.<br>" +
    "11. Any attempt to cheat will result in disqualification.<br>" +
    "12. The organizers' and judges' decision will be final and binding."
    },

    "Marketing Game": {
    fee: "₹350/person",
    prize: "1st: ₹5,000 | 2nd: ₹3,000",
    description:
        "A marketing-focused competition designed to test creativity, strategy, communication and market understanding.",
    rules:
    "1. Each team must consist of 4 members and members cannot be changed after registration.<br>" +
    "2. The competition consists of 3 marketing-based rounds.<br>" +
    "3. All team members must actively participate in every round.<br>" +
    "4. Participants must complete tasks within the given time limits.<br>" +
    "5. Creativity, marketing knowledge, communication, teamwork, innovation, problem-solving and presentation will be evaluated.<br>" +
    "6. Each team must carry atleast one laptop with stable internet connection.<br>" +
    "7. Mobile phones and internet usage are not allowed unless permitted by the coordinators.<br>" +
    "8. Unfair means, plagiarism and copying another team's ideas are prohibited.<br>" +
    "9. Participants must report 15 minutes before the event.<br>" +
    "10. Late submission may lead to mark deduction or disqualification.<br>" +
    "11. The organizers' and judges' decision will be final and binding."
},

    "HR Game": {
        fee: "₹350/person",
        prize: "1st: ₹5,000 | 2nd: ₹3,000",
        description:
            "A human-resource focused competition that tests participants' understanding of people management, communication and decision-making.",
    rules:
    "1. Each team must consist of 4 members.<br>" +
    "2. Multiple teams from the same college are permitted to participate.<br>" +
    "3. All participants must carry a valid college ID card.<br>" +
    "4. Each team must designate one team leader and provide the details during registration.<br>" +
    "5. The rules and instructions for each round will be announced at the respective venue.<br>" +
    "6. Each team must carry at least one laptop with a stable internet connection.<br>" +
    "7. Participants must clarify all doubts before the commencement of the game.<br>" +
    "8. The use of electronic devices is permitted only when authorized by the event coordinators.<br>" +
    "9. Any misconduct or violation of the event rules may result in disqualification.<br>" +
    "10. The organizers' and judges' decision will be final and binding."
    },

    "Best Management Team": {
        fee: "₹250/person",
        prize: "1st: ₹4,000 | 2nd: ₹2,000",
        description:
            "A team-based management competition where participants demonstrate coordination, teamwork, leadership and problem-solving skills.",
        rules:
    "1. Minimum 4 members are required for a team for management games.<br>" +
    "2. Each team should have a minimum of 2 laptops.<br>" +
    "3. Participants must adhere to time limits strictly.<br>" +
    "4. No electronic devices or external assistance allowed during the quiz rounds.<br>" +
    "5. The organizers may modify the time, questions, rounds or format in the case of delays, technical issues, emergencies or other unforeseen circumstances.<br>" +
    "6. Inappropriate or unprofessional behaviours will result in negative marks or disqualification.<br>" +
    "7. The organizers' and judges' decision will be final and binding."
    },

    "Best Buddies": {
        fee: "₹200/person",
        prize: "1st: ₹3,000 | 2nd: ₹1,500",
        description:
            "An engaging team competition designed to test coordination, communication, creativity and teamwork.",
        rules:
    "1. Each team must consist of 2 participants.<br>" +
    "2. Both participants must actively participate in every round.<br>" +
    "3. Follow the instructions given by the game coordinator carefully.<br>" +
    "4. Participants must complete each task within the given time limit.<br>" +
    "5. Communication is allowed only according to the rules of the particular round.<br>" +
    "6. No use of mobile phones, internet, or outside assistance.<br>" +
    "7. Participants must not disturb or interfere with other teams.<br>" +
    "8. The organizers' and judges' decision will be final and binding."
    },

    "Memory Rush": {
        fee: "₹250/person",
        prize: "1st: ₹4,000 | 2nd: ₹2,000",
        description:
            "A challenging event designed to test memory, concentration, observation and quick thinking.",
        rules:
    "1. Each team consists of 4 participants.<br>" +
    "2. The game has 3 rounds testing memory, observation and teamwork.<br>" +
    "3. No phones, smartwatches, notes or outside assistance are allowed.<br>" +
    "4. Team members may discuss answers, but only one answer sheet will be submitted per team.<br>" +
    "5. No changes are allowed after submission.<br>" +
    "6. Cheating, misconduct or disturbing other teams may lead to disqualification.<br>" +
    "7. The organizers may modify the time, questions, rounds or format in case of delays, technical issues, emergencies or other unforeseen circumstances.<br>" +
    "8. Any organizer error may result in a question being replaced, cancelled or scoring being adjusted.<br>" +
    "9. Safety and fair play take priority throughout the event.<br>" +
    "10. The organizers' and judges' decision will be final and binding."
    },

    "Mind Matrix": {
        fee: "₹250/person",
        prize: "1st: ₹4,000 | 2nd: ₹2,000",
        description:
            "A mental challenge that tests analytical ability, logical thinking, problem-solving and decision-making.",
        rules:
    "1. Each team consist of 4 participants.<br>" +
    "2. Internet access and external assistance or any smart devices are not permitted unless explicitly allowed.<br>" +
    "3. The allotted time for analysis and preparation must be strictly followed.<br>" +
    "4. Participants should maintain professional conduct throughout the event.<br>" +
    "5. Participants must analyze the case and propose suitable solutions.<br>" +
    "6. Any form of plagiarism or unfair means will result in disqualification.<br>" +
    "7. Teams must submit their responses or presentations within the given time.<br>" +
    "8. Any organizer error may result in a question being replaced cancelled or scoring being adjusted.<br>" +
    "9. The organizers may modify the the time, questions, rounds or format in the case of delays, technical issues, emergencies or other unforeseen circumstances.<br>" +
    "10. Safety and fair play take priority throughout the event.<br>" +
    "11. The organizers' and judges' decision will be final and binding."
    },

    "Treasure Hunt": {
        fee: "₹300/person",
        prize: "1st: ₹6,000",
        description:
            "An exciting challenge combining teamwork, observation, problem-solving and strategic thinking.",
        rules:
    "1. Each team must consist of 3 to 5 participants.<br>" +
    "2. Spot registration will be available and all teams have to get themselves registered before the given time.<br>" +
    "3. More than one team can participate from a college.<br>" +
    "4. Teams members participating in treasure hunt will not be allowed to participate in any other events.<br>" +
    "5. Teams must follow the clues in the given sequence.<br>" +
    "6. Every clue must be solved within the designated time limit.<br>" +
    "7. Teams must stay within the permitted game area.<br>" +
    "8. No mobile phones, internet, or outside assistance is allowed.<br>" +
    "9. Participants must not take, hide, damage, or alter clues meant for other teams.<br>" +
    "10. Teams must not follow or interfere with another team's progress.<br>" +
    "11. All items collected during the hunt must be submitted to the coordinators when instructed.<br>" +
    "12. Any attempt to cheat or misuse clues may result in disqualification.<br>" +
    "13. The additional details regarding the rounds will be given after the registration.<br>" +
    "14. The organizers' and judges' decision will be final and binding."
    },

    "Photography Contest": {
        fee: "₹200/person",
        prize: "1st: ₹2,000 | 2nd: ₹1,000",
        description:
            "A creative photography competition where participants can showcase their ability to capture compelling moments and stories."
    },

    "Reel Contest": {
        fee: "₹200/person",
        prize: "1st: ₹2,000 | 2nd: ₹1,000",
        description:
            "A creative short-video competition encouraging participants to combine storytelling, creativity and digital content skills."
    },

    "Mission Possible": {
        fee: "₹150/person",
        prize: "1st: ₹2,000 | 2nd: ₹1,000",
        description:
            "An engaging competition designed for higher secondary students to demonstrate creativity, teamwork and problem-solving.",
        rules:
    "1. Each team must consist of 2–4 participants.<br>" +
    "2. The game consists of multiple challenges/missions.<br>" +
    "3. Teams must complete the missions in the given sequence.<br>" +
    "4. Each mission must be completed within its specified time limit.<br>" +
    "5. Teams can proceed to the next mission only after completing the previous one.<br>" +
    "6. No mobile phones, internet, calculators, or outside help are permitted.<br>" +
    "7. Teams must use only the materials provided by the coordinators.<br>" +
    "8. Participants must not reveal clues, answers, or strategies to other teams.<br>" +
    "9. Damaging or intentionally misusing game materials may result in disqualification.<br>" +
    "10. The organizers' and judges' decision will be final and binding."
    },
    
    "Business Quiz": {
        fee: "₹150/person",
        prize: "1st Prize: ₹3,000",
        description:
            "A knowledge-based competition to test participants' understanding of business concepts and real-world applications.",
        rules:
    "1. Each team must consist of 2–4 participants.<br>" +
    "10. The organizers' and judges' decision will be final and binding."
    },
    "BGMI": {
        fee: "₹100/person",
        prize: "1st Prize: ₹2,000",
        description:
            "An online esports competition where participants compete in PUBG Mobile.",
        rules:
    "1. The PUBG Mobile event will be conducted online on 14th October 2026.<br>" +
    "2. Team Structure: Each team must consist of 4 main players and up to 1 optional substitute.<br>" +
    "3. Game IDs: All participants must register their exact in-game names (IGN) and unique Character IDs prior to the tournament. Playing with unregistered accounts will result in immediate disqualification.<br>" +
    "4. Play fair: Use of cheats or hacks will result in immediate disqualification.<br>" +
    "5. Match Format & Room Protocol<br>" +
    "6. Lobby Entry: Room ID and password will be shared with team captains 10 to 15 minutes before match start.<br>" +
    "7. Slot Allocation: Teams must join their strictly assigned lobby slot numbers.<br>" +
    "8. Punctuality: Matches will start precisely at the scheduled time. Teams failing to join the lobby on time will forfeit that match."
    },

    "Free Fire": {
        fee: "₹100/person",
        prize: "1st Prize: ₹2,000",
        description:
            "An online esports competition where participants compete in Free Fire.",
         rules:
    "1. The Free Fire event will be conducted online on 14th October 2026.<br>" +
    "2. Team Structure: Each team must consist of 4 main players and up to 1 optional substitute.<br>" +
    "3. Game IDs: All participants must register their exact in-game names (IGN) and unique Character IDs prior to the tournament. Playing with unregistered accounts will result in immediate disqualification.<br>" +
    "4. Play fair: Use of cheats or hacks will result in immediate disqualification.<br>" +
    "5. Match Format & Room Protocol<br>" +
    "6. Lobby Entry: Room ID and password will be shared with team captains 10 to 15 minutes before match start.<br>" +
    "7. Slot Allocation: Teams must join their strictly assigned lobby slot numbers.<br>" +
    "8. Punctuality: Matches will start precisely at the scheduled time. Teams failing to join the lobby on time will forfeit that match."
    },


};


/* ================= OPEN EVENT ================= */

function openEvent(eventName) {

    const event = events[eventName];

    if (!event) {
        return;
    }

    document.getElementById("modalTitle").textContent =
        eventName;

    document.getElementById("modalFee").textContent =
        event.fee;

    document.getElementById("modalPrize").textContent =
        event.prize;

    document.getElementById("modalDescription").textContent =
        event.description;

    document.getElementById("modalRules").innerHTML =
    event.rules;

    document.getElementById("eventModal").classList.add("show");

    document.body.style.overflow = "hidden";
}


/* ================= CLOSE EVENT ================= */

function closeEvent() {

    document.getElementById("eventModal").classList.remove("show");

    document.body.style.overflow = "";
}


/* ================= CLOSE MODAL BY CLICKING OUTSIDE ================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("eventModal");

    if (event.target === modal) {
        closeEvent();
    }

});


/* ================= CLOSE MODAL WITH ESCAPE ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeEvent();
    }

});
/* ================= BACKGROUND MUSIC ================= */

/*
 * Native HTML5 audio playlist.
 * Playback begins from the real ENTER button gesture so browsers are
 * much more likely to allow it on desktop and mobile.
 */
(() => {
    "use strict";

    const BGM_VOLUME = 0.35;
    const TRACKS = [
        "./punisher.mp3",
        "./into you.mp3",
        "./montagem guerreiro.mp3",
        "./give it to you.mp3"
    ];

    const entryScreen = document.getElementById("siteEntry");
    const enterSite = document.getElementById("enterSite");
    const musicToggle = document.getElementById("musicToggle");

    if (!entryScreen || !enterSite || !TRACKS.length) return;

    const audio = document.createElement("audio");
    audio.id = "siteBgm";
    audio.preload = "auto";
    audio.loop = false;
    audio.volume = BGM_VOLUME;
    audio.setAttribute("playsinline", "");
    audio.setAttribute("aria-hidden", "true");
    audio.style.display = "none";
    document.body.appendChild(audio);

    let trackIndex = 0;
    let started = false;

    function loadTrack(index) {
        trackIndex = (index + TRACKS.length) % TRACKS.length;
        audio.src = TRACKS[trackIndex];
        audio.load();
    }

    function playCurrentTrack() {
        // Do not wait for canplay/loadeddata here. Calling play() directly
        // keeps this inside the user's trusted ENTER-button interaction.
        audio.volume = BGM_VOLUME;
        const playPromise = audio.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch((error) => {
                console.warn("[NEGOCIO'26 BGM] Playback was blocked:", error);
                started = false;
            });
        }
    }

    function startMusic() {
        if (started) return;
        started = true;
        loadTrack(0);
        playCurrentTrack();
    }

    let isMuted = false;

    function updateMusicButton() {
        if (!musicToggle) return;

        const icon = musicToggle.querySelector("i");
        if (icon) {
            icon.className = isMuted
                ? "fa-solid fa-volume-xmark"
                : "fa-solid fa-volume-high";
        }

        musicToggle.classList.toggle("is-muted", isMuted);
        musicToggle.setAttribute("aria-pressed", String(isMuted));
        musicToggle.setAttribute("aria-label", isMuted ? "Unmute background music" : "Mute background music");
        musicToggle.setAttribute("title", isMuted ? "Unmute background music" : "Mute background music");
    }

    if (musicToggle) {
        musicToggle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            isMuted = !isMuted;
            audio.muted = isMuted;
            updateMusicButton();
        });
    }

    updateMusicButton();

    audio.addEventListener("ended", () => {
        loadTrack(trackIndex + 1);
        playCurrentTrack();
    });

    audio.addEventListener("error", () => {
        console.warn("[NEGOCIO'26 BGM] Could not load:", TRACKS[trackIndex]);
    });

    // Begin downloading the first track before the user clicks ENTER.
    loadTrack(0);
    audio.preload = "auto";

    document.body.classList.add("entry-locked");

    // pointerdown fires at the earliest practical point in a mouse/touch
    // interaction, giving audio.play() the strongest possible user gesture.
    enterSite.addEventListener("pointerdown", () => {
        startMusic();
    }, { once: true });

    enterSite.addEventListener("click", () => {
        // Fallback in case a browser does not deliver pointerdown as expected.
        startMusic();

        document.body.classList.remove("entry-locked");
        entryScreen.classList.add("is-exiting");
        window.setTimeout(() => entryScreen.remove(), 700);
    }, { once: true });
})();
