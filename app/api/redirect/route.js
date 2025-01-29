export async function GET(req) {
    const { pathname, searchParams } = new URL(req.url);
        const target = searchParams.get("url") || `https://${pathname.replace(/^\/api\/redirect\//, "")}`;
        return Response.redirect(target, 302);
}
