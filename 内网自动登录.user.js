// ==UserScript==
// @name        内网自动登录
// @namespace   namespace
// @description 内网自动登录
// @version     1
// @match        *://172.21.3.1/ac_portal/default/pc.html*
// @grant       none
// @run-at      document-idle
// ==/UserScript==


//console.log(document.getElementById("mode_login").style.display);

if( document.getElementById("mode_login").style.display == "none" ){
  console.log(11);
	return true;
}

document.getElementById("password_name").value = '158993';
document.getElementById("password_pwd").value = 'keysersoze88';

setTimeout("onPwdLogin()",1000);



