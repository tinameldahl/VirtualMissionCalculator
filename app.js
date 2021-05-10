    function calculateSpeed() {
      let timeSpeed = prompt("What was your elliptical-time? (minutes, use . for decimals. I.e. 32.36)");
      let yourPace = 0.16 * timeSpeed;
      let yourPaceFixed = yourPace.toFixed(2);

      let heading = document.querySelector("h5");
      if (timeSpeed > 0) {
        heading.innerHTML = `
        <br>
        You used the elliptical for: <strong>${timeSpeed} minutes.</strong>
        <br>
        Your km-input for MVM would be:<strong> ${yourPaceFixed} km</strong>
        <br> <br> 
        <strong>Well done!</strong> `;
      } else {
        heading.innerHTML = `Whoopsie! <br>Did you insert the numbers right?`;
      }
    }

    let speedButton = document.querySelector(".speedButton");
    speedButton.addEventListener("click", calculateSpeed);


