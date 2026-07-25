const axios = require("axios");
const cheerio = require("cheerio");

async function analysePage(url) {
  try {
    const startTime = Date.now();

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
      },
      timeout: 10000,
    });

    const responseTime = Date.now() - startTime;

    const $ = cheerio.load(response.data);

    const title = $("title").text().trim() || "Not found";

    const metaDescription =
      $('meta[name="description"]').attr("content") || "Not found";

    const h1Count = $("h1").length;

    const totalImages = $("img").length;

    const missingAlt = $("img")
      .toArray()
      .filter((img) => !$(img).attr("alt"))
      .length;

    const totalLinks = $("a").length;

    const paragraphs = $("p").length;

    const canonical =
      $('link[rel="canonical"]').attr("href") || "Not found";

    const language = $("html").attr("lang") || "Not specified";

    const wordCount = $("body")
      .text()
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean).length;

   let seoScore = 0;

if (title !== "Not found") seoScore += 15;
if (metaDescription !== "Not found") seoScore += 15;
if (h1Count > 0) seoScore += 15;
if (missingAlt === 0) seoScore += 15;
if (canonical !== "Not found") seoScore += 15;
if (language !== "Not specified") seoScore += 10;
if (responseTime < 1000) seoScore += 15;

return {
  url,
  status: response.status,
  responseTime: `${responseTime} ms`,
  title,
  metaDescription,
  h1Count,
  wordCount,
  totalImages,
  totalLinks,
  paragraphs,
  missingAlt,
  canonical,
  language,
  seoScore,
};
  } catch (error) {
    if (error.response) {
      throw new Error(`Website returned HTTP ${error.response.status}`);
    }

    throw new Error(error.message || "Failed to analyse website.");
  }
}

module.exports = analysePage;