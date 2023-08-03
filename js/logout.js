// logout.js
const apiUrl = "http://127.0.0.1:8000/user/logout/";
console.log(apiUrl);

const logoutButton = document.querySelector('.logout');
if (logoutButton) {
  logoutButton.addEventListener("click", function() {
    // 로그아웃 API 호출
    fetch(apiUrl, { method: "GET" })
      .then(function(response) {
        if (response.ok) {
          // 로그아웃에 성공한 경우, 메시지를 출력하거나 다른 작업을 수행할 수 있습니다.
          localStorage.removeItem('access_token');
          localStorage.removeItem('userid');
          alert("로그아웃에 성공하였습니다.");
          // 로그아웃 후 리다이렉트 등 필요한 작업을 수행합니다.
          window.location.href = "index.html"; // 로그아웃 후 리다이렉트할 URL을 적절히 변경해야 합니다.
        } else {
          // 로그아웃에 실패한 경우, 에러 메시지를 출력하거나 다른 처리를 수행할 수 있습니다.
          alert("로그아웃에 실패하였습니다.");
        }
      })
      .catch(function(error) {
        // 네트워크 오류 등으로 인해 요청이 실패한 경우 처리합니다.
        console.log("로그아웃 요청 실패:", error);
      });
  });
}
