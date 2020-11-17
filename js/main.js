var loc = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.length);

// ALL_SERVICES

if(loc == 'all_services.html'){

    let accordeon_btn = $('.all_services_arrow');
    let accordeon_content = $('.all_services_content');
    let accordeon_arrow = $('.all_services_arrow:after')

    for (let i = 0; i < accordeon_btn.length; i++) {
        accordeon_btn[i].addEventListener('click', (evt) => {
            if(accordeon_content[i].classList.contains('services_content_active')){
                accordeon_content.eq(i).slideUp();
                accordeon_content.eq(i).removeClass("services_content_active");
            }else{
                accordeon_content.eq(i).slideDown();
                accordeon_content.eq(i).addClass('services_content_active');
            }
        });
    }
}


// HUM MENU

let header_hum = $('.header_hum');
let mobile_menu = $('.mobile_menu');
let section_hide = $("body > *").not('.mobile_menu').not('.header');
let menu_open = false;

header_hum.click(function(){
    if(menu_open){
        section_hide.css('display', 'block');
        mobile_menu.css('left', '-100%');
        menu_open = false;
    }else{
        mobile_menu.css('left', '0');
        setTimeout(function(){
            section_hide.css('display', 'none');
            menu_open = true;
        }, 0);
    }
});

// MAIN SLIDER

if(loc == 'index.html'){
    let header_slider = $('#header_slider');
    let slider_nav = $('.slider_nav div');
    let header_slide = $('.header_slider_content');

    setInterval(function(){
        


    });

}

// IMG POPULAR PROCEDURES

let btn_popular_img = $('.procedures_content_element img');
let btn_popular_proc = $('.procedures_content_element .procedures_btn');
let img_h = btn_popular_img.height();
btn_popular_proc.css('top', img_h * 0.7 + 'px');

