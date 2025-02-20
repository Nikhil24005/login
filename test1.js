// Add this to your main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('teamCarousel');
    const prevBtn = document.getElementById('teamPrevBtn');
    const nextBtn = document.getElementById('teamNextBtn');
    
    // Sample team members data - replace with your actual data
    const teamMembers = Array.from({ length: 15 }, (_, i) => ({
        name: `Team Member ${i + 1}`,
        position: 'Position',
        image: 'path-to-image.jpg'
    }));
    
    // Create and append team member cards
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="card-image"></div>
            <div class="card-content">
                <h3 class="card-name">${member.name}</h3>
                <p class="card-position">${member.position}</p>
                <div class="social-links">
                    <a href="#" class="social-link"><img src="mailvector.png" alt="mail"></a>
                    <a href="#" class="social-link"><img src="linkedinvector.png" alt="linkedin"></a>
                    <a href="#" class="social-link"><img src="githubvector.png" alt="github"></a>
                </div>
            </div>
        `;
        carousel.appendChild(card);
    });
    
    // Carousel navigation
    let currentPosition = 0;
    const cardWidth = carousel.querySelector('.team-card').offsetWidth;
    
    nextBtn.addEventListener('click', () => {
        currentPosition = Math.max(currentPosition - cardWidth, -cardWidth * (teamMembers.length - 4));
        carousel.style.transform = `translateX(${currentPosition}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + cardWidth, 0);
        carousel.style.transform = `translateX(${currentPosition}px)`;
    });
});