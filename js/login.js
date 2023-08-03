const apiUrl = "http://127.0.0.1:8000/user/login/";
export let user = ""; // 초기 값으로 전역 스코프에서 변수 선언
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const resultDiv = document.getElementById("result");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.access_token) {
                    // 로그인 성공 시 사용자의 이메일과 토큰을 화면에 표시합니다.
                    const userEmail = data.email;
                    const accessToken = data.access_token;
                    resultDiv.innerHTML = `
                    <p>로그인에 성공하였습니다.</p>
                    <p>이메일: ${userEmail}</p>
                    <p>토큰: ${accessToken}</p>
                    <p>${data}</p>
                    `;
                    // 토큰을 localStorage에 저장합니다.
                    localStorage.setItem("access_token", accessToken);
                    localStorage.setItem("userid", userEmail);
                    // 로그인이 성공했으므로, index.html로 리다이렉트합니다.
                    window.location.href = "cat.html";
                } else {
                    // 로그인 실패 시 오류 메시지를 화면에 표시합니다.
                    resultDiv.innerHTML = `<p>${data.message}</p>`;
                }
            })
            .catch((error) => {
                console.error("로그인 중 오류가 발생했습니다:", error);
                resultDiv.innerHTML = "<p>로그인 중 오류가 발생했습니다.</p>";
            });
    });

    // 사용자가 로그인 상태라면 index.html로 리다이렉트합니다.
    // const token = localStorage.getItem("access_token");
    // if (token) {
    //     window.location.href = "index.html";
    // }
});
