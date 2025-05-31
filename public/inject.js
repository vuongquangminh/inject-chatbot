(function () {
  if (document.getElementById("my-chatbot-iframe")) return;

  const iframe = document.createElement("iframe");
  iframe.src = "https://chatbot-app-delta-nine.vercel.app/";
  iframe.id = "my-chatbot-iframe";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "300px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "12px";

  document.body.appendChild(iframe);
})();