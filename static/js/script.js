// Example POST method implementation:
async function postData(url = "", data = {}) { 
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data),  
  });
  return response.json(); 
}

document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", async () => { 
    const questionInput = document.getElementById("questionInput").value;
    document.getElementById("questionInput").value = "";
    document.querySelector(".right2").style.display = "block";
    document.querySelector(".right1").style.display = "none";

    document.getElementById("question1").innerHTML = questionInput;
    document.getElementById("question2").innerHTML = questionInput;

    // Get the answer and populate it! 
    let result = await postData("/api", {"question": questionInput});
    document.getElementById("solution").innerHTML = result.answer;
  });
});
