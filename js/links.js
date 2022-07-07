
$("img").click(function(){
    var alt = $(this).attr("alt");
    if (alt == "facebook")
        window.open("https://www.facebook.com", "_blank");
    if (alt == "instagram")
        window.open("https://www.instagram.com", "_blank");
    if (alt == "tikTok")
        window.open("https://www.tiktok.com", "_blank");
})
