// ToggleText in the section named "examples"

$('.description_pretitle').on('click', function(){
    $(this).next('.description_text-slide').slideToggle(300);
    $(this).toggleClass('description_pretitle-change');
})

// modal window

$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
        $(this).fadeOut();
    }
});

$('.modal_close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
});

$('.button').on('click', function(){
    $('.modal-overlay').fadeIn()
})

// UpButton

$(window).on('scroll', function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn()
    }else{
        $('#up').fadeOut()
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000);
})

// Contacts link

$('#contacts_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#contacts').offset().top}, 1000);
    document.getElementById('toggleCheckbox').checked = false;
    $('body').css({'overflow': "visible" })
})


// No-Scroll menu when opened

$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});