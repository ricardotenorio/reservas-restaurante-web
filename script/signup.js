const button = document.querySelector('#signup-btn');
const form = document.querySelector('#signup-form');

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

  let redirect = true;
  const userData = getInputData();
  const storage = window.localStorage;

  userData.forEach((element) => {
      const id = Object.keys(element)[0];
      const value = element[id];

      if (id === "repeat-password") {
        if (value !== storage["password"]) {
          alert('confirme a senha.');
          redirect = false;
        }

        return;
      }

      storage.setItem(id, value);
  })

  if (redirect) {
    storage.setItem('isAuth', true);
    window.location.href = './user_profile.html';
  }
});