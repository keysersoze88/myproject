// ==UserScript==
// @name        自动签到
// @namespace   namespace
// @description 自动签到
// @version     1
// @match        *://totheglory.im/*
// @match        *://hdchina.org/*
// @match        *://www.hdchina.org/*
// @match        *://vip.jd.com/*
// @match        *://vip.jr.jd.com/*
// @match        *://u2.dmhy.org/*
//// @exclude      *://u2.dmhy.org/showup.php*
//// @require      http://cdn.bootcss.com/jquery/1.10.2/jquery.min.js
// @require      https://code.jquery.com/jquery-latest.js
// @grant       none
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
// console.log(this.$);
// console.log(this);
// console.log(this.self.$ == window.$);
// console.log(window == this.window);
// console.log( typeof(this));
//JD签到
// if ($('#checkinBtn').length == 1 && !$('#checkinBtn').hasClass('checkined')) {
//   setTimeout(function(){$('#checkinBtn .icon-set').click();},1000);
//   console.log('JD');
//   return true;
// }
if($('#signIn').length == 1){
  console.log('JD');
  setTimeout(function(){$('#signIn div').click();},2000);
  return true;
}
//JD金融
if ($('#index-qian-btn').length == 1) {
  console.log('JDJR');
  $('#index-qian-btn .qian-icon').click();
  return true;
}
//hdc
if ($('.userinfort a[onclick]').length == 1) {
  console.log('HDC');
  $('.userinfort a[onclick]').get(0).click();
  return true;
}
//ttg
if ($('a#signed').length == 1) {
  console.log('TTG');
  setTimeout(function(){$('a#signed b').click();},1000);
  return true;
}
//u2签到页
var $message = $('textarea[name=\'message\']');
if ($message.length == 1){
	$message.text('半自动签到,请忽略此信息');
  return true;
}
//U2非签到页
var $a = $('.medium a[href=\'showup.php\']');
if ($a.length == 1 && $a.text() != '已签到') {
  console.log('U2');
  $a.attr('target', '_blank').get(0).click();
  return true;
}
console.log('没有需要签到的状态');
