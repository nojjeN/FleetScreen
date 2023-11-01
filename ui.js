
var philipEvents;
var adamEvents;
var andreasEvents;

async function displayUI() {    
    await signIn();
    var signInButton = document.getElementById('signin');
    var clientIdDiv = document.getElementById('client-id-div');

    signInButton.style = "display: none";
    clientIdDiv.style = "display: none";

    fetchEvents();
    startIntervals();
}

async function fetchEvents() {
    console.log("Fetching events")

    philipEvents = await getEvents("philip.wingfelt@afry.com");
    adamEvents = await getEvents("adam.andersson@afry.com");
    andreasEvents = await getEvents("andreas.a.hoglund@afry.com");
    updateEvents();
}

function updateEvents() {
    console.log("Updating events")

    setCurrentStatus(philipEvents, "philip-status")
    setCurrentStatus(adamEvents, "adam-status")
    setCurrentStatus(andreasEvents, "andreas-status")
}

function setCurrentStatus(events, id) {
    const currentStatus = getCurrentStatus(events)
    
    const statusDiv = document.querySelector("#" + id);
    const statusText = document.querySelector("#" + id + " h2");
    statusText.textContent = currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1);

    switch (currentStatus) {
        case "busy":
            //Red
            statusDiv.style.backgroundColor = "#fe0056";
          break;
        case "tentative":
            //Yellow
            statusDiv.style.backgroundColor = "#ffdd48"
          break;
        case "free":
            //Green
            statusDiv.style.backgroundColor = "#72d68c"
          break;
        default:
            //Blue
            statusDiv.style.backgroundColor = "#5096e7"
      }
}

function getCurrentStatus(events) {
    for (const event of events.value) {
        const utcStartDate = new Date(event.start.dateTime);
        const utcEndDate = new Date(event.end.dateTime);

        utcStartDate.setUTCHours(utcStartDate.getUTCHours() + 1);
        utcEndDate.setUTCHours(utcEndDate.getUTCHours() + 1);

        const swedenTimeZone = "Europe/Stockholm";
        const currentSwedishTime = new Date();
        currentSwedishTime.toLocaleString("sv-SE", { timeZone: swedenTimeZone });
        //console.log("Sweden:" + currentSwedishTime + "Start:" + utcStartDate + "End:" + utcEndDate + "Comp:" + (currentSwedishTime>utcStartDate && currentSwedishTime<utcEndDate))


        if(currentSwedishTime>utcStartDate && currentSwedishTime<utcEndDate) {
            return event.showAs;
        }
    }
    return "free";
}
  
let updateIntervalId;
let fetchIntervalId;

function startIntervals() {
    console.log("Started Intervals")
    updateIntervalId = setInterval(updateEvents, 10000);
    fetchIntervalId = setInterval(fetchEvents, 600000);
}
