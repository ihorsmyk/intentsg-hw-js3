const refs = {
  content: document.querySelector(".content"),
  mainTitle: document.querySelector(".mainTitle"),
  pLinks: document.querySelector(".pLinks"),
  div: document.querySelector(".div"),
  ul: document.querySelector(".ul"),
  links: document.querySelectorAll(".links"),

  enterFavoritePages: document.querySelectorAll(".enterFavoritePages"),
  selectLinksColor: document.querySelector(".selectLinksColor"),
  selectListStyleMarker: document.querySelector(".selectListStyleMarker"),
  selectDivFontWeight: document.querySelector(".selectDivFontWeight"),
  selectDivFontSize: document.querySelector(".selectDivFontSize"),
  selectDivColor: document.querySelector(".selectDivColor"),
  selectPLinksBackgroundColor: document.querySelector(".selectPLinksBackgroundColor"),
  selectPLinksColor: document.querySelector(".selectPLinksColor"),
  selectBackgroundColor: document.querySelector(".selectBackgroundColor"),
  selectFontFamily: document.querySelector(".selectFontFamily"),
  selectAlignTitle: document.querySelector(".selectAlignTitle"),
};

refs.selectBackgroundColor.addEventListener("click", (e) => {
  refs.content.style.backgroundColor = e.target.value;
});

refs.selectFontFamily.addEventListener("click", (e) => {
  refs.content.style.fontFamily = e.target.value;
});

refs.selectAlignTitle.addEventListener("click", (e) => {
  refs.mainTitle.style.textAlign = e.target.value;
});

refs.selectPLinksBackgroundColor.addEventListener("click", (e) => {
  refs.pLinks.style.backgroundColor = e.target.value;
});

refs.selectPLinksColor.addEventListener("click", (e) => {
  refs.pLinks.style.color = e.target.value;
});

refs.selectDivColor.addEventListener("click", (e) => {
  refs.div.style.color = e.target.value;
});

refs.selectDivFontSize.addEventListener("input", (e) => {
  refs.div.style.fontSize = e.target.value + "px";
});

refs.selectDivFontWeight.addEventListener("input", (e) => {
  refs.div.style.fontWeight = e.target.value + "00";
});

refs.selectListStyleMarker.addEventListener("click", (e) => {
  refs.ul.style.listStyle = e.target.value;
});

refs.selectLinksColor.addEventListener("click", (e) => {
  for (const link of refs.links) {
    link.style.color = e.target.value;
  }

  //or
  // refs.links.forEach((el) => (el.style.color = e.target.value));
});

for (let i = 0; i < refs.enterFavoritePages.length; i++) {
  refs.enterFavoritePages[i].addEventListener("change", (e) => {
    refs.links[i].innerHTML = e.target.value;
    refs.links[i].href = "http://" + e.target.value;
    console.log(e.target.value);
  });
}
