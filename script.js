// ===================================
// Configuration & Constants
// ===================================
const CONFIG = {
    // Replace this with your actual Gemini API key
    GEMINI_API_KEY: 'AIzaSyAxCaPHQG21uhbVSYPdCUklIKHfilZKTAk', // Paste your API key here
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
};

// Portfolio data for AI context
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Hunzila Nisar's portfolio. Here's information about her:

PROFILE:
- Name: Hunzila Nisar
- Location: Lodhran, Pakistan
- Email: hunzilanisar123@gmail.com
- Phone: +92 318 6326746
- Title: AI/ML Engineer & Full-Stack Developer
- Education: BSc in Artificial Intelligence from The Islamia University of Bahawalpur (2021-2025)

SKILLS:
AI/ML: Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, Pandas, NumPy
Web Development: React, Node.js, Express, MongoDB, HTML, CSS, JavaScript, Material UI, Bootstrap
IoT: Arduino, ESP32, Sensor Integration
Tools: Git, GitHub, Docker, REST APIs

MAJOR PROJECTS:
1. Smart Helmet with Navigation System (FYP) - IoT safety system with GPS, crash detection, facial recognition (90% accuracy, A+ grade)
2. Cancer Detection System - ML pipeline achieving 96% accuracy with Random Forest
3. Video-based Depression Screening - Computer vision system for mental health screening
4. Wanderlust - Full-stack MERN travel platform
5. IPL Analytics Dashboard - Data analysis and visualization

EXPERIENCE:
- Project Engineer at IUB (Jan 2025 - May 2025) - Smart Helmet project
- Front-End Development Intern (Aug 2024 - Oct 2024) - React development

CERTIFICATIONS:
- Front-End Development Certificate
- ML/AI Course (3 months, NAVTTC affiliated)
- Arduino Circuiting Certificate
- 3rd Position - Annual Expo 2022

ACHIEVEMENTS:
- 90% accuracy in Smart Helmet system
- 96% accuracy in Cancer Detection
- A+ grade in Final Year Project
- Multiple certifications and awards

Answer questions about Hunzila's skills, projects, experience, and qualifications in a friendly, professional manner.
`;

// ===================================
// Preloader
// ===================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.classList.add('hidden');
        initAnimations();
    }, 2000);
});

// ===================================
// GSAP Animations
// ===================================
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    // Hero typing animation
    const roles = [
        'AI/ML Engineer',
        'Full-Stack Developer',
        'IoT Enthusiast',
        'Problem Solver',
        'Tech Innovator'
    ];
    
    let roleIndex = 0;
    const typingText = document.querySelector('.typing-text');
    
    function typeRole() {
        const currentRole = roles[roleIndex];
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
            if (charIndex < currentRole.length) {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    eraseRole();
                }, 2000);
            }
        }, 100);
    }
    
    function eraseRole() {
        const currentRole = roles[roleIndex];
        let charIndex = currentRole.length;
        
        const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                clearInterval(eraseInterval);
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(() => {
                    typeRole();
                }, 500);
            }
        }, 50);
    }
    
    typeRole();
    
    // Scroll animations for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section.querySelector('.section-header'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });
    
    // Skill bars animation
    gsap.utils.toArray('.skill-progress').forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%'
            },
            width: `${progress}%`,
            duration: 1.5,
            ease: 'power2.out'
        });
    });
    
    // Stats counter animation
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(stat, {
                    textContent: target,
                    duration: 2,
                    snap: { textContent: 1 },
                    ease: 'power1.out'
                });
            }
        });
    });
    
    // Cards hover animations
    gsap.utils.toArray('.project-card, .cert-card, .hobby-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
}

// ===================================
// Custom Cursor
// ===================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor interactions
document.querySelectorAll('a, button, .project-card, .social-icon').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// ===================================
// Navigation
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Particles.js Configuration
// ===================================
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00f0ff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00f0ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ===================================
// Contact Form
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// ===================================
// AI Chatbot with Gemini
// ===================================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

let conversationHistory = [];

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Send message
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    chatbotInput.value = '';
    
    // Show typing indicator
    const typingIndicator = addTypingIndicator();
    
    try {
        // Call Gemini API
        const response = await callGeminiAPI(message);
        
        // Remove typing indicator
        typingIndicator.remove();
        
        // Add bot response
        addMessageToChat(response, 'bot');
    } catch (error) {
        typingIndicator.remove();
        
        // Fallback response if API fails
        const fallbackResponse = getFallbackResponse(message);
        addMessageToChat(fallbackResponse, 'bot');
    }
}

function addMessageToChat(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
        </div>
        <div class="message-content">${message}</div>
    `;
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">Typing...</div>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return typingDiv;
}

async function callGeminiAPI(userMessage) {
    // Check if API key is configured
    if (!CONFIG.GEMINI_API_KEY || CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        console.warn('⚠️ Gemini API key not configured. Using fallback responses.');
        throw new Error('API key not configured');
    }
    
    const prompt = `${PORTFOLIO_CONTEXT}

User Question: ${userMessage}

Please provide a helpful, friendly response based on Hunzila's portfolio information. Keep responses concise (2-3 sentences) and professional.`;
    
    try {
        const response = await fetch(`${CONFIG.GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.9,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 300,
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('❌ Gemini API Error:', errorData);
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if we got a valid response
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const botResponse = data.candidates[0].content.parts[0].text;
            console.log('✅ Gemini API Response received');
            return botResponse;
        } else {
            console.error('❌ Invalid response format:', data);
            throw new Error('Invalid response format');
        }
        
    } catch (error) {
        console.error('❌ Error calling Gemini API:', error);
        throw error;
    }
}

function getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Skills related
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
        return "Hunzila specializes in AI/ML (Python, PyTorch, TensorFlow, OpenCV) and Full-Stack Development (React, Node.js, Express, MongoDB). She also has IoT experience with Arduino and ESP32!";
    }
    
    // Projects related
    if (lowerMessage.includes('project')) {
        return "Her notable projects include a Smart Helmet with 90% accuracy (A+ grade), Cancer Detection System achieving 96% accuracy, and a MERN stack travel platform called Wanderlust. Check out the Projects section for details!";
    }
    
    // Experience related
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
        return "Hunzila worked as a Project Engineer on the Smart Helmet project at IUB and completed a Front-End Development internship focusing on React. She has 3+ years of hands-on experience in AI/ML and web development.";
    }
    
    // Education related
    if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
        return "She holds a BSc in Artificial Intelligence from The Islamia University of Bahawalpur (2021-2025), specializing in AI, ML, Deep Learning, and IoT systems.";
    }
    
    // Contact related
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return "You can reach Hunzila at hunzilanisar123@gmail.com or +92 318 6326746. Feel free to connect via LinkedIn or GitHub as well!";
    }
    
    // Achievements related
    if (lowerMessage.includes('achievement') || lowerMessage.includes('award')) {
        return "She secured 3rd position at the Annual Expo 2022 and earned an A+ grade for her Smart Helmet FYP with 90% system accuracy. She also has multiple certifications including Front-End Development and ML/AI courses.";
    }
    
    // Location related
    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
        return "Hunzila is based in Lodhran, Pakistan. She's open to remote opportunities and collaborations worldwide!";
    }
    
    // Hire/collaborate related
    if (lowerMessage.includes('hire') || lowerMessage.includes('collaborate') || lowerMessage.includes('available')) {
        return "Hunzila is currently open to exciting opportunities in AI/ML and Full-Stack Development! Feel free to reach out via the contact form or email at hunzilanisar123@gmail.com.";
    }
    
    // Default response
    return "I'm here to help you learn about Hunzila's skills, projects, and experience! You can ask me about her technical expertise, projects, education, or how to get in touch. What would you like to know?";
}

// ===================================
// Utility Functions
// ===================================

// Lazy load images (if you add images later)
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===================================
// Console Easter Egg
// ===================================
console.log('%cHunzila Nisar Portfolio', 'color: #00f0ff; font-size: 24px; font-weight: bold;');
console.log('%cLooking for a talented AI/ML Engineer? You found one!', 'color: #b744ff; font-size: 14px;');
console.log('%cEmail: hunzilanisar123@gmail.com', 'color: #a0aec0; font-size: 12px;');
console.log('%cGitHub: github.com/HunzilaRajput746', 'color: #a0aec0; font-size: 12px;');

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    // Your scroll-based logic here
}, 10));
