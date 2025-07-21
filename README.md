# DevCine-gpt

**DevCine-gpt** is a Netflix-inspired web application enhanced with GPT-3 integration. It is built using web technologies like **React** and **Tailwind CSS**, and powered by the fast and lightweight **Vite** build tool.
![Frontend Focused](https://img.shields.io/badge/Frontend%20Focused-blue)

---

## Tech Stack

- **Libraries:** React, ReactDOM  
- **Frameworks:** Tailwind CSS  
- **Build Tool:** Vite  
- **Editor Used:** VS Code
- **Backend for Authentication:** Firebase
- **State Management:** Redux
- **Data:** The Movie DataBase

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

- **redux store**
    - userSlice: actions - addUser and remove user
    - moviesSlice: actions -  addNowStreamingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addSearchedMovies
    - gptSlice: actions - toggleToGPtSearch, isMoveToMainPage
    - appConfigSlice: actions - changeLanguage

    - created a hook to add all the streaming movies to the store : useNowStreamingMovies();
    - created a hook to add the trailer of a movie to the store and get when needed: useMovieTrailer
    - created a hook to get the upcoming movies, top rated movies and popular movies : usePopularMovies, useUpcomingMovies, useTopRatedMovies 

---

- **MainContainer**
    - video title overlaid on videobackground
    - used embedded youtube video link that will autoplay and muted

---

- **Secondary Container**
    - contains movie categories, each category has n movies - horizontal scroll (scroll hidden)
        - built movieList 
        - built MovieCard

---

- **GPT Search**
    - form with input and search bar
    - multi-language support in search bar
    - movie suggestions
    - search results

- **General**
    - Done Memoization
    - Made Responsive