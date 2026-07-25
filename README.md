# 🚀 Page Pulse

Page Pulse is a Website Performance & SEO Analyzer built with React, Express, Axios, and Cheerio. It analyzes a website and provides useful SEO and performance metrics.

## Features

- Analyze any valid website URL
- Website status code
- Response time
- Page title
- Meta description
- H1 tag count
- Word count
- Total images
- Images missing alt text
- Total links
- Paragraph count
- Canonical URL
- Language detection
- Loading indicator
- Error handling
- Responsive UI

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Cheerio
- Axios

## Project Structure

```
page-pulse/
│── client/
│── server/
│── README.md
│── .gitignore
```

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/page-pulse.git
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

## Run the Project

### Start Backend

```bash
cd server
npm start
```

Server runs on:

```
http://localhost:3001
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## API Endpoint

### POST `/api/analyse`

Request Body

```json
{
  "url": "https://example.com"
}
```

## Screenshots

_Add screenshots here after running the application._

## Future Improvements

- SEO Score
- Lighthouse Integration
- PageSpeed Insights API
- Export Report as PDF
- Deployment with Vercel & Render

## Author

**Pavan Kumar Nadakuditi**