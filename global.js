var pathname = window.location.pathname;

// 依据路由修改快速体验按钮跳转链接
if (pathname.includes("bill")) {
  var primaryButton = document.querySelector("#topbar-cta-button > a");
  if (primaryButton) {
    primaryButton.setAttribute("href", "https://www.textin.com/console/recognition/robot_bills?service=bill_recognize_v2");
  }
}
