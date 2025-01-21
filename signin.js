const passwordToggleBtn = document.getElementById("password-toggle-btn-id");
const passwordInput = document.getElementById("password");

const confirmPasswordToggleBtn = document.getElementById(
  "confirm-password-toggle-btn-id"
);
const confirmPasswordInput = document.getElementById("confirmPassword");

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

confirmPasswordToggleBtn.addEventListener("click", (ev) => {
  const confirmPasswordInputType = confirmPasswordInput.type;
  const eyeSlashIcon = confirmPasswordToggleBtn.children[0];
  const eyeIcon = confirmPasswordToggleBtn.children[1];

  if (confirmPasswordInputType === "text") {
    confirmPasswordInput.type = "password";
    eyeIcon.style.display = "none";
    eyeSlashIcon.style.display = "inline";
  } else {
    confirmPasswordInput.type = "text";
    eyeIcon.style.display = "inline";
    eyeSlashIcon.style.display = "none";
  }
});
