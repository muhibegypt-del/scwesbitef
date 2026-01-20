
const fs = require('fs');
const path = 'c:/Users/Muhib/.gemini/study/css/main-DqcD8vu6.css';

const classesToFind = [
    'cm-hero-block',
    'cm-hero-donatebox',
    'quick-donate-widget'
];

try {
    const css = fs.readFileSync(path, 'utf8');

    classesToFind.forEach(cls => {
        console.log(`\n--- Searching for .${cls} ---`);
        let index = css.indexOf(`.${cls}`);
        if (index === -1) {
            console.log("Not found.");
        } else {
            while (index !== -1) {
                // Print 500 chars context
                const start = Math.max(0, index - 20);
                const end = Math.min(css.length, index + 1000);
                console.log(`Match at ${index}:`);
                console.log(css.substring(start, end));
                // Find next
                index = css.indexOf(`.${cls}`, index + 1);
            }
        }
    });

} catch (e) {
    console.error("Error reading file:", e.message);
}
