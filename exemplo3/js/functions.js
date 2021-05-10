$(document).ready(function() {
    $("#btnView").click(function() {
        showMsg()
            .then((value) => console.log(value))
            .catch((err) => {});
    })
});

async function showMsg() {
    //Processamento assíncrono
    return "Hello World!";
}