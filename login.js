const passwordToggleBtn = document.getElementById("password-toggle-btn-id");
const passwordInput = document.getElementById("password");

passwordToggleBtn.addEventListener("click", (ev) => {
  const passwordInputType = passwordInput.type;
  const eyeSlashIcon = passwordToggleBtn.children[0];
  const eyeIcon = passwordToggleBtn.children[1];
  if (passwordInputType === "text") {
    passwordInput.type = "password";
    eyeIcon.style.display = "none";
    eyeSlashIcon.style.display = "inline";
  } else {
    passwordInput.type = "text";
    eyeIcon.style.display = "inline";
    eyeSlashIcon.style.display = "none";
  }
});
