// Initial Values
 var train = "";
 var destination = "";
 var frequnecy = "";
 var nextArrive = "";
 var minutes = "";

// Testing
console.log('test');
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAyzbWuf1m2Y2_Jkr3qE0VeIcISZ9CRBBU",
    authDomain: "train-schedule-project-4ff11.firebaseapp.com",
    databaseURL: "https://train-schedule-project-4ff11.firebaseio.com",
    projectId: "train-schedule-project-4ff11",
    storageBucket: "",
    messagingSenderId: "569599503619",
    appId: "1:569599503619:web:c088186afe176575088d36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a variable to reference
 var database = firebase.database();

 // Add click event/event listener 
$("#add-user").on("click", function(event){

// Refresh
event.preventDefault();
// Grab values fromm text-boxes
train =  $("#New-Train").val().trim();
destination= $("#Destination").val().trim();
frequnecy= $("#Frequency").val().trim();
nextArrive= $("#First-tt").val().trim();

// Test/Debug
console.log(train);
console.log(destination);
console.log(frequnecy);
console.log(nextArrive);

 // Code for "Setting values in the database"
 database.ref().set({
    train: train,
    destination: destination,
    frequnecy: frequnecy,
    nextArrive: nextArrive
  });


});

 // Firebase watcher + initial loader HINT: .on("value")
 database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().train);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequnecy);
    console.log(snapshot.val().nextArrive);

    // Change the HTML to reflect
    
    $("#New-Train").text(snapshot.val().train);
    $("#Destination").text(snapshot.val().destination);
    $("#Frequency").text(snapshot.val().frequnecy);
    $("#First-tt").text(snapshot.val().nextArrive);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });




