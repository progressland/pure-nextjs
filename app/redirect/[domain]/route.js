export async function GET(req) {
    const { pathname } = new URL(req.url);
    const domain = pathname.split("/")[3];
    if (!domain) {
        return new Response("Missing domain", { status: 400 });
    }
    const target = `https://${domain}`;
    return Response.redirect(target, 302);
}
