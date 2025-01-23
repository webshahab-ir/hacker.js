# Hacker Style Library - JavaScript Edition

Welcome to the **Hacker Style Library (JS Edition)**! This JavaScript library provides dynamic, hacker-themed functionality to enhance your HTML elements with animations, glow effects, and custom interactions. Below is a comprehensive guide to using the library.

---

## Features

1. **Typing Effect**
2. **Blinking Cursor**
3. **Glow Effects**
4. **Hacker-Style Alerts**
5. **Styled Inputs**
6. **Dynamic Buttons**
7. **Easy Initialization**

---

## Getting Started

1. **Include the JavaScript File**

   Add the library file to your HTML document:

   ```html
   <script src="hacker-style.js"></script>
   ```

2. **Initialize the Library**

   Call the `initializeHackerStyleLibrary()` function after your DOM is fully loaded:

   ```html
   <script>
       document.addEventListener('DOMContentLoaded', () => {
           initializeHackerStyleLibrary();
       });
   </script>
   ```

---

## API Reference

### 1. **applyTypingEffect**
Applies a typing animation to an element.

**Usage:**
```javascript
applyTypingEffect(element, text, speed);
```

**Parameters:**
- `element` (HTMLElement): The element to apply the typing effect to.
- `text` (string): The text to type out.
- `speed` (number, optional): Typing speed in milliseconds (default: `100`).

**Example:**
```javascript
const hackerText = document.getElementById('hacker-text');
applyTypingEffect(hackerText, 'Welcome to the system...', 150);
```

---

### 2. **addBlinkingCursor**
Adds a blinking cursor to an element.

**Usage:**
```javascript
addBlinkingCursor(element);
```

**Parameters:**
- `element` (HTMLElement): The element to add the blinking cursor to.

**Example:**
```javascript
const hackerText = document.getElementById('hacker-text');
addBlinkingCursor(hackerText);
```

---

### 3. **applyGlowEffect**
Adds a glowing text effect to an element.

**Usage:**
```javascript
applyGlowEffect(element);
```

**Parameters:**
- `element` (HTMLElement): The element to apply the glow effect to.

**Example:**
```javascript
const heading = document.querySelector('h1');
applyGlowEffect(heading);
```

---

### 4. **hackerAlert**
Displays a hacker-themed alert.

**Usage:**
```javascript
hackerAlert(message, type);
```

**Parameters:**
- `message` (string): The message to display in the alert.
- `type` (string, optional): The type of alert (`'default'`, `'warning'`, `'error'`). Default is `'default'`.

**Example:**
```javascript
hackerAlert('Access Granted', 'default');
hackerAlert('Warning: Intrusion Detected!', 'warning');
hackerAlert('Error: System Failure!', 'error');
```

---

### 5. **initializeHackerInputs**
Applies hacker-themed styling to all `<input>`, `<textarea>`, and `<select>` elements on the page.

**Usage:**
```javascript
initializeHackerInputs();
```

**Example:**
```javascript
initializeHackerInputs();
```

---

### 6. **initializeHackerButtons**
Applies hacker-themed styling to all `<button>` elements and elements with the `hacker-button` class.

**Usage:**
```javascript
initializeHackerButtons();
```

**Example:**
```javascript
initializeHackerButtons();
```

---

### 7. **initializeHackerStyleLibrary**
Initializes the library by applying hacker styling to inputs and buttons.

**Usage:**
```javascript
initializeHackerStyleLibrary();
```

**Example:**
```javascript
initializeHackerStyleLibrary();
```

---

## Example HTML Setup

Here is an example of how to use the library in an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacker Style Library</title>
    <script src="hacker-style.js" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            initializeHackerStyleLibrary();
        });
    </script>
</head>
<body>
    <h1 id="hacker-text">Initializing...</h1>
    <button class="hacker-button">Click Me</button>
    <input type="text" placeholder="Type here...">
</body>
</html>
```

---

## License
This library is open-source and free to use. Attribution is appreciated but not required.

---

Enjoy adding some hacker magic to your projects! 💻
