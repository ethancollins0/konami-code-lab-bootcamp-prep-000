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
main.addEventListener('key', onKeyDownHandler(e)) {
  const key = e.key;

  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      main.alert("Hurray!");
      index = 0;
    }
  }
}
function init() {

}
