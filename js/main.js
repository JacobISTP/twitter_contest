const titleMenu = document.querySelector("#titleMenu");
const currentUser = document.querySelector("#currentUser span");
const logout = document.querySelector("#currentUser a");
const twitForm = document.querySelector("#contentTweet form");
const twitInput = document.querySelector('#contentTweet input[type="text"]');
const twitBtn = document.querySelector('#contentTweet input[type="submit"]');
const twitted = document.querySelector("#contentTweeted");

const ID = "ID";

const titleMenuElements = {
  icons: [
    ["fas", "fa-home"],
    ["fas", "fa-hashtag"],
    ["far", "fa-bell"],
    ["far", "fa-envelope"],
    ["far", "fa-bookmark"],
    ["far", "fa-list-alt"],
    ["far", "fa-user"],
    ["fas", "fa-ellipsis-h"],
  ],
  names: [
    "홈",
    "탐색하기",
    "알림",
    "쪽지",
    "북마크",
    "리스트",
    "프로필",
    "더보기",
  ],
};

if (!localStorage.getItem(ID)) {
  const backToIndex = document.createElement("a");
  backToIndex.href = "index.html";
  backToIndex.click();
  backToIndex.remove();
}

for (let t = 0; t < titleMenuElements.icons.length; t++) {
  let titleDiv = document.createElement("div");
  let titleIcon = document.createElement("i");
  let titleName = document.createElement("div");

  titleName.style.width = "fit-content";

  for (let i = 0; i < titleMenuElements.icons[t].length; i++) {
    titleIcon.classList.add(titleMenuElements.icons[t][i]);
  }
  //   titleIcon.classList.add("fa-2x");
  titleName.innerHTML = titleMenuElements.names[t];
  titleDiv.classList.add("titleMenuBar");

  titleDiv.appendChild(titleIcon);
  titleDiv.appendChild(titleName);
  titleMenu.appendChild(titleDiv);
}

currentUser.innerHTML = localStorage.getItem(ID);

const logoutHandler = () => {
  localStorage.removeItem(ID);
};
const twitHandler = () => {
  if (twitInput.value === "") {
    twitBtn.style = "filter: brightness(70%);";
  } else {
    twitBtn.style = "";
  }
};
let twitArray = "";
const twitKey = localStorage.getItem(ID) + "_twit";
const formSubmitHandler = () => {
  localStorage.getItem(twitKey) !== null
    ? (twitArray = localStorage.getItem(twitKey))
    : (twitArray = "");
  twitArray += "," + twitInput.value;
  console.log(twitArray);
  localStorage.setItem(twitKey, twitArray);
};
const showTwites = () => {
  const twitGotArray = localStorage.getItem(twitKey).split(",");
  for (let l = 0; l < twitGotArray.length; l++) {
    let twitUser = document.createElement("i");
    let twitUserName = document.createElement("span");
    let twitP = document.createElement("p");
    let twitDiv = document.createElement("div");

    twitUser.classList.add("fas");
    twitUser.classList.add("fa-user-circle");
    twitUser.classList.add("fa-3x");

    twitUserName.innerText = localStorage.getItem(ID);

    twitDiv.appendChild(twitUser);
    twitDiv.appendChild(twitP);
    twitted.appendChild(twitDiv);
  }
};
showTwites();
// console.dir(localStorage);

logout.addEventListener("click", logoutHandler);
twitHandler();
twitInput.addEventListener("input", twitHandler);
twitForm.addEventListener("submit", formSubmitHandler);

const trendForMeList = document.querySelector("#trendForMeList");
const recommendFollowList = document.querySelector("#recommendFollowList");
const trendForMeArray = [
  ["대한민국에서 트렌드 중", "WITH 코로나", "18,086"],
  ["영화 · 실시간 트렌드", "베놈2 시사회 분위기", "43,910"],
  ["영화 · 실시간 트렌드", "스파이더맨: 노웨이홈", "150,992"],
  ["대한민국에서 트렌드 중", "김치", "무한"],
  ["대한민국에서 트렌드 중", "이터널스", "11,523"],
];

for (let t = 0; t < trendForMeArray.length; t++) {
  let trendForMe = document.createElement("li");
  let trendForMeContents = document.createElement("div");
  let trendForMeContent1 = document.createElement("span");
  let trendForMeContent2 = document.createElement("span");
  let trendForMeContent3 = document.createElement("span");
  let trendForMeMore = document.createElement("div");
  let trendForMeMoreIcon = document.createElement("i");

  trendForMeMoreIcon.classList.add("fas");
  trendForMeMoreIcon.classList.add("fa-ellipsis-h");
  trendForMeMoreIcon.classList.add("fa-sm");

  trendForMeContent1.innerText = trendForMeArray[t][0];
  trendForMeContent2.innerText = trendForMeArray[t][1];
  trendForMeContent3.innerText = trendForMeArray[t][2] + " 트윗";

  trendForMeContent1.style =
    "color: var(--lightgray); font-size: 13px; margin: 2px 0;";
  trendForMeContent2.style = "font-weight: 600;  cursor: pointer;";
  trendForMeContent3.style =
    "color: var(--lightgray); font-size: 13px; margin: 2px 0;";
  trendForMeMore.style =
    "width: 25px; height:25px; border-radius: 50%; display: flex; justify-content: center; align-items: center;";
  trendForMeMore.classList.add("contentMoreHover");

  trendForMeContents.appendChild(trendForMeContent1);
  trendForMeContents.appendChild(trendForMeContent2);
  trendForMeContents.appendChild(trendForMeContent3);
  trendForMeMore.appendChild(trendForMeMoreIcon);
  trendForMe.appendChild(trendForMeContents);
  trendForMe.appendChild(trendForMeMore);
  trendForMeList.appendChild(trendForMe);
}
const recommendFollowArray = [
  ["./img/marvel.jpg", "Marvel Entertainment", "Marvel"],
  ["./img/disney.jpg", "Disney", "Disney"],
  ["./img/sony.jpg", "Sony Pictures", "SonyPictures"],
];
for (let t = 0; t < recommendFollowArray.length; t++) {
  let recommendFollow = document.createElement("li");
  let recommendFollowContents = document.createElement("div");
  let recommendFollowImg = document.createElement("img");
  let recommendFollowContentDiv = document.createElement("div");
  let recommendFollowContent2 = document.createElement("span");
  let recommendFollowContent3 = document.createElement("span");
  let recommendFollowMore = document.createElement("div");
  let recommendFollowButton = document.createElement("button");

  recommendFollowImg.src = recommendFollowArray[t][0];
  recommendFollowContent2.innerText = recommendFollowArray[t][1];
  recommendFollowContent3.innerText = "@" + recommendFollowArray[t][2];
  recommendFollowButton.innerText = "팔로우";

  recommendFollowContents.style = "display: flex;";
  recommendFollowImg.style =
    "width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;";
  recommendFollowContentDiv.style = " display: flex; flex-direction: column;";
  recommendFollowContent2.style = "font-weight: 600;  cursor: pointer;";
  recommendFollowContent3.style =
    "color: var(--lightgray); font-size: 13px; margin: 2px 0;";
  recommendFollowMore.style =
    "height:25px; border-radius: 50%; display: flex; justify-content: center; align-items: center;";
  recommendFollowMore.classList.add("contentMoreHover");
  recommendFollowButton.style =
    "background-color: white; font-size: 15px; font-weight: 600; padding: 5px 15px; border: none; border-radius: 30px; cursor: pointer;";

  recommendFollowContents.appendChild(recommendFollowImg);
  recommendFollowContentDiv.appendChild(recommendFollowContent2);
  recommendFollowContentDiv.appendChild(recommendFollowContent3);
  recommendFollowContents.appendChild(recommendFollowContentDiv);
  recommendFollowMore.appendChild(recommendFollowButton);
  recommendFollow.appendChild(recommendFollowContents);
  recommendFollow.appendChild(recommendFollowMore);
  recommendFollowList.appendChild(recommendFollow);
}
const mainFooter = document.querySelector("#mainFooter");
const mainFooter_content = [
  "이용약관",
  "개인정보 처리방침",
  "쿠키 정책",
  "광고정보",
  "더 보기 ...",
  `© ${new Date().getFullYear()} Twitter, Inc.`,
];

for (let f = 0; f < mainFooter_content.length; f++) {
  let mainFooter_span = document.createElement("span");
  mainFooter_span.style =
    "font-size: 13px; margin: 0 8px; color: var(--lightgray);";
  mainFooter_span.innerText = mainFooter_content[f];
  mainFooter.appendChild(mainFooter_span);
}
