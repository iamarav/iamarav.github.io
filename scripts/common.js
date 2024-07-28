window._CommonConstants = {
    GTAG_ID: `G-TBX1Z1TWHB`
}

function _registerGtag() {
    // Create the async script element for gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${_CommonConstants.GTAG_ID}`;
    document.head.appendChild(script);

    // Create the script element for the gtag configuration
    script = document.createElement('script');
    script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${_CommonConstants.GTAG_ID});
    `;
    document.head.appendChild(script);
}

{
    _registerGtag();
}