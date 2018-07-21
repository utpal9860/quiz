        function signUp(){
            var uname= document.getElementById("inputValidationEx");
            var pass= document.getElementById("inputValidationEx2");
            firebase.auth().createUserWithEmailAndPassword(uname, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
        }

              function signIn(){
            var uname= document.getElementById("inputValidationEx");
            var pass= document.getElementById("inputValidationEx2");
            firebase.auth().signInWithEmailAndPassword(uname, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
        }
