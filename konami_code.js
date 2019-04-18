const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
const main = document.
function init() {
  let index = 0;
  function onKeyDownHandler(e) {
    const key = e.key() {
      if (key === codes[index]) {
        index++
        if (index === codes.length) {
          alert("Congrats!");
          index = 0;
        }
      } else {
        index = 0;
      }
    }
  }
}
