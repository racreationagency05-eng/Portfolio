# Hunzila Nisar - Portfolio Website

A stunning, professional portfolio website showcasing AI/ML Engineering and Full-Stack Development expertise with cutting-edge animations, dark cyberpunk theme, and AI-powered chatbot.

## 🚀 Features

- ✨ **GSAP Animations** - Smooth scroll-triggered animations throughout
- 🎨 **Dark Cyberpunk Theme** - Modern, eye-catching design with neon accents
- 🤖 **AI Chatbot** - Powered by Google Gemini API
- 💫 **Particle Effects** - Interactive background animations
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Performance Optimized** - Fast loading and smooth interactions
- 🎯 **Custom Cursor** - Unique interactive cursor effects
- 🔄 **Preloader** - Professional loading animation
- 📊 **Animated Stats** - Dynamic counters and progress bars
- 🎭 **Scroll Animations** - Sections reveal beautifully on scroll

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Complete styling with animations
├── script.js           # JavaScript with GSAP & Gemini integration
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Clone or Download

Download all files to your local machine.

### 2. Configure Gemini API (For AI Chatbot)

1. Get your free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Open `script.js`
3. Find line 6 and replace with your API key:
   ```javascript
   GEMINI_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE'
   ```

### 3. Add Your Photo (Optional)

Replace the placeholder avatar in `index.html` (around line 156):
```html
<!-- Replace this section -->
<div class="avatar-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- With your actual image -->
<img src="path/to/your/photo.jpg" alt="Hunzila Nisar" style="width: 100%; height: 100%; object-fit: cover;">
```

### 4. Test Locally

Simply open `index.html` in your browser to test the portfolio.

## 🌐 Deploy to Netlify

### Method 1: Drag & Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag your project folder to the Netlify drop zone
4. Done! Your site is live

### Method 2: GitHub Integration

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to [Netlify](https://www.netlify.com/)
4. Click "New site from Git"
5. Connect your GitHub repository
6. Deploy!

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `style.css` (lines 9-18):
```css
:root {
    --primary-bg: #0a0e27;        /* Main background */
    --accent-cyan: #00f0ff;       /* Cyan accents */
    --accent-purple: #b744ff;     /* Purple accents */
    --accent-pink: #ff2e97;       /* Pink accents */
    /* ... more colors */
}
```

### Modify Content

All content is in `index.html`. Search for section IDs:
- `#home` - Hero section
- `#about` - About section
- `#skills` - Skills section
- `#experience` - Experience timeline
- `#projects` - Projects showcase
- `#education` - Education details
- `#certifications` - Certifications grid
- `#contact` - Contact information

### Update Projects

Find the projects grid in `index.html` (around line 600) and modify project cards:
```html
<div class="project-card">
    <!-- Your project details -->
</div>
```

## 🤖 AI Chatbot Configuration

The chatbot uses Google Gemini API. Features include:

- **Context-Aware**: Knows about your skills, projects, and experience
- **Fallback Responses**: Works even if API fails
- **Conversation History**: Maintains chat context
- **Professional Tone**: Friendly and informative responses

To customize chatbot knowledge, edit `PORTFOLIO_CONTEXT` in `script.js` (line 13).

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ⚡ Performance Tips

1. **Optimize Images**: Compress images before adding
2. **Lazy Loading**: Images load as you scroll
3. **Debounced Events**: Scroll events are optimized
4. **CDN Assets**: All libraries loaded from CDN

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations and effects
- **JavaScript ES6+** - Modern JavaScript
- **GSAP 3.12** - Professional animations
- **Particles.js** - Background particle effects
- **Google Gemini API** - AI chatbot
- **Font Awesome 6.5** - Icons
- **Google Fonts** - Orbitron, Rajdhani, Fira Code

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support)

## 🐛 Troubleshooting

### Chatbot Not Working

1. Verify API key is correct in `script.js`
2. Check browser console for errors
3. Ensure you have internet connection
4. Fallback responses will work even without API

### Animations Not Smooth

1. Check if GSAP loaded correctly
2. Clear browser cache
3. Test in different browser

### Particles Not Showing

1. Verify particles.js is loaded
2. Check browser console
3. Try refreshing the page

## 📧 Contact Information

- **Email**: hunzilanisar123@gmail.com
- **Phone**: +92 318 6326746
- **LinkedIn**: [linkedin.com/in/hunzilanisar-022439144](https://www.linkedin.com/in/hunzilanisar-022439144/)
- **GitHub**: [github.com/HunzilaRajput746](https://github.com/HunzilaRajput746)

## 📄 License

This portfolio is created for Hunzila Nisar. Feel free to use it as inspiration for your own portfolio!

## 🙏 Acknowledgments

- GSAP for amazing animations
- Particles.js for particle effects
- Google Gemini for AI capabilities
- Font Awesome for icons
- Google Fonts for typography

---

**Built with ❤️ by Hunzila Nisar**

**Note**: Remember to replace the Gemini API key with your actual key before deploying!
