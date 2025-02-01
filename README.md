# Psalm 91 Interactive Display

This project creates an interactive and visually striking display of Psalm 91 using HTML, CSS, and JavaScript. It features a 3D rotating cube with animated text, background effects, and reflections.

## Features

- 3D rotating cube with Psalm 91 text on multiple faces
- Animated text scrolling with highlighted keywords
- Background image with blur effect
- Color overlay with hue rotation animation
- Reflection effect
- Responsive design that scales content based on viewport width

## Setup

1. Clone this repository to your local machine.
2. Ensure you have the following files in your project structure:
   - `index.html`
   - `stylesheets/style.css`
   - `scripts/main.js`
   - `images/empty-room.jpg`
   - `images/boy.png`
3. Open the `index.html` file in a modern web browser.

## Structure

- `index.html`: Main HTML file
- `stylesheets/style.css`: Contains all the CSS for the animation and layout
- `scripts/main.js`: JavaScript file for dynamic content insertion and responsiveness
- `images/`: Directory containing background and foreground images

## JavaScript Functionality

The `main.js` file contains a `PsalmDisplay` class that:
- Stores the full text of Psalm 91 with HTML formatting
- Inserts the Psalm text into designated elements on page load
- Implements responsive scaling of the content based on viewport width

## Dependencies

- Bootstrap 5.3.2
- jQuery 3.6.0
- Google Fonts:
  - Montserrat (700 weight)
  - Caveat
  - Paytone One
  - Bebas Neue

## Customization

To customize the display:

1. Edit the `psalm` property in the `PsalmDisplay` class to change the text content.
2. Modify the CSS in `style.css` to adjust colors, animations, and layout.
3. Update the `setupResponsiveness` method in `main.js` to change the scaling behavior.

## Browser Support

This project uses modern CSS and JavaScript features. Ensure you're using an up-to-date browser for the best experience.


## Author

John Masaba
