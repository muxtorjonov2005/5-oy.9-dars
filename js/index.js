const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const nationality = document.getElementById("nationality");
const desc = document.getElementById("desc");
const send = document.getElementById("send");

const result = document.getElementById("result");

function validate() {
  if (username.value.length < 3) {
    username.focus();
    username.style.outlineColor = "red";
  }

  if (password.value.length < 7) {
    password.focus();
    password.style.outlineColor = "red";
  }

  if (desc.value.length < 5) {
    desc.focus();
    desc.style.outlineColor = "red";
  }
  return true
}

function creatCard(user) {
  return `
     <div id="card">
        <h3>${user.username}</h3>
        <h3>${user.password}</h3>
        <h3>${user.nationality}</h3>
        <p>${user.desc}</p>
      </div>  
  `
}

form && form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = validate()
  if (!isValid) {
    return;
  }

  const user = {
    username: username.value,
    password: password.value,
    nationality: nationality.value,
    desc: desc.value,
  }

  const card = creatCard(user)
  result.innerHTML += card

  form.reset();
});

