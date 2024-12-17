# React Notes App

This project is a minimal **Note Taking Application** built with **React** as part of a module test. The app allows users to organize their notes into groups, persist data using local storage, and manage notes efficiently with intuitive features.

---

## Live Demo  

You can access the live project here:  
[**Live Project Link**](https://pocket-notes-two-tawny.vercel.app/)

---

## Figma Design  

The app UI was designed based on the following Figma design:  
[**Figma Link**](https://www.figma.com/design/JphKHxiTneQdgsUeOp2elm/Assignment-(Copy)?node-id=0-1&t=TPWwVSkxwhIwsHPD-1)

---

## Problem Statement  

The challenge was to build out a minimal note-taking app with the following features and functionality:

---

## Features  

1. **Group Creation**  
   - Users can create a group for their notes.  
   - A popup will appear for group creation, and clicking outside the popup closes it.  

2. **Add Notes to Groups**  
   - Users can add notes within a specific group.  

3. **Save Notes**  
   - Users can save notes by either pressing the **Enter key** or clicking on the **Enter icon**.  

4. **Persist Notes with Local Storage**  
   - All notes and groups are saved in **local storage** to ensure data persists even after a page reload.  

5. **Group-Specific Notes**  
   - When a user switches groups, the app fetches and displays all notes specific to that group.  

6. **Metadata Management**  
   - Each note saves metadata, including:  
     - **Date and Time** when the note was created.  
     - **Last Updated** timestamp for the note.  

---

## Technologies Used  

- **React**  
- **HTML/CSS**  
- **JavaScript (ES6+)**  
- **Local Storage API**  

---

## Installation  

1. Clone the repository:  
   ```bash
   git clone <repository-link>
   ```

2. Navigate to the project directory:

   ```bash
   cd notes-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser:

   ```arduino
   http://localhost:3000
   ```
