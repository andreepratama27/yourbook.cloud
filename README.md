# About this Project

This project is created with React, also with several libraries like:
- @tanstack/react-query, for data-fetching
- @tanstack/react-router, for handling router navigation in this project
- zod & react-hook-form, as a Form Validation library to build custom validation. You can check how it used at `routes/create.lazy.tsx`
- zustand, for managing state. Because it simple, lightweight and battery-included
- axios, as fetching library
- lucide-react, as icon library
- tailwind css, as css utilities


## How to run this project

I use `bun` for running this project. It is optional but recommended to run this project with bun installed. You can still running this project with `vite`. The step to run this project via local by using this command:
- `bun install`
- `bun dev`, for running the project
- open browser with url `http:localhost:5173`

## Disclaimer

I use `tailwind css` quite often instead of `.sass`, because of time eficiency. I use it for layouting & styling the component. But, some of the UI component still using sass