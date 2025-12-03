// ==UserScript==
// @name            I am over 18
// @author          tsaiid
// @namespace       http://tsai.it/project/gmscripts/i-am-over-18/
// @homepageURL     https://github.com/tsaiid/gm-i-am-over-18
// @run-at          document-idle
// @version         0.3.20251203
// @description     Automatically agrees the "I'm over 18" declaration.
// @icon            https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon48.png
// @icon64          https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon64.png
// @license         MIT
// @copyright       2016, I-Ta Tsai (http://tsai.it/)
// @match           https://*.4tube.com/*
// @match           https://*.alrincon.com/*
// @match           https://*.analgalore.com/*
// @match           https://*.analvids.com/*
// @match           http://www.appledaily.com.tw/*
// @match           https://*.asiangalore.com/*
// @match           https://*.ass4all.com/*
// @match           https://*.assoass.com/*
// @match           http://av.movie/*
// @match           https://*.bang.com/*
// @match           *://*.blogspot.com/*
// @match           https://*.bodenseestrasse271.de/*
// @match           https://booksusi.com/*
// @match           https://*.cam4.com/*
// @match           https://*.cameraboys.com/*
// @match           https://*.carisma-zeltweg.com/*
// @match           https://*.chaturbate.com/*
// @match           https://*.clips4sale.com/*
// @match           https://*.czechvr.com/*
// @match           https://r18.clickme.net/*
// @match           https://*.das-laufhaus.at/*
// @match           https://*.dcard.tw/*
// @match           https://*.dinotube.com/*
// @match           https://*.dorcelclub.com/*
// @match           https://*.eroscenter-platin.de/*
// @match           *://*.ettoday.net/*
// @match           *://*.eyny.com/*
// @match           https://*.fc2.com/*
// @match           https://*.forhertube.com/*
// @match           https://*.fuq.com/*
// @match           https://*.fux.com/*
// @match           https://fuskator.com/*
// @match           https://news.gamme.com.tw/*
// @match           https://*.gaymaletube.com/*
// @match           https://*.gayxps.com/*
// @match           https://*.giochipremium.com/*
// @match           https://*.gotporn.com/*
// @match           https://hclips.com/*
// @match           https://hdzog.com/*
// @match           https://hentaied.com/*
// @match           https://*.homemadegalore.com/*
// @match           https://*.hotlady.at/*
// @match           https://hotmovs.com/*
// @match           http://*.ibeauty.tw/*
// @match           https://*.indexxx.com/*
// @match           https://*.ixxx.com/*
// @match           https://*.jacquieetmicheltv.net/*
// @match           https://v.jav101.com/*
// @match           https://*.jkforum.net/*
// @match           https://*.joyourself.com/*
// @match           https://knusperhaus.at/*
// @match           https://www.kocpc.com.tw/*
// @match           https://kontaktbazar.at/*
// @match           https://*.laufhaus6.at/*
// @match           https://laufhaus-casabianca.at/*
// @match           https://laufhaus-hasenohr.at/*
// @match           https://*.laufhaus-neunkirchen.at/*
// @match           https://*.laufhaus-rachel.at/*
// @match           https://*.laufhaus-splash.at/*
// @match           https://*.laufhaus-theresienfeld.at/*
// @match           https://*.laufhaus-vienna.at/*
// @match           https://*.letsdoeit.com/*
// @match           https://*.liveprivates.com/*
// @match           https://*.livesexasian.com/*
// @match           https://*.lobstertube.com/*
// @match           https://*.lupoporno.com/*
// @match           https://*.lsawards.com/*
// @match           https://lustery.com/*
// @match           https://*.maturescam.com/*
// @match           https://*.melonstube.com/*
// @match           https://*.mycams.com/*
// @match           https://*.myfreecams.com/*
// @match           https://*.mytrannycams.com/*
// @match           https://*.olecams.com/*
// @match           https://*.olecams.tv/*
// @match           https://*.pichunter.com/*
// @match           http://*.playno1.com/*
// @match           https://*.pornhdlive.com/*
// @match           https://*.porn.com/*
// @match           https://*.pornhub.com/*
// @match           https://*.pornmd.com/*
// @match           https://pornone.com/*
// @match           https://*.pornpics.com/*
// @match           https://*.porntrex.com/*
// @match           https://*.porntube.com/*
// @match           https://*.redtube.com/*
// @match           https://residenz.at/*
// @match           https://*.romantic-bar.at/*
// @match           https://seemygf.com/*
// @match           https://*.sexlikereal.com/*
// @match           https://shemalez.com/*
// @match           https://*.simplytop.at/*
// @match           https://spankbang.com/*
// @match           http://*.storm.mg/*
// @match           https://*.stripchat.com/*
// @match           https://studiorelaxe.at/*
// @match           https://*.superporn.com
// @match           *://t66y.com/
// @match           https://*.tiava.com/*
// @match           https://*.transpornsites.com/*
// @match           https://*.tube8.com/*
// @match           https://*.tubegalore.com/*
// @match           https://tubepornclassic.com/*
// @match           https://*.tubepornstars.com/*
// @match           https://*.tukif.love/*
// @match           https://txxx.com/*
// @match           https://upornia.com/*
// @match           https://*.vitalia-muenchen.de/*
// @match           https://vjav.com/*
// @match           https://vrporn.com/*
// @match           https://watchersweb.com/*
// @match           https://wifebucket.com/*
// @match           https://*.xfree.com/*
// @match           https://*.xnxx.com/*
// @match           https://*.xvideos.com/*
// @match           https://xxxbunker.com/*
// @match           https://xxxelf.com/*
// @match           https://*.xhamsterlive.com/*
// @match           https://*.youporn.com/*
// @match           https://*.zoig.com/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';
    /* eslint-disable curly */
    /* eslint-disable no-multi-spaces */

    const hostname = window.location.hostname;
    const domain = hostname.split('.').slice(-2).join('.'); // gets "abc.com"

    switch (domain) {
        case '4tube.com':
        case 'analgalore.com':
        case 'asiangalore.com':
        case 'assoass.com':
        case 'dinotube.com':
        case 'forhertube.com':
        case 'fuq.com':
        case 'fux.com':
        case 'gaymaletube.com':
        case 'gotporn.com':
        case 'homemadegalore.com':
        case 'ixxx.com':
        case 'lobstertube.com':
        case 'lupoporno.com':
        case 'melonstube.com':
        case 'pornmd.com':
        case 'tiava.com':
        case 'tubegalore.com':
        case 'tubepornstars.com':
            c('button.eighteen-plus-button'); break;

        case 'hclips.com':
        case 'hdzog.com':
        case 'shemalez.com':
        case 'tubepornclassic.com':
        case 'txxx.com':
        case 'upornia.com':
        case 'vjav.com':
            c('button#ageagree'); break;

        case 'cameraboys.com':
        case 'joyourself.com':
        case 'liveprivates.com':
        case 'livesexasian.com':
        case 'lsawards.com':
        case 'maturescam.com':
        case 'mycams.com':
        case 'mytrannycams.com':
        case 'pornhdlive.com': {
            // the over 18 site can only be skipped by accepting/rejecting cookies
            c('div.overlay-gdpr-consent button + a:not([tabindex])'); // click 'Manage or reject Cookies' after the link is enabled by not having a tabindex
            c('div.overlay-manage-consent>div>ul+button'); // click 'Confirm my choices'
            break;
        }

        case 'alrincon.com':
            c('a#confirmarBtn'); break;
        case 'analvids.com':
            c('a.__agree'); break;
        case 'ass4all.com': {
            c('button.disclaimer-enter-btn');
            c('button#disclaimer-reject_cookies-btn'); //after the over 18 button comes a cookie question, reject those
            break;
        }
        case 'av.movie':
            c('button#warning-yes'); break;
        case 'bang.com':
        case 'porntube.com':
            c('button[data-action="age-check#confirmAge"]'); break;
        case 'bodenseestrasse271.de':
            c('div#enter a'); break;
        case 'booksusi.com':
            c('div#eighteenPlusModal button.btn-success'); break;
        case 'cam4.com':
            c('dialog[data-id="AgeConsentGenderDisclaimer"] a[href="/all"]'); break;
        case 'carisma-zeltweg.com':
            c('input.agecheck_close'); break;
        case 'chaturbate.com':
            c('div#entrance_terms a#close_entrance_terms'); break;
        case 'clips4sale.com': {
            cCombo('input#iCertifyCheck', true);
            c('button#enter-agree');
            break;
        }
        case 'czechvr.com':
            c('div.modalcontent button#button'); break;
        case 'das-laufhaus.at':
            c('button#age-control-allowed'); break;
        case 'dcard.tw':
            c('button:contains("是，我已滿十八歲。")');  break; // <button class="Button_primary_3KkkP Button_button_2uDT-" type="button">是，我已滿十八歲。</button>
        case 'dorcelclub.com': {
            const iframe = document.querySelector('iframe');
            iframe.onload = () => {
                const btn = iframe.contentDocument.querySelector('a.agree');
                if (btn) btn.click();
            };
            break;
        }
        case 'eroscenter-platin.de':
            c('form.global-frontpage-form a[href="#"]'); break;
        case 'fuskator.com':
            c('a#close_entrance_terms'); break;
        case 'ettoday.net':
            document.querySelector('a.enter').click(); break;
        case 'eyny.com':
            document.querySelector("input[value^='是，我已年滿18歲。']").click(); break;
        case 'fc2.com': {
            const e = document.querySelector("a.c-btn-102") || document.getElementById("age_ok_btn"); // <a href="javascript:void(0)" class="c-btn-102 btnSz-2" role="button" aria-label="yes">是（進入）</a>
            if (e) e.click();
            break;
        }
        case 'gayxps.com':
            c('a.-login'); break;
        case 'giochipremium.com':
            c('div.dialog-message div.elementor-widget-heading+div a.elementor-button'); break;
        case 'hentaied.com':
            c('button.age-gate-submit-yes'); break;
        case 'hotlady.at':
            c('img[alt="Ja"]'); break;
        case 'hotmovs.com':
            c('div.type-accept-button button'); break;
        case 'ibeauty.tw':
            c(".warningWp .warningBtn .btnYes"); break;
        case 'indexxx.com':
            c('a#enterLink'); break;
        case 'jacquieetmicheltv.net':
            c('button.disclaimer__btn'); break;
        case 'jkforum.net':
            c('button#fwin_dialog_submit'); break;
        case 'knusperhaus.at':
            c('p.close_pop_protect a:nth-of-type(2)'); break;
        case 'kontaktbazar.at':
            c('button.age-gate__submit--yes'); break;
        case 'laufhaus6.at':
            c('div#age-check-content button.yes'); break;
        case 'laufhaus-casabianca.at':
            c('button.age-gate__submit--yes'); break;
        case 'laufhaus-hasenohr.at':
            c('input#AVenterLink'); break;
        case 'laufhaus-neunkirchen.at':
        case 'laufhaus-theresienfeld.at':
            c('a.btn-success'); break;
        case 'laufhaus-rachel.at':
            c('button#popupbuttonno'); break;
        case 'laufhaus-splash.at':
            c('button.age-gate__submit--yes'); break;
        case 'laufhaus-vienna.at':
            c('section.slideshow-intro a.btn-primary'); break;
        case 'letsdoeit.com':
            c('div.sc-rkkkdv-0 button'); break;
        case 'lustery.com':
            c('button.AdultContentNotification_continueLink___TRRa'); break;
        case 'www.myfreecams.com':
            c('#enter_desktop'); break;
        case 'olecams.com':
        case 'olecams.tv':
            c('div#main-video-content +div main button'); break;
        case 'pichunter.com':
            c('a#btn-enter'); break;
        case 'playno1.com':
            c('button:contains("我已滿18歲 進入")'); break;
        case 'porn.com':
            c('div.modal__warning p a.btn'); break;
        case 'pornhub.com':
            c('button.buttonOver18'); break;
        case 'pornone.com':
            c('a#iamover18Btn'); break;
        case 'pornpics.com':
            c('div.button-agree'); break;
        case 'porntrex.com':
            c('div.age-popup-btns div#okButton'); break;
        case 'redtube.com': {
            const e = document.querySelector('a#btn_agree'); // c doesn't work, this executes the mousedown event that they listen for
            if (e) e.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
            break;
        }
        case 'residenz.at':
            c('button.accept'); break;
        case 'romantic-bar.at':
            c('button.age-gate-submit-yes'); break;
        case 'seemygf.com':
            c('button#enterButton'); break;
        case 'sexlikereal.com':
            c('button.js-c-age-restrictions-agree'); break;
        case 'simplytop.at':
            cVis('a.ulp-link-button-pink'); break;
        case 'spankbang.com':
            c('button#age-check-yes'); break;
        case 'storm.mg':
            c('button.button18x.yes'); break;
        case 'stripchat.com':
        case 'xhamsterlive.com':
            c('button.btn-apply-alter'); break;
        case 'studiorelaxe.at':
            c('a.elementor-button-link2'); break;
        case 'superporn.com':
            c('button.disclaimer__button'); break;
        case 't66y.com':
            c('a:contains("滿 18 歲,")'); break;
        case 'transpornsites.com':
            c('button.yes'); break;
        case 'tube8.com':
            c('button#accessButton'); break;
        case 'tukif.love':
            cVis('div#popupDisclaimer a.button'); break;
        case 'vitalia-muenchen.de':
            c('button[onclick="verifyAge()"]'); break;
        case 'vrporn.com':
            c('button.vrporn-age-verification-btn-yes'); break;
        case 'watchersweb.com':
            c('a.close-age-popup'); break;
        case 'wifebucket.com':
            c('a.verify-button'); break;
        case 'xfree.com': {
            c('div#cookies-preferences__button');
            c('div#cookies-preferences div#x-button--muted'); // only allow essential cookies
            break;
        }
        case 'xnxx.com': {
            c('div.disclaimer-enter-btns-col button.current-main-cat'); //clicks on the default category (because with accepting over 18 you must choose a category)
            c('button#disclaimer-reject_cookies-btn'); //after the over 18 button comes a cookie question, reject those
            break;
        }
        case 'xvideos.com':
            c('button.disclaimer-enter-btn'); break;
        case 'xxxbunker.com':
            c('div.ageConfirmDialog a'); break;
        case 'xxxelf.com':
            c('button.player-btn-sign-up'); break;
        case 'youporn.com':
            c('button#accessButton'); break;
        case 'zoig.com':
            c('a.btn-danger'); break;

        default: // here come all others that are subdomains (not pure domains like 'abc.com') or parts of domains:
            if (hostname === 'www.appledaily.com.tw')
                c('#popup_18 a.yes');
            else if (hostname.includes('.blogspot.')) { // from https://gist.github.com/obeattie/362589
                const overlay = document.getElementById('injected-iframe');
                if (overlay) {
                    const nextSibling = overlay.nextElementSibling;
                    if (nextSibling.tagName == 'STYLE') nextSibling.parentElement.removeChild(nextSibling);
                    overlay.parentElement.removeChild(overlay);
                }
            }
            else if (hostname === 'r18.clickme.net')
                c('div.shield-btn button#enter');
            else if (hostname === 'news.gamme.com.tw') {
                document.getElementById('adult_notagain').checked = true;
                MemberUI.r18WarningClose();
            }
            else if (hostname === 'v.jav101.com')
                document.querySelector("a.agreeBtn").click();
            else if (hostname === 'www.kocpc.com.tw')
                c('button.ox18B');
            //else
            //    alert("Unmatched Domain: " + hostname);
    }


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

    /* Sets the combobox to checked/unchecked via a click event*/
    function cCombo(selectorTxt, checked) {
        waitForKeyElements(
            selectorTxt,
            (e) => {if (e.checked !== checked) {e.click();} return true; } //some sites reset the combobox so return false to check it again
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
