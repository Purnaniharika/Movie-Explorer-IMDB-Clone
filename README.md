# React + Vite + Tailwind CSS

This project serves as a base setup to get React working with Vite for lightning-fast development and includes Tailwind CSS for styling, alongside custom ESLint configurations.

### Key Plugins Used:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Integrated with Babel for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses SWC for Fast Refresh for faster builds.

# Movie Explorer

A movie exploration web application built using **React** and **Tailwind CSS**. The app allows users to browse trending movies, manage a personal watchlist, and provides details about each movie. The project utilizes the **TMDB API** for fetching movie data.

## Features:
- View a list of trending movies
- Add movies to a personal watchlist
- Remove movies from the watchlist
- Persistent watchlist using local storage

## Demo:
[Movie Explorer Live](https://watchlist-wizard.netlify.app/)

## Getting Started:

To set up this project on your local machine for development and testing, follow these steps.

### Prerequisites:
Ensure you have the following software installed:
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- Package manager: [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation:

1. **Download or clone this repository to your local machine**:
   ```bash
   git clone https://github.com/Purnaniharika/Movie-Explorer-IMDB-Clone.git
2. Navigate to the project directory:
   ```bash
   cd imdb-clone
3. Install the dependencies:
   ```bash
   npm install
4. Running the Application
- To run the application in development mode, use the following command:
   ```bash
   npm run dev



# Contributing:
  ## Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.
  - Fork the repository
  - Create a new branch (git checkout -b feature-branch)
  - Commit your changes (git commit -m 'Add new feature')
  - Push to the branch (git push origin feature-branch)
  - Open a pull request

# Acknowledgements
- TMDB API
- React.js
- Tailwind CSS

<!-- 
# Gallery
![Screenshot 2024-07-13 151026](https://github.com/user-attachments/assets/83038a8c-602e-4d51-aa7e-ecbd31fd93f9)
![Screenshot 2024-07-13 151110](https://github.com/user-attachments/assets/cd63e0ac-cbab-4800-bb5d-d6c4b20a3253)
![Screenshot 2024-07-13 151125](https://github.com/user-attachments/assets/f3db71f7-eaf0-4df5-9d83-33099dafd63b)
![Screenshot 2024-07-13 151206](https://github.com/user-attachments/assets/28249be1-183e-4ac0-b357-b374fc3caf16) -->

## Directory Structure

```imdb-clone/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Movies.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   └── Watchlist.jsx
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js



