setRem();
window.addEventListener("orientationchange",setRem);//监听横屏
window.addEventListener("resize",setRem);//监听屏幕大小变化
function setRem(){
    var designWidth = 640;
    var deviceWidth = $(window).width();
    if(deviceWidth>640){
        deviceWidth = 640;
    }
    var rem2px = 100;
    document.documentElement.style.fontSize = (deviceWidth/designWidth)*rem2px+"px";
}
