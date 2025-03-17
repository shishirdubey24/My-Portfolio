Portfolio Website (React + Tailwind CSS)
This is a personal portfolio website built using React.js and Tailwind CSS. The project is fully responsive, visually appealing, and structured for a modern UI/UX experience.

📌 Features
✅ Modern UI with Tailwind CSS
✅ Smooth Hover & Animation Effects
✅ Fully Responsive Design
✅ Project Showcase with Live Demo & GitHub Links
✅ Structured Education & Certification Sections

📁 Project Structure
css
Copy
Edit
/src
├── components
│ ├── NavBar.jsx
│ ├── Skills.jsx
│ ├── Projects.jsx
│ ├── Education.jsx
│ ├── Certifications.jsx
│ ├── Footer.jsx
├── App.js
├── index.js
├── styles.css (Tailwind Integrated)
💻 Technologies Used
Technology Purpose
React.js Used for creating reusable components
Tailwind CSS Used for utility-first styling
React Icons Used to display icons in different sections
Netlify Used for hosting the deployed project
📌 Components & Detailed CSS Explanation
Each component in this project is built using React functional components and Tailwind CSS for styling. Below is a breakdown of what CSS properties are used and why.

🌟 1. NavBar Component
📌 A sticky navigation bar with hover effects
📌 Smooth underline animation on hover

📜 CSS Used & Explanation
Property Purpose
flex space-x-6 Places navigation links horizontally with spacing
relative Makes sure the underline animation stays inside the nav item
absolute Positions the underline at the bottom of each link
scale-x-0 Hides the underline initially
group-hover:scale-x-100 Expands the underline when hovered
transition-transform duration-300 Creates a smooth animation effect
✨ How It Works?
Nav items are aligned using flex.
A small underline appears smoothly when hovered.
Animations are powered by transition-transform.
⚡ 2. Skills Component
📌 Displays skills inside compact cards
📌 Each skill is a button with hover effects

📜 CSS Used & Explanation
Property Purpose
grid grid-cols-2 Arranges skills in 2 columns
p-4 rounded-lg shadow-md Adds padding, rounded corners, and a shadow for a modern card look
border border-gray-300 Creates button borders to make them visible
hover:bg-sky-400 text-white Changes button color on hover
✨ How It Works?
Skills are placed in a grid layout (grid-cols-2).
Each skill is a button that changes color on hover (hover:bg-sky-400).
Borders make the buttons clearly visible.
🚀 3. Projects Component
📌 Each project is split into two cards:
📌 1️⃣ Left Side → Project Description
📌 2️⃣ Right Side → Key Features

📜 CSS Used & Explanation
Property Purpose
grid grid-cols-2 Creates two-column layout (description & features)
bg-gradient-to-r from-gray-800 to-black Adds a gradient background for modern design
text-white Ensures good readability on dark backgrounds
border-l-4 border-b-4 border-gray-300 Adds left & bottom border for a stylish effect
hover:scale-105 transition-transform duration-300 Applies a zoom effect when hovered
✨ How It Works?
Projects are split into two cards (grid-cols-2).
The background has a gradient (bg-gradient-to-r from-gray-800 to-black).
Hovering over a project slightly increases its size (hover:scale-105).
🎓 4. Education Component
📌 Each education entry is inside a bordered card
📌 An education icon (FaGraduationCap) is displayed

📜 CSS Used & Explanation
Property Purpose
border-l-4 border-b-4 border-gray-300 Adds a stylish two-side border
shadow-md Creates a soft shadow for a clean card look
flex items-center gap-2 Aligns the icon and text neatly
text-blue-500 Colors the graduation cap icon blue
✨ How It Works?
Icons (FaGraduationCap) are added next to each degree.
Borders (border-l-4 border-b-4) give a professional look.
🏆 5. Certifications Component
📌 Displays certifications with images
📌 Icons (FaCertificate) are used to enhance visibility

📜 CSS Used & Explanation
Property Purpose
text-blue-500 Highlights the certificate icon in blue
rounded-lg shadow Makes the certificate image stand out
mt-4 Adds space between text and image
✨ How It Works?
Each certification has a title, description, and an image.
Icons (FaCertificate) visually represent certifications.
The image has rounded corners and shadows (rounded-lg shadow).
📌 Responsive Design
✅ grid grid-cols-2 → Ensures projects & skills display in two columns on larger screens
✅ md:grid-cols-1 → Ensures stacked layout on mobile
✅ hover: effects → Provides interactivity without affecting mobile usability
