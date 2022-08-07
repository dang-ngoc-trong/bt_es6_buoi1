const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let renderMangMau = () => {
  let html = "";
  for (let i = 0; i < colorList.length; i++) {
    if (i === 0) {
      html += `
        <button class="color-button ${colorList[i]} active"></button>

    `;
    } else {
      html += `
            <button class="color-button ${colorList[i]}"></button>

        `;
    }
  }
  document.querySelector("#colorContainer").innerHTML = html;
};
renderMangMau(); // gọi hàm

let buttonColor = document.getElementsByClassName("color-button");
// console.log(buttonColor);
for (let i = 0; i < buttonColor.length; i++) {
  buttonColor[i].onclick = function () {
    doiMau(colorList[i], i);
    // console.log(colorList[i]);
  };
}
function doiMau(color, ab) {
  for (let i = 0; i < buttonColor.length; i++) {
    buttonColor[i].classList.remove("active");
  }
  buttonColor[ab].classList.add("active");
  document.querySelector("#house").className = "house " + color;
}
