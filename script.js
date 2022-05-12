
const input = document.querySelector(".area-entrada");
const mensageSent = document.querySelector(".text-result");

function miKeys() {
    var matrizKeys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    return matrizKeys;
}

function encrypt(mensage) {
    for (let i = 0; i < miKeys().length; i++) {
        if (mensage.includes(miKeys()[i][0])) {
            mensage = mensage.replaceAll(miKeys()[i][0], miKeys()[i][1]);
        }
    }

    return mensage;
}

function unlock(mensage){
    for (let i = 0; i < miKeys().length; i++) {
        if (mensage.includes(miKeys()[i][1])) {
            mensage = mensage.replaceAll(miKeys()[i][1], miKeys()[i][0]);
        }
    }

    return mensage;

}


function btnEncrypt() {
    mensageSent.value = encrypt(input.value);

}
function btnUnlock() {
    mensageSent.value = unlock(input.value);
}