const body = document.querySelector("body");
const copy = document.querySelector("#copy");
const color = document.querySelector("#colorInput");
const colorText = document.querySelector("#colorText");
const btnClick = document.querySelector(".btn-click");
const btnOver = document.querySelector(".btn-over");

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // RGB formatında rengi döndürüyoruz
  return `rgb(${red}, ${green}, ${blue})`;
};

function repeat() {
  const newColor = randomColor();
  body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
  color.value = newColor;
}
btnClick.addEventListener("click", () => repeat());

btnOver.addEventListener("mouseover", () => repeat());

color.addEventListener("input", () => {
  body.style.backgroundColor = color.value;
  colorText.textContent = color.value;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    repeat();
  }
});

copy.addEventListener("click", () => {
  alert("Renk kodu başarıyla kopyalandı!");
  navigator.clipboard.writeText(colorText.textContent);
});
