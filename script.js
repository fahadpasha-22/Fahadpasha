function sendContactMessage() {
  const msg = document.getElementById("msg").value;

  fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: msg
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Message sent ✅");
  })
  .catch(err => {
    alert("Error ❌");
  });
}
