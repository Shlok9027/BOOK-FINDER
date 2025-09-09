# Book Finder Application

A clean, fast, and responsive web application that allows users to search for books using the Open Library API. This project was built as a solution to a take-home challenge.

**Live Demo Link:** [Insert Your Deployed App Link Here]

---

## Features

-   **Dynamic Book Search:** Search for books by title, author, or keyword.
-   **Interactive UI:** A loading indicator provides feedback during API calls, and a clean grid displays results.
-   **Graceful Error Handling:** Displays user-friendly messages for network errors or if no books are found.
-   **Responsive Design:** The interface is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
-   **Book Details:** Each result shows the book's cover, title, author, and first publish year.

---

## Technology Stack

-   **Framework:** React (with Vite)
-   **Styling:** Tailwind CSS
-   **State Management:** React Hooks (useState, useEffect, useContext)
-   **Data Fetching:** Fetch API connected to the [Open Library Search API](https://openlibrary.org/dev/docs/api/search).

---

## How to Run Locally

1.  Clone the repository:
    ```
    git clone [Your Repository URL]
    ```
2.  Navigate into the project directory:
    ```
    cd book-finder
    ```
3.  Install the dependencies:
    ```
    npm install
    ```
4.  Start the development server:
    ```
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

