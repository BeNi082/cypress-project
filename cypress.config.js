const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
        env: {
            baseUrl: "https://www.muziker.ro/",
            baseurl:'https://www.muziker.ro/dmt-scarpe-pogi-s-white-44',
            viewportWidth: 1920,
            viewportHeight: 1080,
            cookiesText:'Scopul cookie-urilor site-ului Muziker este de a face din vizita ta o experiență plăcută în orice moment. Ești de acord cu utilizarea tuturor cookie-urilor apăsând butonul „Sunt de acord”, sau selectezi în setări doar cele pe care le agreezi.',
            productText:'DMT Scarpe POGI’S White Pantofi de ciclism pentru bărbați',
        },
    },
});