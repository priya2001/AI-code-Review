const generateContent = require("../services/ai.service");

async function getReview(req, res) {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ message: "Code is required" });
    }

    // Gemini ko call karna
    const review = await generateContent(code);

    console.log("AI Review:", review);
    res.json({ review });  // direct review bhejna
  } catch (err) {
    console.error("Controller Error:", err);
    res.status(500).json({ message: "Error reviewing code" });
  }
}

module.exports = { getReview };
