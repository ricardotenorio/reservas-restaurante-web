const storage = localStorage;

if (storage['isAuth'] === true) {
  window.location.href = './user_profile.html';
}