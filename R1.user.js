// ==UserScript==
// @name     R1抢购
// @version  1
// @grant    none
// @match *://item.jd.com/6661096.html?*
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

setTimeout(function(){
if(jQuery("#choose-btn-bgm").hasClass("btn-disable")){
  var notification = new Notification("没货啊o(╥﹏╥)o");
  console.log(window.location.href);
  
  setTimeout(function(){window.location.reload();},5000);
}else{
  var notification = new Notification("到货啦!!!");
}
},15000);

function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
 
  else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there!");
  }
 
  // Otherwise, we need to ask the user for permission
  // Note, Chrome does not implement the permission static property
  // So we have to check for NOT 'denied' instead of 'default'
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
 
      // Whatever the user answers, we make sure we store the information
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }
 
      // If the user is okay, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }
 
  // At last, if the user already denied any notification, and you 
  // want to be respectful there is no need to bother him any more.
}
