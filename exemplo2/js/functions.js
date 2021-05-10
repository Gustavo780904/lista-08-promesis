//1ª  sol: usando callback
// $(document).ready(function() {
//     $("#btnView").click(function() {
//         add();
//     });
// });

// function add() {
//     var a = b = 10;
//     if (!isNaN(a) && !isNaN(b))
//         resolve(a + b);
//     else reject("erro")
// }

// function resolve(nro) {
//     console.log(nro);
// }

// function reject(msg) {
//     console.log(msg);
// }

//2ª  sol: usando callback
// $(document).ready(function(){
//     $("#btnView").click(function(){
//         var $obj = new Promise((resolve, reject) => {
//             //var a = b = 10;
//             var a = "wilton";
//             var b = 20;
//             (!isNaN(a) && !isNaN(b))?resolve(a+b):reject('Deu erro!');
//         });
//         $obj
//             .then((value) => console.log(`Soma = ${value}`))
//             .catch((msg_err) => console.log(msg_err));
//     });
// });

$(document).ready(function() {
    $("#btnView").click(function() {
        var $obj = new Promise(function(resolve, reject) {
            var a = b = 10;
            (!isNaN(a) && !isNaN(b)) ? resolve(a + b): reject('Deu erro!');
        });
        $obj
            .then((value) => console.log(`Soma = ${value}`))
            .catch((msg_err) => console.log(msg_err));
    });
});

function add() {
    //  var a = b = 10;
    var a = "Hugo";
    var b = 20;
    if (!isNaN(a) && !isNaN(b))
        resolve(a + b);
    else reject('Erro');
}

function resolve(nro) {
    console.log(nro)
}

function reject(msg) {
    console.log(msg)
}