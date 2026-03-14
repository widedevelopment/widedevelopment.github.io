// User-side Notification System - Toast bildirimleri ve modal

// Toast Notification Container
(function() {
    function initNotificationContainer() {
        if (!document.getElementById('toast-container')) {
            const container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 12px;
                max-width: 400px;
                pointer-events: none;
            `;
            document.body.appendChild(container);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNotificationContainer);
    } else {
        initNotificationContainer();
    }
})();

// Toast Notification göster
function showToast(message, type = 'info', duration = 5000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `toast-notification toast-${type}`;
    
    let icon = '';
    let bgColor = '';
    let borderColor = '';
    
    switch(type) {
        case 'success':
            icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>`;
            bgColor = 'rgba(34, 197, 94, 0.15)';
            borderColor = '#22c55e';
            break;
        case 'error':
            icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>`;
            bgColor = 'rgba(239, 68, 68, 0.15)';
            borderColor = '#ef4444';
            break;
        case 'warning':
            icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>`;
            bgColor = 'rgba(251, 191, 36, 0.15)';
            borderColor = '#fbbf24';
            break;
        default:
            icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>`;
            bgColor = 'rgba(59, 130, 246, 0.15)';
            borderColor = '#3b82f6';
    }
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 12px; background: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 12px; padding: 16px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); pointer-events: auto;">
            <div style="flex-shrink: 0; margin-top: 2px; color: ${borderColor};">
                ${icon}
            </div>
            <div style="flex: 1; color: var(--text-primary); font-size: 0.875rem; line-height: 1.5;">
                ${message}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="flex-shrink: 0; background: none; border: none; color: var(--text-secondary); cursor: pointer; padding: 0; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; opacity: 0.7; transition: opacity 0.2s;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Animasyon
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Otomatik kapat
    if (duration > 0) {
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, duration);
    }
}

// Helper fonksiyonlar
function showSuccess(message, duration = 5000) {
    showToast(message, 'success', duration);
}

function showError(message, duration = 5000) {
    showToast(message, 'error', duration);
}

function showWarning(message, duration = 5000) {
    showToast(message, 'warning', duration);
}

function showInfo(message, duration = 5000) {
    showToast(message, 'info', duration);
}

// Modal fonksiyonları
let pendingConfirmAction = null;

function showConfirmModal(title, message, confirmText = 'Onayla', cancelText = 'İptal') {
    const modal = document.getElementById('confirmModal');
    if (!modal) return Promise.reject('Modal bulunamadı');
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalConfirmBtn = document.getElementById('modalConfirmBtn');
    const modalCancelBtn = document.getElementById('modalCancelBtn');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = message.replace(/\n/g, '<br>');
    if (modalConfirmBtn) modalConfirmBtn.textContent = confirmText;
    if (modalCancelBtn) modalCancelBtn.textContent = cancelText;
    
    modal.classList.add('active');
    
    return new Promise((resolve, reject) => {
        pendingConfirmAction = { resolve, reject };
    });
}

function closeConfirmModal(result = false) {
    const modal = document.getElementById('confirmModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    
    if (pendingConfirmAction) {
        if (result) {
            pendingConfirmAction.resolve(true);
        } else {
            pendingConfirmAction.resolve(false);
        }
        pendingConfirmAction = null;
    }
}

// Bilgi modalı (sadece mesaj gösterir, tek buton)
function showInfoModal(title, message, buttonText = 'Tamam', onButtonClick = null) {
    return new Promise((resolve) => {
        const modal = document.getElementById('confirmModal');
        if (!modal) {
            resolve(false);
            return;
        }
        
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const modalConfirmBtn = document.getElementById('modalConfirmBtn');
        const modalCancelBtn = document.getElementById('modalCancelBtn');
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalBody) modalBody.innerHTML = message.replace(/\n/g, '<br>');
        
        // İptal butonunu gizle
        if (modalCancelBtn) {
            modalCancelBtn.style.display = 'none';
        }
        
        // Onay butonunu ayarla
        if (modalConfirmBtn) {
            modalConfirmBtn.textContent = buttonText;
            
            // Önceki onclick'i temizle ve yeni ekle
            modalConfirmBtn.onclick = () => {
                closeConfirmModal(true);
                // İptal butonunu tekrar göster
                if (modalCancelBtn) {
                    modalCancelBtn.style.display = '';
                }
                resolve(true);
                if (onButtonClick && typeof onButtonClick === 'function') {
                    onButtonClick();
                }
            };
        }
        
        modal.classList.add('active');
    });
}

// Modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        // Modal dışına tıklanınca kapat
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeConfirmModal(false);
            }
        });
        
        // ESC tuşu ile kapat
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeConfirmModal(false);
            }
        });
        
        // Onay butonu - SADECE pendingConfirmAction varsa çalışsın (eski satın alma sistemi için değil)
        const confirmBtn = document.getElementById('modalConfirmBtn');
        if (confirmBtn) {
            // Önceki event listener'ları temizle
            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
            
            newConfirmBtn.addEventListener('click', () => {
                // Eğer pendingConfirmAction varsa (showConfirmModal ile açıldıysa) çalışsın
                if (pendingConfirmAction) {
                    closeConfirmModal(true);
                }
            });
        }
        
        // İptal butonu
        const cancelBtn = document.getElementById('modalCancelBtn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                closeConfirmModal(false);
            });
        }
        
        // Kapat butonu
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeConfirmModal(false);
            });
        }
    }
});
