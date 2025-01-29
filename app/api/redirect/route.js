export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    const url = new URL(url);
    return Response.redirect(url.toString(), 302);
}
