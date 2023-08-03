import { data } from "./data.js";
import { Peturl } from "./card.js";
import { modal } from "./modal.js";
import { getValueForModal } from "./modal.js";
import { openLoading, hideLoading } from "./loading.js";
import { moveCardDown } from "./scroll.js";
import { saveCard } from "./local.js";

/* imgUrl을 localstoage에 저장하기 위해서 imgUrl을 export함 */
export let imgUrl;

/* chatgpt 비동기 통신.  */
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let url = `http://127.0.0.1:8000/chatbot/`;
export function chatGptApi() {
    const token = localStorage.getItem("access_token");
    const userId = localStorage.getItem("userid");
    if (!token) {
        console.error("토큰이 없습니다. 로그인이 필요합니다.");
        alert("로그인 해주세요.")
        return;
    }
    
    // const utf8Token = encodeURIComponent(token);
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("access_token"),
            "Accept": "application/json",
            "User-Email": userId,
            "X-CSRFToken": getCookie('csrftoken'), 
        },
        body: JSON.stringify(data),
        // redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.response);
            Peturl();
            modal();
            getValueForModal(res);
            console.log(res);
            hideLoading();
            moveCardDown();     
        })
        .catch((error) => {
            console.error("API 호출 중 오류가 발생했습니다:", error);
        });
    openLoading();
}
/*
고양이 사진 랜덤 api 생성.  
*/
export function catImgMake() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            imgUrl = response[0].url;
            saveCard(imgUrl);
            return imgUrl;
        });
}
/*
강아지 사진 랜덤 api 생성.
*/
export function dogImgMake() {
    return fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            imgUrl = response[0].url;
            saveCard(imgUrl);
            return imgUrl;
        });
}
