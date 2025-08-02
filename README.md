# Vecto Digital Task

React js / Front End Task

Task description

Create a web app with the given design.

- [Home Page](https://xd.adobe.com/view/dd63b338-292e-4e68-924e-157ad53f2151-8830/specs/)
- [Home page menu](https://xd.adobe.com/view/a8d070e9-3db2-4834-bce7-e7dbcbb243da-fd83/specs/)

The app is a TV application based on web technology with React js lib. In the design file you can find two
screens. We also sent to you the data folder with the assets files (images, videos), and JSON data file where
you can get all the video data you needed for the task.

1. Main menu with icons
2. Main featured video
3. Trending now section
4. Main menu
   At the left side of the screen you can see main menu icons (Search, Home, TV shows, movies, genres,
   watch later). On hover the menu will be opened by an animation float from left to right with the background
   translation from 0 opacity to 80. At the opened view we have profile info icons with their name and additional
   menu items at the bottom side (language, get help, exit)
5. Main featured video
   At the left top side of the screen we can see a featured video block that contains the last featured movie. The
   block features video cover image, category name (Movie), movie logo in transparent PNG format, release
   year, MPA rating, duration, short description, and two buttons (play and more info).
6. Trending now section
   At this section you need get all the trending videos with max 50 counts sorted by last added or created at
   from the JSON file, and place with carousel view, on the screen must be viewed only first 8 elements, after
   scrolling or dragging with mouse the carousel must show the others from right side, the move component on
   this section contain only movies cover.
   If a user clicks on any movie, they need to change the top featured section content like image, category, title,
   description. After clicking on any movie after 2 seconds the featured section background image should be
   changed to video player in background position without any controllers and play the video which url you can
   find at the json file. And save the movie ID in session storage and during the next render time (ex. When the
   user refreshes the page) need to sort the movie list by the last clicked (seen) videos at the first position and
   then the rest videos with default order.

# Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Folder Structure

```
├── .vscode
│ └── settings.json
├── public
│ └── assets
│ ├── db
│ │ └── data.json
│ ├── fonts
│ │ ├── GrandeeCP.otf
│ │ └── Lexend-Regular.ttf
│ ├── icons
│ │ ├── genres.png
│ │ ├── home.png
│ │ ├── movies.png
│ │ ├── search.png
│ │ ├── shows.png
│ │ └── watch-later.png
│ ├── .DS_Store
│ ├── FeaturedCoverImage.png
│ ├── FeaturedTitleImage.png
│ ├── https_specials-1.png
│ ├── https_specials-2.png
│ ├── https_specials-3.png
│ ├── https_specials-4.png
│ ├── https_specials-5.png
│ ├── https_specials-6.png
│ ├── https_specials-7.png
│ ├── https_specials-8.png
│ └── profile_pic.png
├── src
│ ├── components
│ │ ├── HomePage
│ │ │ ├── FeaturedSection.jsx
│ │ │ └── TrendingNowSection.jsx
│ │ ├── AsideMenu.jsx
│ │ ├── Layout.jsx
│ │ ├── Loader.jsx
│ │ ├── Menu.jsx
│ │ ├── SettingsAndSupport.jsx
│ │ └── User.jsx
│ ├── constants
│ │ └── index.js
│ ├── pages
│ │ └── HomePage.tsx
│ ├── providers
│ │ └── HomePageProvider.jsx
│ ├── utils
│ │ ├── toHumanReadableTime.js
│ │ └── toMIlliseconds.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── .gitignore
├── .local.env
├── .prettierrc
├── README.md
├── eslint.config.js
├── global.d.ts
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## License

MIT
