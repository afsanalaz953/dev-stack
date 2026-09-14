Project Name:
Dev Stack – Online MarketPlace of Technology

Project Description:
At Dev Stack, we believe that great tech shouldn't break the bank—and it shouldn't waste the planet. We are a dedicated online marketplace connecting savvy buyers with trusted resellers of technology products across the country. We take the hassle out of shopping for gadgets, devices, and tech accessories. While our sellers enjoy the freedom to list and manage their products instantly, we maintain strict oversight to ensure a safe environment. Our dedicated admin team monitors all activities, verifies listings, and ensures every transaction runs smoothly. Whether you are looking to clear your space or find your next favorite tech item, Dev Stack is the safe, smart, and sustainable way to buy and resell technology.


🚀 Tech Stack
Framework: React
Language: Typescript
Styling: Tailwind CSS




📦 key features of the project
   - You can explore the live project on Vercel (deployment link available)

   - You can sort and filter products by price, category, condition (New/Used), and date listed

   - You can view detailed product pages with high-resolution images, full description, original price vs. selling price, condition status, and seller information

  - You can easily add and manage your own products as a seller, and buyers can add items to cart and complete purchases seamlessly

  - Fully responsive and user-friendly interface that works flawlessly on desktop, tablet, and mobile devices

  - Admin dashboard to monitor all users, products, transactions, and resolve disputes to maintain platform integrity and safety

  Questions answer---
  What is JSX, and why is it used in React?
JSX is a syntax extension that lets you write HTML-like markup inside JavaScript, and React uses it to make UI code easier to read and write.

What is the difference between props and state?
Props are read-only data passed into a component from its parent, while state is data managed inside a component that can change over time.

What does the useState hook do, and where did you use it in this project?
useState lets a function component add and update local state, and I used it to store the JSON data and UI state like loading in this project.

What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects after render, and I used it to fetch the JSON data once when the component mounted.

Why does every item in a .map() list need a unique key prop?
A unique key helps React identify which list items changed, were added, or were removed, so it can update the UI correctly and efficiently.

What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI based on a condition, and I used it to display an empty stack message when the list had no items.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child through props, and a child sends something back by calling a callback function that the parent passed down as a prop.




Live Link
https://silly-cascaron-423bb4.netlify.app