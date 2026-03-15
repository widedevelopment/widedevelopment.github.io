// Çeviri dosyası
const translations = {
    tr: {
        // Navbar
        navbar: {
            brand: 'Development'
        },
        nav: {
            packages: 'Paketler',
            team: 'Ekip',
            testimonials: 'Yorumlar'
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
        // Period translations
        period: {
            month: 'ay',
            threeMonths: '3 ay',
            sixMonths: '6 ay',
            year: 'yıl'
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
        nav: {
            packages: 'Packages',
            team: 'Team',
            testimonials: 'Reviews'
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
        // Period translations
        period: {
            month: 'month',
            threeMonths: '3 months',
            sixMonths: '6 months',
            year: 'year'
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
    },
    de: {
        // Navbar
        navbar: {
            brand: 'Development'
        },
        nav: {
            packages: 'Pakete',
            team: 'Team',
            testimonials: 'Bewertungen'
        },
        // Sidebar
        sidebar: {
            packages: 'Unsere Pakete',
            team: 'Unser Team',
            testimonials: 'Bewertungen',
            discord: 'Discord'
        },
        // Hero Section
        hero: {
            title: 'Wide Development',
            tagline: 'Sie träumen es, wir bauen es.',
            stats: {
                totalService: 'Gesamtservice',
                totalCustomer: 'Gesamtkunden',
                widePersonnel: 'Wide Personal'
            }
        },
        // Packages Section
        packages: {
            title: 'Unsere Pakete',
            button: 'Details anzeigen'
        },
        // Team Section
        team: {
            title: 'Unser Team'
        },
        // Testimonials Section
        testimonials: {
            title: 'Kundenbewertungen',
            prev: 'Vorherige Bewertung',
            next: 'Nächste Bewertung'
        },
        // Footer
        footer: {
            description: 'Sie träumen es, wir bauen es.',
            quickLinks: 'Schnelllinks',
            legal: 'Rechtliches',
            packages: 'Unsere Pakete',
            team: 'Unser Team',
            testimonials: 'Bewertungen',
            terms: 'Nutzungsbedingungen',
            privacy: 'Datenschutzrichtlinie',
            cookies: 'Cookie-Richtlinie',
            copyright: '© 2026 Wide Development. Alle Rechte vorbehalten.'
        },
        // Period translations
        period: {
            month: 'Monat',
            threeMonths: '3 Monate',
            sixMonths: '6 Monate',
            year: 'Jahr'
        },
        // Package Descriptions
        packageDescriptions: {
            whitelistV1: 'Ein Full Whitelist Roleplay-Paket, speziell für diejenigen vorbereitet, die ihren Server schnell, stabil und professionell eröffnen möchten! Alle Systeme sind optimiert, Fehler behoben und leistungsorientiert angeordnet. Wenn Sie dieses Paket kaufen, werden die notwendigen Installationen von unserem Team durchgeführt und es wird einsatzbereit sein.'
        },
        // Package Features
        packageFeatures: {
            lowResmon: 'Niedrige Resmon-Werte (0.60-0.70)',
            stableInfra: 'Fehlerfreie und stabile Infrastruktur',
            easySetup: 'Einfache Einrichtung (1-2 Werktage)',
            expandable: 'Erweiterbare Systeme',
            rpReady: 'Roleplay-bereites Layout',
            exploitProtection: 'Exploit- und Schwachstellenschutz'
        }
    },
    ru: {
        // Navbar
        navbar: {
            brand: 'Development'
        },
        nav: {
            packages: 'Пакеты',
            team: 'Команда',
            testimonials: 'Отзывы'
        },
        // Sidebar
        sidebar: {
            packages: 'Наши пакеты',
            team: 'Наша команда',
            testimonials: 'Отзывы',
            discord: 'Discord'
        },
        // Hero Section
        hero: {
            title: 'Wide Development',
            tagline: 'Вы мечтаете, мы строим.',
            stats: {
                totalService: 'Всего услуг',
                totalCustomer: 'Всего клиентов',
                widePersonnel: 'Персонал Wide'
            }
        },
        // Packages Section
        packages: {
            title: 'Наши пакеты',
            button: 'Подробнее'
        },
        // Team Section
        team: {
            title: 'Наша команда'
        },
        // Testimonials Section
        testimonials: {
            title: 'Отзывы клиентов',
            prev: 'Предыдущий отзыв',
            next: 'Следующий отзыв'
        },
        // Footer
        footer: {
            description: 'Вы мечтаете, мы строим.',
            quickLinks: 'Быстрые ссылки',
            legal: 'Юридическая информация',
            packages: 'Наши пакеты',
            team: 'Наша команда',
            testimonials: 'Отзывы',
            terms: 'Условия использования',
            privacy: 'Политика конфиденциальности',
            cookies: 'Политика cookie',
            copyright: '© 2026 Wide Development. Все права защищены.'
        },
        // Period translations
        period: {
            month: 'месяц',
            threeMonths: '3 месяца',
            sixMonths: '6 месяцев',
            year: 'год'
        },
        // Package Descriptions
        packageDescriptions: {
            whitelistV1: 'Полный пакет Whitelist Roleplay, специально подготовленный для тех, кто хочет открыть свой сервер быстро, стабильно и профессионально! Все системы оптимизированы, ошибки исправлены и организованы с ориентацией на производительность. При покупке этого пакета необходимые установки будут выполнены нашей командой, и он будет готов к использованию.'
        },
        // Package Features
        packageFeatures: {
            lowResmon: 'Низкие значения resmon (0.60-0.70)',
            stableInfra: 'Безошибочная и стабильная инфраструктура',
            easySetup: 'Простая установка (1-2 рабочих дня)',
            expandable: 'Расширяемые системы',
            rpReady: 'Готовый макет для ролевой игры',
            exploitProtection: 'Защита от эксплойтов и уязвимостей'
        }
    },
    ar: {
        // Navbar
        navbar: {
            brand: 'Development'
        },
        nav: {
            packages: 'الباقات',
            team: 'الفريق',
            testimonials: 'التقييمات'
        },
        // Sidebar
        sidebar: {
            packages: 'باقاتنا',
            team: 'فريقنا',
            testimonials: 'التقييمات',
            discord: 'Discord'
        },
        // Hero Section
        hero: {
            title: 'Wide Development',
            tagline: 'أنت تحلم، نحن نبني.',
            stats: {
                totalService: 'إجمالي الخدمات',
                totalCustomer: 'إجمالي العملاء',
                widePersonnel: 'موظفو Wide'
            }
        },
        // Packages Section
        packages: {
            title: 'باقاتنا',
            button: 'عرض التفاصيل'
        },
        // Team Section
        team: {
            title: 'فريقنا'
        },
        // Testimonials Section
        testimonials: {
            title: 'تقييمات العملاء',
            prev: 'التقييم السابق',
            next: 'التقييم التالي'
        },
        // Footer
        footer: {
            description: 'أنت تحلم، نحن نبني.',
            quickLinks: 'روابط سريعة',
            legal: 'قانوني',
            packages: 'باقاتنا',
            team: 'فريقنا',
            testimonials: 'التقييمات',
            terms: 'شروط الاستخدام',
            privacy: 'سياسة الخصوصية',
            cookies: 'سياسة ملفات تعريف الارتباط',
            copyright: '© 2026 Wide Development. جميع الحقوق محفوظة.'
        },
        // Period translations
        period: {
            month: 'شهر',
            threeMonths: '3 أشهر',
            sixMonths: '6 أشهر',
            year: 'سنة'
        },
        // Package Descriptions
        packageDescriptions: {
            whitelistV1: 'حزمة Whitelist Roleplay الكاملة المعدة خصيصًا لأولئك الذين يرغبون في فتح خادمهم بسرعة واستقرار واحترافية! تم تحسين جميع الأنظمة وإصلاح الأخطاء وترتيبها بطريقة موجهة نحو الأداء. عند شراء هذه الحزمة، سيتم إجراء التثبيتات اللازمة من قبل فريقنا وستكون جاهزة للاستخدام.'
        },
        // Package Features
        packageFeatures: {
            lowResmon: 'قيم resmon منخفضة (0.60-0.70)',
            stableInfra: 'بنية تحتية خالية من الأخطاء ومستقرة',
            easySetup: 'إعداد سهل (1-2 يوم عمل)',
            expandable: 'أنظمة قابلة للتوسع',
            rpReady: 'تخطيط جاهز للعب الأدوار',
            exploitProtection: 'حماية من الثغرات والاستغلال'
        }
    }
};

// Global değişkenler
let exchangeRates = {
    USD: 1,
    EUR: 1,
    RUB: 1,
    SAR: 1
};

// Döviz kurlarını çek
async function fetchExchangeRates() {
    try {
        // TCMB güncel kurları - Ücretsiz API
        const response = await fetch('https://api.exchangerate.host/latest?base=TRY&symbols=USD,EUR,RUB,SAR');
        const data = await response.json();
        
        if (data && data.rates) {
            exchangeRates.USD = data.rates.USD || 0.029;
            exchangeRates.EUR = data.rates.EUR || 0.027;
            exchangeRates.RUB = data.rates.RUB || 2.7;
            exchangeRates.SAR = data.rates.SAR || 0.11;
            
            console.log('Güncel döviz kurları:', exchangeRates);
            console.log('3.000 TL =', (3000 * exchangeRates.USD).toFixed(2), 'USD');
            console.log('3.000 TL =', (3000 * exchangeRates.EUR).toFixed(2), 'EUR');
            console.log('3.000 TL =', (3000 * exchangeRates.RUB).toFixed(2), 'RUB');
            console.log('3.000 TL =', (3000 * exchangeRates.SAR).toFixed(2), 'SAR');
        }
    } catch (error) {
        console.error('Döviz kuru çekme hatası:', error);
        // 14 Mart 2026 yaklaşık kurları (güncel piyasa değerleri)
        exchangeRates = {
            USD: 0.0217,  // 1 TRY = 0.0217 USD (3000 TL = ~65 USD)
            EUR: 0.020,   // 1 TRY = 0.020 EUR (3000 TL = ~60 EUR)
            RUB: 1.833,   // 1 TRY = 1.833 RUB (3000 TL = ~5500 RUB)
            SAR: 0.0833   // 1 TRY = 0.0833 SAR (3000 TL = ~250 SAR)
        };
        console.log('Varsayılan kurlar kullanılıyor:', exchangeRates);
    }
}

// Fiyatı dönüştür
function convertPrice(tryPrice, targetCurrency) {
    if (targetCurrency === 'TRY') {
        return tryPrice;
    }
    
    const rate = exchangeRates[targetCurrency];
    if (!rate) return tryPrice;
    
    return tryPrice * rate;
}

// Para birimi sembolü al
function getCurrencySymbol(currency) {
    const symbols = {
        'TRY': '₺',
        'USD': '$',
        'EUR': '€',
        'RUB': '₽',
        'SAR': 'ر.س'
    };
    return symbols[currency] || currency;
}

// Para birimi formatla
function formatCurrency(amount, currency, locale) {
    const symbol = getCurrencySymbol(currency);
    
    // Arapça için özel format
    if (locale === 'ar') {
        return `${amount.toLocaleString('ar-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbol}`;
    }
    
    // Rusça için özel format
    if (locale === 'ru') {
        return `${amount.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbol}`;
    }
    
    // Türkçe için
    if (currency === 'TRY') {
        return `${amount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbol}`;
    }
    
    // USD için
    if (currency === 'USD') {
        return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    // EUR için
    if (currency === 'EUR') {
        return `${symbol}${amount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    // Diğerleri için varsayılan
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Dile göre para birimi belirle
function getCurrencyForLocale(locale) {
    const currencyMap = {
        'tr': 'TRY',
        'en': 'USD',
        'de': 'EUR',
        'ru': 'RUB',
        'ar': 'SAR'
    };
    return currencyMap[locale] || 'TRY';
}

// Fiyatları güncelle
function updatePrices() {
    const locale = getCurrentLocale();
    const currency = getCurrencyForLocale(locale);
    
    console.log('Fiyatlar güncelleniyor:', locale, currency);
    
    // Tüm fiyat elementlerini bul
    const priceElements = document.querySelectorAll('.price-amount');
    
    priceElements.forEach(priceElement => {
        // Orijinal TRY fiyatını al (data-price-monthly her zaman TRY cinsinden)
        const tryPriceStr = priceElement.getAttribute('data-price-monthly');
        if (!tryPriceStr) return;
        
        const tryPrice = parseFloat(tryPriceStr);
        if (isNaN(tryPrice)) return;
        
        console.log('TRY Fiyat:', tryPrice);
        
        // Fiyatı dönüştür
        const convertedPrice = convertPrice(tryPrice, currency);
        console.log('Dönüştürülen fiyat:', convertedPrice, currency);
        
        // Formatla ve göster
        const formattedPrice = formatCurrency(convertedPrice, currency, locale);
        console.log('Formatlanmış fiyat:', formattedPrice);
        
        priceElement.textContent = formattedPrice;
    });
    
    // Fiyat birimlerini güncelle - sadece para birimi sembolü
    const priceUnits = document.querySelectorAll('.price-unit');
    priceUnits.forEach(unit => {
        const periodText = unit.querySelector('.period-text');
        if (periodText) {
            // Period text'i koru, para birimini gizle (çünkü zaten price-amount'ta var)
            unit.innerHTML = `<span class="period-text">${periodText.textContent}</span>`;
        }
    });
}

// Aktif dili al (localStorage'dan veya varsayılan)
function getCurrentLocale() {
    const saved = localStorage.getItem('locale');
    if (saved && ['tr', 'en', 'de', 'ru', 'ar'].includes(saved)) {
        return saved;
    }
    return 'tr'; // Varsayılan dil
}

// Dili kaydet
function setLocale(lang) {
    if (!['tr', 'en', 'de', 'ru', 'ar'].includes(lang)) {
        lang = 'tr';
    }
    localStorage.setItem('locale', lang);
    translatePage();
    updateLanguageButtons();
    updatePrices(); // Fiyatları güncelle
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
        const onclick = link.getAttribute('onclick');
        
        if (href === '/#packages') link.textContent = t('footer.packages');
        else if (href === '/#team') link.textContent = t('footer.team');
        else if (href === '/#testimonials') link.textContent = t('footer.testimonials');
        else if (onclick && onclick.includes('terms')) link.textContent = t('footer.terms');
        else if (onclick && onclick.includes('privacy')) link.textContent = t('footer.privacy');
        else if (onclick && onclick.includes('cookies')) link.textContent = t('footer.cookies');
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
            const translation = t(key);
            if (translation && translation !== key) {
                element.textContent = translation;
            }
        }
    });
    
    // Navbar linklerini çevir
    const navLinks = document.querySelectorAll('.nav-link[data-i18n]');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-i18n');
        if (key) {
            const translation = t(key);
            if (translation && translation !== key) {
                link.textContent = translation;
            }
        }
    });
    
    // Dil butonlarını güncelle
    updateLanguageButtons();
}

// Dil değiştirme butonlarına event listener ekle
function initLanguageSwitcher() {
    const langDropdownBtn = document.getElementById('langDropdownBtn');
    const langDropdownMenu = document.getElementById('langDropdownMenu');
    const langDropdownItems = document.querySelectorAll('.lang-dropdown-item');
    const currentLangFlag = document.getElementById('currentLangFlag');
    const currentLangName = document.getElementById('currentLangName');
    
    if (langDropdownBtn && langDropdownMenu) {
        // Toggle dropdown
        langDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdownBtn.classList.toggle('active');
            langDropdownMenu.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langDropdownBtn.contains(e.target) && !langDropdownMenu.contains(e.target)) {
                langDropdownBtn.classList.remove('active');
                langDropdownMenu.classList.remove('active');
            }
        });
        
        // Handle language selection
        langDropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const lang = item.getAttribute('data-lang');
                const flag = item.getAttribute('data-flag');
                
                // Update current language display
                if (currentLangFlag) currentLangFlag.textContent = flag;
                if (currentLangName) currentLangName.textContent = lang.toUpperCase();
                
                // Update active state
                langDropdownItems.forEach(opt => opt.classList.remove('active'));
                item.classList.add('active');
                
                // Close dropdown
                langDropdownBtn.classList.remove('active');
                langDropdownMenu.classList.remove('active');
                
                // Change language
                setLocale(lang);
            });
        });
    }
}

// Dil butonlarının active durumunu güncelle
function updateLanguageButtons() {
    const locale = getCurrentLocale();
    const langDropdownItems = document.querySelectorAll('.lang-dropdown-item');
    const currentLangFlag = document.getElementById('currentLangFlag');
    const currentLangName = document.getElementById('currentLangName');
    
    langDropdownItems.forEach(item => {
        const itemLang = item.getAttribute('data-lang');
        if (itemLang === locale) {
            item.classList.add('active');
            // Update current display
            const flag = item.getAttribute('data-flag');
            if (currentLangFlag) currentLangFlag.textContent = flag;
            if (currentLangName) currentLangName.textContent = locale.toUpperCase();
        } else {
            item.classList.remove('active');
        }
    });
}

// Sayfa yüklendiğinde çevir ve event listener'ları ekle
document.addEventListener('DOMContentLoaded', async () => {
    // Önce döviz kurlarını çek
    await fetchExchangeRates();
    
    updateLanguageButtons();
    translatePage();
    initLanguageSwitcher();
    updatePrices(); // İlk yüklemede fiyatları güncelle
});

// Global olarak erişilebilir yap
window.t = t;
window.translatePage = translatePage;
window.setLocale = setLocale;
window.getCurrentLocale = getCurrentLocale;
window.updatePrices = updatePrices;
window.fetchExchangeRates = fetchExchangeRates;
