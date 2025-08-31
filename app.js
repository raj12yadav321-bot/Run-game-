document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <h1>🚀 Chatbot Prototype Ready!</h1>
    <p>यह आपका टेस्ट वर्ज़न है।</p>
    <button id="btn">Click Me</button>
  `;

  document.getElementById("btn").addEventListener("click", () => {
    alert("Chatbot अभी development में है 🙂");
  });
});
