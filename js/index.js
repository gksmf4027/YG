const overlay = document.querySelector(".hover_img"); //배경이미지가 바뀌는 부분
const items = document.querySelectorAll(".hover_img .item");
//hover_img 안에 있는 모든 클래스명이 item 인 요소를 모두 찾아서 items(노드리스트로) 저장
//여기서 각각의 a.item 이 리스트의 한 요소가 됨. 배경 바꾸는 대상이 되는 모든 클릭 가능한 링크를 모은거야

// 처음 배경 이미지 설정
let currentBg = overlay.getAttribute("data-bg");
//overlay.getAttribute("data-bg"); .hover_img 요소에 있는 data-bg 속성의 값 가져와서 저장
//html 처음에 data-bg="bottom_bg3.jpg" 가 있으니 초기값으로 bottom_bg3.jpg 가
// currentBg 에 저장됨   이 변수는 현재 화면에 고정되어 보여지고 있는 배경 이미지 이름 저장하는 변수

overlay.style.backgroundImage = `url('img/${currentBg}')`; //.hover_img 요소에 배경이미지 css속성 직접 지정

items.forEach((item) => {
  // items 리스트 안에 있는 모든 a.item 요소들에 대해 각각 다음 작업 반복
  const bg = item.getAttribute("data-bg"); //현재 반복 중인 item의 data-bg 속성 값 가져오기

  item.addEventListener("mouseover", () => {
    //마우스가 item 에 올라갈때 실행되는 함수
    overlay.style.backgroundImage = `url('img/${bg}')`; //이 안에서 overlay.style.backgroundImage = 'url(...)'; 로 ul.hover_img의 배경 이미지를 item의 data-bg 값으로 즉시 변경
  });

  item.addEventListener("mouseout", () => {
    //마우스가 item 에 떠날때 실행되는 함수
    // 마우스를 떼면 마지막 본 이미지를 currentBg로 업데이트
    currentBg = bg; //currentBg 변수를 현재 item 의 data-bg 값으로 업데이트
    overlay.setAttribute("data-bg", bg); //html 의 data-bg 속성도 갱신해서 상태 보관 : 마우스가 떠나도 마지막으로 봤던 이미지 저장
  });
});
