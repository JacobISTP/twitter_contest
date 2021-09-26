const loginForm = document.querySelector("#login form");
const loginId = document.querySelector("#login input");
const ID = "ID";

const loginHandler = (event) => {
  let userId = loginId.value;
  localStorage.setItem(ID, userId);
  if (JSON.stringify(localStorage.getItem(`${userId}_twit`)) === "null") {
    localStorage.setItem(`${userId}_twit`, JSON.stringify([]));
  }
};

loginForm.addEventListener("submit", loginHandler);
