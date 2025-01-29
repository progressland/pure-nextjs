export async function GET(req) {
    const { searchParams } = new URL(req.url);
    return Response.redirect(new URL(searchParams.get("url")).toString(), 302);
}
