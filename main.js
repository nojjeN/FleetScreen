function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar-filling");
    const progressBarImg = document.getElementById("progress-bar-img");
    const now = new Date();
    const startTime = new Date();
    startTime.setHours(8, 0, 0); // 08:00
    const endTime = new Date();
    endTime.setHours(17, 0, 0); // 17:00
    const padelStart = new Date();
    padelStart.setHours(10, 30, 0); // 10:30
    const lunchStart = new Date();
    lunchStart.setHours(12, 0, 0); // 12:30
    const lunchEnd = new Date();
    lunchEnd.setHours(13, 0, 0); // 12:30
  
    const totalMilliseconds = endTime - startTime;
    const elapsedMilliseconds = now - startTime;
    const percentage = (elapsedMilliseconds / totalMilliseconds);
  
  
    if (now.getDay() == 4 && now >= padelStart && now <= lunchEnd) {
        progressBarImg.querySelector("img").src = "images/ball.png";
    } else if (now >= lunchStart && now <= lunchEnd) {
      progressBarImg.querySelector("img").src = "images/banana.png";
    } else if (now < lunchStart) {
      progressBarImg.querySelector("img").src = "images/sun.png";
    } else {
      progressBarImg.querySelector("img").src = "images/moon.png";
    }
  
    // Adjust the left position of the image to align it with the end of the progress bar
    if(percentage <= 100 && now > startTime) {
      progressBar.style.width = percentage*100 + "%";
      progressBarImg.style.left = (percentage)*1100-45+"px";
    } else {
      progressBar.style.width = 0 + "%";
      progressBarImg.style.left = "-45px";
    }
  }
  
  const roomStatuses = [
    "Taming the cyber-dragons with a rubber chicken...",
    "Loading... Philip's pixelated penguin parade joins the ballet...",
    "Preparing for a disco dance-off with Mattias and his hamsters...",
    "Rebooting the mainframe with a giant toaster...",
    "Conversing with AI chatbots about their favorite cloud shapes...",
    "Escaping the labyrinth of computer cables on a pogo stick...",
    "Synchronizing a digital watch with the cosmic accordion...",
    "Juggling binary code like flaming chainsaws in a circus...",
    "Unraveling the secrets of quantum fortune cookie predictions...",
    "Dancing the tango with squirrels in tutus...",
    "Consulting the pixelated crystal ball for tech support...",
    "Chasing the WiFi signal through the office...",
    "Unlocking the treasure chest of forgotten emoji hieroglyphics...",
    "Synchronously eating bananas...",
    "Petting Stonken...",
    "Planting Java beans...",
    "Preventing Stonken from eating the repo...",
    "Calling Bill Grouper..",
    "Getting ready for Oyster...",
    "Thank you for the information..",
    "Trying really hard not to understand..",
    "Festis opening session...",
    "Breaking into cactus lime...",
    "Mixing emotions with stack traces...",
    "Shrinking the Jobbruta...",
    "Photographing bananas in weird positions...",
    "Installing PTD in Mattias car...",
    "Working on Procrastination-integration...",
    "Pondering about Christmas ornaments...",
    "Looking at LeagueOfGraphs...",
    "Coping with MMR system...",
    "Having a very nice trouble..",
    "Asking Lennart about relationship advice...",
    "Dreaming about next paddel session...",
    "Burning holes in socks at rundpingis...",
    "Feeding the garbage collector...",
    "Äntligen är det snart fredag!",
    "Asking Lassing about the hoodies...",
    "Installing clothing pins in the celing…",
    "Praying for Wolgfang…",
    "Smasking in each others ears…",
    "Swimming in padel balls…",
    "Admiring Adam's alternating accordion ambition…",
    "Applying Andreas absolutely astonishing anti-gravity agenda…",
    "Physically phrasing Philip's philosophical philodendron…",
    "Materializing Mattias massive modesty…",
    "Having high in the roof...",
    "How's the country?",
    "Defleeting fleet's feet...",
    "Taking a coffie on that...",
    "Forwarding forwarded emails...",
    "Playing ping pong pingis...",
    "Sista sista...",
    "Proxy munchausing Philips plants...",
    "Feeding kDil.io...",
    "Hanging the rubberducks...",
    "Applying Rudolf on a sandwich...",
    "Adding easter eggs...",
    "Solving and dancing bugg...",
    "Ordering the HillBilly Tjofräs...",
    "Juggling java beans...",
    "Posing and then gaslighting...",
    "Doing circles around the ping pong pingis table",
    "Hunting the leak canary...",
    "Drawing a new masterpiece on the whiteboard...",
    "Welcome to gatubråkstakens paradis...",
    "Accepting threatening fika invitations..."
]

var shuffledRoomStatuses = [...roomStatuses];
shuffleArray(shuffledRoomStatuses)


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectAndDisplayRandomRoomStatus() {
    const themeDayText = document.querySelector("#room-status-div h1");
    themeDayText.textContent = getNextSentence();
}

function getNextSentence() {
  console.log(shuffledRoomStatuses.length)
  if(shuffledRoomStatuses.length == 0) {
    shuffledRoomStatuses = [...roomStatuses];
    shuffleArray(shuffledRoomStatuses);
  }
  return shuffledRoomStatuses.pop();
}


// Initial call to set the progress bar and image on page load
updateProgressBar();

// Update the progress bar and image every 5 seconds
setInterval(updateProgressBar, 3000);


selectAndDisplayRandomRoomStatus();
setInterval(selectAndDisplayRandomRoomStatus, 3000);


let animationInterval;
const h2Element = document.getElementById("animatedH2");
const fontSizes = ["32px", "36px"]; // Array of font sizes to loop through
let currentFontSizeIndex = 0;

function startAnimation() {
    animationInterval = setInterval(animateFontSize, 1200); // Change font size every 1 second (adjust as needed)
}

function animateFontSize() {
    const themeDayText = document.querySelector("#room-status-div h1");
    themeDayText.style.fontSize = fontSizes[currentFontSizeIndex];
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
}

startAnimation();

  