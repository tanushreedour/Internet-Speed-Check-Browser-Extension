const express = require("express");
const cors = require("cors");
const FastSpeedtest = require("fast-speedtest-api");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allows all origins
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get("/speedtest", async (req, res) => {
    try {
        let speedtest = new FastSpeedtest({
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
            verbose: false,
            timeout: 10000,
            https: true,
            urlCount: 5,
            bufferSize: 8,
            unit: FastSpeedtest.UNITS.Mbps,
        });

        let speed = await speedtest.getSpeed();
        return res.status(200).json({ speed : `${speed} Mbps`})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
