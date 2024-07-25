// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Function to handle the server call
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Function to handle heart click
function handleHeartClick(event) {
  const heart = event.target;

  if (heart.classList.contains("empty-heart")) {
    // Invoke mimicServerCall to simulate server request
    mimicServerCall().then(() => {
      // Success: change heart to full heart and add .activated-heart class
      heart.classList.remove("empty-heart");
      heart.classList.add("full-heart", "activated-heart");
    }).catch((error) => {
      // Failure: show error modal
      const errorModal = document.getElementById("error-modal");
      errorModal.textContent = error; // Set error message
      errorModal.classList.remove("hidden");

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
  } else if (heart.classList.contains("full-heart")) {
    // Change heart back to empty heart and remove .activated-heart class
    heart.classList.remove("full-heart", "activated-heart");
    heart.classList.add("empty-heart");
  }
}

// Add event listener to hearts
document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", handleHeartClick);
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
