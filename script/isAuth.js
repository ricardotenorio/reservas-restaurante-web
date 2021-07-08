const storage = localStorage;

if (storage['isAuth']) {
  window.location.href = './user_profile.html';
}