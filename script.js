(function($){
    $(document).ready(function(){
        $("[title]").style_my_tooltips({
            tip_follows_cursor:true,
            tip_delay_time:200,
            tip_fade_speed:300
        });
    });
})(jQuery);

$(document).ready(function(){
    $(".droptags").hide();
    $(".droptitle").click(function(){
        $(this).next(".droptags").slideToggle('fast');
    });
});
