let isLoggedIn = false;

const sections = {
  login: document.getElementById("loginContainer"),
  register: document.getElementById("registerContainer"),
  home: document.getElementById("homeSection"),
  payment: document.getElementById("payment"),
  welcome: document.getElementById("welcomeContainer"),
  success: document.getElementById("successContainer")
};

function hideAll() {
  Object.values(sections).forEach(sec => sec.style.display = "none");
}

function showLogin() {
  hideAll();
  sections.login.style.display = "block";
}

function showRegister() {
  hideAll();
  sections.register.style.display = "block";
}

function showHome() {
  if (!isLoggedIn) {
    alert("Please login first");
    showLogin();
    return;
  }
  hideAll();
  sections.home.style.display = "flex";
}

document.getElementById("loginLink").onclick = showLogin;
document.getElementById("registerLink").onclick = showRegister;
document.getElementById("homeLink").onclick = showHome;
document.getElementById("showRegister").onclick = showRegister;
document.getElementById("showLogin").onclick = showLogin;

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  isLoggedIn = true;
  showHome();
});

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  isLoggedIn = true;
  showHome();
});

document.getElementById("paymentForm").addEventListener("submit", e => {
  e.preventDefault();
  hideAll();
  sections.success.style.display = "block";
});

sections.welcome.style.display = "block";
