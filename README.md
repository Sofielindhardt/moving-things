

Before we can use JavaScript to play the sound named `movement_sound.m4a` on keystroke up/down/left/right, you first need to grab it and save a reference to it in a variable named `movementSound`.

```javascript
const ? = document.getElementById("?");
```

Next implement a function named `playSoundOnMovement` outside the addeventListener.

```javascript
function ? {


}
```

Inside the `playSoundOnMovement` function, set the `currentTime` property of the `movementSound` variable to `0`, which will explicitly set the playback position to the beginning of the sound file and finally set the `movementSound` variable to play the sound.


Finally update all 4 functions [`moveDodgerUp()`, `moveDodgerDown()`, `moveDodgerleft()`, `moveDodgerRight()`] so it calls the function `playSoundOnMovement()` each time you click on the keystroke up/down/left/right.

### Exercise 5 -  Implement a sound function that plays music when you hit one of the edges of the container

Go and update the HTML file and insert an audio-tag with an ID attribute named `gameoverSound` and finally ensure that you are pointing to the m4a file named `gameover_sound.m4a`

```html
<audio id="?">
    <source src="?" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

Before we can use JavaScript to play the sound named `gameover_sound.m4a` on a collision with the containers edge, you first need to grab it and save a reference to it in a variable named `gameoverSound`.



Next implement a function named `playGameOverSound` outside the addeventListener.

```javascript
function ? {


}
```

Inside the `playGameOverSound` function, set the `currentTime` property of the `movementSound` variable to `0`, which will explicitly set the playback position to the beginning of the sound file and finally set the `gameovertSound` variable to play the sound.

Finally, update all 4 functions [`moveDodgerUp()`, `moveDodgerDown()`, `moveDodgerleft()`, `moveDodgerRight()`] so that it calls the function `playGameOverSound()` every time you hit one of the edges in the container.

### Exercise 6 -  Change the dodger pink background with pacman image
Go and update the selector #dodger in your stylesheet to show the image with pacman - `pacman.png`

### Exercise 7 - Change the starting position of the pacman figure
Go and update the code so the pacman begin in the middle of the container

### Exercise 8 - Add Gamelogic - an object to catch


## Conclusion
Events and event handling are vital to web programming. JavaScript allows for dynamic page rendering, so users can interact with the contents of the page in real time. Knowledge of the basic techniques we've learned so far sets you on the road toward being able to create complex interactions like those in video games you may have played before!