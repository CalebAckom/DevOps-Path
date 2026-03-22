const express = require('express')
const client = require('prom-client')

const app = express()

function startMetricsServer() {

const collectDefaultMetrics = client.collectDefaultMetrics

collectDefaultMetrics()

    app.get('/metrics', async (req, res) => {

        res.set("Content-Type", client.register.contentType)

        return res.send(await client.register.metrics())
    })
}

app.get('/', function (req, res) {
    res.send('P R O M E T H E U S!')
});

// Health check endpoint
app.get('/health', (req, res) => {
  const healthData = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
    requestId: req.headers['x-request-id'],
    monitoring: monitoringService.getHealthStatus(),
  };

startMetricsServer()

app.listen(8080, function () {
    console.log(`The application is listening on port 8080!`)
});
