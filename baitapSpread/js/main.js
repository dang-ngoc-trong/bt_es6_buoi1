let hove = document.querySelector(".heading").innerHTML;
// console.log(hove);
let chars = [...hove];

let renderMangMau = () => {
  let html = "";
  for (let i = 0; i < chars.length; i++) {
    html += `
        <span >${chars[i]}</span>

    `;
  }
  document.querySelector(".heading").innerHTML = html;
};
renderMangMau(); // gọi hàm
