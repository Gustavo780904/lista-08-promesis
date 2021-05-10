//1ª  sol: usando callback
// $(document).ready(function() {
//     $("#btnView").click(function() {
//         console.log("Olá Mundo!")
//         resolve();
//     });
// });

// function resolve() {
//     console.log("Fim!");
// }
//2ª  sol: usando callback
$(document).ready(function() {
    $("#btnView").click(function() {
        var $obj = new Promise(function(resolve) {
            //processamento assincrono
            console.log("Hello World!");
            resolve();
        });
        $obj.then(() => console.log("Fim"));
    });
});
// var p2 = new Promise(function(f_sucesso, f_erro) {})
// var $p1 = new Promise(function(f_sucesso, f_erro) {
//processamento
// });