function generateGreeting() {
  const userName = document.getElementById("name").value.trim();
  const userMood = document.getElementById("mood").value.trim().toLowerCase();
  let greeting = "";

  if (!userName || !userMood) {
    greeting = "Please enter both your name and mood.";
  } else if (userMood === "happy") {
    greeting = `Hello, ${userName}! I'm glad you're feeling happy! 😊`;
  } else if (userMood === "sad") {
    greeting = `Hey, ${userName}. I'm here for you. Things will get better! 💖`;
  } else if (userMood === "excited") {
    greeting = `Wow, ${userName}! It's great to see you excited! 🎉`;
  } else {
    greeting = `Hello, ${userName}! Hope you're having a good day! 🙂`;
  }

  document.getElementById("greeting").innerText = greeting;
  document.getElementById("name").value = "";
  document.getElementById("mood").value = "";
}
