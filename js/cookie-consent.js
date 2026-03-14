// Cookie Consent Management
(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'cookie_consent';
    const COOKIE_FUNCTIONAL_KEY = 'cookie_functional';
    const COOKIE_ANALYTICS_KEY = 'cookie_analytics';
    const COOKIE_EXPIRY_DAYS = 365;

    // Cookie helper functions
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Check if consent has been given
    function hasConsent() {
        return getCookie(COOKIE_CONSENT_KEY) !== null;
    }

    // Get consent preferences
    function getConsentPreferences() {
        return {
            consent: getCookie(COOKIE_CONSENT_KEY) === 'true',
            functional: getCookie(COOKIE_FUNCTIONAL_KEY) === 'true',
            analytics: getCookie(COOKIE_ANALYTICS_KEY) === 'true'
        };
    }

    // Show consent banner
    function showConsentBanner() {
        const banner = document.getElementById('cookieConsentBanner');
        if (banner) {
            banner.style.display = 'flex';
            setTimeout(() => {
                banner.classList.add('cookie-consent-visible');
            }, 100);
        }
    }

    // Hide consent banner
    function hideConsentBanner() {
        const banner = document.getElementById('cookieConsentBanner');
        if (banner) {
            banner.classList.remove('cookie-consent-visible');
            setTimeout(() => {
                banner.style.display = 'none';
            }, 300);
        }
    }

    // Save consent preferences
    function saveConsentPreferences(functional, analytics) {
        setCookie(COOKIE_CONSENT_KEY, 'true', COOKIE_EXPIRY_DAYS);
        setCookie(COOKIE_FUNCTIONAL_KEY, functional ? 'true' : 'false', COOKIE_EXPIRY_DAYS);
        setCookie(COOKIE_ANALYTICS_KEY, analytics ? 'true' : 'false', COOKIE_EXPIRY_DAYS);
        
        // Initialize analytics if accepted
        if (analytics) {
            initializeAnalytics();
        }
        
        hideConsentBanner();
    }

    // Accept all cookies
    function acceptAll() {
        saveConsentPreferences(true, true);
    }

    // Reject optional cookies (only necessary cookies)
    function rejectOptional() {
        saveConsentPreferences(false, false);
    }

    // Initialize analytics (placeholder for future implementation)
    function initializeAnalytics() {
        // Analytics kodları buraya eklenecek
        console.log('Analytics initialized');
    }

    // Initialize cookie consent system
    function init() {
        // Check if consent banner exists
        const banner = document.getElementById('cookieConsentBanner');
        if (!banner) return;

        // Check if consent has already been given
        if (!hasConsent()) {
            // Show banner after a short delay
            setTimeout(() => {
                showConsentBanner();
            }, 1000);
        }

        // Bind accept button
        const acceptBtn = document.getElementById('cookieConsentAccept');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', acceptAll);
        }

        // Bind reject button
        const rejectBtn = document.getElementById('cookieConsentReject');
        if (rejectBtn) {
            rejectBtn.addEventListener('click', rejectOptional);
        }
    }

    // Public API
    window.cookieConsent = {
        getPreferences: getConsentPreferences,
        hasConsent: hasConsent,
        acceptAll: acceptAll,
        rejectOptional: rejectOptional,
        reset: function() {
            deleteCookie(COOKIE_CONSENT_KEY);
            deleteCookie(COOKIE_FUNCTIONAL_KEY);
            deleteCookie(COOKIE_ANALYTICS_KEY);
            showConsentBanner();
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();