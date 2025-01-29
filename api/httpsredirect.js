export default function handler(req, res) {
  const { path } = req.query;
  if (!path) {
    res.status(400).send("Invalid request");
    return;
  }
  const redirectUrl = `https://${path}`;
  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
