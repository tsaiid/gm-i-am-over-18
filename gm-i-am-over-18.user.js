// ==UserScript==
// @name          I am over 18
// @namespace     http://tsai.it/project/gmscripts/i-am-over-18/
// @version       0.1
// @description   Automatically hide the "I'm over 18" declaration.
// @include       http://www.ettoday.net/*
// @copyright     2015+, I-Ta Tsai (http://tsai.it/)
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// @grant         none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

// for ettoday
if ($('.adult-box') && $('.adult-box').is(':visible')) {
  $('.adult-box').hide();
}
