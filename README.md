# DevCine-gpt

**DevCine-gpt** is a Netflix-inspired web application enhanced with GPT-3 integration. It is built using web technologies like **React** and **Tailwind CSS**, and powered by the fast and lightweight **Vite** build tool.

---

## Tech Stack

- **Libraries:** React, ReactDOM  
- **Frameworks:** Tailwind CSS  
- **Build Tool:** Vite  
- **Editor Used:** VS Code
- **Backend for Authentication:** Firebase

---

### Features of this project
- **Login/Signup page** (before Authentication)
    - signin/signup form
    - Redirect to browse page upon successful login
- **Browse page** (after authentication)
    - Header
    - Main movie
        - Trailer in background
        - Title & description
        - Movie Suggestions(based on categories)(vertical slide)
            - MovieLists*N (Horizontal Slide)
- **DevCine-gpt**
    - Search bar
    - Movie Suggestions

---

- setup redux store
    - userSlice: actions - addUser and remove user
    - moviesSlice: action - addNowStreamingMovies,addMovieTrailer

- created a hook to add all the streaming movies to the store : useNowStreamingMovies();
- created a hook to add the trailer of a movie to the store and get when needed: useMovieTrailer