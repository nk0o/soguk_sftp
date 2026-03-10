let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.addEventListener("click", () => {
  cursorImg.classList.remove("cursor-rotate");
  void cursorImg.offsetWidth;
  cursorImg.classList.add("cursor-rotate");
});

function mouseAnimate() {
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  cursorImg.style.left = `${currentX}px`;
  cursorImg.style.top = `${currentY}px`;

  requestAnimationFrame(mouseAnimate);
}

mouseAnimate();

/****** Accordion ******/
document.querySelectorAll(".nana-accord__head").forEach(function(head) {
  head.addEventListener("click", function() {
    accordionUI(this);
  });
});

function accordionUI(el) {
  const content = el.querySelector(".nana-accord__cont");
  const parent = el.closest('.nana-accord__list');
  
  if (el.classList.contains("on")) {
    el.classList.remove("on");
    content.style.display = 'none';
  } else {
    // 같은 부모 내의 모든 accordion 닫기
    parent.querySelectorAll('.nana-accord__head').forEach(function(head) {
      head.classList.remove("on");
      const headContent = head.querySelector(".nana-accord__cont");
      if (headContent) {
        headContent.style.display = 'none';
      }
    });
    
    // 현재 클릭한 accordion 열기
    el.classList.add("on");
    content.style.display = 'block';
  }
}
