# Bubble Game

An **interactive number-based bubble game** built with **HTML, CSS, and JavaScript**.  
Players click on bubbles that match a **target number** before the timer runs out to score points.

✅ **Key concept:** This game uses **Event Bubbling**, meaning a single event listener is attached to the parent container (`.palate-bottom`) instead of attaching a separate listener to each bubble. This improves performance and makes the code cleaner, while still detecting clicks on individual bubbles.

---

## 🎮 Features

- **Dynamic bubble generation** with random numbers (0–9)
- **Hit Number**: Shows the target number to click
- **Score System**: +10 for correct hits, -10 for wrong clicks
- **Timer**: 60-second countdown
- **Event Bubbling**: Efficient handling of clicks on multiple bubbles
- **Visual Feedback**: Clicked bubbles are highlighted temporarily

---

## 📁 Project Structure

BubbleGame/
│
├─ index.html # Main HTML file for the game
├─ style.css # CSS styling for layout, bubbles, and highlights
├─ script.js # JavaScript logic: bubble generation, timer, score, and event handling
└─ README.md # Project documentation

---

## 💻 How to Run

1. Clone or download the repository

2. Open index.html in any modern web browser

3. Click bubbles matching the Hit number

4. Watch your score increase and timer count down

---

## ⚙️ Technologies Used

- **HTML** – Structure and layout

- **CSS** – Styling, Flexbox, and bubble highlight animations

- **JavaScript** – Game logic, event bubbling, timer, and scoring

---

## 🚀 Future Improvements

- Add difficulty levels (more bubbles, shorter time)

- Color-coded bubbles for easier tracking

- Sound effects for correct/wrong clicks

- Mobile-friendly responsive layout

---

## 📌 Notes

- The game relies on .palate-bottom for bubble clicks; ensure it exists.

- timer, score, and hit values are updated dynamically.

- Bubble highlights use temporary CSS classes for smooth animation.

- Event Bubbling is used for efficient click handling — no separate listener is needed for each bubble.

---

## 🎯 License

Free to use and modify for personal or educational purposes.

---

## 👤 Author

**Fahim Faysal** – Developer & Creator of the Bubble Game

- GitHub: [https://github.com/FahimFaysalNirjhar]
- Email: fahimfaysal1995@gmail.com
