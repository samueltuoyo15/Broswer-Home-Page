# **Momentum Browser Extension Backend API 🚀**

## Overview
This project provides the robust Node.js Express backend, built with TypeScript, to power a personalized browser home page extension. It dynamically fetches real-time weather data based on the user's location and delivers captivating random background images, creating an engaging and customized user experience.

## Features
*   **Dynamic Weather Updates**: Fetches and displays current weather conditions based on the user's detected IP address, defaulting to a specific city for local development.
*   **Stunning Background Images**: Integrates with the Unsplash API to provide a fresh, high-quality random image with each visit, enhancing visual appeal.
*   **Geo-Location Services**: Utilizes `ipinfo.io` to accurately determine a user's city from their IP address, ensuring localized weather information.
*   **Static File Serving**: Efficiently serves the browser extension's frontend assets, including `index.html`, from a `public` directory.
*   **Scalable Architecture**: Developed with TypeScript for type safety and maintainability, ensuring a robust and extensible codebase.
*   **Vercel Deployment Ready**: Configured for seamless serverless deployment on Vercel, ensuring high availability and performance.

## Getting Started

### Installation
To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/samueltuoyo15/Momentum-Browser-Extension.git
    cd Momentum-Browser-Extension
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

### Environment Variables
Create a `.env` file in the root of the project and add the following required variables:

*   `PORT`: The port number the server will listen on.
    ```
    PORT=3030
    ```
*   `API_KEY`: Your API key for WeatherAPI.com.
    ```
    API_KEY=your_weatherapi_key_here
    ```
*   `IPINFO_TOKEN`: Your access token for ipinfo.io.
    ```
    IPINFO_TOKEN=your_ipinfo_token_here
    ```
*   `ACCESS_KEY`: Your access key for the Unsplash API.
    ```
    ACCESS_KEY=your_unsplash_access_key_here
    ```

## Usage
After completing the installation and setting up your environment variables, you can start the server and interact with the API.

1.  **Start the Server**:
    ```bash
    npm start
    ```
    The server will typically run on `http://localhost:3030` (or the `PORT` specified in your `.env` file).

2.  **Access the Home Page**:
    Open your browser and navigate to `http://localhost:3030`. This will serve the `index.html` file from the `public` directory, which represents the personalized browser home page.

3.  **API Interaction (Backend Serving Frontend)**:
    The frontend served by this backend (e.g., `index.html` and associated client-side scripts) will automatically make requests to the `/weather` and `/getRandomImages` endpoints to fetch dynamic content. This creates a cohesive personalized experience without direct user interaction with the API endpoints themselves.

    *   When the home page loads, it will request `/weather` to get location-based weather data.
    *   It will also request `/getRandomImages` to load a fresh background image.

## API Documentation

### Base URL
The base URL for the API is dependent on where the server is hosted.
*   **Local Development**: `http://localhost:3030` (or your configured `PORT`)
*   **Vercel Deployment**: `https://[your-vercel-deployment-url]`

### Endpoints

#### GET /weather
This endpoint fetches current weather data based on the client's IP address. If the IP is a local address (`::1` or `127.0.0.1`), it defaults to "Warri".

**Request**:
No request body or query parameters are required.

**Response**:
A successful response will return a JSON object containing current weather details, including location and temperature.

```json
{
  "location": {
    "name": "Warri",
    "region": "Delta",
    "country": "Nigeria",
    "lat": 5.56,
    "lon": 5.76,
    "tz_id": "Africa/Lagos",
    "localtime_epoch": 1678822800,
    "localtime": "2023-03-14 15:40"
  },
  "current": {
    "last_updated_epoch": 1678822500,
    "last_updated": "2023-03-14 15:35",
    "temp_c": 32.0,
    "temp_f": 89.6,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 8.1,
    "wind_kph": 13.0,
    "wind_degree": 230,
    "wind_dir": "SW",
    "pressure_mb": 1010.0,
    "pressure_in": 29.83,
    "precip_mm": 0.0,
    "precip_in": 0.0,
    "humidity": 65,
    "cloud": 25,
    "feelslike_c": 38.6,
    "feelslike_f": 101.5,
    "vis_km": 10.0,
    "vis_miles": 6.0,
    "uv": 7.0,
    "gust_mph": 10.5,
    "gust_kph": 16.9
  }
}
```

**Errors**:
*   `500 Internal Server Error`: Occurs if there's an issue with fetching data from the WeatherAPI or ipinfo.io, or if required environment variables are missing.

#### GET /getRandomImages
This endpoint retrieves a random high-quality image from Unsplash. The images are typically related to 'nature' as per the query parameter used internally.

**Request**:
No request body or query parameters are required.

**Response**:
A successful response returns a JSON object containing details about a random image, including its URLs for different sizes and creator information.

```json
{
  "id": "Dwu85P9J7XQ",
  "slug": "silhouette-of-mountains-under-stars-Dwu85P9J7XQ",
  "created_at": "2018-09-08T06:04:14Z",
  "updated_at": "2024-07-29T02:05:07Z",
  "promoted_at": "2018-09-08T13:42:04Z",
  "width": 3024,
  "height": 4032,
  "color": "#262640",
  "blur_hash": "LAH:i8ofNGWB~qj[jZj[IUaxayay",
  "description": "Milky Way over the Altai mountains",
  "alt_description": "silhouette of mountains under stars",
  "urls": {
    "raw": "https://images.unsplash.com/photo-1536300000000-000000000000?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=3024&q=80",
    "full": "https://images.unsplash.com/photo-1536300000000-000000000000?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80",
    "regular": "https://images.unsplash.com/photo-1536300000000-000000000000?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&h=1000&w=1500&fit=crop&q=80",
    "small": "https://images.unsplash.com/photo-1536300000000-000000000000?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&h=400&w=600&fit=crop&q=80",
    "thumb": "https://images.unsplash.com/photo-1536300000000-000000000000?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&h=200&w=200&fit=crop&q=80"
  },
  "user": {
    "id": "jcFm1TjYjXU",
    "username": "vadimsadovski",
    "name": "Vadim Sadovski"
  }
}
```

**Errors**:
*   `500 Internal Server Error`: Occurs if there's an issue with fetching data from the Unsplash API or if the required `ACCESS_KEY` environment variable is missing.

#### GET /*
This is a catch-all route that serves static files from the `public` directory. It's primarily used to serve the frontend of the browser extension, with `index.html` as the default.

**Request**:
No request body is required. The path after the base URL determines which static file is requested (e.g., `/index.html`, `/styles.css`, `/script.js`).

**Response**:
A successful response will return the content of the requested static file. For any unmatched route, it typically serves `index.html`.

```html
<!-- Example of index.html content -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalized Home Page</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="/script.js"></script>
</body>
</html>
```

**Errors**:
*   `404 Not Found`: If the requested static file does not exist in the `public` directory.
*   `500 Internal Server Error`: An error occurred while attempting to serve the file.

## Technologies Used
This project leverages a modern stack to deliver a robust and efficient backend experience.

| Technology      | Description                                                                     |
| :-------------- | :------------------------------------------------------------------------------ |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | A JavaScript runtime built on Chrome's V8 JavaScript engine.                    |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | Fast, unopinionated, minimalist web framework for Node.js.                      |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | A strongly typed programming language that builds on JavaScript.                 |
| ![Dotenv](https://img.shields.io/badge/Dotenv-FFE700?style=flat-square&logo=dotenv&logoColor=black) | Loads environment variables from a `.env` file into `process.env`.            |
| ![Node-Fetch](https://img.shields.io/badge/Node--Fetch-000000?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zIDNoMTh2MThIM1oiLz48cGF0aCBkPSJNNiA2aDEybDIgMTAtMTAgNy0xMC03eiIvPjxwYXRoIGZpbGw9ImJsYWNrIiBkPSJNMTIgMTJoNmwtMiA4LTgtNnptMCAwbC02IDhoOCA2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMmw2IDJoLTZ6Ii8+PC9zdmc+&logoColor=white) | A light-weight module that brings `window.fetch` to Node.js.                      |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Cloud platform for static sites and serverless functions.                       |

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please follow these guidelines:

*   ✨ **Fork the repository**.
*   🌱 **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
*   💻 **Make your changes** and ensure they adhere to the existing code style.
*   ✅ **Write clear and concise commit messages**.
*   🚀 **Push your branch** and open a pull request.

Please ensure your code is well-tested and includes updated documentation where necessary.

## License
This project is licensed under the ISC License. See the `LICENSE` file for details (not included in this repository, but typically found in open-source projects).

---

## Author
**Samuel Tuoyo**
*   [GitHub](https://github.com/samueltuoyo15)
*   [LinkedIn](https://linkedin.com/in/yourusername) (placeholder)
*   [Twitter](https://twitter.com/yourusername) (placeholder)

---

[![Node.js version](https://img.shields.io/static/v1?label=Node.js&message=%3E%3D18.x&color=green&logo=node.js&style=flat-square)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-informational?style=flat-square&logo=express)](https://expressjs.com/)
[![Deployed with Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)