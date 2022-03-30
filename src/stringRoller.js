let StringRoller = (selector, options) => {
  "use strict";

  let self = {};

  self.container = document.querySelector(selector);
  self.options = {
    initialText: self.container.firstChild.nodeValue,
    finalText: options.finalText,
  };

  self.roll = () => {
    let i = 0,
      totalTime = 500,
      finalCharTime = 600,
      addCharTime = !!self.options.finalText
        ? Math.floor(totalTime / self.options.finalText.length)
        : 50,
      changeCharTime = !!self.options.finalText
        ? totalTime / (self.options.finalText.length * 2)
        : 25;

    console.log({
      i,
      totalTime,
      finalCharTime,
      addCharTime,
      changeCharTime,
    });

    self.container.innerHTML = ".";

    let replaceAt = function (index, replacement) {
      return (
        this.substr(0, index) +
        replacement +
        this.substr(index + replacement.length)
      );
    };

    let manageStringState = (index) => {
      let changeVal = setInterval(() => {
        let random = Math.random().toString(32).substr(2, 1);
        self.container.innerHTML = replaceAt.call(
          self.container.firstChild.nodeValue,
          index,
          random
        );
      }, changeCharTime);

      setTimeout(() => {
        clearInterval(changeVal);
        self.container.innerHTML = replaceAt.call(
          self.container.firstChild.nodeValue,
          index,
          self.options.finalText[index]
        );
      }, finalCharTime);
    };

    // Initial run
    let add = setInterval(() => {
      if (!self.options.finalText) {
        self.container.innerHTML = self.options.initialText;
        clearInterval(add);
      } else if (!self.options.finalText[i]) {
        clearInterval(add);
      } else {
        manageStringState(i);
        i++;
      }
    }, addCharTime);
  };

  return self;
};
