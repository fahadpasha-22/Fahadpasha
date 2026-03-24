function sendContactMessage() {
    const msg = document.getElementById("abdulla-msg").value;

    fetch("/api/entry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            textData: msg
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
