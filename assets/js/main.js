$(document).ready(function() {

    console.log("video main");

    const mainVideo = $('#myVideo');
        
    const medi      = "/videos/ground_540p.mp4";
    const large     = "/videos/ground_1080p.mp4";

        switch ( true ) {

            case ($(window).width() >= 1080):
                mainVideo.append("<source type='video/mp4' src='" + large + "' />");
                break;

            case ($(window).width() >= 720):
                mainVideo.append("<source type='video/mp4' src='" + medi + "' />");
                break;
        
        }
});