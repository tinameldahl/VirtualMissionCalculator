    function calculateKm() {
      let timeElliptical = prompt("What was your elliptical-time? (minutes, use . for decimals. I.e. 32.36)");
      let yourKm = 0.16 * timeElliptical;
      let yourKmFixed = yourKm.toFixed(2);

      let heading = document.querySelector("h5");
      if (timeElliptical > 0) {
        heading.innerHTML = `
        <br>
        You used the elliptical for: <strong>${timeElliptical} minutes.</strong>
        <br>
        Your km-input for MVM would be:<strong> ${yourKmFixed} km</strong>
        <br> <br> 
        <strong>Well done!</strong> `;
      } else {
        heading.innerHTML = `Whoopsie! <br>Did you insert the numbers right?`;
      }
    }

    let speedButton = document.querySelector(".speedButton");
    speedButton.addEventListener("click", calculateKm);

