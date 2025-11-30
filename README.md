# Personalized Browser Home Page Backend

## Overview
This project is a Node.js Express server built with TypeScript, designed to power a personalized browser home page extension by providing dynamic weather data and random background images through robust API endpoints.

## Features
- **Dynamic Weather Integration**: Fetches real-time weather data based on the client's IP address.
- **Location-Based Personalization**: Utilizes IP geolocation to provide relevant local weather information.
- **Random Image Display**: Serves diverse, high-quality random images from Unsplash for visual customization.
- **TypeScript Development**: Ensures type safety and improves code maintainability for a scalable backend.
- **Express.js Framework**: Provides a fast, unopinionated, and minimalist web framework for Node.js.
- **Browser Extension Compatibility**: Designed to seamlessly integrate with a client-side browser extension.

## Getting Started

### Installation
To set up and run this project locally, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/samueltuoyo15/Broswer-Home-Page
    ```

2.  **Navigate to the Project Directory**
    ```bash
    cd Personalized-Broswer-Home-Page
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

### Environment Variables
This project requires specific environment variables to function correctly. Create a `.env` file in the root of the project and populate it with the following:

-   `PORT`: The port number on which the server will listen.
    *Example: `PORT=3030`*
-   `API_KEY`: Your API key for WeatherAPI.com, used to fetch weather data.
    *Example: `API_KEY=your_weatherapi_key_here`*
-   `IPINFO_TOKEN`: Your access token for IPinfo.io, used for IP-based geolocation.
    *Example: `IPINFO_TOKEN=your_ipinfo_token_here`*
-   `ACCESS_KEY`: Your Unsplash API access key, used to fetch random images.
    *Example: `ACCESS_KEY=your_unsplash_access_key_here`*

## API Documentation
### Base URL
The API is served from the root path of the server. When running locally, this is typically `http://localhost:3030`.

### Endpoints

#### GET /weather
Retrieves current weather data based on the client's public IP address. If the IP is localhost, it defaults to "Warri".

**Request**:
No request body or query parameters are required. The server automatically detects the client's IP.

**Response**:
A JSON object containing current weather information.
```json
{
  "location": {
    "name": "Warri",
    "region": "Delta",
    "country": "Nigeria",
    "lat": 5.51,
    "lon": 5.75,
    "tz_id": "Africa/Lagos",
    "localtime_epoch": 1700000000,
    "localtime": "2023-11-15 10:30"
  },
  "current": {
    "last_updated_epoch": 1700000000,
    "last_updated": "2023-11-15 10:30",
    "temp_c": 28.0,
    "temp_f": 82.4,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 10.5,
    "wind_kph": 16.9,
    "wind_degree": 230,
    "wind_dir": "SW",
    "pressure_mb": 1012.0,
    "pressure_in": 29.88,
    "precip_mm": 0.0,
    "precip_in": 0.0,
    "humidity": 65,
    "cloud": 50,
    "feelslike_c": 31.0,
    "feelslike_f": 87.8,
    "vis_km": 10.0,
    "vis_miles": 6.0,
    "uv": 7.0,
    "gust_mph": 12.0,
    "gust_kph": 19.3
  }
}
```

**Errors**:
-   `500 Internal Server Error`: Occurs if there is an issue fetching data from the WeatherAPI or IPinfo.io services, or other unhandled server exceptions.

#### GET /getRandomImages
Fetches a random nature-themed image from Unsplash.

**Request**:
No request body or query parameters are required.

**Response**:
A JSON object representing a random image from Unsplash.
```json
{
  "id": "uO3gR_FqSFE",
  "slug": "river-in-between-green-mountains-uO3gR_FqSFE",
  "created_at": "2019-10-18T05:01:00Z",
  "updated_at": "2023-11-15T10:00:00Z",
  "promoted_at": null,
  "width": 6000,
  "height": 4000,
  "color": "#c0c0c0",
  "blur_hash": "LhG{s:Rk~qj[?wtRtRj[ayj[tRe.",
  "description": "A tranquil river flowing through lush green mountains under a clear sky.",
  "alt_description": "river in between green mountains",
  "urls": {
    "raw": "https://images.unsplash.com/photo-1...",
    "full": "https://images.unsplash.com/photo-1...",
    "regular": "https://images.unsplash.com/photo-1...",
    "small": "https://images.unsplash.com/photo-1...",
    "thumb": "https://images.unsplash.com/photo-1...",
    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/..."
  },
  "links": {
    "self": "https://api.unsplash.com/photos/uO3gR_FqSFE",
    "html": "https://unsplash.com/photos/uO3gR_FqSFE",
    "download": "https://unsplash.com/photos/uO3gR_FqSFE/download",
    "download_location": "https://api.unsplash.com/photos/uO3gR_FqSFE/download"
  },
  "likes": 500,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
    "nature": {
      "status": "approved",
      "approved_on": "2020-04-06T14:20:23Z"
    }
  },
  "user": {
    "id": "j_m_fX_Y9xQ",
    "updated_at": "2023-11-15T10:00:00Z",
    "username": "unsplash_user",
    "name": "Unsplash User",
    "first_name": "Unsplash",
    "last_name": "User",
    "portfolio_url": "https://unsplash.com/@unsplash_user",
    "bio": "Nature photographer.",
    "location": "Earth",
    "links": { /* ... */ },
    "profile_image": { /* ... */ },
    "instagram_username": "unsplash_user",
    "total_collections": 0,
    "total_likes": 0,
    "total_photos": 100,
    "accepted_tos": true,
    "for_hire": false,
    "social": { /* ... */ }
  }
}
```

**Errors**:
-   `500 Internal Server Error`: Occurs if there is an issue fetching data from the Unsplash API or other unhandled server exceptions.

## Usage
After completing the installation and setting up environment variables, start the development server:

```bash
npm start
```

The server will typically run on `http://localhost:3030` (or the `PORT` specified in your `.env` file). It serves both the API endpoints described above and static frontend files (e.g., `index.html`) from the `public` directory. This setup allows the backend to serve as a complete solution for a browser extension, handling data fetching and presentation.

## Technologies Used

| Category        | Technology     | Description                                     | Link                                       |
| :-------------- | :------------- | :---------------------------------------------- | :----------------------------------------- |
| **Backend**     | Node.js        | JavaScript runtime environment                  | [Node.js](https://nodejs.org/)             |
|                 | Express.js     | Web framework for Node.js                       | [Express.js](https://expressjs.com/)       |
|                 | TypeScript     | Superset of JavaScript with static typing       | [TypeScript](https://www.typescriptlang.org/) |
| **Utilities**   | Dotenv         | Loads environment variables from a `.env` file  | [Dotenv](https://www.npmjs.com/package/dotenv) |
|                 | Node-Fetch     | A light-weight module that brings `window.fetch` to Node.js | [Node-Fetch](https://www.npmjs.com/package/node-fetch) |
| **APIs**        | WeatherAPI.com | Provides weather and forecast API               | [WeatherAPI.com](https://www.weatherapi.com/) |
|                 | IPinfo.io      | Provides IP address data (geolocation, ASN, etc.) | [IPinfo.io](https://ipinfo.io/)            |
|                 | Unsplash API   | Access to a large library of high-quality images | [Unsplash API](https://unsplash.com/developers) |
| **Development** | Nodemon        | Monitors for changes in your source and automatically restarts your server | [Nodemon](https://nodemon.io/)             |
|                 | TS-Node        | TypeScript execution environment for Node.js    | [TS-Node](https://github.com/TypeStrong/ts-node) |

## Contributing
We welcome contributions to enhance this project. To contribute, please follow these guidelines:

*   **Fork the repository**: Create a fork of the `Broswer-Home-Page` repository to your GitHub account.
*   **Create a new branch**: Branch off from `main` for your feature or bug fix (e.g., `feature/add-new-api` or `bugfix/fix-weather-endpoint`).
*   **Implement your changes**: Write clean, well-commented code, adhering to existing coding styles.
*   **Test your changes**: Ensure that your modifications work as expected and do not introduce regressions.
*   **Commit your changes**: Write clear and concise commit messages.
*   **Push to your fork**: Push your branch to your forked repository.
*   **Open a Pull Request**: Submit a pull request to the `main` branch of the original repository, describing your changes in detail.

## License
This project is licensed under the ISC License. For more details, refer to the `LICENSE` file in the project repository.

## Author Info

**Samuel Tuoyo**
*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your_username)
*   **Twitter**: [@your_twitter_handle](https://twitter.com/your_twitter_handle)
*   **Portfolio**: [Your Personal Website](https://your-portfolio-website.com)

---
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)