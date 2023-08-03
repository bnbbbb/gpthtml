// 토큰을 localStorage에서 가져오는 함수
function getTokenFromLocalStorage() {
    return localStorage.getItem("access_token");
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function () {
    // 로그인 상태 확인
    const accessToken = getTokenFromLocalStorage();

    if (accessToken) {
        // 토큰이 존재하면 로그인 상태로 간주하여 원하는 동작 수행
        console.log("로그인 상태입니다.");
    } else {
        // 토큰이 없으면 로그아웃 상태로 간주하여 원하는 동작 수행
        console.log("로그아웃 상태입니다.");
    }
});

const token = localStorage.getItem('access_token');
const logoutButton = document.querySelector('.logout');
const loginButton = document.querySelector('.login');
if (token){
    loginButton.style.display = 'none'
    logoutButton.style.display = 'block'
}
else{
    loginButton.style.display = 'block'
    logoutButton.style.display = 'none'
}