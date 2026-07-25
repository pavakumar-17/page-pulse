const express = require("express");
const router = express.Router();

const analysePage = require("../services/pageAnalyzer");

router.post("/analyse", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    const report = await analysePage(url);

    res.json({
      success: true,
      data: report,
    });
  } catch (error) {
  res.status(500).json({
    success: false,
    message: error.message || "Unable to analyse the page",
  });
}
  }
);

module.exports = router;