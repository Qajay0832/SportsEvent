// Initial scores
let scores = {
    Red: 0,
    Blue: 0,
    Green: 0,
    Yellow: 0
};

// Function to log current scores
function logScores(message) {
    console.log(message);
    console.log('Current Scores:', scores);
}

// Opening Ceremony
function OpeningCeremony(callback) {
    console.log('The sports event is starting!');
    logScores('Opening Ceremony: Scores initialized.');
    if (callback) callback();
}

// Simulate 100m Race
function Race100M(callback) {
    console.log('100m race is about to start...');
    
    // Simulate race times
    const colors = Object.keys(scores);
    let times = {};
    colors.forEach(color => {
        times[color] = Math.floor(Math.random() * 100) + 10; // Random time between 10 and 110
    });

    // Determine the winner (smallest time wins)
    let winner = Object.keys(times).reduce((a, b) => times[a] < times[b] ? a : b);
    scores[winner] += 10; // Award 10 points to the winner

    console.log(`Race results: ${winner} wins with time ${times[winner]}ms`);
    logScores('Race100M completed.');

    if (callback) callback();
}

function LongJump(callback) {
    console.log('Long jump event is starting...');
    
    const colors = ['Red', 'Blue', 'Green', 'Yellow'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    scores[color] += 5; // Award 5 points to the randomly selected color

    console.log(`Long jump results: ${color} is awarded 5 points`);
    logScores('LongJump completed.');

    if (callback) callback();
}

function HighJump(callback) {
    console.log('High jump event is starting...');
    
    const colors = Object.keys(scores);
    let highestJumpColor = prompt('Enter the color with the highest jump (Red, Blue, Green, Yellow):');

    if (colors.includes(highestJumpColor)) {
        scores[highestJumpColor] += 7; // Award 7 points to the selected color
        console.log(`${highestJumpColor} is awarded 7 points for the high jump`);
    } else {
        console.log('Invalid color entered.');
    }

    logScores('HighJump completed.');

    if (callback) callback();
}


function AwardCeremony() {
    console.log('Award Ceremony: The event has concluded!');
    let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    console.log(`The winner is ${winner} with ${scores[winner]} points.`);
}


function startEvent() {
    OpeningCeremony(() => {
        Race100M(() => {
            LongJump(() => {
                HighJump(() => {
                    AwardCeremony();
                });
            });
        });
    });
}

startEvent();
