const form = document.querySelector('#login-form');

const getInputData = () => {
  const inputField = Array.from(form.querySelectorAll("input"));

  return inputField.map(element => {
      const id = element.getAttribute("id");
      return { 
          [id] : element.value 
      };
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userData = getInputData();
  const storage = window.localStorage;

  console.log(userData);

  if (storage["name"] === userData[0]["name"]
    && storage["password"] === userData[1]["password"]) {
      storage.setItem('isAuth', true);
      window.location.href = './user_profile.html';
  } else {
    alert("nome ou senha inválidos");
  }
});