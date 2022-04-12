// server.tsx
import express from "express";

const app = express();

app.get('/', (req, res) => {
  const html = `
      <html lang="en">
      <head>
          <script src="app.js" async defer></script>
      </head>
      <body>
          <div id="root"></div>
      </body>
      </html>
  `
  res.send(html);
});

app.use(express.static("./built"));

app.listen(4242);