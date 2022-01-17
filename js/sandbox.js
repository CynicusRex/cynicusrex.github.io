document.addEventListener("DOMContentLoaded", function () {
    let animArr_0 = ["░", "▒", "▓"];
    let animArr_1 = ["◰", "◳", "◲", "◱"];
    let animArr_2 = ["▤", "▧", "▥", "▨"];
    let animArr_3 = ["◴", "◷", "◶", "◵"];
    let animArr_4 = ["◸","◹","◿","◺","◤","◥","◢","◣"];
    let animArr_5 = ["⋮","⋰","⋯","⋱"];
    let animArr_6 = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    let animArr_7 = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];
    let animArr_8 = ["⎺", "⎻", "⎼", "⎽"];
    let animArr_9 = ["䷀","䷪","䷍","䷈","䷉","䷌","䷫","䷀","䷪","䷡","䷙","䷼","䷘","䷠","䷫","䷀","䷪","䷡","䷊","䷨","䷩","䷋","䷠","䷫","䷀","䷪","䷡","䷊","䷒","䷚","䷓","䷋","䷠","䷫","䷀","䷪","䷡","䷊","䷒","䷗","䷖","䷓","䷋","䷠","䷫","䷀","䷪","䷡","䷊","䷒","䷗","䷁","䷖","䷓","䷋","䷠","䷫","䷀"];
    let anim = document.getElementById("loading");
    let counter = 0;
    let countNr = 1;

    // function increment() {
    //   console.log(counter);
    //   counter++;
    //   anim.innerHTML = counter;
    // }

    // function tick() {
    //   let ticker_1 = setInterval(increment(), 500);
    // }

    // tick();

    function printNumbers(animArr) {
  
      let timerId = setInterval(function() {
        let animFrames = animArr;
        anim.innerHTML = animFrames[counter];
        counter+=countNr;
        if (counter == animFrames.length-1) {
          countNr = -1;
          // counter = 0;
        }
        if (counter == 0) {
          countNr = 1;
        }
      }, 25);
    }
    
    // usage:
    printNumbers(animArr_9);

  });