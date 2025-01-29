export async function GET(req) {
    const { pathname, searchParams } = new URL(req.url);
    let target = searchParams.get("url") || pathname.replace(/^\/api\/redirect\//, "");
    return Response.redirect(target, 302);
    const domain = req.nextUrl.pathname.replace(/^\/api\/redirect\//, "");
    return Response.redirect(`https://${domain}`, 302);
}
