const copyButton = document.querySelector("#copy1")
const copyButton2 = document.querySelector("#copy2")
const copyButton3 = document.querySelector("#copy3")
const copyPopup = document.getElementById("copyPopup")

function accountCopy() {
    const accountText = document.getElementById("accountNumber").innerText;
    navigator.clipboard.writeText(accountText).then(() => {
        copyButton.innerText = "🥰";
        copyButton.classList.add("copied");

        // 팝업 표시
        if(selector.value === "ko") {
            copyPopup.innerText = "🎉 복사 완료! 🎉"
        } else {
            copyPopup.innerText = "🎉 Thank you! 🎉"
        }
        copyPopup.classList.add("show");

        // 2초 후 원상복구
        setTimeout(() => {
            copyButton.innerText = "Copy";
            copyButton.classList.remove("copied");
            copyPopup.classList.remove("show");
        }, 2000);
    });
}

function routingCopy() {
    const routingText = document.getElementById("routingNumber").innerText;
    navigator.clipboard.writeText(routingText).then(() => {
        copyButton2.innerText = "🥰";
        copyButton2.classList.add("copied");

        // 팝업 표시
        copyPopup.innerText = "🎉 Thank you! 🎉"
        copyPopup.classList.add("show");

        // 2초 후 원상복구
        setTimeout(() => {
            copyButton2.innerText = "Copy";
            copyButton2.classList.remove("copied");
            copyPopup.classList.remove("show");
        }, 2000);
    });
}

function venmoCopy() {
    const venmoId = document.getElementById("venmo_id").innerText;
    navigator.clipboard.writeText(venmoId).then(() => {
        copyButton3.innerText = "🥰";
        copyButton3.classList.add("copied");

        copyPopup.innerText = "🎉 Thank you! 🎉"
        copyPopup.classList.add("show");

        setTimeout(() => {
            copyButton3.innerText = "Copy";
            copyButton3.classList.remove("copied");
            copyPopup.classList.remove("show");
        }, 2000);
    });
}

copyButton.addEventListener("click", accountCopy);
copyButton2.addEventListener("click", routingCopy);
copyButton3.addEventListener("click", venmoCopy);