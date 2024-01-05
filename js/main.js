function chageProductList(type, elments) {
  let tabs = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.background = "#b14c38";
  }
  elments.style.background = "#ee4d2d";

  document.getElementById(type).style.display = "flex";

  switch (type) {
    case "trend":
      document.getElementById("new").style.display = "none";
      document.getElementById("best-sell").style.display = "none";
      break;
    case "new":
      document.getElementById("trend").style.display = "none";
      document.getElementById("best-sell").style.display = "none";
      break;
    case "best-sell":
      document.getElementById("new").style.display = "none";
      document.getElementById("trend").style.display = "none";
      break;
  }
}
