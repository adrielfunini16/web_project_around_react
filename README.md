# Around the U.S. — React

Around the U.S. is an interactive and responsive web application built with React as part of the TripleTen Full-Stack Web Development Bootcamp.

The project is a React-based evolution of the original JavaScript version of Around the U.S., redesigned using reusable components, React Hooks, Context, state management, and REST API integration.

Users can manage a personal profile and interact with a dynamic collection of location cards, with application data synchronized with an external API.

## Live Demo

🔗 **GitHub Pages:** [View Live Project](https://adrielfunini16.github.io/web_project_around_react/)

## Features

- View a responsive gallery of location cards
- Add new cards
- Delete cards
- Like and unlike cards
- Open card images in a dedicated popup
- Edit user profile information
- Update the user avatar
- Load user and card data from a REST API
- Persist changes through API requests
- Synchronize API responses with React state

## Technologies

- React
- JavaScript (ES6+)
- JSX
- HTML5
- CSS3
- Vite
- REST API
- Git
- GitHub

## React & Frontend Concepts

- Functional Components
- Props
- State Management
- React Hooks
  - `useState`
  - `useEffect`
  - `useContext`
- React Context
- Controlled Forms
- Component Composition
- Conditional Rendering
- Event Handling
- Asynchronous JavaScript
- API Integration
- Responsive Design
- BEM Methodology
- Reusable Component Architecture

## Technical Highlights

### Component-Based Architecture

The interface is divided into reusable React components, keeping responsibilities separated and making the application easier to maintain and extend.

### State Management

React state is used to manage cards, user information, popup visibility, and form interactions. State updates are synchronized with responses received from the API.

### React Context

User data is shared between components through React Context, reducing unnecessary prop passing and providing centralized access to the current user.

### REST API Integration

The application communicates with an external REST API to retrieve and persist data.

API operations include:

- Retrieving user information and cards
- Updating profile information
- Updating the user avatar
- Creating new cards
- Deleting cards
- Adding and removing likes

Asynchronous requests are handled using JavaScript Promises and the Fetch API.

## Project Structure

The project follows a modular structure that separates components, contexts, utilities, styles, and application logic.

```text
src/
├── components/
├── contexts/
├── hooks/
├── utils/
├── blocks/
├── images/
├── vendor/
├── index.css
└── main.jsx
```
