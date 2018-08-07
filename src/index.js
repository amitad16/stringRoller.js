let container = document.getElementById("a");
let changeBtn = document.querySelector("button#change");
let initialText = container.firstChild.nodeValue;
let finalText = "Amit Dimri Amit Dimri Amit Dimri";

changeBtn.addEventListener("click", () => {
  changeText(container, initialText, finalText);
});

let changeText = (container, initialText, finalText) => {
  let s = new Date();

  // TODO: create cases based on length and total time

  // let i = 0,
  //   totalTime = 5000,
  //   finalCharTime = 4000,
  //   addCharTime = Math.floor(totalTime / finalText.length),
  //   changeCharTime = totalTime / 20;

  let i = 0,
    totalTime = 500,
    finalCharTime = 400,
    addCharTime = 50,
    changeCharTime = 25;

  container.innerHTML = ".";

  let replaceAt = (index, currentVal, replacement) => {
    return (
      currentVal.substr(0, index) +
      replacement +
      currentVal.substr(index + replacement.length)
    );
  };

  let manageStringState = index => {
    let changeVal = setInterval(() => {
      let random = Math.random()
        .toString(32)
        .substr(2, 1);
      container.innerHTML = replaceAt(
        index,
        container.firstChild.nodeValue,
        random
      );
    }, changeCharTime);

    setTimeout(() => {
      clearInterval(changeVal);
      container.innerHTML = replaceAt(
        index,
        container.firstChild.nodeValue,
        finalText[index]
      );
    }, finalCharTime);
  };

  let add = setInterval(() => {
    if (finalText[i] === undefined) {
      clearInterval(add);
      console.log(new Date() - s);
    } else {
      manageStringState(i);
      i++;
    }
  }, addCharTime);
};
