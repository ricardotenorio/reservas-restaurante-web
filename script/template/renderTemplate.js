const header = document.querySelector('#main-header');
const searchBox = document.querySelector('#search-box');

const renderHeader = (elem) => {
  const content = `<h3 class="site-title">Reservas</h3>
        
                  <div class="logged-user">
                      <img src="img/avatar.png" alt="logo usuário">

                      <div class="auth-links">
                          <a href="login.html">entrar</a>
                          /
                          <a href="signup.html">cadastro</a>
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