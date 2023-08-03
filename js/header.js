// const apiUrl = 'http://127.0.0.1:8000/user/login/';
// import { someFunction } from "./login.js";
// console.log(user);
// // 로그인 상태 확인 함수
// function checkLoginStatus() {
//     fetch(apiUrl) // 'credentials' 옵션 제거
//         .then(response => response.json())
//         .then(data => {
//             const welcomeMessageElement = document.getElementById('welcomeMessage');

// import { user } from "./login";

//             if (data.detail === '이미 인증된 사용자입니다.') {
//                 // 로그인된 경우 환영 메시지를 표시
//                 welcomeMessageElement.innerText = `${data.user}님 환영합니다.`;
//             } else {
//                 // 로그인되지 않은 경우 환영 메시지를 숨김
//                 welcomeMessageElement.style.display = 'none';
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// // 페이지 로드 시 로그인 상태 확인 함수 호출
// window.addEventListener('load', checkLoginStatus);

// console.log(user);
// header.html 파일을 가져와서 헤더 컨테이너에 삽입하는 함수
function loadHeader() {
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            const headerContainer = document.getElementById("headerContainer");
            headerContainer.innerHTML = data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// 페이지 로드 시 헤더를 가져오도록 호출
loadHeader();

// someFunction();
