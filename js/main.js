const titleMenu = document.querySelector("#titleMenu");
const currentUser = document.querySelector("#currentUser span");
const logout = document.querySelector("#currentUser a");

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
  localStorage.clear();
};

logout.addEventListener("click", logoutHandler);
