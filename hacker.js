/* Hacker Style Library - JavaScript Edition */

/**
 * Add typing effect to any element with the specified text.
 * @param {HTMLElement} element - The element to apply the typing effect to.
 * @param {string} text - The text to type out.
 * @param {number} speed - Typing speed in milliseconds.
 */
function applyTypingEffect(element, text, speed = 100) {
    let index = 0;
    element.innerHTML = '';

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/**
 * Add blinking cursor to any element.
 * @param {HTMLElement} element - The element to add a blinking cursor to.
 */
function addBlinkingCursor(element) {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.color = '#00ff00';
    cursor.style.animation = 'blink 0.5s step-end infinite';
    element.appendChild(cursor);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Apply hacker glow effect to any element.
 * @param {HTMLElement} element - The element to apply the glow effect to.
 */
function applyGlowEffect(element) {
    element.style.textShadow = '0 0 5px #00ff00, 0 0 10px #00ff00';
}

/**
 * Create a hacker-style alert.
 * @param {string} message - The message to display in the alert.
 * @param {string} type - The type of alert: 'default', 'warning', 'error'.
 */
function hackerAlert(message, type = 'default') {
    const alert = document.createElement('div');
    alert.textContent = message;
    alert.style.padding = '10px';
    alert.style.border = '2px solid';
    alert.style.borderRadius = '5px';
    alert.style.margin = '10px 0';
    alert.style.fontFamily = "'Courier New', Courier, monospace";

    switch (type) {
        case 'warning':
            alert.style.backgroundColor = '#ffff00';
            alert.style.color = '#000000';
            alert.style.borderColor = '#ff0000';
            break;
        case 'error':
            alert.style.backgroundColor = '#ff0000';
            alert.style.color = '#ffffff';
            alert.style.borderColor = '#000000';
            break;
        default:
            alert.style.backgroundColor = '#00ff00';
            alert.style.color = '#000000';
            alert.style.borderColor = '#000000';
    }

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}

/**
 * Initialize all inputs with hacker styling.
 */
function initializeHackerInputs() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.fontFamily = "'Courier New', Courier, monospace";
        input.style.color = '#00ff00';
        input.style.backgroundColor = '#000000';
        input.style.border = '2px solid #00ff00';
        input.style.padding = '10px';
        input.style.borderRadius = '5px';
        input.style.boxShadow = '0 0 10px #00ff00';
        input.style.outline = 'none';

        input.addEventListener('focus', () => {
            input.style.borderColor = '#00cc00';
            input.style.boxShadow = '0 0 15px #00cc00';
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = '#00ff00';
            input.style.boxShadow = '0 0 10px #00ff00';
        });
    });
}

/**
 * Initialize hacker-style buttons.
 */
function initializeHackerButtons() {
    const buttons = document.querySelectorAll('button, .hacker-button');
    buttons.forEach(button => {
        button.style.fontFamily = "'Courier New', Courier, monospace";
        button.style.color = '#000000';
        button.style.backgroundColor = '#00ff00';
        button.style.border = '2px solid #00ff00';
        button.style.padding = '10px 20px';
        button.style.borderRadius = '5px';
        button.style.textTransform = 'uppercase';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.3s, color 0.3s, box-shadow 0.3s';
        button.style.boxShadow = '0 0 10px #00ff00';

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#000000';
            button.style.color = '#00ff00';
            button.style.boxShadow = '0 0 15px #00ff00';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#00ff00';
            button.style.color = '#000000';
            button.style.boxShadow = '0 0 10px #00ff00';
        });

        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = '#00cc00';
            button.style.boxShadow = '0 0 5px #00cc00 inset';
        });

        button.addEventListener('mouseup', () => {
            button.style.backgroundColor = '#00ff00';
            button.style.boxShadow = '0 0 10px #00ff00';
        });
    });
}

/**
 * Initialize the Hacker Style Library.
 */
function initializeHackerStyleLibrary() {
    initializeHackerInputs();
    initializeHackerButtons();
    console.log('%cHacker Style Library Initialized!', 'color: #00ff00; background: #000000; font-size: 16px;');
}
