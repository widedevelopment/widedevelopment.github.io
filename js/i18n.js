// Çeviri dosyası
const translations = {
    tr: {
        // Navbar
        navbar: {
            brand: 'Development'
        },
        // Sidebar
        sidebar: {
            packages: 'Paketlerimiz',
            team: 'Ekibimiz',
            testimonials: 'Yorumlar',
            discord: 'Discord'
        },
        // Hero Section
        hero: {
            title: 'Wide Development',
            tagline: 'Siz hayal edin, biz inşa edelim.',
            stats: {
                totalService: 'Toplam Hizmet',
                totalCustomer: 'Toplam Müşteri',
                widePersonnel: 'Wide Personel'
            }
        },
        // Packages Section
        packages: {
            title: 'Paketlerimiz',
            button: 'İncele'
        },
        // Team Section
        team: {
            title: 'Ekibimiz'
        },
        // Testimonials Section
        testimonials: {
            title: 'Müşteri Yorumları',
            prev: 'Önceki yorum',
            next: 'Sonraki yorum'
        },
        // Footer
        footer: {
            description: 'Siz hayal edin, biz inşa edelim.',
            quickLinks: 'Hızlı Linkler',
            legal: 'Yasal',
            packages: 'Paketlerimiz',
            team: 'Ekibimiz',
            testimonials: 'Yorumlar',
            terms: 'Kullanım Şartları',
            privacy: 'Gizlilik Politikası',
            cookies: 'Çerez Politikası',
            copyright: '© 2026 Wide Development. Tüm hakları saklıdır.'
        },
        // Package Descriptions
        packageDescriptions: {
            whitelistV1: 'Sunucusunu hızlı, stabil ve profesyonel şekilde açmak isteyenlere özel sizin için özenle hazırlanmış Full Whitelist Roleplay paketi! Tüm sistemler optimize edilmiş, hatalar giderilmiş ve performans odaklı şekilde düzenlenmiştir. Bu paketi satın aldığınızda sizler için ekibimiz tarafından gerekli kurulumlar yapılacaktır ve kullanıma hazır hale getirilicektir.'
        },
        // Package Features
        packageFeatures: {
            lowResmon: 'Düşük resmon değerleri (0.60-0.70)',
            stableInfra: 'Hatasız ve stabil altyapı',
            easySetup: 'Kolay kurulum (1-2 iş günü)',
            expandable: 'Geliştirilebilir sistemler',
            rpReady: 'Roleplay\'e hazır düzen',
            exploitProtection: 'Exploit ve açık korumaları'
        }
    },
    en: {
        // Navbar
        navbar: {
            brand: 'Development'
        },
        // Sidebar
        sidebar: {
            packages: 'Our Packages',
            team: 'Our Team',
            testimonials: 'Reviews',
            discord: 'Discord'
        },
        // Hero Section
        hero: {
            title: 'Wide Development',
            tagline: 'You imagine it, well build it.',
            stats: {
                totalService: 'Total Service',
                totalCustomer: 'Total Customer',
                widePersonnel: 'Wide Personnel'
            }
        },
        // Packages Section
        packages: {
            title: 'Our Packages',
            button: 'View Details'
        },
        // Team Section
        team: {
            title: 'Our Team'
        },
        // Testimonials Section
        testimonials: {
            title: 'Customer Reviews',
            prev: 'Previous review',
            next: 'Next review'
        },
        // Footer
        footer: {
            description: 'You imagine it, well build it.',
            quickLinks: 'Quick Links',
            legal: 'Legal',
            packages: 'Our Packages',
            team: 'Our Team',
            testimonials: 'Reviews',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            cookies: 'Cookie Policy',
            copyright: '© 2026 Wide Development. All rights reserved.'
        },
        // Package Descriptions
        packageDescriptions: {
            whitelistV1: 'A Full Whitelist Roleplay package specially prepared for those who want to open their server quickly, stably and professionally! All systems are optimized, bugs are fixed and arranged in a performance-oriented manner. When you purchase this package, the necessary installations will be made by our team and it will be ready to use.'
        },
        // Package Features
        packageFeatures: {
            lowResmon: 'Low resmon values (0.60-0.70)',
            stableInfra: 'Error-free and stable infrastructure',
            easySetup: 'Easy setup (1-2 business days)',
            expandable: 'Expandable systems',
            rpReady: 'Roleplay-ready layout',
            exploitProtection: 'Exploit and vulnerability protections'
        }
    }
};

// Aktif dili al (localStorage'dan veya varsayılan)
function getCurrentLocale() {
    return localStorage.getItem('locale') || 'tr'; // Varsayılan dil
}

// Dili kaydet
function setLocale(lang) {
    if (!['tr', 'en'].includes(lang)) {
        lang = 'tr';
    }
    localStorage.setItem('locale', lang);
    translatePage();
    updateLanguageButtons();
}

// Çeviriyi al
function t(key) {
    const locale = getCurrentLocale();
    const keys = key.split('.');
    let value = translations[locale];
    
    for (let k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return key; // Çeviri bulunamazsa key'i döndür
        }
    }
    
    return value;
}

// Sayfayı çevir
function translatePage() {
    const locale = getCurrentLocale();
    
    // Sidebar tooltips
    const sidebarItems = document.querySelectorAll('.sidebar-item[data-section]');
    sidebarItems.forEach(item => {
        const section = item.getAttribute('data-section');
        if (section && t(`sidebar.${section}`)) {
            item.setAttribute('title', t(`sidebar.${section}`));
        }
    });
    
    // Hero section
    const tagline = document.querySelector('.tagline');
    if (tagline) tagline.textContent = t('hero.tagline');
    
    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = t('hero.stats.totalService');
        statLabels[1].textContent = t('hero.stats.totalCustomer');
        statLabels[2].textContent = t('hero.stats.widePersonnel');
    }
    
    // Packages section
    const packagesTitle = document.querySelector('#packages .section-title');
    if (packagesTitle) packagesTitle.textContent = t('packages.title');
    
    const packageButtons = document.querySelectorAll('.package-button');
    packageButtons.forEach(btn => {
        if (!btn.hasAttribute('data-original-text')) {
            btn.setAttribute('data-original-text', btn.textContent);
        }
        btn.textContent = t('packages.button');
    });
    
    // Team section
    const teamTitle = document.querySelector('#team .section-title');
    if (teamTitle) teamTitle.textContent = t('team.title');
    
    // Testimonials section
    const testimonialsTitle = document.querySelector('#testimonials .section-title');
    if (testimonialsTitle) testimonialsTitle.textContent = t('testimonials.title');
    
    const prevBtn = document.getElementById('prevTestimonial');
    if (prevBtn) prevBtn.setAttribute('aria-label', t('testimonials.prev'));
    
    const nextBtn = document.getElementById('nextTestimonial');
    if (nextBtn) nextBtn.setAttribute('aria-label', t('testimonials.next'));
    
    // Footer
    const footerDesc = document.querySelector('.footer-description');
    if (footerDesc) footerDesc.textContent = t('footer.description');
    
    // Footer başlıkları
    const footerSubtitles = document.querySelectorAll('.footer-subtitle');
    if (footerSubtitles.length >= 2) {
        footerSubtitles[0].textContent = t('footer.quickLinks');
        footerSubtitles[1].textContent = t('footer.legal');
    }
    
    // Footer linkleri
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '/#packages') link.textContent = t('footer.packages');
        else if (href === '/#team') link.textContent = t('footer.team');
        else if (href === '/#testimonials') link.textContent = t('footer.testimonials');
        else if (href === '/terms') link.textContent = t('footer.terms');
        else if (href === '/privacy') link.textContent = t('footer.privacy');
        else if (href === '/cookies') link.textContent = t('footer.cookies');
    });
    
    // Copyright
    const copyright = document.querySelector('.footer-copyright');
    if (copyright) copyright.textContent = t('footer.copyright');
    
    // Paket açıklamaları
    const packageDescriptions = document.querySelectorAll('.package-description');
    packageDescriptions.forEach(desc => {
        const packageCard = desc.closest('.package-card');
        const packageName = packageCard?.querySelector('.package-name')?.textContent.trim();
        
        if (packageName === 'Whitelist V1') {
            desc.textContent = t('packageDescriptions.whitelistV1');
        }
    });
    
    // data-i18n attribute'larını çevir
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            element.textContent = t(key);
        }
    });
    
    // Dil butonlarını güncelle
    updateLanguageButtons();
}

// Dil değiştirme butonlarına event listener ekle
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            
            if (lang) {
                setLocale(lang);
            }
        });
    });
}

// Dil butonlarının active durumunu güncelle
function updateLanguageButtons() {
    const locale = getCurrentLocale();
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === locale) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Sayfa yüklendiğinde çevir ve event listener'ları ekle
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageButtons();
    translatePage();
    initLanguageSwitcher();
});

// Global olarak erişilebilir yap
window.t = t;
window.translatePage = translatePage;
window.setLocale = setLocale;
window.getCurrentLocale = getCurrentLocale;
