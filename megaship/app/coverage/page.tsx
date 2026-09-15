import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Coverage - Megaship",
  description:
    "Megaship coverage limits, supported cruise lines, and price-drop monitoring exclusions.",
};

export default function CoveragePage() {
  return (
    <SiteShell>
      <section className="flex w-full justify-center px-6 py-20 lg:py-28">
        <div className="w-full max-w-[960px]">
          <h1 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[40px]">
            Coverage
          </h1>
          <p className="mt-2.5 max-w-[520px] text-base leading-relaxed text-pretty text-[var(--secondary-foreground)]">
            Last updated May 4, 2026
          </p>

          <div className="mt-12">
            <div
              className="text-[15px] leading-relaxed text-pretty text-[var(--secondary-foreground)]
                [&_a]:text-[var(--accent)] [&_a]:underline [&_a]:underline-offset-2
                [&_em]:italic
                [&_h2]:mt-8 [&_h2]:scroll-mt-24 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-[var(--foreground)]
                [&_h2:first-child]:mt-0
                [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-[var(--foreground)]
                [&_li]:pl-1
                [&_ol]:mt-3 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:space-y-2
                [&_p]:mt-3
                [&_strong]:font-semibold [&_strong]:text-[var(--foreground)]
                [&_ul]:mt-3 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-2"
            >
              <h2 id="what-we-do">1. What Megaship does and does not do</h2>
              <p>
                Megaship monitors publicly available cruise-line pricing for sailings you&apos;ve recorded and
                notifies you when a price drop appears that <em>may</em> qualify under the cruise line&apos;s own
                price-protection policy.{" "}
                <strong>
                  We do not file claims for you, do not pay refunds or onboard credits, do not adjust your booking,
                  and do not have any relationship with the cruise lines.
                </strong>{" "}
                Whether a claim is approved is decided by the cruise line under its current policy and at its sole
                discretion.
              </p>
              <p>
                These are the practical limits of what Megaship covers. The binding terms are in our{" "}
                <Link href="/terms">Terms of Service</Link>.
              </p>

              <h2 id="lines">2. Cruise lines we monitor</h2>
              <p>We currently monitor publicly listed pricing on:</p>
              <ul>
                <li>Royal Caribbean International</li>
                <li>Carnival Cruise Line</li>
                <li>Norwegian Cruise Line (NCL)</li>
                <li>Princess Cruises</li>
                <li>Celebrity Cruises</li>
              </ul>
              <p>
                We may add or remove lines at any time. If a sailing or fare type is not on a line we cover, we will
                not notify you about it.
              </p>

              <h2 id="eligibility">3. When a price drop is &quot;eligible&quot;</h2>
              <p>
                Across all lines we cover, a price-drop alert is meaningful only when the lower fare matches your
                booking on:
              </p>
              <ul>
                <li>
                  <strong>same ship</strong>;
                </li>
                <li>
                  <strong>same sail date</strong>;
                </li>
                <li>
                  <strong>same stateroom category</strong> (and, where the line requires it, the same fare type and
                  currency);
                </li>
                <li>
                  <strong>same number of guests</strong>; and
                </li>
                <li>
                  publicly available, bookable, on the cruise line&apos;s own channels at the moment the cruise line
                  reviews the claim.
                </li>
              </ul>

              <h2 id="common-exclusions">4. Common exclusions across all lines</h2>
              <p>
                Cruise lines exclude many fare types and booking situations. The following are excluded from
                price-protection or best-price-guarantee consideration on most or all of the lines we cover, and we
                therefore cannot reliably help with them even if a lower number appears on a listing:
              </p>
              <ul>
                <li>
                  <strong>Group rates</strong> and group bookings.
                </li>
                <li>
                  <strong>Casino offers</strong> and casino-targeted rates.
                </li>
                <li>
                  <strong>Loyalty-tier-targeted rates</strong>, residency rates, military rates, and senior rates that
                  are not available to the general public.
                </li>
                <li>
                  <strong>Travel-agent-only rates</strong> and rebates not advertised by the cruise line.
                </li>
                <li>
                  <strong>Charter sailings</strong>.
                </li>
                <li>
                  <strong>Third-party online travel agency (OTA) prices</strong> - every line we cover requires the
                  lower fare to come from the cruise line&apos;s own channels.
                </li>
                <li>
                  <strong>Rates loaded in error</strong> or with typographical errors.
                </li>
                <li>
                  <strong>&quot;Stateroom guarantee&quot; cabins</strong> (where the cruise line, not the guest, picks
                  the cabin).
                </li>
                <li>
                  <strong>Bookings already past the cruise line&apos;s price-protection window</strong> (typically the
                  final-payment date, with narrow exceptions).
                </li>
                <li>
                  Drops in <strong>taxes, government fees, port fees, fuel supplements, or gratuities</strong> - those
                  are tracked separately by the cruise line and are not the cruise fare we monitor.
                </li>
                <li>
                  Bookings <strong>under a travel agent&apos;s control</strong> where you cannot self-service (the travel
                  agent must submit the request).
                </li>
              </ul>

              <h2 id="rc">5. Royal Caribbean - what we do and do not cover</h2>
              <h3>What we monitor</h3>
              <ul>
                <li>
                  Public Royal Caribbean fares on the same ship / sail date / stateroom category as your booking.
                </li>
                <li>Drops you may claim under the &quot;Best Price Guarantee&quot; before final payment.</li>
                <li>
                  Drops you may claim within <strong>24 hours</strong> of booking creation after final payment
                  (upgrade-only outcome, subject to availability).
                </li>
              </ul>
              <h3>What we don&apos;t cover</h3>
              <ul>
                <li>Group bookings and certain promotional fares are excluded by Royal Caribbean.</li>
                <li>Non-refundable-deposit fares can only match to non-refundable fare prices.</li>
                <li>
                  Royal Caribbean&apos;s program is currently available to <strong>U.S. and Canadian residents</strong>;
                  UK residents are not eligible.
                </li>
                <li>The lower fare must be on a Royal Caribbean-owned channel and in the same currency.</li>
              </ul>

              <h2 id="carnival">6. Carnival - what we do and do not cover</h2>
              <h3>What we monitor</h3>
              <ul>
                <li>
                  <strong>Early Saver Price Protection</strong> drops up to 2 business days before sailing on bookings
                  made with the Early Saver promotion (refund/OBC depending on whether the booking is paid in full).
                </li>
                <li>
                  <strong>110% Lowest Price Guarantee</strong> drops within 48 hours of booking (non-refundable OBC).
                </li>
              </ul>
              <h3>What we don&apos;t cover</h3>
              <ul>
                <li>Super Saver, Fun Saver, Pack &amp; Go, and Flash Sale fares - none qualify for Early Saver Price Protection.</li>
                <li>
                  Group rates, membership-program rates, charters, travel-agent rebates and TA-only promotions,
                  third-party OTA prices.
                </li>
                <li>The 110% program is not offered on Carnival Australia sailings.</li>
                <li>Booking must be in USD for Early Saver.</li>
              </ul>

              <h2 id="ncl">7. Norwegian (NCL) - what we do and do not cover</h2>
              <h3>What we monitor</h3>
              <ul>
                <li>Public NCL fares on the same ship / sail date / stateroom category as your booking.</li>
                <li>
                  Price movement that may be relevant to NCL&apos;s current best-price or price-drop process for your
                  region and booking type.
                </li>
              </ul>
              <h3>What we don&apos;t cover</h3>
              <ul>
                <li>
                  NCL&apos;s claim programs and remedies vary by region, booking channel, fare type, promotion, and
                  timing. We do not determine which NCL program applies to your booking.
                </li>
                <li>
                  Claims outside NCL&apos;s applicable timing window, including bookings too close to sailing or too long
                  after booking for the relevant program.
                </li>
                <li>Group reservations, partner/net-rate promotions, special agency offers, and restricted promotional codes.</li>
                <li>Stateroom guarantees (no cabin assigned at booking).</li>
                <li>
                  Any guarantee of OBC, repricing, future cruise credit, or complimentary upgrade. NCL decides the
                  remedy, if any.
                </li>
                <li>
                  NCL&apos;s deposit-refundability rules vary by fare and promotion; we do not predict refundability or
                  cancellation economics.
                </li>
              </ul>

              <h2 id="princess">8. Princess - what we do and do not cover</h2>
              <h3>What we monitor</h3>
              <ul>
                <li>
                  Princess&apos;s &quot;Better Than Best Price Guarantee&quot; - claims must be submitted{" "}
                  <strong>before final payment</strong> only. Outcome is OBC equal to <strong>120%</strong> of the
                  difference, capped at <strong>US$2,000</strong>.
                </li>
              </ul>
              <h3>What we don&apos;t cover</h3>
              <ul>
                <li>
                  <strong>No post-final-payment option</strong> on Princess.
                </li>
                <li>Available to legal residents of the 50 U.S. states / DC or Canada, in matching currency only.</li>
                <li>Lower fare must be on Princess.com only - third-party prices are not accepted.</li>
                <li>Same bundle (Princess Plus or Princess Premier) must match.</li>
                <li>
                  OBC is non-refundable, expires at end of cruise, cannot be used in the casino, and is limited to one
                  OBC per person/booking/stateroom.
                </li>
                <li>Negotiated, group, military, casino-targeted, or otherwise non-public rates are excluded.</li>
                <li>The booking-window dates of the program have been extended multiple times and may change.</li>
              </ul>

              <h2 id="celebrity">9. Celebrity - what we do and do not cover</h2>
              <h3>What we monitor</h3>
              <ul>
                <li>
                  &quot;Celebrity Best Price Guarantee&quot; - drops on or before final payment (repricing) and drops within
                  48 hours of booking after final payment (100% OBC).
                </li>
              </ul>
              <h3>What we don&apos;t cover</h3>
              <ul>
                <li>&quot;Celebrity Exciting Deals&quot; fares - explicitly excluded.</li>
                <li>
                  Group, travel-agent-exclusive, membership, corporate/negotiated, incentive, convention, consolidator,
                  charter, auction/bid-based, and rates-loaded-in-error fares.
                </li>
                <li>
                  UK and other non-US/Canada residents are limited to a separate program with a 10% cap on cruise fare;
                  we focus on the US/Canada program.
                </li>
                <li>OBC is non-refundable, non-transferable, and forfeited at 10 PM on the last night of the cruise.</li>
                <li>Galapagos cruises follow a separate cancellation and deposit schedule.</li>
              </ul>

              <h2 id="claiming">10. How a claim is filed</h2>
              <p>
                Claims are filed by you, with the cruise line, using the channel the cruise line specifies. The Service
                surfaces the claim form or phone number for the line in question and the information you&apos;ll typically
                need to provide. We do not call cruise lines or submit forms on your behalf.
              </p>

              <h2 id="no-guarantee">11. What we do not guarantee</h2>
              <ul>
                <li>That a price drop will be detected, or detected in time to file.</li>
                <li>That a notification will be delivered or arrive promptly.</li>
                <li>
                  That a claim will be approved, or that any specific refund, onboard credit, future cruise credit, or
                  upgrade will be issued.
                </li>
                <li>
                  That cruise-line policies summarized in the Service are current - they change without notice and you
                  should always confirm directly with the cruise line.
                </li>
                <li>
                  That cancelling and rebooking will result in a net saving - penalties, lost deposits, change fees, and
                  lost promotions can outweigh the difference. <strong>You decide; we don&apos;t.</strong>
                </li>
              </ul>
              <p>
                For the binding limits and disclaimers that apply to your use of Megaship, see the{" "}
                <Link href="/terms">Terms of Service</Link>.
              </p>
            </div>

            <p className="mt-12 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted-foreground)]">
              Questions? Email{" "}
              <a className="text-[var(--accent)] underline underline-offset-2" href="mailto:support@megaship.io">
                support@megaship.io
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
