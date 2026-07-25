# Page Pulse

Page Pulse is a website analysis tool that helps users check basic SEO and performance information for any website. It takes a URL as input, fetches the page, and displays useful details like the page title, response time, status code, meta description, word count, images, links, and more.

This project was built using React for the frontend and Express.js for the backend.

## Features

- Analyze any valid website URL
- Display HTTP status code
- Measure response time
- Extract page title
- Show meta description
- Count H1 tags
- Calculate word count
- Count images
- Find images without alt attributes
- Count links
- Count paragraphs
- Detect canonical URL
- Detect page language
- Loading indicator while fetching data
- Error handling for invalid or unreachable URLs
- Responsive user interface

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

## Project Structure

```
page-pulse/
├── client/
├── server/
├── .gitignore
└── README.md
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/pavakumar-17/page-pulse.git
```

### Navigate to the project

```bash
cd page-pulse
```

### Install dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd ../server
npm install
```

## Run the project

Start the backend server:

```bash
cd server
npm start
```

The backend runs on:

```
http://localhost:3001
```

Open another terminal and start the frontend:

```bash
cd client
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

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

## Future Improvements

Some features that can be added in the future:

- SEO score
- Google Lighthouse integration
- PageSpeed Insights API
- Export analysis as PDF
- Analysis history
- Dark mode
- Deploy using Vercel and Render

## Author

**Pavan Kumar Nadakuditi**

GitHub: https://github.com/pavakumar-17

## License

This project is open for learning and personal portfolio purposes.