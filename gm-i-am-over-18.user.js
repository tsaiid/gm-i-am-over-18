// ==UserScript==
// @name            I am over 18
// @author          tsaiid
// @namespace       http://tsai.it/project/gmscripts/i-am-over-18/
// @homepageURL     https://github.com/tsaiid/gm-i-am-over-18
// @run-at          document-idle
// @version         0.4.20251204
// @description     Automatically agrees the "I'm over 18" declaration.
// @icon            https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon48.png
// @icon64          https://raw.githubusercontent.com/tsaiid/gm-i-am-over-18/master/icon64.png
// @license         MIT
// @copyright       2016, I-Ta Tsai (http://tsai.it/)
// @contributor     craftwar
// @contributor     haofly
// @contributor     Jaxon
// @contributor     Karl Li
// @contributor     Marti Martz
// @contributor     smailzhu
// @contributor     w1ldg00se
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

    // --- Configuration ---
    const RULES = [
        {
            // Group: Standard '18+' button
            domains: [
                '4tube.com', 'analgalore.com', 'asiangalore.com', 'assoass.com', 'dinotube.com',
                'forhertube.com', 'fuq.com', 'fux.com', 'gaymaletube.com', 'gotporn.com',
                'homemadegalore.com', 'ixxx.com', 'lobstertube.com', 'lupoporno.com', 'melonstube.com',
                'pornmd.com', 'tiava.com', 'tubegalore.com', 'tubepornstars.com'
            ],
            selector: 'button.eighteen-plus-button'
        },
        {
            // Group: Age agree button by ID
            domains: [
                'hclips.com', 'hdzog.com', 'shemalez.com', 'tubepornclassic.com',
                'txxx.com', 'upornia.com', 'vjav.com'
            ],
            selector: 'button#ageagree'
        },
        {
            // Group: Cookie consent + Confirm
            domains: [
                'cameraboys.com', 'joyourself.com', 'liveprivates.com', 'livesexasian.com',
                'lsawards.com', 'maturescam.com', 'mycams.com', 'mytrannycams.com', 'pornhdlive.com'
            ],
            action: () => {
                // Click 'Manage or reject Cookies' (enabled link usually lacks tabindex)
                click('div.overlay-gdpr-consent button + a:not([tabindex])');
                // Click 'Confirm my choices'
                click('div.overlay-manage-consent>div>ul+button');
            }
        },
        {
            // Domain-specific Rules
            domains: 'alrincon.com',
            selector: 'a#confirmarBtn'
        },
        {
            domains: 'analvids.com',
            selector: 'a.__agree'
        },
        {
            domains: 'ass4all.com',
            action: () => {
                click('button.disclaimer-enter-btn');
                click('button#disclaimer-reject_cookies-btn');
            }
        },
        {
            domains: 'av.movie',
            selector: 'button#warning-yes'
        },
        {
            domains: ['bang.com', 'porntube.com'],
            selector: 'button[data-action="age-check#confirmAge"]'
        },
        {
            domains: 'bodenseestrasse271.de',
            selector: 'div#enter a'
        },
        {
            domains: 'booksusi.com',
            selector: 'div#eighteenPlusModal button.btn-success'
        },
        {
            domains: 'cam4.com',
            selector: 'dialog[data-id="AgeConsentGenderDisclaimer"] a[href="/all"]'
        },
        {
            domains: 'carisma-zeltweg.com',
            selector: 'input.agecheck_close'
        },
        {
            domains: 'chaturbate.com',
            selector: 'div#entrance_terms a#close_entrance_terms'
        },
        {
            domains: 'clips4sale.com',
            action: () => {
                const chk = document.querySelector('input#iCertifyCheck');
                if (chk && !chk.checked) chk.click();
                click('button#enter-agree');
            }
        },
        {
            domains: 'czechvr.com',
            selector: 'div.modalcontent button#button'
        },
        {
            domains: 'das-laufhaus.at',
            selector: 'button#age-control-allowed'
        },
        {
            domains: 'dcard.tw',
            action: () => clickByText('button', '是，我已滿十八歲。')
        },
        {
            domains: 'dorcelclub.com',
            action: () => {
                const iframe = document.querySelector('iframe');
                if (iframe) {
                    // Try accessing content immediately if same-origin, or wait for load
                    try {
                         const btn = iframe.contentDocument?.querySelector('a.agree');
                         if (btn) btn.click();
                    } catch (e) {}
                    
                    iframe.onload = () => {
                        try {
                            const btn = iframe.contentDocument?.querySelector('a.agree');
                            if (btn) btn.click();
                        } catch(e) {}
                    };
                }
            }
        },
        {
            domains: 'eroscenter-platin.de',
            selector: 'form.global-frontpage-form a[href="#"]'
        },
        {
            domains: 'fuskator.com',
            selector: 'a#close_entrance_terms'
        },
        {
            domains: 'ettoday.net',
            selector: 'a.enter'
        },
        {
            domains: 'eyny.com',
            selector: "input[value^='是，我已年滿18歲。']"
        },
        {
            domains: 'fc2.com',
            action: () => click('a.c-btn-102') || click('#age_ok_btn')
        },
        {
            domains: 'gayxps.com',
            selector: 'a.-login'
        },
        {
            domains: 'giochipremium.com',
            selector: 'div.dialog-message div.elementor-widget-heading+div a.elementor-button'
        },
        {
            domains: 'hentaied.com',
            selector: 'button.age-gate-submit-yes'
        },
        {
            domains: 'hotlady.at',
            selector: 'img[alt="Ja"]'
        },
        {
            domains: 'hotmovs.com',
            selector: 'div.type-accept-button button'
        },
        {
            domains: 'ibeauty.tw',
            selector: '.warningWp .warningBtn .btnYes'
        },
        {
            domains: 'indexxx.com',
            selector: 'a#enterLink'
        },
        {
            domains: 'jacquieetmicheltv.net',
            selector: 'button.disclaimer__btn'
        },
        {
            domains: 'jkforum.net',
            selector: 'button#fwin_dialog_submit'
        },
        {
            domains: 'knusperhaus.at',
            selector: 'p.close_pop_protect a:nth-of-type(2)'
        },
        {
            domains: 'kontaktbazar.at',
            selector: 'button.age-gate__submit--yes'
        },
        {
            domains: 'laufhaus6.at',
            selector: 'div#age-check-content button.yes'
        },
        {
            domains: ['laufhaus-casabianca.at', 'laufhaus-splash.at', 'kontaktbazar.at'],
            selector: 'button.age-gate__submit--yes'
        },
        {
            domains: 'laufhaus-hasenohr.at',
            selector: 'input#AVenterLink'
        },
        {
            domains: ['laufhaus-neunkirchen.at', 'laufhaus-theresienfeld.at'],
            selector: 'a.btn-success'
        },
        {
            domains: 'laufhaus-rachel.at',
            selector: 'button#popupbuttonno'
        },
        {
            domains: 'laufhaus-vienna.at',
            selector: 'section.slideshow-intro a.btn-primary'
        },
        {
            domains: 'letsdoeit.com',
            selector: 'div.sc-rkkkdv-0 button'
        },
        {
            domains: 'lustery.com',
            selector: 'button.AdultContentNotification_continueLink___TRRa'
        },
        {
            domains: 'www.myfreecams.com',
            selector: '#enter_desktop'
        },
        {
            domains: ['olecams.com', 'olecams.tv'],
            selector: 'div#main-video-content +div main button'
        },
        {
            domains: 'pichunter.com',
            selector: 'a#btn-enter'
        },
        {
            domains: 'playno1.com',
            action: () => clickByText('button', '我已滿18歲 進入')
        },
        {
            domains: 'porn.com',
            selector: 'div.modal__warning p a.btn'
        },
        {
            domains: 'pornhub.com',
            selector: 'button.buttonOver18'
        },
        {
            domains: 'pornone.com',
            selector: 'a#iamover18Btn'
        },
        {
            domains: 'pornpics.com',
            selector: 'div.button-agree'
        },
        {
            domains: 'porntrex.com',
            selector: 'div.age-popup-btns div#okButton'
        },
        {
            domains: 'redtube.com',
            action: () => {
                const e = document.querySelector('a#btn_agree');
                if (e) e.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
            }
        },
        {
            domains: 'residenz.at',
            selector: 'button.accept'
        },
        {
            domains: 'romantic-bar.at',
            selector: 'button.age-gate-submit-yes'
        },
        {
            domains: 'seemygf.com',
            selector: 'button#enterButton'
        },
        {
            domains: 'sexlikereal.com',
            selector: 'button.js-c-age-restrictions-agree'
        },
        {
            domains: 'simplytop.at',
            action: () => clickVis('a.ulp-link-button-pink')
        },
        {
            domains: 'spankbang.com',
            selector: 'button#age-check-yes'
        },
        {
            domains: 'storm.mg',
            selector: 'button.button18x.yes'
        },
        {
            domains: ['stripchat.com', 'xhamsterlive.com'],
            selector: 'button.btn-apply-alter'
        },
        {
            domains: 'studiorelaxe.at',
            selector: 'a.elementor-button-link2'
        },
        {
            domains: 'superporn.com',
            selector: 'button.disclaimer__button'
        },
        {
            domains: 't66y.com',
            action: () => clickByText('a', '滿 18 歲,')
        },
        {
            domains: 'transpornsites.com',
            selector: 'button.yes'
        },
        {
            domains: ['tube8.com', 'youporn.com'],
            selector: 'button#accessButton'
        },
        {
            domains: 'tukif.love',
            action: () => clickVis('div#popupDisclaimer a.button')
        },
        {
            domains: 'vitalia-muenchen.de',
            selector: 'button[onclick="verifyAge()"]'
        },
        {
            domains: 'vrporn.com',
            selector: 'button.vrporn-age-verification-btn-yes'
        },
        {
            domains: 'watchersweb.com',
            selector: 'a.close-age-popup'
        },
        {
            domains: 'wifebucket.com',
            selector: 'a.verify-button'
        },
        {
            domains: 'xfree.com',
            action: () => {
                click('div#cookies-preferences__button');
                click('div#cookies-preferences div#x-button--muted');
            }
        },
        {
            domains: 'xnxx.com',
            action: () => {
                click('div.disclaimer-enter-btns-col button.current-main-cat');
                click('button#disclaimer-reject_cookies-btn');
            }
        },
        {
            domains: 'xvideos.com',
            selector: 'button.disclaimer-enter-btn'
        },
        {
            domains: 'xxxbunker.com',
            selector: 'div.ageConfirmDialog a'
        },
        {
            domains: 'xxxelf.com',
            selector: 'button.player-btn-sign-up'
        },
        {
            domains: 'zoig.com',
            selector: 'a.btn-danger'
        },
        {
            domains: 'www.appledaily.com.tw',
            selector: '#popup_18 a.yes'
        },
        {
            match: (h) => h.includes('.blogspot.'),
            action: () => {
                const overlay = document.getElementById('injected-iframe');
                if (overlay) {
                    const nextSibling = overlay.nextElementSibling;
                    if (nextSibling && nextSibling.tagName === 'STYLE') nextSibling.remove();
                    overlay.remove();
                }
            }
        },
        {
            domains: 'r18.clickme.net',
            selector: 'div.shield-btn button#enter'
        },
        {
            domains: 'news.gamme.com.tw',
            action: () => {
                const checkbox = document.getElementById('adult_notagain');
                if (checkbox) checkbox.checked = true;
                if (typeof window.MemberUI !== 'undefined' && window.MemberUI.r18WarningClose) {
                    window.MemberUI.r18WarningClose();
                }
            }
        },
        {
            domains: 'v.jav101.com',
            selector: 'a.agreeBtn'
        },
        {
            domains: 'www.kocpc.com.tw',
            selector: 'button.ox18B'
        }
    ];

    // --- Helper Functions ---

    function matchesDomain(hostname, rule) {
        if (rule.match && typeof rule.match === 'function') {
            return rule.match(hostname);
        }
        const domains = Array.isArray(rule.domains) ? rule.domains : [rule.domains];
        return domains.some(d => d && (hostname === d || hostname.endsWith('.' + d)));
    }

    function isVisible(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }

    function click(selector) {
        const el = document.querySelector(selector);
        if (el && !el.dataset.gmClicked) {
            el.click();
            el.dataset.gmClicked = 'true';
            return true;
        }
        return false;
    }

    function clickVis(selector) {
        const el = document.querySelector(selector);
        if (el && isVisible(el) && !el.dataset.gmClicked) {
            el.click();
            el.dataset.gmClicked = 'true';
            return true;
        }
        return false;
    }

    function clickByText(tagName, text) {
        const elements = document.querySelectorAll(tagName);
        for (const el of elements) {
            if (el.textContent.includes(text) && !el.dataset.gmClicked) {
                el.click();
                el.dataset.gmClicked = 'true';
                return true;
            }
        }
        return false;
    }

    // --- Main Execution ---

    const hostname = window.location.hostname;
    const activeRule = RULES.find(rule => matchesDomain(hostname, rule));

    if (activeRule) {
        console.log('[I am over 18] Matched rule for:', hostname);

        const execute = () => {
            if (activeRule.selector) {
                click(activeRule.selector);
            } else if (activeRule.action) {
                activeRule.action();
            }
        };

        // Execute immediately
        execute();

        // Observe for changes (SPA / Lazy load)
        const observer = new MutationObserver((mutations) => {
            // Simple throttle could be added here if needed, but for now we just try to execute.
            // The helper functions check for existence and 'data-gmClicked' to avoid spamming.
            execute();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // Stop observing after 10 seconds to save resources, assuming the popup would have appeared by then
        setTimeout(() => {
            observer.disconnect();
        }, 10000);
    }

})();
