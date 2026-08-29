export function GET() {
  return Response.json(
    { status: "operational", service: "rakheeb-portfolio", timestamp: new Date().toISOString() },
    { headers: { "Cache-Control": "no-store" } }
  );
}
