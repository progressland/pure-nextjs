export default function handler(req, res) {
  const { protocol, path } = req.query;
  if (!protocol || !path) {
    res.status(400).send("Invalid request");
    return;
  }
  let redirectUrl;
  if (protocol === "file") {
    redirectUrl = `file:///${path}`;
  } else {
    redirectUrl = `${protocol}://${path}`;
  }
  res.writeHead(308, { Location: redirectUrl });
  res.end();
}
