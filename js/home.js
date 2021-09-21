const loginbtns = document.querySelectorAll(".loginbtn");
for (let b = 0; b < loginbtns.length; b++) {
  loginbtns[b].addEventListener("click", (event) => {
    window.alert("Sorry! I'm 코린이! This function will not be activated...");
    event.preventDefault();
  });
}

const homeFooter = document.querySelector("#home > footer");

const homeFooter_content = [
  "소개",
  "고객센터",
  "이용약관",
  "개인정보 처리방침",
  "쿠키 정책",
  "광고 정보",
  "블로그",
  "상태",
  "채용",
  "브랜드 리소스",
  "광고",
  "마케팅",
  "비즈니스용 트위터",
  "개발자",
  "디렉터리",
  "설정",
  `© ${new Date().getFullYear()} Twitter, Inc.`,
];

for (let f = 0; f < homeFooter_content.length; f++) {
  let homeFooter_span = document.createElement("span");
  homeFooter_span.innerText = homeFooter_content[f];
  homeFooter.appendChild(homeFooter_span);
}
