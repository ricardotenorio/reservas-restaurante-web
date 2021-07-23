const header = document.querySelector('#main-header');
const searchBox = document.querySelector('#search-box');

let username = localStorage["name"];
const linkLogin = `<a href="login.html">entrar</a> -
  <a href="signup.html">cadastro</a>`;

const linkProfile = `
  <a href="./user_profile.html">
    ${username}
  </a>
`;

const renderHeader = (elem) => {
  const content = `
                  <a href="./index.html">
                    <h3 class="site-title">
                      Reservas
                    </h3>
                  </a>
                  <div class="logged-user">
                      <img src="img/avatar.png" alt="logo usuário">

                      <div class="auth-links">
                          ${username ? linkProfile : linkLogin}
                      </div>
                  </div>`;

  elem.innerHTML = content;
}

const renderSearchBar = (elem) => {
  const content = `<input id="search-txt" type="text" name="Search" placeholder="Buscar">
                   <button>Ok</button>`

  elem.innerHTML = content;
}

renderHeader(header);
renderSearchBar(searchBox);