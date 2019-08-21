// ==UserScript==
// @name        freenom自动续费12月
// @namespace   namespace
// @description freenom自动续费12月
// @version     1
// @match        *://my.freenom.com/domains.php?a=renewdomain&domain=*
// @grant       none
// @require      https://code.jquery.com/jquery-latest.js
// @run-at      document-idle
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
$("form select.pullRight").val("12M");
