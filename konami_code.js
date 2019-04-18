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
const main = document.getElementById('main');
  let index = 0;
main.addEventListener('key', function(e)) {
  onKeyDownHandler(e)
}
function init() {
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
