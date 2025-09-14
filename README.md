# Acknowledgement

This task served as a valuable **“Learn and Develop”** opportunity for me. As I was not very familiar with GSAP prior to starting, I had to invest time in learning and implementing front-end animations. Throughout the task, I made every effort to follow best practices and align the work with the requirements.

I admit that there is significant room for improvement, particularly in creating fully responsive animations, a skill I am eager to further develop with more practice. Working on this task has been a great learning experience, allowing me to identify areas for growth and enhance my skills in front-end animation development.

I sincerely appreciate the opportunity for this assesment and thank you once again.

---

# Front-end Developer Task - COdesign

This front-end application is built with **Next.js**, **Tailwind CSS**, and **GSAP** animations.  
This project implements a hero section carousel with smooth transitions and theme switching.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Server Components)
- [React](https://react.dev/) (with Context API for theme switching)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling, dark mode support)
- [GSAP](https://greensock.com/gsap/) (60fps animations and carousel transitions)
- [TypeScript](https://www.typescriptlang.org/) (type safety)

---

## Running Locally

Install dependencies:

- npm install

Run the development server:

- npm run dev

Build the project:

- npm run build

### Then open http://localhost:3000 in your browser.

## Deployment

🔗 Live Link: codesign-task-frontend-dev.vercel.app

## Assumptions & Trade-offs

- The carousel transitions are click-driven (instead of auto-play) for simplicity.
- Fixed breakpoints were used for desktop / tablet / mobile responsiveness.
- GSAP was chosen for animation → smooth 60fps transitions but adds extra bundle weight.
- Lazy-loading GSAP was applied in places to reduce initial bundle size.

## Performance Notes

- Responsive images (next/image) to optimize image delivery.
- Tailwind’s JIT mode ensures only used classes are shipped.

## Accessibility Notes

- Used semantic HTML elements.
- Added ARIA labels.
- Ensured color contrast adapts to dark/light mode.
- Avoided overuse of ARIA.

## If I Had More Time

- Improve Responsiveness.
- Add keyboard & swipe navigation support to the carousel.
- Improve animation configuration.
- Add unit & integration tests.
- Explore server-side rendering optimizations with Next.js for GSAP-heavy sections.
