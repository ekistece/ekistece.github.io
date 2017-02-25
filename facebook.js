function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      userLoggedIn();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      userLoggedOut();
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      userLoggedOut();
    }
  }

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

function userLoggedIn() {
  btn = document.getElementById("loginButton");
  btn.className = btn.className.replace("btn-success", "btn-danger");
  document.getElementById("buttons_navbar").style.display = "block";
  btn.textContent = "Log out";
  btn.onclick = "logoutWithButton()";
}

function userLoggedOut() {
   btn = document.getElementById("loginButton");
   btn.className = btn.className.replace("btn-danger", "btn-success");
   document.getElementById("buttons_navbar").style.display = "none";
   btn.textContent = "Log In";
   btn.onclick = "logintWithButton()";
}

function logoutWithButton() {
  FB.logout(function(response) {
      console.log(response);
  });
}

function loginWithButton() {
  FB.login(function(response) {
      if (response.authResponse) {
        console.log("button clicked");
        checkLoginState();
      }} , {scope: 'publish_actions'});
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1321362891254036',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
