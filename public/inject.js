// inject.js
(function () {
  if (document.getElementById("chatbot-iframe")) return;

  const iframe = document.createElement("iframe");
  iframe.src = window.MyChatbotConfig?.iframeUrl || "https://chatbot-app.vercel.app";
  iframe.id = "chatbot-iframe";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  iframe.style.zIndex = "9999";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";
  iframe.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)";
  document.body.appendChild(iframe);
})();
