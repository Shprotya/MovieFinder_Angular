# 🎬 MovieFinderApp

> An Angular web application for searching movies and TV shows using the OMDb API.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [API Reference](#api-reference)

---

## About

MovieFinderApp is a single-page Angular application that allows users to search for movies and TV shows by title. Users can browse paginated search results, click into any title for full details including cast, plot, ratings, and box office figures, and navigate between pages seamlessly using Angular's built-in routing.

---

## Features

- **Search** — Search movies and TV shows by title using the OMDb API
- **Pagination** — Browse up to 10 results per page with next/previous controls
- **Movie Details** — View full details: poster, plot, cast, director, genre, rating, and box office
- **Responsive** — Mobile-friendly layout using Bootstrap 5
- **Routing** — Clean URL navigation between pages (`/`, `/details/:id`, `/about`)

---

## Tech Stack

| Technology | Version |
|---|---|
| [Angular](https://angular.io/) | 19 |
| [TypeScript](https://www.typescriptlang.org/) | 5+ |
| [Bootstrap](https://getbootstrap.com/) | 5 |
| [OMDb API](https://www.omdbapi.com/) | — |

---

## API Reference

This project uses the [OMDb API](https://www.omdbapi.com/).

| Endpoint | Description |
|---|---|
| `?s={title}&page={n}` | Search movies by title, paginated |
| `?i={imdbID}` | Get full details for a specific movie |

> **Note:** The API returns a maximum of 10 results per page. Use the `&page=` parameter to paginate.
