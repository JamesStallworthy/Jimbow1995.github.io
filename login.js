function handleAuthResult(auth){
    console.log(auth);
    if (auth && auth.error == null) {
        console.log("Logged in");
    } else {
        console.log("Login failed");
        gapi.auth.signIn();
  }
}