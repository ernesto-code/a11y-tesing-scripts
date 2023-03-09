// ==UserScript==
// @name         BBVA timeout killer
// @author       Antoine Ferreira
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  kill the bbva 60 second session timeout
// @author       You
// @match        https://web.bbva.es/*
// @icon         https://www.google.com/s2/favicons?domain=bbva.es
// @grant        none
// @require http://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
(function() {
    'use strict';
    $(document).ready(function() {
        setInterval(function() {
            var button = $('span:contains("Seguir en bbva.es")');
            if (!!button[0]){
                button[0].click();
            }
        }, 5000);
    })
})();