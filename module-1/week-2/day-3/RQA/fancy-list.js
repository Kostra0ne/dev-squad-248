const parent = document.querySelector(".fancy-list");
const list = [
  { category: "Dev", color: "red", hoverText: null, rate: "9.0" },
  { category: "Usability", color: "blue", hoverText: null, rate: "9.0" },
  { category: "Design", color: "yellow", hoverText: null, rate: "3.33" },
  { category: "Creativity", color: "blue", hoverText: null, rate: "9.0" },
  { category: "Dev", color: "red", hoverText: null, rate: "9.0" },
];

function fancyListItem(itemInfos) {
  const item = document.createElement("li");
  item.className = "item";
  item.style.borderColor = itemInfos.color;
  const tpl = `
        <div class="circle">
             <span class="rate">${itemInfos.rate}</span>
             <span class="category">${itemInfos.category}</span>
        </div>
    `;
  item.innerHTML = tpl;
  return item;
}

list.forEach((data) => {
  parent.appendChild(fancyListItem(data));
});
