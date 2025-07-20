const items = document.querySelectorAll(".item");
let currentBg = "ds.jpg"; // 기본 배경

items.forEach((item) => {
  const bg = item.getAttribute("data-bg");

  item.addEventListener("mouseover", () => {
    document.querySelector(".overlay").style.backgroundImage = `url('${bg}')`;
  });

  item.addEventListener("mouseout", () => {
    // 마우스를 떼면, 현재 보여진 배경을 '고정'시키기 위해 업데이트
    currentBg = bg;
    document.querySelector(
      ".overlay"
    ).style.backgroundImage = `url('${currentBg}')`;
  });
});
