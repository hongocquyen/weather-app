# 🌤️ Weather App

A modern, responsive weather application built with Next.js 15, TypeScript, and React Query. Get real-time weather information and 5-day forecasts for any city worldwide.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [SCSS Modules](https://sass-lang.com/) with responsive design
- **State Management**: [React Query (TanStack Query)](https://tanstack.com/query)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Icons**: Custom SVG icons with SVGR
- **Storage**: localStorage for search history

## 🚀 Getting Started

### Prerequisites

Ensure the following dependencies are installed on your machine:

- **Node.js**: Version 18+ is required. You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions.
  ```bash
  nvm install 18
  nvm use 18
  ```
- **Yarn**: The package manager used in this project.
  ```bash
  npm install -g yarn
  ```

### Installation

1. **Clone the repository**

```bash
git clone git@github.com:hongocquyen/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
yarn install
```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

Get your API key from [OpenWeatherMap](https://openweathermap.org/api). For testing purposes, you can use this key:

```bash
c36c729babf29b4c74c922177a9240dc
```

4. **Run the development server**

```bash
yarn dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 API Integration

### OpenWeatherMap API

The app integrates with OpenWeatherMap API for:

- **Current Weather**: Real-time weather data
- **5-Day Forecast**: Weather predictions with 3-hour intervals
- **Geocoding**: City name to coordinates conversion
- **Reverse Geocoding**: Coordinates to city name conversion

## �🔧 Development

### Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript compiler
```

### Code Quality

- **ESLint**: Code linting with Next.js recommended rules
- **TypeScript**: Strict type checking
- **SCSS**: Modular styling with variables and mixins

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_WEATHER_API_KEY`
4. Deploy automatically on every push
