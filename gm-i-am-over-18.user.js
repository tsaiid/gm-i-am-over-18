// ==UserScript==
// @name            I am over 18
// @author          tsaiid
// @namespace       http://tsai.it/project/gmscripts/i-am-over-18/
// @homepageURL     https://github.com/tsaiid/gm-i-am-over-18
// @run-at          document-idle
// @version         0.2.20200218
// @description     Automatically agrees the "I'm over 18" declaration.
// @icon            https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon48.png
// @icon64          https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon64.png
// @license         MIT
// @copyright       2016, I-Ta Tsai (http://tsai.it/)
// @match           https://www.4tube.com/*
// @match           https://www.alrincon.com/*
// @match           https://www.analgalore.com/*
// @match           https://www.analvids.com/*
// @match           http://www.appledaily.com.tw/*
// @match           https://www.asiangalore.com/*
// @match           https://www.ass4all.com/*
// @match           https://www.assoass.com/*
// @match           http://av.movie/*
// @match           *://*.blogspot.com/*
// @match           https://www.bodenseestrasse271.de/*
// @match           https://booksusi.com/*
// @match           https://www.carisma-zeltweg.com/*
// @match           https://www.czechvr.com/*
// @match           https://r18.clickme.net/*
// @match           https://www.das-laufhaus.at/*
// @match           https://www.dcard.tw/*
// @match           https://www.dinotube.com/*
// @match           https://www.dorcelclub.com/*
// @match           https://www.eroscenter-platin.de/*
// @match           *://*.ettoday.net/*
// @match           *://*.eyny.com/*
// @match           https://*.fc2.com/*
// @match           https://www.forhertube.com/*
// @match           https://www.fuq.com/*
// @match           https://www.fux.com/*
// @match           https://fuskator.com/*
// @match           https://news.gamme.com.tw/*
// @match           https://www.gotporn.com/*
// @match           https://hclips.com/*
// @match           https://hdzog.com/*
// @match           https://hentaied.com/*
// @match           https://www.homemadegalore.com/*
// @match           https://www.hotlady.at/*
// @match           https://hotmovs.com/*
// @match           http://www.ibeauty.tw/*
// @match           https://www.indexxx.com/*
// @match           https://www.ixxx.com/*
// @match           https://v.jav101.com/*
// @match           https://www.jkforum.net/*
// @match           https://knusperhaus.at/*
// @match           https://www.kocpc.com.tw/*
// @match           https://kontaktbazar.at/*
// @match           https://www.laufhaus6.at/*
// @match           https://laufhaus-casabianca.at/*
// @match           https://laufhaus-hasenohr.at/*
// @match           https://www.laufhaus-neunkirchen.at/*
// @match           https://www.laufhaus-rachel.at/*
// @match           https://www.laufhaus-splash.at/*
// @match           https://www.laufhaus-theresienfeld.at/*
// @match           https://www.laufhaus-vienna.at/*
// @match           https://www.letsdoeit.com/*
// @match           https://www.lobstertube.com/*
// @match           https://lustery.com/*
// @match           https://www.melonstube.com/*
// @match           https://www.myfreecams.com/*
// @match           https://www.pichunter.com/*
// @match           http://*.playno1.com/*
// @match           https://www.pornhub.com/*
// @match           https://www.pornmd.com/*
// @match           https://pornone.com/*
// @match           https://www.pornpics.com/*
// @match           https://www.porntrex.com/*
// @match           https://www.porntube.com/*
// @match           https://www.redtube.com/*
// @match           https://residenz.at/*
// @match           https://www.romantic-bar.at/*
// @match           https://seemygf.com/*
// @match           https://www.sexlikereal.com/*
// @match           https://shemalez.com/*
// @match           https://www.simplytop.at/*
// @match           https://spankbang.com/*
// @match           http://www.storm.mg/*
// @match           https://studiorelaxe.at/*
// @match           *://t66y.com/
// @match           https://www.tiava.com/*
// @match           https://www.transpornsites.com/*
// @match           https://www.tube8.com/*
// @match           https://www.tubegalore.com/*
// @match           https://tubepornclassic.com/*
// @match           https://www.tubepornstars.com/*
// @match           https://txxx.com/*
// @match           https://upornia.com/*
// @match           https://www.vitalia-muenchen.de/*
// @match           https://vjav.com/*
// @match           https://vrporn.com/*
// @match           https://watchersweb.com/*
// @match           https://wifebucket.com/*
// @match           https://www.xnxx.com/*
// @match           https://www.xvideos.com/*
// @match           https://xxxbunker.com/*
// @match           https://xxxelf.com/*
// @match           https://www.youporn.com/*
// @match           https://www.zoig.com/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';
    /* eslint-disable curly */
    /* eslint-disable no-multi-spaces */

    const hostname = window.location.hostname;
    if (hostname === 'www.4tube.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.alrincon.com')
        c('a#confirmarBtn');
    else if (hostname === 'www.analgalore.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.analvids.com')
        c('a.__agree');
	else if (hostname === 'www.appledaily.com.tw')
		c('#popup_18 a.yes');
    else if (hostname === 'www.asiangalore.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.ass4all.com') {
        c('button.disclaimer-enter-btn');
        c('button#disclaimer-reject_cookies-btn'); //after the over 18 button comes a cookie question, reject those
    }
    else if (hostname === 'www.assoass.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'av.movie')
		c('button#warning-yes');
	else if (hostname.includes('.blogspot.')) { // from https://gist.github.com/obeattie/362589
		const overlay = document.getElementById('injected-iframe');
		if (overlay) {
			const nextSibling = overlay.nextElementSibling;
			if (nextSibling.tagName == 'STYLE') nextSibling.parentElement.removeChild(nextSibling);
			overlay.parentElement.removeChild(overlay);
		}
	}
    else if (hostname === 'www.bodenseestrasse271.de')
        c('div#enter a');
    else if (hostname === 'booksusi.com')
        c('div#eighteenPlusModal button.btn-success');
    else if (hostname === 'www.carisma-zeltweg.com')
        c('input.agecheck_close');
    else if (hostname === 'www.czechvr.com')
        c('div.modalcontent button#button');
	else if (hostname === 'r18.clickme.net')
        c('div.shield-btn button#enter');
    else if (hostname === 'www.das-laufhaus.at')
        c('button#age-control-allowed');
	else if (hostname === 'www.dcard.tw')
		c('button:contains("是，我已滿十八歲。")'); // <button class="Button_primary_3KkkP Button_button_2uDT-" type="button">是，我已滿十八歲。</button>
    else if (hostname === 'www.dinotube.com')
        c('button.eighteen-plus-button');
	else if (hostname === 'www.dorcelclub.com') {
        const iframe = document.querySelector('iframe');
        iframe.onload = () => {
            const btn = iframe.contentDocument.querySelector('a.agree');
            if (btn) btn.click();
        };
    }
    else if (hostname === 'www.eroscenter-platin.de')
        c('form.global-frontpage-form a[href="#"]');
    else if (hostname.endsWith('.ettoday.net'))
		document.querySelector('a.enter').click();
	else if (hostname.endsWith('.eyny.com'))
		document.querySelector("input[value^='是，我已年滿18歲。']").click();
	else if (hostname.endsWith('.fc2.com')) {
		const e = document.querySelector("a.c-btn-102") || document.getElementById("age_ok_btn"); // <a href="javascript:void(0)" class="c-btn-102 btnSz-2" role="button" aria-label="yes">是（進入）</a>
		if (e) e.click();
	}
    else if (hostname === 'www.forhertube.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.fuq.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.fux.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'fuskator.com')
        c('a#close_entrance_terms');
	else if (hostname === 'news.gamme.com.tw') {
		document.getElementById('adult_notagain').checked = true;
        MemberUI.r18WarningClose();
	}
    else if (hostname === 'www.gotporn.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'hclips.com')
        c('button#ageagree');
    else if (hostname === 'hdzog.com')
        c('button#ageagree');
    else if (hostname === 'hentaied.com')
        c('button.age-gate-submit-yes');
    else if (hostname === 'www.homemadegalore.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.hotlady.at')
        c('img[alt="Ja"]');
    else if (hostname === 'hotmovs.com')
        c('div.type-accept-button button');
	else if (hostname === 'www.ibeauty.tw')
		c(".warningWp .warningBtn .btnYes");
    else if (hostname === 'www.indexxx.com')
        c('a#enterLink');
    else if (hostname === 'www.ixxx.com')
        c('button.eighteen-plus-button');
	else if (hostname === 'v.jav101.com')
		document.querySelector("a.agreeBtn").click();
	else if (hostname === 'www.jkforum.net/')
	    c('button#fwin_dialog_submit');
    else if (hostname === 'knusperhaus.at')
        c('p.close_pop_protect a:nth-of-type(2)');
	else if (hostname === 'www.kocpc.com.tw')
		c('button.ox18B');
    else if (hostname === 'kontaktbazar.at')
        c('button.age-gate__submit--yes');
    else if (hostname === 'www.laufhaus6.at')
        c('div#age-check-content button.yes');
    else if (hostname === 'laufhaus-casabianca.at')
        c('button.age-gate__submit--yes');
    else if (hostname === 'laufhaus-hasenohr.at')
        c('input#AVenterLink');
    else if (hostname === 'www.laufhaus-neunkirchen.at')
        c('a.btn-success');
    else if (hostname === 'www.laufhaus-rachel.at')
        c('button#popupbuttonno');
    else if (hostname === 'www.laufhaus-splash.at')
        c('button.age-gate__submit--yes');
    else if (hostname === 'www.laufhaus-theresienfeld.at')
        c('a.btn-success');
    else if (hostname === 'www.laufhaus-vienna.at')
        c('section.slideshow-intro a.btn-primary');
    else if (hostname === 'www.letsdoeit.com')
        c('div.sc-rkkkdv-0 button');
    else if (hostname === 'www.lobstertube.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'lustery.com')
        c('button.AdultContentNotification_continueLink___TRRa');
    else if (hostname === 'www.melonstube.com')
        c('button.eighteen-plus-button');
	else if (hostname === 'www.myfreecams.com')
		c('#enter_desktop');
    else if (hostname === 'www.pichunter.com')
        c('a#btn-enter');
	else if (hostname.endsWith('.playno1.com'))
		c('button:contains("我已滿18歲 進入")');
    else if (hostname === 'www.pornhub.com')
        c('button.buttonOver18');
    else if (hostname === 'www.pornmd.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'pornone.com')
        c('a#iamover18Btn');
    else if (hostname === 'www.pornpics.com')
        c('div.button-agree');
    else if (hostname === 'www.porntrex.com')
        c('div.age-popup-btns div#okButton');
    else if (hostname === 'www.porntube.com')
        c('button[data-action="age-check#confirmAge"]');
    else if (hostname === 'www.redtube.com') {
        const e = document.querySelector('a#btn_agree'); // c doesn't work, this executes the mousedown event that they listen for
        if (e) e.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    }
    else if (hostname === 'residenz.at')
        c('button.accept');
    else if (hostname === 'www.romantic-bar.at')
        c('button.age-gate-submit-yes');
    else if (hostname === 'seemygf.com')
        c('button#enterButton');
	else if (hostname === 'www.sexlikereal.com')
        c('button.js-c-age-restrictions-agree');
    else if (hostname === 'shemalez.com')
        c('button#ageagree');
    else if (hostname === 'www.simplytop.at')
        cVis('a.ulp-link-button-pink');
    else if (hostname === 'spankbang.com')
        c('button#age-check-yes');
    else if (hostname === 'www.storm.mg')
		c('button.button18x.yes');
    else if (hostname === 'studiorelaxe.at')
        c('a.elementor-button-link2');
	else if (hostname === 't66y.com')
		c('a:contains("滿 18 歲,")');
    else if (hostname === 'www.tiava.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'www.transpornsites.com')
        c('button.yes');
    else if (hostname === 'www.tube8.com')
        c('button#accessButton');
    else if (hostname === 'www.tubegalore.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'tubepornclassic.com')
        c('button#ageagree');
    else if (hostname === 'www.tubepornstars.com')
        c('button.eighteen-plus-button');
    else if (hostname === 'txxx.com')
        c('button#ageagree');
    else if (hostname === 'upornia.com')
        c('button#ageagree');
    else if (hostname === 'www.vitalia-muenchen.de')
        c('button[onclick="verifyAge()"]');
    else if (hostname === 'vjav.com')
        c('button#ageagree');
    else if (hostname === 'vrporn.com')
        c('button.vrporn-age-verification-btn-yes');
    else if (hostname === 'watchersweb.com')
        c('a.close-age-popup');
    else if (hostname === 'wifebucket.com')
        c('a.verify-button');
    else if (hostname === 'www.xnxx.com') {
		c('div.disclaimer-enter-btns-col button.current-main-cat'); //clicks on the default category (because with accepting over 18 you must choose a category)
        c('button#disclaimer-reject_cookies-btn'); //after the over 18 button comes a cookie question, reject those
    }
	else if (hostname === 'www.xvideos.com')
		c('button.disclaimer-enter-btn');
    else if (hostname === 'xxxbunker.com')
        c('div.ageConfirmDialog a');
    else if (hostname === 'xxxelf.com')
        c('button.player-btn-sign-up');
    else if (hostname === 'www.youporn.com')
		c('button#accessButton');
    else if (hostname === 'www.zoig.com')
        c('a.btn-danger');
    //else
    //    alert("Unmatched Domain: " + hostname);


    /* Checks if element is visible */
    function isVisible(e) {
        return e.checkVisibility?.() ?? //not supported in firefox or older browsers, those use the next line
               !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    };

    /* Clicks on the element, as soon as it is available */
    function c(selectorTxt) {
        waitForKeyElements(
            selectorTxt,
            (e) => e.click()
        );
    }

    /* Clicks on the element, as soon as it is available and visible */
    function cVis(selectorTxt) {
        waitForKeyElements(
            selectorTxt,
            (e) => {if (isVisible(e)) {e.click();} else {return true;}} //the return true is to tell waitForKeyElements to treat it as not found
        );
    }

    /*--- waitForKeyElements():
    A utility function, for Greasemonkey scripts, that detects and handles AJAXed content.

    From https://gist.githubusercontent.com/BrockA/2625891/raw/waitForKeyElements.js, but
    modified to not need jQuery. The callback function now gets the element instead of jNodes passed.
    Removed iframeSelector, as by default userscripts don't run in iframes.
    Added a 10 second timeout, because when the over-18-button isn't shown until 10 seconds after page load then it probably never shows.

    Usage example:
        waitForKeyElements (
            "div.comments",
            commentCallbackFunction
        );

        //--- Page-specific function to do what we want when the node is found.
        function commentCallbackFunction (e) {
            e.textContent = "This comment changed by waitForKeyElements().";
        }
    */
    function waitForKeyElements (
        selectorTxt,    /* Required: The jQuery selector string that specifies the desired element(s). */
        actionFunction, /* Required: The code to run when elements are found. It is passed a jNode to the matched element. */
    ) {
        var found;
        const targetNodes = document.querySelectorAll(selectorTxt);
        if (targetNodes && targetNodes.length > 0) {
            found = true;
            targetNodes.forEach(element => {
                const alreadyFound = element.dataset.alreadyFound === 'true';
                if (!alreadyFound) {
                    var cancelFound = actionFunction(element);
                    if (cancelFound)
                        found = false;
                    else
                        element.dataset.alreadyFound = 'true';
                }
            });
        }
        else {
            found = false;
        }

        const controlObj = waitForKeyElements.controlObj || {};
        const controlKey = selectorTxt.replace(/[^\w]/g, "_");
        const timeControl = controlObj[controlKey];
        const dateLoadEnd = performance.timing.loadEventEnd;
        if (!found && !timeControl) {
            controlObj[controlKey] = setInterval(() => waitForKeyElements(selectorTxt, actionFunction), 300);
            waitForKeyElements.controlObj = controlObj;
        }
        else if ((found && timeControl) ||
                 // when the over-18-button isn't shown until 10 seconds after page load then stop searching
                 ((dateLoadEnd > 0) && ((Date.now() - dateLoadEnd) > 10000)))
        {
            clearInterval(timeControl);
            delete controlObj[controlKey];
            waitForKeyElements.controlObj = controlObj;
        }
    }
})();
