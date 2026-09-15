import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Privacy Policy - Megaship",
  description:
    "Megaship privacy policy, including what information we collect, how we use it, and your rights.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="flex w-full justify-center px-6 py-20 lg:py-28">
        <div className="w-full max-w-[960px]">
          <h1 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[40px]">
            Privacy Policy
          </h1>
          <p className="mt-2.5 max-w-[520px] text-base leading-relaxed text-pretty text-[var(--secondary-foreground)]">
            Effective May 4, 2026. Last updated May 4, 2026
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
              <h2 id="summary">1. Summary</h2>
              <p>
                This policy describes what information Megaship collects, why, who we share it with, and how you
                can exercise your rights. We try to collect the minimum we need to monitor cruise prices and notify you
                about price drops on bookings you&apos;ve recorded.{" "}
                <strong>
                  We do not sell your personal information, and we do not &quot;share&quot; it for cross-context
                  behavioral advertising as those terms are defined under U.S. state privacy laws.
                </strong>
              </p>

              <h2 id="controller">2. Who is responsible for your data</h2>
              <p>
                The data controller is Overclock Studio (&quot;<strong>Megaship</strong>&quot;, &quot;
                <strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;). Contact:
              </p>
              <ul>
                <li>
                  Email: <a href="mailto:support@megaship.io">support@megaship.io</a>
                </li>
              </ul>
              <p>
                For users in the United Kingdom or the European Economic Area, please see section 19 for our
                representative under Article 27 of the UK GDPR and EU GDPR if and when we appoint one.
              </p>

              <h2 id="collect">3. Information we collect</h2>
              <h3>3.1 Account information</h3>
              <ul>
                <li>
                  <strong>Email address</strong> (required to sign in via one-time code).
                </li>
                <li>
                  <strong>Name</strong> (provided by Sign in with Apple, or by you).
                </li>
                <li>
                  <strong>Apple user identifier</strong> (a stable opaque ID returned by Apple if you use Sign in with
                  Apple) and the OAuth tokens issued by Apple to verify your sign-in. We do not see or receive your
                  Apple ID password.
                </li>
                <li>
                  <strong>Account timestamps</strong> (created, updated, last sign-in, deleted-at).
                </li>
              </ul>

              <h3>3.2 Booking and price-watch information you enter</h3>
              <ul>
                <li>Cruise line, ship, sail date, sailing length, region.</li>
                <li>Reservation / booking number.</li>
                <li>Cabin class and category, number of adults, number of children.</li>
                <li>
                  Fare type, rate code, deposit type (refundable / non-refundable), guarantee flag, paid-in-full flag,
                  booked-at date.
                </li>
                <li>Price you paid, currency.</li>
              </ul>
              <p>
                The reservation number is treated as confidential - it is stored only to identify your booking when you
                reference it (we do not call the cruise line or file claims on your behalf).
              </p>

              <h3>3.3 Subscription and entitlement</h3>
              <ul>
                <li>
                  Whether you have an active subscription, the product identifier, the entitlement period, and a stable
                  user identifier we share with our subscription provider (RevenueCat) and our paywall provider
                  (Superwall) to attribute purchases to your account.
                </li>
                <li>
                  We <strong>do not</strong> receive or store your payment-card information, your Apple ID password, or
                  your Apple Pay token. Apple processes the transaction.
                </li>
              </ul>

              <h3>3.4 Device and technical information</h3>
              <ul>
                <li>Device model, operating-system version, app version, language and locale, time zone, and a stable installation identifier.</li>
                <li>
                  Push-notification permissions and, when enabled, tokens issued by Apple Push Notification service or
                  other platform notification services.
                </li>
                <li>IP address (used by our auth and edge layers for rate-limiting and abuse prevention; see section 3.5).</li>
                <li>User-agent string from any web requests.</li>
                <li>Diagnostic and crash data, log lines, and anonymous performance traces.</li>
              </ul>

              <h3>3.5 Authentication and security data</h3>
              <ul>
                <li>
                  Session tokens and the IP address and user-agent of the device that created the session (used to
                  detect abuse and to log you out of compromised sessions).
                </li>
                <li>One-time email codes (deleted after they expire or are used).</li>
              </ul>

              <h3>3.6 Product-analytics events</h3>
              <ul>
                <li>
                  Pseudonymous events about how you use the app (for example: &quot;started onboarding&quot;, &quot;added
                  booking&quot;, &quot;viewed paywall&quot;, &quot;tapped notification&quot;). Events include a stable user
                  identifier, a device identifier, the event name, and contextual properties needed to interpret it (for
                  example, the screen name).
                </li>
                <li>
                  We try to avoid putting free-text or sensitive content into analytics events. We do not put your
                  reservation number, payment information, or password-equivalent secrets in analytics events.
                </li>
              </ul>

              <h3>3.7 Communications with us</h3>
              <ul>
                <li>
                  If you email <a href="mailto:support@megaship.io">support@megaship.io</a>, we receive your
                  email address, the contents of the message, and any attachments.
                </li>
              </ul>

              <h3>3.8 What we do not collect</h3>
              <p>
                We do not collect precise location, contacts, photos, microphone, camera, health, or biometric data. The
                app does not include third-party advertising SDKs and does not track you across other companies&apos;
                apps and websites for advertising.
              </p>

              <h2 id="sources">4. Where we get it</h2>
              <ul>
                <li>Directly from you (account creation, booking entry, support emails).</li>
                <li>From your device (technical and diagnostic data).</li>
                <li>
                  From Apple (the user identifier, name, and email returned by Sign in with Apple, plus subscription
                  receipts and entitlement events).
                </li>
                <li>From RevenueCat (subscription state for your account).</li>
                <li>From Superwall (paywall events for your account).</li>
                <li>From Mixpanel (product-analytics events keyed to a stable user identifier).</li>
                <li>
                  From cruise-line public listings (sailing and pricing data - this is not personal data, but we
                  associate it with your booking when monitoring).
                </li>
              </ul>

              <h2 id="purposes">5. How we use it</h2>
              <ul>
                <li>To create and authenticate your account.</li>
                <li>
                  To monitor cruise pricing on the sailings you&apos;ve recorded and to send price-drop and
                  policy-deadline notifications.
                </li>
                <li>
                  To provide, maintain, secure, and improve the Service (including debugging, reliability monitoring,
                  and fraud prevention).
                </li>
                <li>To process and validate your subscription via Apple, RevenueCat, and Superwall.</li>
                <li>To respond to your support requests.</li>
                <li>To send transactional messages (sign-in codes, account messages, alerts you have enabled).</li>
                <li>
                  To enforce our <Link href="/terms">Terms</Link> and protect the rights, safety, and property of
                  Megaship, our users, and the public.
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
              <p>
                We do not use your data to make automated decisions that produce legal or similarly significant effects
                on you.
              </p>

              <h2 id="legal-bases">6. Legal bases (UK / EEA users)</h2>
              <p>If UK or EU GDPR applies to you, our legal bases are:</p>
              <ul>
                <li>
                  <strong>Contract</strong> (Article 6(1)(b)): to provide the Service you signed up for, including
                  monitoring your bookings and processing your subscription.
                </li>
                <li>
                  <strong>Legitimate interests</strong> (Article 6(1)(f)): to keep the Service secure, prevent abuse,
                  debug errors, measure reliability and usage at an aggregate level, and improve features. You can
                  object at any time (see section 12).
                </li>
                <li>
                  <strong>Consent</strong> (Article 6(1)(a)): for push notifications and any optional analytics or
                  communications that require consent in your jurisdiction. You can withdraw consent at any time without
                  affecting the lawfulness of processing carried out before the withdrawal.
                </li>
                <li>
                  <strong>Legal obligation</strong> (Article 6(1)(c)): to comply with applicable laws, court orders,
                  and regulatory requests.
                </li>
              </ul>

              <h2 id="sharing">7. Who we share it with</h2>
              <p>
                We share personal information with the categories of recipients listed in section 8
                (&quot;sub-processors and service providers&quot;), and additionally:
              </p>
              <ul>
                <li>
                  <strong>Compliance and law enforcement.</strong> We may disclose information when we believe in good
                  faith it is required by law, legal process, or government request, or to investigate or prevent a
                  violation of our Terms, fraud, or a threat to safety.
                </li>
                <li>
                  <strong>Business transfers.</strong> If we are involved in a merger, acquisition, financing,
                  reorganization, or sale of assets, your information may be transferred to the successor entity, subject
                  to confidentiality and continued protection consistent with this policy.
                </li>
                <li>
                  <strong>With your direction.</strong> If you ask us to share information (for example, to a travel
                  agent), we will.
                </li>
              </ul>
              <p>
                We do not sell personal information for money, and we do not &quot;share&quot; it for cross-context
                behavioral advertising.
              </p>

              <h2 id="subprocessors">8. Sub-processors and service providers</h2>
              <p>
                We use the following service providers to operate Megaship. They process personal information on
                our instructions, under written contracts that require them to protect it.
              </p>
              <ul>
                <li>
                  <strong>Apple Inc.</strong> - App Store distribution, Sign in with Apple, in-app purchase processing,
                  Apple Push Notification service.
                </li>
                <li>
                  <strong>RevenueCat, Inc.</strong> - subscription entitlement management.
                </li>
                <li>
                  <strong>Superwall, Inc.</strong> - paywall delivery and conversion analytics.
                </li>
                <li>
                  <strong>Mixpanel, Inc.</strong> - pseudonymous product-analytics events.
                </li>
                <li>
                  <strong>Cloudflare, Inc.</strong> - Workers compute, edge delivery, Hyperdrive, KV (session cache),
                  and Email Service for transactional sign-in codes.
                </li>
                <li>
                  <strong>Axiom, Inc.</strong> - log and OpenTelemetry trace ingestion (used for debugging and
                  reliability).
                </li>
                <li>
                  <strong>Our PostgreSQL database provider</strong> - primary application data store.
                </li>
                <li>
                  <strong>Apple Inc. (iCloud Keychain)</strong> - local secure storage on your device when you choose
                  to sync your account credentials via iCloud.
                </li>
              </ul>
              <p>
                A current list of sub-processors and any material changes will be kept on this page. If we add a new
                sub-processor that materially expands the categories of data processed about you, we will update this
                section before the change takes effect for your account.
              </p>

              <h2 id="transfers">9. International data transfers</h2>
              <p>
                Megaship is operated from the <strong>United States</strong>, and several of our sub-processors are
                also based in the United States. If you access the Service from outside the United States, your
                information will be transferred to and processed in the United States and other countries with
                data-protection laws different from those in your country.
              </p>
              <p>
                Where required, we rely on the European Commission&apos;s Standard Contractual Clauses, the UK
                International Data Transfer Addendum, and other lawful transfer mechanisms with our sub-processors. You
                can request a copy of the safeguards we use by emailing{" "}
                <a href="mailto:support@megaship.io">support@megaship.io</a>.
              </p>

              <h2 id="retention">10. How long we keep it</h2>
              <ul>
                <li>
                  <strong>Account data</strong> - kept while your account is active. If you delete your account, we
                  deactivate it promptly and stop active use of the account for the Service. We then delete or anonymize
                  personal information when it is no longer needed for the purposes below and as required by applicable
                  law.
                </li>
                <li>
                  <strong>Booking and price-watch data</strong> - kept while the sailing is active and for up to{" "}
                  <strong>12 months after the sail date</strong> so you can reference history and to allow late-arriving
                  claim adjustments.
                </li>
                <li>
                  <strong>Subscription receipts and billing records</strong> - kept for at least <strong>7 years</strong>{" "}
                  for tax, audit, and dispute purposes (or longer if required by law).
                </li>
                <li>
                  <strong>Authentication logs and security events</strong> - kept for up to <strong>90 days</strong>{" "}
                  for abuse prevention.
                </li>
                <li>
                  <strong>Application logs and traces</strong> - typically kept for <strong>30-90 days</strong>,
                  depending on the system, for debugging and reliability.
                </li>
                <li>
                  <strong>One-time email codes</strong> - deleted on use or expiry, whichever is sooner.
                </li>
                <li>
                  <strong>Backups</strong> - encrypted and rotated; deletions in production propagate to backups within
                  the backup-rotation window.
                </li>
                <li>
                  <strong>Support correspondence</strong> - kept for up to <strong>3 years</strong> after the last
                  interaction.
                </li>
              </ul>
              <p>
                We may retain information for longer where required by law, to enforce our Terms, to defend legal
                claims, or to investigate fraud or abuse.
              </p>

              <h2 id="security">11. How we protect it</h2>
              <p>
                We use technical and organizational measures designed to protect your information, including encryption
                in transit (TLS), encryption at rest where supported by the underlying provider, restricted access to
                production systems, OAuth-based access from the app, short-lived bearer tokens with session-cache
                invalidation, environment isolation between development and production, and routine vulnerability and
                dependency review.
              </p>
              <p>
                No system is perfectly secure. If we learn of a security incident affecting your personal information,
                we will notify you and any regulator as required by law.
              </p>

              <h2 id="rights">12. Your rights and choices</h2>
              <p>Depending on where you live, you may have rights to:</p>
              <ul>
                <li>
                  <strong>Access</strong> the personal information we hold about you.
                </li>
                <li>
                  <strong>Correct</strong> inaccurate information.
                </li>
                <li>
                  <strong>Delete</strong> personal information.
                </li>
                <li>
                  <strong>Port</strong> a copy of your information in a structured, commonly used format.
                </li>
                <li>
                  <strong>Object to</strong> or <strong>restrict</strong> certain processing, including processing based
                  on legitimate interests.
                </li>
                <li>
                  <strong>Withdraw consent</strong> at any time, where processing is based on consent.
                </li>
                <li>
                  <strong>Lodge a complaint</strong> with your local supervisory authority (in the UK, the Information
                  Commissioner&apos;s Office at{" "}
                  <a href="https://ico.org.uk" rel="noopener">
                    ico.org.uk
                  </a>
                  ).
                </li>
              </ul>
              <p>
                To exercise these rights, email <a href="mailto:support@megaship.io">support@megaship.io</a>{" "}
                or use the in-app account-deletion option. We may need to verify your identity before completing your
                request. We will respond within the timeframe required by applicable law (typically 30-45 days), and we
                will not discriminate against you for exercising a right.
              </p>

              <h2 id="us-state">13. U.S. state-specific rights</h2>
              <p>
                Residents of California, Virginia, Colorado, Connecticut, Utah, and other U.S. states with comprehensive
                privacy laws have specific rights, including the right to know what personal information is collected,
                the right to correct, delete, port, and to opt out of &quot;sale&quot; or &quot;sharing&quot; of
                personal information. Because{" "}
                <strong>we do not sell personal information and do not engage in cross-context behavioral advertising</strong>,
                the opt-out right does not apply in practice; if that ever changes we will update this section and offer
                a clear opt-out.
              </p>

              <h3>13.1 Categories of personal information (CCPA/CPRA)</h3>
              <p>In the past 12 months we have collected:</p>
              <ul>
                <li>
                  <em>Identifiers</em> (name, email, account IDs, device IDs, IP).
                </li>
                <li>
                  <em>Commercial information</em> (subscription state, purchase history via Apple).
                </li>
                <li>
                  <em>Internet or other electronic network activity</em> (app interactions, diagnostics).
                </li>
                <li>
                  <em>Geolocation</em> only at the country/region level inferred from IP - no precise location.
                </li>
                <li>
                  <em>Inferences</em> drawn from the above to provide and improve the Service.
                </li>
              </ul>
              <p>
                We collect these for the purposes described in section 5. We have not &quot;sold&quot; personal
                information in the preceding 12 months and have not &quot;shared&quot; it for cross-context behavioral
                advertising.
              </p>

              <h3>13.2 Sensitive personal information</h3>
              <p>
                We do not collect or use &quot;sensitive personal information&quot; as defined by the California Privacy
                Rights Act, except for the limited purposes expressly permitted without an opt-out (for example, account
                authentication and security).
              </p>

              <h3>13.3 Authorized agents</h3>
              <p>California residents may use an authorized agent. We will require written authorization and may verify directly with you.</p>

              <h3>13.4 Shine the Light</h3>
              <p>
                California Civil Code §1798.83 permits residents to request information about disclosures to third
                parties for direct-marketing purposes. We do not share personal information with third parties for their
                direct marketing.
              </p>

              <h2 id="children">14. Children</h2>
              <p>
                The Service is not directed to children under 13, and we do not knowingly collect personal information
                from children under 13. If we learn that we have collected personal information from a child under 13, we
                will delete it promptly. If you believe a child has provided us information, contact us at{" "}
                <a href="mailto:support@megaship.io">support@megaship.io</a>.
              </p>

              <h2 id="notifications">15. Push notifications and email</h2>
              <p>
                With your permission, we send push notifications about price drops, policy deadlines, account events,
                and other Service-related messages. You can disable them at any time in your device settings.
                Transactional emails (sign-in codes, account messages) are required to use the Service and cannot be
                disabled while you have an account; closing your account stops them.
              </p>

              <h2 id="analytics">16. Analytics and advertising identifiers</h2>
              <p>
                We use Mixpanel for pseudonymous product analytics. We do not include third-party advertising SDKs or
                use the iOS Identifier for Advertisers (IDFA) for tracking, and the app does not request App Tracking
                Transparency permission to track you across other companies&apos; apps and websites. If that ever
                changes we will update this section and request your permission as required by Apple&apos;s policy and
                applicable law.
              </p>

              <h2 id="tracking">17. Do Not Track and Global Privacy Control</h2>
              <p>
                Our website at <a href="https://megaship.io">megaship.io</a> is a marketing site that does
                not set advertising cookies and does not track you across sites. Browsers&apos; &quot;Do Not Track&quot;
                and &quot;Global Privacy Control&quot; signals are honored to the extent applicable: because we do not
                sell or share personal information for cross-context behavioral advertising, there is nothing to opt out
                of for these signals on the website.
              </p>

              <h2 id="changes">18. Changes to this Policy</h2>
              <p>
                We may update this Policy from time to time. If a change is material, we will give reasonable advance
                notice (in-app or by email) and, where required by law, obtain consent. The &quot;Last updated&quot;
                date at the top of this page reflects the date of the most recent change.
              </p>

              <h2 id="contact">19. Contact</h2>
              <p>Privacy questions, requests under section 12 or 13, and complaints about how we handle personal information:</p>
              <ul>
                <li>
                  Email: <a href="mailto:support@megaship.io">support@megaship.io</a>
                </li>
                <li>Controller: Overclock Studio</li>
                <li>EU/UK Article 27 representative: not appointed unless required by applicable law.</li>
              </ul>
              <p>
                If you are in the EU/EEA, the UK, or Switzerland and we have not resolved your concern to your
                satisfaction, you may contact your local data-protection authority.
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
