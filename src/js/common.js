function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown-el > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function(){

    var dd =  new DropDown( $('#dd')  );
    var dd2 = new DropDown( $('#dd2') );
    var dd3 = new DropDown( $('#dd3') );
    var dd4 = new DropDown( $('#dd4') );

    $(document).click(function() {
        // all dropdowns
        $('.dropdown-container').removeClass('active');
    });

    $("body").click(function(e){
        console.log($(e.target).closest(".dropdown").length);
        if($(e.target).closest(".dropdown").length < 1) {
            $('.dropdown').prev().find(".list").slideUp('fast');
        }
    });
    // Dropdown
    $('.dropdown').click(function(){

        $('.dropdown').prev().find(".list").slideUp('fast');
        $(this).prev().find(".list").slideToggle('fast');
    });
    $('ul.list li').click(function(){
        var tx = $(this).html();
        var tv = $(this).attr('alt');
        $(".list").slideUp('fast');
        $(".list span").html(tx);
        $(".delivery_text").html(tv);
    });
    //Slider
    $('.slider-content').slick({
        dots: true,
        arrows: false,
        accessibility: false
    });
    //User-list
    $('.slider-user-list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        accessibility: false
    });
    //scroll-bar
    $("#example_id").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: true,
        hide_from_to: true,
        grid: false
    });

    $('#tab1').addClass('inactive');
    $('.tab-content').show();
    $('.tab-content:first').hide();
    var tab = $(".list-tab-header a");
    tab.on('click',function(e) {
        e.preventDefault();
        var t = $(this).attr('id');
        if($(this).hasClass('inactive')){
            tab.addClass('inactive');
            $(this).removeClass('inactive');

            $('.tab-content').hide();
            $('#'+ t + 'C').fadeIn('slow');
        }
    });

    setTimeout(function () {
        $('.error-field-text').show(500);
    },1000);

    setTimeout(function () {
        $('.progress-bar-inset').animate({
            width: '60%'
        });
    },1000);

});