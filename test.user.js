// ==UserScript==
// @name        test
// @namespace   namespace
// @description test
// @version     1
// @grant       none
// ==/UserScript==
if (typeof (jQuery) == 'undefined') {
  console.log('no jqury');
  //alert('no jqury');
} else {
  console.log('has jqury');
  //alert('has jqury');
}
