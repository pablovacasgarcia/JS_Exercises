$('document').ready(function(){
    $('button').click(function (){
        $("div").css("fontSize", "calc(100% + 20%)");
    })
    
    $('h2').click(function (){
        $(this).next().toggle();
    })

    $('div').mouseenter(function (){
        $(this).css("backgroundColor", "red");
    })

    $('div').mouseleave(function (){
        $(this).css("backgroundColor", "white");
    })
})
