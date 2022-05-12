
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
    cover();
    return mensage;
}

function unlock(mensage) {
    for (let i = 0; i < miKeys().length; i++) {
        if (mensage.includes(miKeys()[i][1])) {
            mensage = mensage.replaceAll(miKeys()[i][1], miKeys()[i][0]);
        }
    }

    return mensage;

}


function btnEncrypt() {
    mensageSent.value = encrypt(input.value);
    cover();
}
function btnUnlock() {
    mensageSent.value = unlock(input.value);
}

function cover() {
    document.querySelector(".muneco").classList.add("hidden");
    document.querySelector(".text1").classList.add("hidden");
    document.querySelector(".text2").classList.add("hidden");
    document.querySelector(".text-result").classList.add("primero");
    document.querySelector(".copiar").classList.remove("hidden");
}
function copiarTexto() {
    const text = document.querySelector(".text-result").value;
    navigator.clipboard.writeText(text);

    return alert("El texto :" + " " + text + " " + "fue copiado al pora papeles");
}