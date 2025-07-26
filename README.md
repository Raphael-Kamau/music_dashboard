# Musical Mood Player

A simple web-based music dashboard that lets you select and play songs based on your current mood. Pick from moods like Calm, Energetic, or Focus, and control playback directly from your browser.

## Features

- **Mood-based Song Selection:** Choose your mood and instantly get a fitting track.
- **Playback Controls:** Play, pause, stop, skip to next/previous, and loop your favorite tracks.
- **Responsive Design:** Works great on both desktop and mobile devices.
- **FontAwesome Icons:** Modern and intuitive playback buttons.

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Edge, Safari, etc.)
- No backend or server required.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Raphael-Kamau/music_dashboard.git
    cd music_dashboard
    ```
2. **Add your audio files:**
   - Place your `.mp3` files (relax-calm.mp3, energetic-sports.mp3, chill-music.mp3) in the project folder. 
   - You can replace these with your own tracks, just update the `<audio>` tags in `index.html` if you change filenames.

3. **Run the Dashboard:**
   - Open `index.html` directly in your browser.

## Project Structure

```
music_dashboard/
├── index.html
├── styles.css
├── script.js
├── relax-calm.mp3
├── energetic-sports.mp3
├── chill-music.mp3
└── README.md
```

## Usage

- Click on any mood button to select and play a song.
- Use playback controls below to play, pause, skip, stop, or loop the music.

## Customization

- **Add More Moods:** Add new buttons in `index.html` and link them to new audio files.
- **Change Styles:** Edit `styles.css` to customize the theme.
- **Replace Audio:** Swap out the `.mp3` files for your own music.

## Credits

- [FontAwesome](https://fontawesome.com/) for the icon library.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

Feel free to contribute, fork, or suggest improvements!
