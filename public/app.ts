interface UnsplashImageData {
  urls: {
    full: string;
  };
}

interface WeatherData {
  current: {
    temp_c: number;
  };
  location: {
    name: string;
  };
}

async function setRandomBackground(): Promise<void> {
  try {
    const response: Response = await fetch("/getRandomImages");
    const data: UnsplashImageData =
      (await response.json()) as UnsplashImageData;
    const imageUrl: string = data.urls.full;
    document.body.style.backgroundImage = `url(${imageUrl})`;
  } catch (error: unknown) {
    console.error("Error fetching the background image:", error);
  }
}

setRandomBackground();
setInterval(() => {
  const date: Date = new Date();
  const currentTime: string = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const hours: number = date.getHours();
  const time: HTMLElement | null = document.getElementById("time-element");
  const text: HTMLElement | null = document.querySelector("#showcase h3");

  if (time) {
    time.textContent = currentTime;
  }

  if (text) {
    if (hours >= 18) {
      text.textContent = "Good Evening,";
    } else if (hours >= 12) {
      text.textContent = "Good Afternoon,";
    } else if (hours >= 6) {
      text.textContent = "Good Morning,";
    } else {
      text.textContent = "Good Night,";
    }
  }
}, 100);

const searchInput: HTMLInputElement | null = document.querySelector("input");

if (searchInput) {
  searchInput.addEventListener("change", () => {
    const query: string = encodeURIComponent(searchInput.value);
    window.location.replace(`https://www.google.com/search?q=${query}`);
  });
}

const fetchWeatherTemperature = (): void => {
  fetch("/weather")
    .then((response: Response) => response.json())
    .then((data: WeatherData) => {
      const temp: number = data.current.temp_c;
      const city: string = data.location.name;
      const weatherTemp: HTMLElement | null =
        document.getElementById("temperature");
      const cityName: HTMLElement | null = document.getElementById("city-name");
      if (weatherTemp) {
        weatherTemp.innerHTML = temp.toString();
      }
      if (cityName) {
        cityName.innerHTML = city + ", ";
      }
    })
    .catch((error: unknown) =>
      console.error("Error fetching weather data:", error),
    );
};

fetchWeatherTemperature();
