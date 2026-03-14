// Ekip üyelerinin Discord avatar'larını dinamik olarak yükle
async function loadTeamAvatars() {
    const teamCards = document.querySelectorAll('.team-card');
    
    // Çınar'ın Discord ID'si
    const cinarUserId = '1479112232305561704';
    
    for (const card of teamCards) {
        const img = card.querySelector('.team-avatar img');
        const name = card.querySelector('.team-name');
        
        if (!img || !name) continue;
        
        // Çınar Y. için özel işlem
        if (name.textContent.trim() === 'Çınar Y.') {
            try {
                const response = await fetch(`/api/discord/user/${cinarUserId}`);
                const data = await response.json();
                
                if (data.success && data.avatarUrl) {
                    img.src = data.avatarUrl;
                }
            } catch (error) {
                console.error('Avatar yükleme hatası:', error);
            }
        }
    }
}

// Sayfa yüklendiğinde avatar'ları yükle
document.addEventListener('DOMContentLoaded', loadTeamAvatars);
