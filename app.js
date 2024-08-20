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

btnClick.addEventListener("click", () => {
  const rastgele = randomColor();
  body.style.backgroundColor = rastgele;
  colorText.textContent = `${rastgele}`;
  
});

btnOver.addEventListener("mouseover", () => {
  const rastgele = randomColor();
  body.style.backgroundColor = rastgele;
  colorText.textContent = `${rastgele}`;
});

color.addEventListener("input",()=>{
    body.style.backgroundColor = color.value;
    colorText.textContent = `${rastgele}`;
    
})

copy.addEventListener("click", ()=>{
    alert("Renk kodu başarıyla kopyalandı!")
    navigator.clipboard.writeText(colorText.textContent);
})


