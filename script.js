// Interactive button functionality
const button = document.getElementById('clickMe');
const message = document.getElementById('message');

let clickCount = 0;

const messages = [
    '🎉 Great job!',
    '✨ Keep clicking!',
    '🚀 You\'re awesome!',
    '💫 Fantastic!',
    '🌟 Amazing work!',
    '🎊 Spectacular!',
    '⚡ You\'re on fire!',
    '🎈 Wonderful!'
];

button.addEventListener('click', () => {
    clickCount++;
    
    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Update message with click count
    message.textContent = `${randomMessage} You've clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
    
    // Add animation effect
    message.style.animation = 'none';
    setTimeout(() => {
        message.style.animation = 'fadeIn 0.5s ease';
    }, 10);
    
    // Change button color randomly
    const colors = ['#667eea', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = 'white';
    button.style.color = randomColor;
});

// Console greeting
console.log('%c🎉 Welcome to OneStack Portal!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cThis is a static site example demonstrating HTML, CSS, and JavaScript.', 'font-size: 14px; color: #666;');

// Add subtle parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
