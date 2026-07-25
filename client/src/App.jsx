import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyse = async () => {
    if (!url.trim()) {
      setError("Please enter a website URL.");
      setReport(null);
      return;
    }

    let website = url.trim();

    if (
      !website.startsWith("http://") &&
      !website.startsWith("https://")
    ) {
      website = "https://" + website;
    }

    try {
      new URL(website);
    } catch {
      setError("Please enter a valid URL.");
      setReport(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:3001";

const res = await axios.post(
  `${API_URL}/api/analyse`,
  {
    url: website,
  }
);

      setReport(res.data.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to analyse this website."
      );
      setReport(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">

        <div className="header">
          <h1>Page Pulse</h1>
          <p>Website Performance & SEO Analyzer</p>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                analyse();
              }
            }}
          />

          <button onClick={analyse} disabled={loading}>
            {loading ? (
              <>
                <span className="loader"></span>
                Analysing...
              </>
            ) : (
              "Analyse Website"
            )}
          </button>
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {report && (
          <>
            <div className="success">
              Analysis completed successfully
            </div>

            <div className="report">
              <h2>Analysis Report</h2>

              <div className="report-grid">

                <div className="card">
                  <span>Status</span>
                  <h3 className={report.status === 200 ? "green" : "red"}>
                    {report.status}
                  </h3>
                </div>

                <div className="card">
                  <span>Response Time</span>
                  <h3>{report.responseTime}</h3>
                </div>

                <div className="card">
                  <span>H1 Tags</span>
                  <h3>{report.h1Count}</h3>
                </div>

                <div className="card">
                  <span>Word Count</span>
                  <h3>{report.wordCount}</h3>
                </div>

                <div className="card">
                  <span>Total Images</span>
                  <h3>{report.totalImages}</h3>
                </div>

                <div className="card">
                  <span>Total Links</span>
                  <h3>{report.totalLinks}</h3>
                </div>

                <div className="card">
                  <span>Paragraphs</span>
                  <h3>{report.paragraphs}</h3>
                </div>

                <div className="card">
                  <span>Language</span>
                  <h3>{report.language}</h3>
                </div>

                <div className="card">
                  <span>Images Missing Alt</span>
                  <h3>{report.missingAlt}</h3>
                </div>

                <div className="card">
                  <span>Page Title</span>
                  <h3>{report.title}</h3>
                </div>

                <div className="card full">
                  <span>Website</span>
                  <p>{report.url}</p>
                </div>

                <div className="card full">
                  <span>Canonical URL</span>
                  <p>{report.canonical}</p>
                </div>

                <div className="card full">
                  <span>Meta Description</span>
                  <p>{report.metaDescription}</p>
                </div>

              </div>
            </div>
          </>
        )}

        <div className="footer">
  <p>React • Express • Axios • Cheerio</p>

  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Built for Digital Heroes Training Task
  </a>
</div>

      </div>
    </div>
  );
}

export default App;