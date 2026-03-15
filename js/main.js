// Animate numbers when they come into view
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('tr-TR');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('tr-TR');
        }
    }, 16);
}

// Intersection Observer for stats animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const target = parseInt(statNumber.getAttribute('data-target')) || 0;

            if (!statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                animateNumber(statNumber, target);
            }
        }
    });
}, observerOptions);

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Ekip üyesi sayısını otomatik hesapla ve güncelle
function updateTeamCount() {
    const teamCards = document.querySelectorAll('#team .team-card');
    const teamCount = teamCards.length;
    
    console.log(`Ekip üyesi sayısı tespit edildi: ${teamCount}`);
    
    // Wide Personel stat'ını bul ve güncelle
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        const label = card.querySelector('.stat-label');
        if (label && (label.textContent.includes('Wide Personel') || label.textContent.includes('Wide Personnel'))) {
            const statNumber = card.querySelector('.stat-number');
            if (statNumber) {
                // data-target'ı güncelle
                statNumber.setAttribute('data-target', teamCount);
                // animated class'ını kaldır ki tekrar animasyon yapabilsin
                statNumber.classList.remove('animated');
                // Başlangıç değerini 0 yap
                statNumber.textContent = '0';
                console.log(`Wide Personel data-target güncellendi: ${teamCount}`);
            }
        }
    });
}

// Observe all stat numbers
document.addEventListener('DOMContentLoaded', () => {
    // Önce ekip sayısını güncelle
    updateTeamCount();
    
    // Sonra observer'ları başlat
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
    
    console.log('Stat observer\'lar başlatıldı');
});

// Sayfa tamamen yüklendikten sonra da bir kez daha kontrol et
window.addEventListener('load', () => {
    // Biraz bekle ki tüm elementler render olsun
    setTimeout(() => {
        updateTeamCount();
    }, 100);
});



// Sepet sayısını güncelleme fonksiyonu
async function updateCartCount(newCount = null) {
    try {
        // Eğer count verilmemişse API'den al
        if (newCount === null) {
            const response = await fetch('/api/cart');
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    newCount = data.itemCount || 0;
                } else {
                    newCount = 0;
                }
            } else {
                newCount = 0;
            }
        }

        // Navbar'daki sepet sayısını güncelle
        const cartBadge = document.getElementById('cart-count-badge');
        if (cartBadge) {
            if (newCount > 0) {
                cartBadge.textContent = newCount;
                cartBadge.style.display = 'flex';
            } else {
                cartBadge.style.display = 'none';
            }
        }
    } catch (error) {
        console.error('Sepet sayısı güncelleme hatası:', error);
    }
}

// Sayfa yüklendiğinde sepet sayısını güncelle
document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.userLoggedIn !== 'undefined' && window.userLoggedIn) {
        updateCartCount();
    }
});

// Package button click handler - İncele butonu Discord'a veya YouTube'a yönlendirir
document.addEventListener('click', async (e) => {
    const button = e.target.classList.contains('package-button') ? e.target : e.target.closest('.package-button');
    if (button && button.classList.contains('package-button')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        // YouTube URL varsa direkt oraya git
        const youtubeUrl = button.getAttribute('data-youtube-url');
        if (youtubeUrl) {
            window.open(youtubeUrl, '_blank');
            return;
        }

        const packageCard = button.closest('.package-card');
        const packagesSection = packageCard.closest('.packages-section');

        // Product bilgilerini al
        const productType = button.getAttribute('data-product-type');
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');

        if (!productType || !productId || !productName) {
            return;
        }

        // Period ve fiyat bilgilerini al
        let activePeriod = 'monthly';
        let period = 'monthly';
        let price = 0;
        let periodText = 'aylık';

        if (productType === 'service') {
            const servicePeriod = button.getAttribute('data-period') || 'aylık';
            period = servicePeriod;
            price = parseFloat(button.getAttribute('data-price-monthly')) || 0;
            const periodLower = servicePeriod.toLowerCase().trim();
            if (periodLower === 'tek seferlik' || periodLower.includes('tek seferlik')) {
                periodText = 'Tek Seferlik';
            } else if (periodLower === '1 haftalık' || periodLower === '1 hafta') {
                periodText = '1 Haftalık';
            } else if (periodLower === '2 haftalık' || periodLower === '2 hafta') {
                periodText = '2 Haftalık';
            } else if (periodLower === 'aylık' || periodLower === 'monthly' || periodLower === 'ay') {
                periodText = 'Aylık';
            } else if (periodLower === '3 aylık' || periodLower === '3monthly' || periodLower === '3 ay') {
                periodText = '3 Aylık';
            } else if (periodLower === '6 aylık' || periodLower === '6monthly' || periodLower === '6 ay') {
                periodText = '6 Aylık';
            } else if (periodLower === 'yıllık' || periodLower === 'yearly' || periodLower === 'yıl') {
                periodText = 'Yıllık';
            } else {
                periodText = 'Aylık';
            }
        } else if (productType === 'website' && (button.getAttribute('data-period') === 'tek seferlik' || button.getAttribute('data-period') === 'one_time')) {
            period = 'tek seferlik';
            price = parseFloat(button.getAttribute('data-price-monthly')) || 0;
            periodText = 'Tek Seferlik';
        } else {
            if (packagesSection) {
                const toggle = packagesSection.querySelector('.pricing-toggle');
                if (toggle) {
                    const activeOption = toggle.querySelector('.toggle-option.active');
                    if (activeOption) {
                        activePeriod = activeOption.getAttribute('data-period') || 'monthly';
                    }
                }
            }

            const priceMonthly = parseFloat(button.getAttribute('data-price-monthly')) || 0;
            const price3Monthly = parseFloat(button.getAttribute('data-price-3monthly')) || 0;
            const price6Monthly = parseFloat(button.getAttribute('data-price-6monthly')) || 0;
            const priceYearly = parseFloat(button.getAttribute('data-price-yearly')) || 0;

            price = priceMonthly;
            if (activePeriod === 'yearly' && priceYearly > 0) {
                price = priceYearly;
            } else if (activePeriod === '6monthly' && price6Monthly > 0) {
                price = price6Monthly;
            } else if (activePeriod === '3monthly' && price3Monthly > 0) {
                price = price3Monthly;
            }

            const periodMap = {
                'monthly': 'monthly',
                '3monthly': '3monthly',
                '6monthly': '6monthly',
                'yearly': 'yearly'
            };
            period = periodMap[activePeriod] || 'monthly';
            periodText = activePeriod === 'yearly' ? 'yıllık' : activePeriod === '6monthly' ? '6 aylık' : activePeriod === '3monthly' ? '3 aylık' : 'aylık';
        }

        // Butonu devre dışı bırak
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = 'Yönlendiriliyor...';

        try {
            // Backend'e bildirim gönder
            await fetch('/api/product-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productType: productType,
                    productId: parseInt(productId),
                    productName: productName,
                    price: Math.round(price),
                    period: periodText
                })
            });

            // Discord sunucusuna yönlendir
            window.open('https://discord.gg/Xy2FKS5x', '_blank');
            
            button.textContent = 'Discord\'a Yönlendirildi ✓';
            setTimeout(() => {
                button.disabled = false;
                button.textContent = originalText;
            }, 2000);
        } catch (error) {
            console.error('Hata:', error);
            button.disabled = false;
            button.textContent = originalText;
        }
    }
}, true);

// Sidebar Active State
document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const sections = document.querySelectorAll('section[id]');
    const heroSection = document.querySelector('.hero-section');

    // Update active sidebar item based on scroll position
    function updateActiveSidebarItem() {
        const scrollPosition = window.scrollY + 150;
        let activeSectionFound = false;

        // Check if we're in hero section
        if (heroSection) {
            const heroTop = heroSection.offsetTop;
            const heroHeight = heroSection.offsetHeight;

            if (scrollPosition < heroTop + heroHeight - 150) {
                // We're in hero section, remove all active states
                sidebarItems.forEach(item => {
                    item.classList.remove('active');
                });
                return;
            }
        }

        // Check other sections
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSectionFound = true;
                sidebarItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-section') === sectionId ||
                        item.getAttribute('href') === `/#${sectionId}` ||
                        item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });

        // If no section is active, remove all active states
        if (!activeSectionFound) {
            sidebarItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveSidebarItem);
    updateActiveSidebarItem(); // Initial check

    // Smooth scroll for sidebar links
    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Testimonials Slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonialsSlider');
    const track = slider?.querySelector('.testimonials-track');
    const cards = track?.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsContainer = document.getElementById('testimonialsDots');

    if (!slider || !track || !cards || cards.length === 0) return;

    let currentIndex = 0;
    const totalCards = cards.length;

    function goToSlide(index) {
        if (index < 0 || index >= totalCards) return;
        currentIndex = index;
        updateSlider();
    }

    function updateSlider() {
        // Remove active class from all cards
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update track position
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        const dots = dotsContainer?.querySelectorAll('.testimonial-dot');
        dots?.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update buttons
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === totalCards - 1;
    }

    // Create dots
    if (dotsContainer && totalCards > 1) {
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Yorum ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function nextSlide() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (slider.parentElement.getBoundingClientRect().top < window.innerHeight &&
            slider.parentElement.getBoundingClientRect().bottom > 0) {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        }
    });

    // Auto-play
    let autoPlayInterval = null;

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (currentIndex < totalCards - 1) {
                nextSlide();
            } else {
                goToSlide(0);
            }
        }, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    if (totalCards > 1) {
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();
    }

    // Initialize
    updateSlider();
});

// Pricing Toggle Functionality
// Fiyat formatlama fonksiyonu
function formatPrice(priceElement, period = null) {
    const priceMonthly = priceElement.getAttribute('data-price-monthly');
    const price3Monthly = priceElement.getAttribute('data-price-3monthly');
    const price6Monthly = priceElement.getAttribute('data-price-6monthly');
    const priceYearly = priceElement.getAttribute('data-price-yearly');

    // Period belirtilmemişse aktif period'u bul (default: monthly)
    let activePeriod = period;
    if (!activePeriod) {
        const packagesSection = priceElement.closest('.packages-section');
        const toggle = packagesSection?.querySelector('.pricing-toggle');

        if (toggle) {
            const activeOption = toggle.querySelector('.toggle-option.active');
            if (activeOption) {
                activePeriod = activeOption.getAttribute('data-period') || 'monthly';
            } else {
                activePeriod = 'monthly';
            }
        } else {
            activePeriod = 'monthly';
        }
    }

    let displayPrice = priceMonthly;

    // Seçilen period'a göre fiyat göster
    if (activePeriod === 'yearly' && priceYearly && priceYearly !== '') {
        displayPrice = priceYearly;
    } else if (activePeriod === '6monthly' && price6Monthly && price6Monthly !== '') {
        displayPrice = price6Monthly;
    } else if (activePeriod === '3monthly' && price3Monthly && price3Monthly !== '') {
        displayPrice = price3Monthly;
    } else {
        displayPrice = priceMonthly;
    }

    const priceNum = parseFloat(displayPrice);
    if (priceNum) {
        // Her zaman 2 ondalık basamak göster (örn: 1 -> 1,00, 1000 -> 1.000,00)
        return priceNum.toLocaleString('tr-TR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    return '-';
}

// Üstü çizili fiyatı güncelle (period'a göre). Paket/Bot: 1 aylık fiyat × dönem (3 ay→×3, 6 ay→×6, yıl→×12)
function updateStrikethroughPrice(priceElement, period) {
    const priceWrap = priceElement.closest('.package-price');
    if (!priceWrap) return;
    const strikeEl = priceWrap.querySelector('.price-strikethrough');
    if (!strikeEl) return;
    if (period == null) {
        const section = priceElement.closest('.packages-section');
        const toggle = section?.querySelector('.pricing-toggle');
        const activeOpt = toggle?.querySelector('.toggle-option.active');
        period = activeOpt?.getAttribute('data-period') || 'monthly';
    }
    const oldLine = priceWrap.querySelector('.price-old-line');
    const monthlyStr = priceElement.getAttribute('data-price-monthly');
    const hasMultiPeriod = priceElement.getAttribute('data-price-3monthly') || priceElement.getAttribute('data-price-6monthly') || priceElement.getAttribute('data-price-yearly');
    // Paket/Bot: çizik = 1 aylık fiyat × dönem (elle girmiyoruz)
    if (hasMultiPeriod && monthlyStr !== '' && monthlyStr !== null) {
        const monthly = parseFloat(monthlyStr);
        if (period === 'monthly' || isNaN(monthly)) {
            strikeEl.textContent = '';
            if (oldLine) oldLine.style.display = 'none';
            return;
        }
        let mult = 1;
        if (period === '3monthly') mult = 3;
        else if (period === '6monthly') mult = 6;
        else if (period === 'yearly') mult = 12;
        const strikeValue = monthly * mult;
        strikeEl.textContent = strikeValue.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        strikeEl.style.display = '';
        if (oldLine) oldLine.style.display = '';
        return;
    }
    // Eski mantık: DB'den gelen data-strike-* (örn. hizmetler) - sadece bu attr varsa dokun
    const attr = 'data-strike-' + (period === 'yearly' ? 'yearly' : period === '6monthly' ? '6monthly' : period === '3monthly' ? '3monthly' : 'monthly');
    if (!strikeEl.hasAttribute('data-strike-monthly') && !strikeEl.hasAttribute('data-strike-3monthly') && !strikeEl.hasAttribute('data-strike-6monthly') && !strikeEl.hasAttribute('data-strike-yearly')) {
        return; // Hizmet gibi statik çizik: JS dokunmasın
    }
    const val = strikeEl.getAttribute(attr);
    if (val && val !== '') {
        const num = parseFloat(val);
        strikeEl.textContent = num ? num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : val;
        strikeEl.style.display = '';
        if (oldLine) oldLine.style.display = '';
    } else {
        strikeEl.textContent = '';
        strikeEl.style.display = 'none';
        if (oldLine) oldLine.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklendiğinde tüm fiyatları formatla
    const allPriceAmounts = document.querySelectorAll('.price-amount');
    allPriceAmounts.forEach(priceElement => {
        const formattedPrice = formatPrice(priceElement);
        if (formattedPrice !== '-') {
            priceElement.textContent = formattedPrice;
        }
        // Çizik fiyat boşsa "Yerine" satırını gizle (ilk yükleme)
        updateStrikethroughPrice(priceElement, null);
    });

    const pricingToggles = document.querySelectorAll('.pricing-toggle');

    pricingToggles.forEach(toggle => {
        const toggleOptions = toggle.querySelectorAll('.toggle-option');
        const section = toggle.closest('.packages-section');
        const packagesGrid = section?.querySelector('.packages-grid');

        if (!packagesGrid) return;

        toggleOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Tüm tooltip'leri gizle ve active class'ını kaldır
                toggleOptions.forEach(opt => {
                    const tooltip = opt.querySelector('.preferred-tooltip');
                    if (tooltip) {
                        tooltip.style.opacity = '0';
                        tooltip.style.visibility = 'hidden';
                        tooltip.style.transform = 'translateX(-50%)';
                    }
                    opt.classList.remove('active');
                });

                // Add active class to clicked option
                option.classList.add('active');

                // Aktif butonun tooltip'ini göster
                const activeTooltip = option.querySelector('.preferred-tooltip');
                if (activeTooltip) {
                    activeTooltip.style.opacity = '1';
                    activeTooltip.style.visibility = 'visible';
                    activeTooltip.style.transform = 'translateX(-50%) translateY(-5px)';
                }

                // Get discount and period
                const discount = parseFloat(option.getAttribute('data-discount'));
                const period = option.getAttribute('data-period');

                // Update all prices in this section
                const priceAmounts = packagesGrid.querySelectorAll('.price-amount');
                const periodTexts = packagesGrid.querySelectorAll('.period-text');
                const priceUnits = packagesGrid.querySelectorAll('.price-unit');

                priceAmounts.forEach((priceElement, index) => {
                    if (priceElement.hasAttribute('data-no-toggle')) return;

                    const _i18nP = (window.i18n && window.i18n.period) ? window.i18n.period : {};
                    let periodDisplay = _i18nP.month || 'ay';

                    // Period display text belirle
                    if (period === 'yearly') {
                        periodDisplay = _i18nP.year || 'yıl';
                    } else if (period === '6monthly') {
                        periodDisplay = _i18nP.sixMonths || '6 ay';
                    } else if (period === '3monthly') {
                        periodDisplay = _i18nP.threeMonths || '3 ay';
                    }

                    // Fiyat formatla ve göster (period parametresi ile)
                    const formattedPrice = formatPrice(priceElement, period);
                    if (formattedPrice !== '-') {
                        priceElement.textContent = formattedPrice;
                    } else {
                        priceElement.textContent = '-';
                    }
                    // Üstü çizili fiyatı güncelle
                    updateStrikethroughPrice(priceElement, period);
                    if (periodTexts[index] && !priceElement.hasAttribute('data-no-toggle')) {
                        periodTexts[index].textContent = periodDisplay;
                    }
                });
            });
        });

        // Sayfa yüklendiğinde aktif butonun tooltip'ini göster, diğerlerini gizle
        toggleOptions.forEach(option => {
            const tooltip = option.querySelector('.preferred-tooltip');
            if (option.classList.contains('active')) {
                if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                    tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
                }
            } else {
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.transform = 'translateX(-50%)';
                }
            }
        });
    });
});

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
    fetchDiscordOnlineMembers();
});

// Discord çevrimiçi üye sayısını çek
async function fetchDiscordOnlineMembers() {
    const guildId = '1480648967980322958';
    const onlineMembersElement = document.getElementById('onlineMembers');
    
    if (!onlineMembersElement) return;
    
    try {
        const response = await fetch(`/api/discord/online/${guildId}`);
        const data = await response.json();
        
        if (data.success) {
            // Animasyonlu sayı gösterimi
            const target = data.onlineCount || 0;
            onlineMembersElement.setAttribute('data-target', target);
            animateNumber(onlineMembersElement, target);
        } else {
            console.error('Discord API hatası:', data.error);
            onlineMembersElement.textContent = '-';
        }
    } catch (error) {
        console.error('Discord üye sayısı çekme hatası:', error);
        onlineMembersElement.textContent = '-';
    }
}


// Language Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const langDropdown = document.querySelector('.lang-switcher-dropdown');
    const langCurrent = document.getElementById('langCurrent');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langCurrent && langDropdown) {
        // Toggle dropdown
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });

        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const lang = option.getAttribute('data-lang');
                const flag = option.getAttribute('data-flag');
                const name = option.getAttribute('data-name');
                
                // Update current language display
                const currentFlag = langCurrent.querySelector('.lang-flag');
                const currentName = langCurrent.querySelector('.lang-name');
                if (currentFlag) currentFlag.textContent = flag;
                if (currentName) currentName.textContent = lang.toUpperCase();
                
                // Update active state
                langOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close dropdown
                langDropdown.classList.remove('active');
                
                // Change language
                if (typeof setLocale === 'function') {
                    setLocale(lang);
                }
            });
        });
    }
});
