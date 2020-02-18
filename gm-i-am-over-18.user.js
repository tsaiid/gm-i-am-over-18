// ==UserScript==
// @name            I am over 18
// @author          tsaiid
// @namespace       http://tsai.it/project/gmscripts/i-am-over-18/
// @homepageURL     https://github.com/tsaiid/gm-i-am-over-18
// @run-at          document-idle
// @version         0.2.20200218
// @description     Automatically agrees the "I'm over 18" declaration. The current supported sites are primarily in Taiwan.
// @icon            https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon48.png
// @icon64          https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon64.png
// @license         MIT
// @copyright       2016, I-Ta Tsai (http://tsai.it/)

// @match           *://*.ettoday.net/*
// @match           *://*.eyny.com/*
// @match           *://ck101.com/*
// @match           *://www.xvideos.com/*
// @match           *://*.blogspot.com/*
// @match           *://t66y.com/
// @match           *://www.jkforum.net/*
// @match           http://*.playno1.com/*
// @match           http://av.movie/*
// @match           http://katproxy.com/*
// @match           http://kickass.socialtorrent.net/*
// @match           http://www.ibeauty.tw/*
// @match           http://www.appledaily.com.tw/*
// @match           http://www.getchu.com/php/attestation.html*
// @match           http://www.storm.mg/*
// @match           https://*.fc2.com/*
// @match           https://news.gamme.com.tw/*
// @match           https://r18.clickme.net
// @match           https://v.jav101.com/*
// @match           https://www.dcard.tw/*
// @match           https://www.kocpc.com.tw/*
// @match           https://www.myfreecams.com/*
// @match           https://www.ptt.cc/*
// @require         https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @require         https://gist.githubusercontent.com/BrockA/2625891/raw/waitForKeyElements.js
// @grant           none
// ==/UserScript==

(() => {
	this.$ = this.jQuery = jQuery.noConflict(true);


	const url = window.location.href;

	function clickToContinue(jNodes) {
	/*
		console.log(jNodes);
		console.log(jNodes.context);
		console.log(jNodes.selector);
	*/
		jNodes[0].click();
    }
    
	// appledaily
	else if (url.includes("www.appledaily.com.tw")) {
		waitForKeyElements(
			"#popup_18 a.yes",
			clickToContinue
		);
	}
	//av.movie
    	else if (url.includes("av.movie/")){
		waitForKeyElements(
			'button#warning-yes',
			clickToContinue
		);
	}
	// blogspot
	// from https://gist.github.com/obeattie/362589
	else if (url.includes('.blogspot.')) {
		const overlay = document.getElementById('injected-iframe');
		if (overlay) {
			const nextSibling = overlay.nextElementSibling;
			if (nextSibling.tagName == 'STYLE') nextSibling.parentElement.removeChild(nextSibling);
			overlay.parentElement.removeChild(overlay);
		}
	}
	// for ck101
	else if (url.includes("ck101.com")) {
	  document.getElementById('periodaggre18_2015').checked = true;
	  document.getElementById('fwin_dialog_submit').click();
    }
	// clickme.net
	else if (url.includes("r18.clickme.net")) {
		$('a:contains("已滿18歲 進入")')[0].click();
	}    
	// dcard
	// <button class="Button_primary_3KkkP Button_button_2uDT-" type="button">是，我已滿十八歲。</button>
	else if (url.includes("www.dcard.tw/")) {
		waitForKeyElements(
			'button:contains("是，我已滿十八歲。")',
			clickToContinue
		);
	}
	// for ettoday
	else if (url.includes(".ettoday.net")) {
		document.querySelector('a.enter').click();
	}
	// for eyny
	else if (url.includes(".eyny.com")) {
		document.querySelector("input[value^='是，我已年滿18歲。']").click();
	}
	// <a href="javascript:void(0)" class="c-btn-102 btnSz-2" role="button" aria-label="yes">是（進入）</a>
	else if (url.includes(".fc2.com")) {
		const a = document.querySelector("a.c-btn-102") || document.getElementById("age_ok_btn");
		a.click();
	}
	//news.gamme
	else if (url.includes("news.gamme.com.tw/")){
		document.getElementById('adult_notagain').checked = true;
        	MemberUI.r18WarningClose();
	}
	// getchu.com
	else if (url.includes("www.getchu.com/")) {
		$('a:contains("[は い]")')[0].click();
	}
	// ibeauty
	else if (url.includes("www.ibeauty.tw")) {
		waitForKeyElements(
			".warningWp .warningBtn .btnYes",
			clickToContinue
		);
	}
	// for jav101
	else if (url.includes("v.jav101.com")) {
		document.querySelector("a.agreeBtn").click();
	}
	// jkforum
	else if (url.includes("www.jkforum.net/")){
	    waitForKeyElements(
			'button#fwin_dialog_submit',
			clickToContinue
		);
	}

	// for kickass
	else if (url.includes("kickass.socialtorrent.net") || url.includes("katproxy.com")) {
		$('button:contains("Yes, let me see it")').click();
	}

	// www.kocpc.com.tw
	else if (url.includes("www.kocpc.com.tw")) {
		waitForKeyElements(
			"button.ox18B",
			clickToContinue
		);
	}

	// myfreecams
	else if (url.includes("www.myfreecams.com")) {
		waitForKeyElements(
			"#enter_desktop",
			clickToContinue
		);
	}

	// for playno1
	else if (url.includes(".playno1.com")) {
		waitForKeyElements(
			'button:contains("我已滿18歲 進入")',
			clickToContinue
		);
	}

	// for ptt
	if (url.includes("www.ptt.cc")) {
		$('button:contains("我同意，我已年滿十八歲")').click();
	}

	// storm.mg
	else if (url.includes("www.storm.mg")) {
		waitForKeyElements(
			"button.button18x.yes",
			clickToContinue
		);
	}
	// t66y.com
	else if (url.includes("t66y.com")) {
		waitForKeyElements(
			'a:contains("滿 18 歲,")',
			clickToContinue
		);
	}

	// for xvideos
	else if (url.includes(".xvideos.com")) {
		document.getElementById('disclaimer_background').click();
	}
})();
