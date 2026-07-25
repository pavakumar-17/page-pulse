# Page Pulse

Page Pulse is a website analysis tool that helps users evaluate the basic SEO and performance of any website. Users simply enter a website URL, and the application analyzes the page to display useful information such as response time, HTTP status, page title, meta description, word count, headings, images, links, and other SEO-related metrics.

The project is built with **React** for the frontend and **Express.js** for the backend.

---

## Live Demo

**Frontend**

https://page-pulse-eight-beta.vercel.app

**Backend API**

https://page-pulse-api-0n8q.onrender.com

---

## Features

- Analyze any valid website URL
- Display HTTP status code
- Measure response time
- Extract page title
- Display meta description
- Count H1 tags
- Calculate word count
- Count total images
- Detect images without alt attributes
- Count hyperlinks
- Count paragraphs
- Detect canonical URL
- Detect page language
- Loading indicator while analysis is running
- Error handling for invalid or unreachable websites
- Responsive user interface

---

## Tech Stack

### Frontend

- React
- Axios
- CSS

### Backend

- Node.js
- Express.js
- Axios
- Cheerio

### Testing

- Jest
- Supertest

---

## Project Structure

```text
page-pulse/
│
├── client/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── app.js
│   ├── index.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/pavakumar-17/page-pulse.git
```

### Navigate into the project

```bash
cd page-pulse
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

---

## Running the Project

### Start the backend

```bash
cd server
npm start
```

Backend runs on:

```
http://localhost:3001
```

### Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API

### Endpoint

```
POST /api/analyse
```

### Request Body

```json
{
  "url": "https://example.com"
}
```

### Successful Response

```json
{
  "success": true,
  "data": {
    "url": "https://example.com",
    "status": 200,
    "responseTime": "245 ms",
    "title": "Example Domain",
    "metaDescription": "Not found",
    "h1Count": 1,
    "wordCount": 17,
    "totalImages": 0,
    "missingAlt": 0,
    "totalLinks": 1,
    "paragraphs": 2,
    "canonical": "Not found",
    "language": "en"
  }
}
```

---

## Output

The application displays:

- HTTP Status Code
- Response Time
- Page Title
- Meta Description
- H1 Count
- Word Count
- Total Images
- Images Missing Alt Text
- Total Links
- Paragraph Count
- Canonical URL
- Page Language

---

## Testing

The backend API is tested using **Jest** and **Supertest**.

Run the tests:

```bash
cd server
npm test
```

The current test suite covers:

- Successful website analysis
- Missing URL validation
- Empty request body validation

---

## Design Decisions

### 1. Separate Frontend and Backend

The React frontend and Express backend are maintained as separate applications. This keeps responsibilities clear, makes deployment easier, and allows each part to be developed and tested independently.

### 2. Client-side URL Validation

The application validates the website URL before sending it to the backend. This provides immediate feedback to users, improves the overall experience, and reduces unnecessary API requests.

### 3. HTML Parsing with Cheerio

Cheerio was selected for parsing HTML because it is lightweight, efficient, and well suited for extracting SEO-related information such as titles, meta descriptions, headings, links, images, canonical URLs, and language attributes without requiring a headless browser.

---

## Future Improvements

Some features that could be added in future versions include:

- Overall SEO score with detailed recommendations
- Google Lighthouse integration
- Google PageSpeed Insights API integration
- Export analysis reports as PDF
- Save analysis history
- Charts and visualizations for website metrics
- Batch analysis of multiple websites
- Dark mode
- User authentication and dashboard

---

## Author

**Pavan Kumar Nadakuditi**

GitHub:

https://github.com/pavakumar-17

---

## License

This project was created for learning purposes and as part of the **Digital Heroes Software Development Engineer Internship** technical assessment. It may also be used as a personal portfolio project.