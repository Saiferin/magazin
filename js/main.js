$(function(){
    $('.offer__post-border').click(function(){
        $('.offer__post-border').removeClass('red text-white');
        $('.offer__post-border').find('p').removeClass('text-white');
        $(this).addClass('red');
        $(this,).find('p').addClass('text-white');
    });
    $('.pickup').click(function(){
        $('.offer__date-delivery, .form-address').css('display','none');
        $('.offer__delivery').css('display','block');
    })
    $('.delivery').click(function(){
        $('.offer__delivery').css('display','none');
        $('.offer__date-delivery, .form-address').css('display','block');
    })
})
