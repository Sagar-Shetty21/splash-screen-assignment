added splash screen animation

-   Starts from left side, scaled down (0.3x)
-   Moves to center while rotating 180 degrees
-   Scales up to full size with smooth easing
-   Adds glowing effect when centered

### Logo Animation

-   Two curved strokes draw simultaneously from center outward
-   Top connecting line appears after curves complete
-   Gradient fill animates from 0% to 100% coverage
-   All elements fade out in coordinated sequence

### Text Animation

-   "ELEVATE" text fades in with upward motion
-   Large, bold typography with letter spacing
-   Synchronized fade-out with other elements

## 🛠 Technologies Used

-   **HTML5** - Semantic structure
-   **CSS3** - Styling and Tailwind utilities
-   **JavaScript (ES6+)** - Animation logic
-   **GSAP 3.13.0** - Professional animation library
-   **Tailwind CSS 4.1.8** - Modern utility-first styling
-   **Parcel 2.15.2** - Fast web application bundler

## 📋 Prerequisites

Before running this project, make sure you have:

-   **Node.js** (version 16 or higher)
-   **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Clone or Download Project

```bash
# If using git
git clone <repository-url>
cd splash-screen-assignment

# Or download and extract the project files
```

### 2. Install Dependencies

```bash
npm install
```

This will install:

-   Parcel bundler for development server
-   GSAP for animations
-   Tailwind CSS for styling

### 3. Start Development Server

```bash
npm start
```

This command will:

-   Start the Parcel development server
-   Automatically open your browser to `http://localhost:1234`
-   Enable hot reloading for instant updates

### 4. View the Animation

Once the server starts, you'll see the splash screen animation play automatically. The sequence includes:

1. **Initial load** (1.5s delay)
2. **Star animation** (1.5s duration)
3. **Logo drawing** (0.8s per stroke)
4. **Gradient fill** (1.5s duration)
5. **Text fade-in** (2.5s duration)
6. **Complete fade-out** (1.2s duration)

## 🔧 Available Scripts

-   `npm start` - Start development server with hot reload
-   `npm run build` - Build production version
-   `npm test` - Run tests (placeholder)

## 📁 Project Structure

```
splash-screen-assignment/
├── index.html          # Main HTML file
├── index.js            # Animation JavaScript
├── index.css           # Custom styles (referenced but not included)
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🎨 Customization

### Timing Adjustments

Modify animation delays and durations in `index.js`:

```javascript
// Example: Change text fade-in delay
gsap.fromTo("#splash-text", {
    delay: 1.5, // Adjust this value
    duration: 2.5, // Adjust this value
    // ...
});
```

### Colors and Styling

Update Tailwind classes in `index.html`:

```html
<!-- Change background color -->
<body class="bg-neutral-950">
    <!-- Try bg-blue-900, bg-gray-800, etc. -->

    <!-- Change text color and size -->
    <div class="text-white text-[72px]">
        <!-- Try text-blue-300, text-[96px], etc. -->
    </div>
</body>
```

### SVG Modifications

Adjust the star and logo shapes by modifying the SVG paths in `index.html`.

## 🔄 Reload Functionality

The splash screen includes a reload button in the bottom-right corner for easy testing during development.

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 1234
npx kill-port 1234
# Then restart
npm start
```

**Dependencies not installing:**

```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Animation not playing:**

-   Check browser console for errors
-   Ensure all files are in the correct directory
-   Verify GSAP is loaded properly

## 📱 Browser Compatibility

This project works in all modern browsers that support:

-   ES6+ JavaScript features
-   SVG animations
-   CSS3 transforms and transitions

<!-- ## 🤝 Contributing

This is an assignment project, but feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

--- -->

**Happy Animating!** 🌟

For questions or issues, please check the browser console for error messages and ensure all dependencies are properly installed.
