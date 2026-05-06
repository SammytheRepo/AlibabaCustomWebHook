const express = require("express");
const app = express();

// Allow JSON body
app.use(express.json());

// Webhook endpoint
app.post("/webhook/sls", (req, res) => {
    console.log("===== SLS ALERT RECEIVED =====");
    console.log(JSON.stringify(req.body, null, 2));

    // Example processing
    const alertName = req.body.alert_name;
    const severity = req.body.severity;

    console.log("Alert:", alertName);
    console.log("Severity:", severity);

    res.status(200).send("OK");
});

// Health check (optional)
app.get("/", (req, res) => {
    res.send("Webhook is running");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
