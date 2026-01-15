
// ============================================
// 3D COLOR CHANGE FUNCTIONALITY
// ============================================

function sendConfig() {
  const iframe = document.getElementById("modelFrame");
  const IFRAME_ORIGIN = "http://127.0.0.1:5500/"; 
  iframe.contentWindow.postMessage(
    {
      type: "CONFIG_UPDATE",
      color: "red"
    },
    IFRAME_ORIGIN
  );
}

window.addEventListener("message", (event) => {
  console.log("Message from iframe:", event.data);
});