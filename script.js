// A simple variable to keep track of the currently playing audio track
let currentAudio = null;

// An array to hold all our audio elements, so we can cycle through them
const audioTracks = [
    document.getElementById('calm-audio'),
    document.getElementById('energetic-audio'),
    document.getElementById('focus-audio')
];

// A variable to track the index of the currently playing track in the array
let currentTrackIndex = 0;

// A function to stop all currently playing audio tracks
function stopAllAudio() {
    audioTracks.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    });
}

// A new function to play the track at the current index
function playCurrentTrack() {
    stopAllAudio(); // First, stop whatever is playing
    currentAudio = audioTracks[currentTrackIndex];
    currentAudio.play();
}

// Get the buttons from the HTML using their IDs
const calmBtn = document.getElementById('calm-btn');
const energeticBtn = document.getElementById('energetic-btn');
const focusBtn = document.getElementById('focus-btn');

// Get the new playback control buttons
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const loopBtn = document.getElementById('loop-btn');
const loopIcon = loopBtn.querySelector('i');
const loopOnClass = 'fas fa-repeat';
const loopOffClass = 'far fa-repeat';


// -----------------------------------------------------------
// Add listeners for the Mood Buttons
// The logic here is slightly different to set the currentTrackIndex
calmBtn.addEventListener('click', () => {
    currentTrackIndex = 0;
    playCurrentTrack();

    updateActiveSong(currentTrackIndex);
});

energeticBtn.addEventListener('click', () => {
    currentTrackIndex = 1;
    playCurrentTrack();

    updateActiveSong(currentTrackIndex);
});

focusBtn.addEventListener('click', () => {
    currentTrackIndex = 2;
    playCurrentTrack();

    updateActiveSong(currentTrackIndex);
});


// -----------------------------------------------------------
// Add listeners for the new Playback Controls

document.addEventListener('DOMContentLoaded', () => {
    const sonList = document.getElementById('song-list');
    const songItems = document.querySelectorAll('.song-item');
    const playNextButton = document.getElementById('play-next-song');

    let currentPlayingSongIndex = -1;

    function updateActiveSong(newIndex) {
        if (currentPlayingSongIndex !== -1 && songItems[currentPlayingSongIndex]) {
            songItems[currentPlayingSongIndex].classList.remove('active-song');

        }

        if (newIndex >= 0 && newIndex < songItems.length) {
            songItems[newIndex].classList.add('active-song');
            currentPlayingSongIndex = newIndex;

            songItems[newIndex].scrollIntoView({ behavior: "smooth", block: 'nearest' });

        } else {
            currentPlayingSongIndex = -1;
        }
    }
    
    songList.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.song-item');
        if (clickedItem) {
            const index = Array.from(songItems).indexOf(clickedItem);
            updateActiveSong(index);
        }
    });

    playNextButton.addEventListener('click', () => {
        const nextIndex = (currentPlayingSongIndex + 1) % songItems.length;
        updateAActiveSong(nextIndex);
    });
});

// Play Button: Resumes the audio from where it was paused
playBtn.addEventListener('click', () => {
    if (currentAudio) { // Make sure a track has been selected
        currentAudio.play();
    }
});

// Pause Button: Pauses the audio
pauseBtn.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
    }
});

// Stop Button: Stops the audio and resets it to the beginning
stopBtn.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

// Next Button: Moves to the next track in the array
nextBtn.addEventListener('click', () => {
    currentTrackIndex++;
    // If we've gone past the last track, loop back to the beginning (index 0)
    if (currentTrackIndex >= audioTracks.length) {
        currentTrackIndex = 0;
    }
    playCurrentTrack();
});

// Previous Button: Moves to the previous track in the array
previousBtn.addEventListener('click', () => {
    currentTrackIndex--;
    // If we've gone before the first track, loop to the last track
    if (currentTrackIndex < 0) {
        currentTrackIndex = audioTracks.length - 1;
    }
    playCurrentTrack();
});

// Loop Button: Toggles the loop property on and off
let isLooping = moodMusic.loop;

if (isLooping) {
    loopIcon.classList.add(loopOnClass);
    loopIcon.classList.remove(loopOffClass);
} else {
    loopIcon.classList.add(loopOffClass);
    loopIcon.classList.remove(loopOnClass);
}
loopBtn.addEventListener('click', () => {
    if (moodMusic) {
        isLooping = !isLooping; // Toggle the boolean value
        moodMusic.loop = isLooping; // Set the loop property on the audio element
        
    } 

    if (isLooping) {
        loopIcon.classList.remove(loopOffClass);
        loopIcon.classList.add(loopOnClass);
    } else {
        loopIcon.classList.remove(loopOnClass);
        loopIcon.classList.add(loopOffClass);
    }
});

