

// $(document).ready(function(){
//     $('#btn').click(function(){
//         $('#text').select();
//         document.execCommand('copy');
//     });
// });



$(document).ready(function(){
    var alltext='';
    $('#btn1').click(function(){
        alltext=$('#text').val();
    });

    
    $('#btn2').click(function(){
        $('#displaytext').text(alltext);
    });

    $('#btn3').click(function(){
        $('#text').val("");
    })

   
});