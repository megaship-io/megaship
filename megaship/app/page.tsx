import Link from "next/link";
import type { ReactNode } from "react";
import { AppleIcon, ArrowIcon, CheckIcon } from "./components/icons";
import { SiteShell } from "./components/site-shell";
import { Button, Logo, WaveDivider } from "./components/ui";

const faqs = [
  "Do cruise lines really give money back when prices drop?",
  "Which cruise lines does Megaship track?",
  "How do I get money back after I already booked?",
  "Does Megaship file the claim for me?",
  "What counts as an eligible price drop?",
  "Does it still work after final payment?",
  "I booked through a travel agent. Can I still use it?",
  "How often does Megaship check prices?",
  "How much does Megaship cost?",
  "Is Megaship affiliated with the cruise lines?",
];

const policies = [
  {
    line: "Royal Caribbean",
    name: "Best Price Guarantee",
    color: "text-[var(--accent)]",
    body: "Reprice to the lower fare any time before final payment. After final payment, a 24 hour window can still earn a cabin upgrade.",
  },
  {
    line: "Carnival",
    name: "Early Saver & 110% Guarantee",
    color: "text-[var(--coral)]",
    body: "Early Saver fares are protected up to 2 days before sailing. Drops within 48 hours of booking pay 110% of the difference in onboard credit.",
  },
  {
    line: "Princess",
    name: "Better Than Best Price",
    color: "text-[var(--accent)]",
    body: "Drops before final payment pay 120% of the difference as onboard credit, up to $2,000.",
  },
  {
    line: "Celebrity",
    name: "Best Price Guarantee",
    color: "text-[var(--gold)]",
    body: "Reprice before final payment, or claim 100% of the difference as onboard credit within 48 hours of booking after final payment.",
  },
  {
    line: "Norwegian",
    name: "Price-drop remedies",
    color: "text-[var(--green)]",
    body: "Programs vary by region, fare, and timing. Megaship tracks the price so you can ask NCL what applies to your booking.",
  },
];

function PhoneMockup({
  title,
  amount,
  accent = "var(--accent)",
}: {
  title: string;
  amount: string;
  accent?: string;
}) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-2 shadow-[0_25px_70px_rgba(15,23,42,0.16)]">
      <div className="h-[430px] w-[194px] overflow-hidden rounded-[25px] bg-[#f8fafc]">
        <div className="flex h-full flex-col px-4 py-5">
          <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-slate-900/15" />
          <div className="flex items-center justify-between">
            <Logo />
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500 shadow-sm">Live</span>
          </div>
          <div className="mt-7 rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
              Price drop
            </p>
            <p className="mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-950">{amount}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{title}</p>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
            <div className="flex items-end gap-1.5">
              {[42, 58, 34, 66, 48, 78, 36].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-md bg-slate-200"
                  style={{
                    height,
                    backgroundColor: index === 5 ? accent : undefined,
                  }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] font-medium text-slate-400">
              <span>Booked</span>
              <span>Today</span>
            </div>
          </div>
          <div className="mt-auto space-y-2">
            {["Same ship", "Same cabin", "Claim ready"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureText({
  eyebrow,
  title,
  body,
  items,
  color = "text-[var(--accent)]",
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  items: string[];
  color?: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-2.5">
      <span className={`text-base font-medium tracking-widest ${color}`}>{eyebrow}</span>
      <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[34px]">{title}</h2>
      <p className="max-w-[400px] text-[15px] leading-relaxed tracking-[-0.01em] text-[var(--secondary-foreground)]">{body}</p>
      <ul className="mt-3 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckIcon className={color} />
            <span className="text-[15px] font-medium text-[var(--foreground)]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotificationStack() {
  const notes = [
    ["Price drop on your Alaska sailing", "Your Balcony fare fell $184. You have 12 days left to claim.", "now", "opacity-100 scale-100"],
    ["Mardi Gras dropped again", "Interior fare down another $96. Early Saver protection applies.", "2d ago", "opacity-85 scale-[0.975]"],
    ["Deadline approaching", "Final payment for Symphony of the Seas is in 30 days.", "1w ago", "opacity-70 scale-95"],
  ];

  return (
    <div className="flex w-full max-w-[400px] flex-col gap-3">
      {notes.map(([title, body, time, style]) => (
        <div key={title} className={`flex gap-3 rounded-[18px] border border-[var(--border)] bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.05)] ${style}`}>
          {/*<Logo />*/}
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-[14.5px] font-semibold leading-snug tracking-[-0.01em] text-[var(--foreground)]">{title}</p>
              <span className="flex-none text-[11.5px] text-[var(--muted-foreground)]">{time}</span>
            </div>
            <p className="mt-0.5 text-[13px] leading-normal text-[var(--secondary-foreground)]">{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <SiteShell>
        <section className="overflow-hidden">
          <div className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center px-6 pt-20 text-center lg:pt-28">
            <h1 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--foreground)] sm:text-[40px] md:text-[48px]">
              <span>
                Claim your money
                <br />
                back{" "}
              </span>
              <span className="relative inline-block whitespace-nowrap text-[var(--accent)]">
                after you book.
                <svg width="100%" height="8" viewBox="0 0 328 32" fill="none" aria-hidden="true" className="absolute -bottom-1 left-0 w-full" preserveAspectRatio="none">
                  <path d="M328 9.7c-2.4.4-4.6 1-6.9 1-23.3-.3-46.5-1.5-69.8-.9-27.6.7-55.1 2.6-82.7 4.6-21.4 1.6-42.8 3.8-64.2 6.3-25.5 3-51 6.8-76.5 10-6.8.9-13.6 1.3-20.4 1.3-6.3 0-9.5-5-6.4-9.4.7-1.1 2.4-2 3.7-2.1 16.7-1.3 33.4-2.1 50-3.7 17.9-1.7 35.7-4.3 53.6-6.3C126.9 8.4 145.3 6 163.7 4.7 191.9 2.6 220.2.8 248.4.1c23-.5 46.1.8 69.2 1.3 5.2.1 9.2 1.9 10.4 8.3Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="mt-3 max-w-[600px] text-lg font-medium leading-relaxed tracking-[-0.01em] text-[var(--secondary-foreground)] sm:text-[20px]">
              Cruise prices keep moving after you book. Megaship watches yours 24/7 and helps you claim every dollar back.
            </p>
            <div className="mt-6">
              <Button>
                <AppleIcon />
                Download for iOS
              </Button>
            </div>
            <p className="mt-4 text-[13px] text-[var(--muted-foreground)]">Free to download - Add a cruise in under a minute</p>
          </div>

          <div className="relative mx-auto mt-14 flex max-w-[880px] items-end justify-center px-4 lg:mt-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 flex justify-center">
              <span className="absolute top-[-170px] h-[340px] w-[340px] rounded-full border border-[var(--accent)]/15" />
              <span className="absolute top-[-280px] h-[560px] w-[560px] rounded-full border border-[var(--accent)]/15" />
              <span className="absolute top-[-390px] h-[780px] w-[780px] rounded-full border border-[var(--accent)]/15" />
            </div>
            <div className="-mr-10 w-[160px] -rotate-[4deg] sm:-mr-6 sm:w-[210px] lg:-mr-8 lg:w-[240px]">
              <PhoneMockup title="Add your first cruise watch" amount="$184" />
            </div>
            <div className="relative z-10 w-[180px] sm:w-[240px] lg:w-[270px]">
              <PhoneMockup title="Recoverable drops caught on your booking" amount="$328" accent="var(--green)" />
            </div>
            <div className="-ml-10 w-[160px] rotate-[4deg] sm:-ml-6 sm:w-[210px] lg:-ml-8 lg:w-[240px]">
              <PhoneMockup title="Price history with a claim window" amount="$96" accent="var(--gold)" />
            </div>
          </div>
          <div className="h-20 lg:h-28" />
        </section>

        <section id="how-it-works" className="flex w-full scroll-mt-24 justify-center px-6 py-16 lg:py-24">
          <div className="grid w-full max-w-[960px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FeatureText
              eyebrow="Tracking"
              title={<>Same ship, same cabin,<br />same sail date.</>}
              body="A lower price only counts if it matches what you booked. Megaship checks your cruise line's public prices around the clock and compares them to your exact cruise."
              items={["Tracked 24/7", "Full price history for your cruise", "Cruise fare only, taxes and fees separated"]}
            />
            <div className="order-first flex items-center justify-center lg:order-none">
              <div className="w-[240px] sm:w-[260px]">
                <PhoneMockup title="Balcony fare is down before final payment" amount="$383" />
              </div>
            </div>
          </div>
        </section>

        <WaveDivider />

        <section className="flex w-full justify-center px-6 py-16 lg:py-24">
          <div className="grid w-full max-w-[960px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <NotificationStack />
            </div>
            <FeatureText
              eyebrow="Alerts"
              color="text-[var(--green)]"
              title={<>Know right away.<br />Not after the deadline.</>}
              body="Most refunds are only possible before final payment. When your price drops, you get a push notification with the amount and how long you have left to claim it."
              items={["Push notification the moment a drop is found", "Final payment countdown for every cruise", "Only drops you can actually claim"]}
            />
          </div>
        </section>

        <WaveDivider />

        <section className="flex w-full justify-center px-6 py-16 lg:py-24">
          <div className="grid w-full max-w-[960px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FeatureText
              eyebrow="Claims"
              color="text-[var(--gold)]"
              title={<>We prep the claim.<br />You get the money.</>}
              body="Every cruise line has its own rules and its own process. Megaship shows you how much to ask for, who to contact, and what to say."
              items={["Policy rules for every covered line built in", "Claim form and phone number ready to go", "Refund, onboard credit, or upgrade, explained"]}
            />
            <div className="order-first flex items-center justify-center lg:order-none">
              <div className="w-[240px] sm:w-[260px]">
                <PhoneMockup title="Claim script, policy, and number ready" amount="$328" accent="var(--gold)" />
              </div>
            </div>
          </div>
        </section>

        <WaveDivider />

        <section className="flex w-full justify-center px-6 py-16 lg:py-24">
          <div className="w-full max-w-[960px]">
            <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[34px]">
              Built for the way cruises are priced.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Final payment countdown", "12", "days", "Still time to reprice", "text-[var(--accent)]"],
                ["Every cruise you've booked", "$312", "caught", "Wonder of the Seas", "text-[var(--coral)]"],
                ["No false alarms", "OK", "match", "Public fare, same cabin", "text-[var(--gold)]"],
              ].map(([caption, value, label, note, color]) => (
                <div key={caption} className="flex flex-col">
                  <div className="flex flex-1 select-none items-center justify-center overflow-hidden rounded-2xl bg-[var(--card)] px-6 py-12">
                    <div className="w-full max-w-[250px] rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.05)]">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-full border-[5px] border-[var(--secondary)]">
                          <span className={`text-[18px] font-bold leading-none tracking-[-0.02em] ${color}`}>{value}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13.5px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">{note}</p>
                          <p className="text-[12px] text-[var(--muted-foreground)]">{label}</p>
                        </div>
                      </div>
                      <p className="mt-4 flex items-center gap-1.5 border-t border-[var(--border)] pt-3.5 text-[11.5px] font-medium text-[var(--secondary-foreground)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                        Watching
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-1.5">
                    <span className={`font-medium ${color}`}>●</span>
                    <span className="text-[15px] font-medium text-[var(--foreground)]">{caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider />

        <section id="policies" className="flex w-full scroll-mt-24 justify-center px-6 py-16 lg:py-24">
          <div className="w-full max-w-[960px]">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="max-w-[620px] text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[34px]">
                The policies cruise lines barely advertise.
              </h2>
              <Link href="/faq" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--secondary-foreground)] transition hover:text-[var(--foreground)]">
                See full coverage
                <ArrowIcon />
              </Link>
            </div>
            <p className="mt-3 max-w-[540px] text-[15px] leading-relaxed tracking-[-0.01em] text-[var(--secondary-foreground)]">
              Every major line has one. They just do not remind you to use it. Megaship watches your price and tells you when a policy applies.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {policies.map((policy) => (
                <div key={policy.line} className="flex flex-col gap-1.5 rounded-2xl bg-[var(--card)] p-6">
                  <span className={`text-[13px] font-semibold tracking-widest ${policy.color}`}>{policy.line}</span>
                  <p className="text-[17px] font-semibold tracking-[-0.015em]">{policy.name}</p>
                  <p className="text-[14px] leading-relaxed text-[var(--secondary-foreground)]">{policy.body}</p>
                </div>
              ))}
              <Link href="/faq" className="group flex flex-col gap-1.5 rounded-2xl bg-[var(--foreground)] p-6 transition hover:bg-slate-800">
                <span className="text-[13px] font-semibold tracking-widest text-[var(--accent)]">Every rule, spelled out</span>
                <p className="text-[17px] font-semibold tracking-[-0.015em] text-white">Windows, exclusions & eligibility</p>
                <p className="text-[14px] leading-relaxed text-white/70">The exact per-line rules Megaship checks against, in plain language.</p>
                <span className="mt-auto flex items-center gap-1.5 pt-3 text-[14px] font-medium text-white">
                  See full coverage
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <p className="mt-7 max-w-[560px] text-[12.5px] leading-relaxed text-[var(--muted-foreground)]">
              Policies are set and applied by the cruise lines and can change at any time. Megaship is independent and not affiliated with any cruise line.
            </p>
          </div>
        </section>

        <WaveDivider />

        <section id="business" className="flex w-full justify-center px-6 py-16 lg:py-24">
          <Link href="/business" className="group relative block w-full max-w-[960px] overflow-hidden rounded-3xl bg-[var(--foreground)] p-10 transition hover:bg-slate-800 lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute right-[18%] top-1/2 hidden -translate-y-1/2 md:block">
              <span className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/30" />
              <span className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/20" />
              <span className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/15" />
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--green)]/25 text-[#4ade80]">$</span>
                <span className="whitespace-nowrap">
                  <span className="block text-[13px] font-semibold leading-tight text-white">$314 caught</span>
                  <span className="block text-[11px] leading-tight text-white/60">Alvarez x 2 - Symphony of the Seas</span>
                </span>
              </span>
            </div>
            <div className="relative max-w-[520px]">
              <span className="text-base font-medium tracking-widest text-[var(--accent)]">For Business</span>
              <h2 className="mt-2.5 text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[34px]">
                The same engine,
                <br />
                for your whole book.
              </h2>
              <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed tracking-[-0.01em] text-white/70">
                Travel advisors and cruise sellers use Megaship to watch every client booking and turn price drops into loyalty. Bulk tracking, alert routing, and an API built for volume.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--accent)]">
                Explore Megaship for business
                <ArrowIcon />
              </span>
            </div>
          </Link>
        </section>

        <section className="w-full overflow-hidden bg-[var(--card)]">
          <div className="mx-auto grid max-w-[960px] grid-cols-1 px-6 lg:grid-cols-2 lg:px-16">
            <div className="flex flex-col justify-center py-12 lg:py-14">
              <Logo size="lg" />
              <h2 className="mt-6 text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[34px]">
                Your cruise is booked.
                <br />
                Your price is not.
              </h2>
              <p className="mt-3 max-w-[360px] text-[15px] leading-relaxed tracking-[-0.01em] text-[var(--secondary-foreground)]">
                Add your cruise in a minute. We will watch it from there.
              </p>
              <div className="mt-6">
                <Button>
                  <AppleIcon className="h-[18px] w-[18px]" />
                  Download for iOS
                </Button>
              </div>
            </div>
            <div className="relative hidden items-start justify-center pt-10 lg:flex">
              <div className="mb-[-30%] w-[260px]">
                <PhoneMockup title="Caught drops waiting to claim" amount="$328" accent="var(--green)" />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="flex w-full scroll-mt-24 justify-center px-6 py-16 pb-14 lg:py-24">
          <div className="w-full max-w-[960px]">
            <h2 className="text-[30px] font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-[34px]">Frequently Asked Questions</h2>
            <div className="mt-6">
              {faqs.map((question) => (
                <div key={question} className="border-b border-[var(--border)] last:border-b-0">
                  <button type="button" className="flex w-full cursor-pointer items-center gap-4 py-6 text-left transition hover:text-[var(--accent)]">
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center text-[var(--accent)]" aria-hidden="true">
                      <span className="absolute h-[1.5px] w-3 rounded-full bg-current" />
                      <span className="absolute h-3 w-[1.5px] rounded-full bg-current" />
                    </span>
                    <span className="text-[16px] font-medium tracking-[-0.01em] text-[var(--foreground)]">{question}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
    </SiteShell>
  );
}
