import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const publicDir: string = path.join(process.cwd(), "public");

app.use(express.static(publicDir));
app.enable("trust proxy");

const getClientIP = (req: any): string => {
  return (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    "197.210.76.159"
  );
};

app.get("/weather", async (req: any, res: any) => {
  try {
    const ip = getClientIP(req);

    if (ip === "::1" || ip === "127.0.0.1") {
      const city = "Warri";
      const API_KEY: string | undefined = process.env.API_KEY;
      const apiUrl: string = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
      const weatherResponse = await fetch(apiUrl);
      const weatherData: any = await weatherResponse.json();
      return res.json(weatherData);
    }

    const geoResponse = await fetch(
      `https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_TOKEN}`,
    );
    const geoData: any = await geoResponse.json();
    const city: string = geoData.city || "Warri";

    const API_KEY: string | undefined = process.env.API_KEY;
    const apiUrl: string = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    const weatherResponse = await fetch(apiUrl);
    const weatherData: any = await weatherResponse.json();

    res.json(weatherData);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getRandomImages", async (_req: any, res: any) => {
  const accessKey: string | undefined = process.env.ACCESS_KEY;
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=nature&client_id=${accessKey}`,
    );
    const data: any = await response.json();
    res.json(data);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("*", (req: any, res: any) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

const PORT: string | number = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
