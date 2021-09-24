const loginForm = document.querySelector("#login form");
const loginId = document.querySelector("#login input");
const ID = "ID";

const loginHandler = (event) => {
  localStorage.setItem(ID, loginId.value);
};

loginForm.addEventListener("submit", loginHandler);
