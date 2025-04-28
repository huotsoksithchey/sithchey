document.addEventListener('DOMContentLoaded', function() {
    // Floating hearts animation
    function createHearts() {
        const heartsContainer = document.getElementById('hearts');
        if (!heartsContainer) return;
        
        const colors = ['#ff9bb3', '#ff6b8b', '#d4a5ff', '#ff85a2'];
        
        for (let i = 0; i < 12; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 30 + '%';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.animationDelay = (Math.random() * 2) + 's';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heartsContainer.appendChild(heart);
        }
    }
    
    createHearts();
    
    // Add sparkle effect to navigation buttons
    const navLinks = document.querySelectorAll('.cute-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createSparkle(link);
                }, i * 200);
            }
        });
    });
    
    function createSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = (Math.random() * 10 + 10) + 'px';
        sparkle.style.opacity = '0.8';
        
        const rect = element.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
    
    // Add animation to cards on homepage
    if (document.body.classList.contains('about-page')) {
        const buttons = document.querySelectorAll('.cute-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Surprise message function
    const cuteMessages = [
        "You're amazing! ✨",
        "Have a wonderful day! 🌸",
        "Stay cute always! 🎀",
        "Sending you sparkles! ✨",
        "You're doing great! 💖",
        "The world needs your light! 🌟",
        "You're as sweet as candy! 🍬",
        "Your smile brightens the world! ☀️",
        "You're one in a melon! 🍉",
        "Stay pawsitive! 🐾"
    ];

    function showRandomMessage() {
        const message = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.position = 'fixed';
        messageElement.style.bottom = '20px';
        messageElement.style.right = '20px';
        messageElement.style.backgroundColor = '#ff9bb3';
        messageElement.style.color = 'white';
        messageElement.style.padding = '15px 25px';
        messageElement.style.borderRadius = '50px';
        messageElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        messageElement.style.zIndex = '1000';
        messageElement.style.animation = 'fadeInOut 3s ease-out forwards';
        messageElement.style.fontSize = '1.2rem';
        
        document.body.appendChild(messageElement);
        
        // Remove after animation
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }

    // Add click event to profile picture
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', showRandomMessage);
    }
    
    // Add click event to navigation icons
    const navIcons = document.querySelectorAll('.cute-nav i');
    navIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the parent link
            showRandomMessage();
        });
    });
    
    // Add click event to footer
    const footer = document.querySelector('.cute-footer');
    if (footer) {
        footer.addEventListener('click', showRandomMessage);
    }

    // Add click event to surprise button
    const surpriseButton = document.querySelector('.surprise-button');
    if (surpriseButton) {
        surpriseButton.addEventListener('click', function() {
            showRandomMessage();
            // Add extra animation for the button
            this.style.animation = 'none';
            void this.offsetWidth; // Trigger reflow
            this.style.animation = 'pulse 0.5s ease';
            
            // Create confetti effect
            createConfetti(this);
        });
    }
    
    // Confetti function
    function createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#ff9bb3', '#ff6b8b', '#d4a5ff', '#ff85a2', '#ffb3c6'];
        const icons = ['✨', '🎀', '🌸', '💖', '🌟'];
        
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = (rect.left + rect.width / 2) + 'px';
            confetti.style.top = (rect.top) + 'px';
            confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
            confetti.style.zIndex = '1000';
            confetti.style.setProperty('--random-x', (Math.random() > 0.5 ? '' : '-') + (Math.random() * 100 + 50) + 'px');
            confetti.style.animation = `confettiFall ${Math.random() * 2 + 1}s ease-out forwards`;
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }
});
