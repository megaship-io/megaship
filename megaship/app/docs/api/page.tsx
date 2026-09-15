import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "../../components/icons";
import { Logo } from "../../components/ui";

export const metadata: Metadata = {
  title: "API Reference - Megaship",
  description:
    "Megaship API reference for cruise sailing search, ship lookup, price history, and price-drop monitoring.",
};

const endpoints = [
  { method: "GET", path: "/cruises", label: "All sailings", active: true },
  { method: "GET", path: "/cruises.csv", label: "Export cruises as CSV" },
  { method: "GET", path: "/cruise/{id}", label: "Get a single cruise" },
  { method: "GET", path: "/cruise/{id}/history", label: "Price and availability history" },
  { method: "GET", path: "/changes", label: "Recent price changes" },
  { method: "GET", path: "/service-lines", label: "List cruise line names" },
  { method: "GET", path: "/ships", label: "List and filter ships" },
  { method: "GET", path: "/ships/{ship_id}", label: "Get a single ship" },
  { method: "GET", path: "/ports", label: "List departure ports" },
  { method: "GET", path: "/stats", label: "Feed coverage and freshness" },
];

const parameters = [
  ["cruise_line", "query", "string", "Cruise line name, matched case-insensitively. Example: Royal Caribbean."],
  ["ship_name", "query", "string", "Ship name. Supports partial matches."],
  ["embark_port", "query", "string", "Departure port code or port name."],
  ["region", "query", "string", "Destination region, partial match."],
  ["departure_from", "query", "date", "Sailings departing on or after this date."],
  ["departure_to", "query", "date", "Sailings departing on or before this date."],
  ["min_nights", "query", "integer", "Minimum sailing length."],
  ["max_nights", "query", "integer", "Maximum sailing length."],
  ["min_price", "query", "number", "Minimum lead-in price."],
  ["max_price", "query", "number", "Maximum lead-in price."],
  ["price_floor_pct", "query", "number", "Return sailings priced within this percentage of their recent low."],
  ["cabin", "query", "string", "inside, oceanview, balcony, or suite."],
  ["available", "query", "boolean", "Only return sailings with bookable inventory."],
  ["sort", "query", "string", "departure_date, nights, price, price_drop, or updated_at."],
  ["limit", "query", "integer", "Page size. Default 50."],
  ["offset", "query", "integer", "Rows to skip. Default 0."],
];

const responseJson = `{
  "items": [
    {
      "id": "rccl-symphony-2026-04-18-7n-east-caribbean",
      "cruise_line": "Royal Caribbean",
      "ship_name": "Symphony of the Seas",
      "departure_date": "2026-04-18",
      "return_date": "2026-04-25",
      "nights": 7,
      "region": "Caribbean",
      "embark_port": "Miami",
      "available": true,
      "lead_in_price": 829,
      "lead_in_currency": "USD",
      "price_low_30d": 799,
      "price_high_30d": 1049,
      "last_seen_at": "2026-09-15T14:36:20Z",
      "cabin_prices": [
        {
          "cabin": "inside",
          "price": 829,
          "price_low_30d": 799,
          "available": true
        },
        {
          "cabin": "balcony",
          "price": 1198,
          "price_low_30d": 1084,
          "available": true
        }
      ],
      "itinerary": [
        { "day": 1, "port": "Miami", "arrive": null, "depart": "16:30" },
        { "day": 2, "port": "At Sea", "arrive": null, "depart": null },
        { "day": 3, "port": "Philipsburg", "arrive": "08:00", "depart": "17:00" },
        { "day": 4, "port": "Charlotte Amalie", "arrive": "07:00", "depart": "16:00" },
        { "day": 5, "port": "At Sea", "arrive": null, "depart": null },
        { "day": 6, "port": "Perfect Day at CocoCay", "arrive": "08:00", "depart": "17:00" },
        { "day": 7, "port": "Nassau", "arrive": "08:00", "depart": "15:00" },
        { "day": 8, "port": "Miami", "arrive": "06:00", "depart": null }
      ],
      "booking_url": "https://www.royalcaribbean.com/cruises/...",
      "source_url": "https://www.royalcaribbean.com/search"
    }
  ],
  "total": 18432,
  "limit": 50,
  "offset": 0
}`;

const serviceLinesJson = `{
  "items": [
    "Royal Caribbean",
    "Carnival Cruise Line",
    "Norwegian Cruise Line",
    "Princess Cruises",
    "Celebrity Cruises"
  ],
  "total": 5
}`;

function MethodBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-5 items-center rounded-[5px] bg-[var(--accent)] px-1.5 text-[10px] font-bold tracking-[0.04em] text-white">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={`rounded-2xl border border-[var(--border)] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.05)] ${className}`} {...props}>{children}</div>;
}

function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#020817]">
      <button type="button" className="absolute right-2 top-2 rounded-md bg-white/8 px-2 py-1 text-[11px] font-medium text-white/70">
        Copy
      </button>
      <pre className="max-h-[620px] overflow-auto p-4 pr-14 font-mono text-[12px] leading-relaxed text-[#9ae6ff]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function EndpointSummary({ endpoint }: { endpoint: (typeof endpoints)[number] }) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5 ${endpoint.active ? "border-[var(--accent)]/30 bg-[var(--accent)]/6" : "border-[var(--border)] bg-white"}`}>
      <div className="flex min-w-0 items-center gap-2.5">
        <MethodBadge>{endpoint.method}</MethodBadge>
        <span className="truncate font-mono text-[13px] font-semibold text-[var(--foreground)]">{endpoint.path}</span>
      </div>
      <span className="hidden shrink-0 text-[12px] text-[var(--muted-foreground)] sm:inline">{endpoint.label}</span>
    </div>
  );
}

function CompactEndpoint({ endpoint }: { endpoint: (typeof endpoints)[number] }) {
  return (
    <Link href={endpoint.active ? "#cruises" : "#more-endpoints"} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] font-semibold text-[var(--secondary-foreground)] transition hover:bg-[var(--secondary)] hover:text-[var(--foreground)]">
      <MethodBadge>{endpoint.method}</MethodBadge>
      <span className="truncate font-mono">{endpoint.path}</span>
    </Link>
  );
}

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <span className="text-[13px] font-semibold tracking-widest text-[var(--accent)]">{eyebrow}</span>
      <h2 className="mt-2 text-[26px] font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-[30px]">{title}</h2>
      <p className="mt-2 max-w-[660px] text-[14.5px] leading-relaxed text-[var(--secondary-foreground)]">{body}</p>
    </div>
  );
}

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/92 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <nav aria-label="Docs" className="hidden items-center gap-1 md:flex">
            <Link href="/business" className="rounded-full px-3.5 py-1.5 text-sm font-medium text-[var(--secondary-foreground)] transition hover:text-[var(--foreground)]">Business</Link>
            <Link href="/coverage" className="rounded-full px-3.5 py-1.5 text-sm font-medium text-[var(--secondary-foreground)] transition hover:text-[var(--foreground)]">Coverage</Link>
            <a href="mailto:business@megaship.io?subject=Megaship%20API%20Access" className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[var(--foreground)] px-3.5 text-sm font-medium text-white transition hover:opacity-90">
              Get API access
              <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-[1040px] px-6 pb-10 pt-14 lg:pb-14 lg:pt-20">
          <div className="max-w-[760px]">
            <span className="inline-flex rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[12px] font-semibold tracking-widest text-[var(--accent)]">
              API REFERENCE
            </span>
            <h1 className="mt-5 max-w-[720px] text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[46px]">
              The Megaship API
            </h1>
            <p className="mt-4 max-w-[720px] text-[17px] font-medium leading-relaxed tracking-[-0.01em] text-[var(--secondary-foreground)] sm:text-[19px]">
              Every public cruise sailing we track, with parameters, example requests, price history, and ship metadata. Build search, alerts, and price-drop workflows on top of the same feed that powers Megaship.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="p-5">
              <span className="text-[12px] font-semibold tracking-widest text-[var(--accent)]">BASE URL</span>
              <div className="mt-3 rounded-lg bg-[#08223a] px-3 py-2.5 font-mono text-[13px] font-semibold text-[#9ae6ff]">
                https://api.megaship.io/v1
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--secondary-foreground)]">
                All endpoints are versioned under <span className="font-mono text-[var(--foreground)]">/v1</span>.
              </p>
            </Card>
            <Card className="p-5">
              <span className="text-[12px] font-semibold tracking-widest text-[var(--accent)]">AUTHENTICATION</span>
              <div className="mt-3 rounded-lg bg-[#08223a] px-3 py-2.5 font-mono text-[13px] font-semibold text-[#9ae6ff]">
                Authorization: Bearer YOUR_API_KEY
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--secondary-foreground)]">
                Send your key with every request. Contact us for staging and production credentials.
              </p>
            </Card>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1040px] grid-cols-1 gap-8 px-6 pb-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
              <p className="px-2 py-2 text-[12px] font-semibold tracking-widest text-[var(--muted-foreground)]">ALL ENDPOINTS</p>
              <div className="mt-1 flex flex-col gap-1">
                {endpoints.map((endpoint) => (
                  <CompactEndpoint key={endpoint.path} endpoint={endpoint} />
                ))}
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <SectionTitle
              eyebrow="ENDPOINTS"
              title="All endpoints"
              body="Ten public endpoints. Start with the cruises feed, then expand into prices, ships, ports, and freshness metrics as your integration grows."
            />

            <div className="mt-6 grid grid-cols-1 gap-2">
              {endpoints.slice(0, 6).map((endpoint) => (
                <EndpointSummary key={endpoint.path} endpoint={endpoint} />
              ))}
            </div>

            <Card id="cruises" className="mt-4 overflow-hidden">
              <div className="border-b border-[var(--border)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <MethodBadge>GET</MethodBadge>
                    <h3 className="truncate font-mono text-[18px] font-semibold">/cruises</h3>
                  </div>
                  <span className="text-[12px] text-[var(--muted-foreground)]">List and filter cruises</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--secondary-foreground)]">
                  Paginated, filterable list of sailings. This is the workhorse endpoint for search results, fare alerts, and availability screens.
                </p>
              </div>

              <div className="p-5">
                <p className="text-[12px] font-semibold tracking-widest text-[var(--muted-foreground)]">PARAMETERS</p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
                  <table className="w-full min-w-[720px] border-collapse text-left">
                    <thead className="bg-[var(--card)]">
                      <tr>
                        {["Name", "In", "Type", "Description"].map((head) => (
                          <th key={head} className="border-b border-[var(--border)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--muted-foreground)]">{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {parameters.map(([name, location, type, description], index) => (
                        <tr key={name}>
                          <td className={`px-4 py-3 font-mono text-[12px] font-semibold text-[var(--foreground)] ${index === parameters.length - 1 ? "" : "border-b border-[var(--border)]"}`}>{name}</td>
                          <td className={`px-4 py-3 text-[12px] text-[var(--secondary-foreground)] ${index === parameters.length - 1 ? "" : "border-b border-[var(--border)]"}`}>{location}</td>
                          <td className={`px-4 py-3 font-mono text-[12px] text-[var(--accent)] ${index === parameters.length - 1 ? "" : "border-b border-[var(--border)]"}`}>{type}</td>
                          <td className={`px-4 py-3 text-[12.5px] leading-relaxed text-[var(--secondary-foreground)] ${index === parameters.length - 1 ? "" : "border-b border-[var(--border)]"}`}>{description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-[12px] font-semibold tracking-widest text-[var(--muted-foreground)]">EXAMPLE REQUEST</p>
                <div className="mt-3">
                  <CodeBlock>{`curl -H "Authorization: Bearer $MEGASHIP_API_KEY" \\
  "https://api.megaship.io/v1/cruises?cruise_line=Royal%20Caribbean&region=Caribbean&available=true&limit=1"`}</CodeBlock>
                </div>

                <p className="mt-6 text-[12px] font-semibold tracking-widest text-[var(--muted-foreground)]">RESPONSE <span className="text-[var(--green)]">200 OK</span></p>
                <div className="mt-3">
                  <CodeBlock>{responseJson}</CodeBlock>
                </div>
              </div>
            </Card>

            <div id="more-endpoints" className="mt-4 grid grid-cols-1 gap-2">
              {endpoints.slice(6).map((endpoint) => (
                <EndpointSummary key={endpoint.path} endpoint={endpoint} />
              ))}
            </div>

            <Card className="mt-4 overflow-hidden">
              <div className="border-b border-[var(--border)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <MethodBadge>GET</MethodBadge>
                    <h3 className="truncate font-mono text-[18px] font-semibold">/service-lines</h3>
                  </div>
                  <span className="text-[12px] text-[var(--muted-foreground)]">List cruise line names</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--secondary-foreground)]">
                  Direct cruise line names in the feed. Use this endpoint to build filters and normalize user input before calling the cruises endpoint.
                </p>
              </div>
              <div className="p-5">
                <p className="text-[12px] font-semibold tracking-widest text-[var(--muted-foreground)]">EXAMPLE REQUEST</p>
                <div className="mt-3">
                  <CodeBlock>{`curl -H "Authorization: Bearer $MEGASHIP_API_KEY" \\
  "https://api.megaship.io/v1/service-lines"`}</CodeBlock>
                </div>
                <p className="mt-6 text-[12px] font-semibold tracking-widest text-[var(--muted-foreground)]">RESPONSE <span className="text-[var(--green)]">200 OK</span></p>
                <div className="mt-3">
                  <CodeBlock>{serviceLinesJson}</CodeBlock>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1040px] px-6 pb-20">
          <div className="overflow-hidden rounded-3xl bg-[#08223a] px-6 py-12 text-center text-white shadow-[0_24px_70px_rgba(8,34,58,0.22)] sm:px-10">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em]">Build on the full feed</h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[14.5px] leading-relaxed text-white/70">
              75,000+ unique sailings across five cruise lines, refreshed daily and ready for search, alerting, pricing, and analytics workflows.
            </p>
            <a href="mailto:business@megaship.io?subject=Megaship%20API%20Access" className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-[var(--coral)] px-5 text-[15px] font-semibold text-white transition hover:brightness-105">
              Get API access
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-4 px-6 py-8 text-[12px] text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            <span>&copy; 2026 Megaship</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/business">Business</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@megaship.io">support@megaship.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
