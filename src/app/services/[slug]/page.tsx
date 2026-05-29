import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Layers,
  Award,
  DollarSign,
  HelpCircle,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

// Custom type definitions for service schema mapping
interface ServiceData {
  title: string;
  subheadline: string;
  pains: { title: string; desc: string }[];
  solution: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  deliverables: string[];
  faq: { q: string; a: string }[];
}

// 8 specific premium growth services mapped content
const servicesContent: Record<string, ServiceData> = {
  reels: {
    title: "High-Retention Reels & Shorts Engine",
    subheadline: "Reels that hold user attention, optimize algorithm distributions, and drive audience actions.",
    pains: [
      { title: "Weak Narrative Hooks", desc: "Losing 80% of readers/viewers in the first 3 seconds due to generic, slow introductions." },
      { title: "Plunging Drop-off Rates", desc: "Watch retention drops quickly because visual elements remain static, dull, and uninspired." },
      { title: "No Action Conversion", desc: "Generating millions of empty vanity views that fail to redirect anyone to your booking forms." },
    ],
    solution: [
      { title: "Dynamic Visual Edits", desc: "Frame-accurate jumpcuts, premium asset drops, custom typography animations, and cinematic pacing." },
      { title: "Psychological Copy Hooking", desc: "Crafting structured narrative formats that leverage curiosity gaps, pain recognition, and instant value." },
      { title: "Conversion Bridging", desc: "We integrate custom high-performing mid-video and end-video lead magnets to build conversion loops." },
    ],
    process: [
      { step: "01", title: "Audit & Deconstruct", desc: "We deconstruct your current audience data, hook retention logs, and content style metrics." },
      { step: "02", title: "Narrative Strategy", desc: "Our team drafts your dynamic content script templates, visual theme assets, and organic schedules." },
      { step: "03", title: "Production & Pacing", desc: "We take your raw captures and convert them into cinematic, retention-engineered short clips." },
      { step: "04", title: "Performance Iteration", desc: "We review watch-time charts daily, adjusting visual hooks, fonts, and pacing structures." },
    ],
    deliverables: [
      "15 to 30 fully edited, retention-engineered Short Clips/Reels monthly",
      "High-converting hook formulas & custom script templates",
      "Custom brand font styling, animations, and sound effects blueprints",
      "Comprehensive weekly retention audit reports & optimization calls",
    ],
    faq: [
      { q: "What is your typical turnaround time for edits?", a: "Once raw files are delivered, our standard turnaround is 48 hours for completed draft versions." },
      { q: "Do you help with script writing and scripting strategy?", a: "Yes. Every contract includes a growth director who helps write script templates, hooks, and call-to-actions." },
      { q: "Which platforms does this content cover?", a: "We optimize edits specifically for Instagram Reels, YouTube Shorts, and TikTok algorithms." },
    ],
  },
  "graphic-design": {
    title: "High-Authority Graphic & Visual Design",
    subheadline: "Premium visual assets, high-converting carousel ads, and modern typography.",
    pains: [
      { title: "Generic Visual Identity", desc: "Blending into the infinite feed because your designs look like generic stock Canva templates." },
      { title: "Archaic Ad Layouts", desc: "High cost-per-click because your social ads fail to stop the user's scrolling momentum." },
      { title: "Inconsistent Branding", desc: "Visual assets look different across channels, diluting your brand's authority and trust factors." },
    ],
    solution: [
      { title: "Bespoke Modern Typography", desc: "Curated type systems and custom layout structures inspired by high-end luxury digital operators." },
      { title: "Scroll-Stopping Carousel Ads", desc: "Multi-slide storyboards designed specifically to capture eyes and trigger action clicks." },
      { title: "Rigid Visual Standards", desc: "A robust design framework ensuring absolute visual synergy across all physical and digital fronts." },
    ],
    process: [
      { step: "01", title: "Identity Definition", desc: "We dissect your positioning, competitor styles, and core brand color values." },
      { step: "02", title: "Asset Wireframing", desc: "Our team mocks up structure, spacing, and typographic guidelines for your brand." },
      { step: "03", title: "High-Fidelity Design", desc: "We build out fully customized carousels, social ads, covers, and platform assets." },
      { step: "04", title: "Brand Assets Package", desc: "We compile all custom components, styles, and vector exports into a central design guide." },
    ],
    deliverables: [
      "Scroll-stopping social ad templates & dynamic custom carousel sliders",
      "Central design guide containing customized layouts, vectors, and font pairings",
      "Complete set of high-res social media page headers, templates, and banners",
      "Unlimited requests buffer inside active monthly design queues",
    ],
    faq: [
      { q: "Can we request revisions on design templates?", a: "Absolutely. We offer iterative revisions until the visual direction perfectly commands your brand's authority." },
      { q: "In what formats do you deliver source assets?", a: "We deliver full high-res SVG, PNG, and layered Figma files ready for your developers and managers." },
      { q: "Do you support physical print layouts too?", a: "We specialize primarily in digital conversions, but can prepare print-ready vectors and layouts on request." },
    ],
  },
  websites: {
    title: "Conversion-Focused Premium Web Engines",
    subheadline: "Ultra-fast, motion-packed, Next.js sites built with premium luxury visual languages.",
    pains: [
      { title: "High Lead Bounce Rates", desc: "Losing customers because your site takes 4+ seconds to load or feels archaic on mobile views." },
      { title: "Zero Kinetic Motion", desc: "Users leave because the page feels flat, static, uninspiring, and lacks interactive depth." },
      { title: "Disconnected Funnels", desc: "Beautiful pages that fail to convert traffic into WhatsApp chats or booked consultation slots." },
    ],
    solution: [
      { title: "Next.js & React Frameworks", desc: "We build custom, modern React platforms resulting in sub-millisecond core web vital response speeds." },
      { title: "Cinematic Interaction Stack", desc: "Smooth kinetic scrolls, cursor spotlight tracking, dynamic borders, and custom motion rigs." },
      { title: "Conversion Engine Built-in", desc: "Integrated booking links, WhatsApp redirect macros, and responsive high-converting layout cards." },
    ],
    process: [
      { step: "01", title: "Structure Blueprinting", desc: "We map user journeys, page directories, and detailed layout wireframes." },
      { step: "02", title: "Cinematic Design", desc: "We create luxury interactive concepts with custom typography, colors, and motion specs." },
      { step: "03", title: "Next.js Production", desc: "We build out clean, component-focused TypeScript, Tailwind CSS, and Framer Motion code." },
      { step: "04", title: "Optimization & Launch", desc: "We run comprehensive lighthouse audits, host on global edge servers, and connect your domains." },
    ],
    deliverables: [
      "Custom Next.js & Tailwind CSS high-performance React application codebase",
      "Bespoke motion systems including smooth scrolls, spotlight cards, and custom curves",
      "Full SEO strategy implementation, fast core web vitals, and metadata optimizations",
      "Complete hosting pipeline setup with sub-second worldwide edge delivery networks",
    ],
    faq: [
      { q: "How long does a premium website build take?", a: "A standard highly customized 5-to-10 page Next.js website build typically takes 4 to 6 weeks from wireframe to launch." },
      { q: "Will I be able to easily update text and content later?", a: "Yes. We configure full CMS hookups (Sanity/Payload) or construct modular React files that allow seamless updates." },
      { q: "Are your websites optimized for mobile devices?", a: "Yes. Every screen is designed from mobile-first up to cinema-width resolutions with adaptive, fluid scaling." },
    ],
  },
  ads: {
    title: "High-ROAS Paid Acquisition Funnels",
    subheadline: "Multi-channel paid acquisition pipelines optimized for maximum margins and automated booking systems.",
    pains: [
      { title: "Wasted Advertising Spend", desc: "Dumping thousands into Meta/Google ads only to generate low-intent clicks with zero purchases." },
      { title: "High Cost-Per-Acquisition", desc: "CPA climbs weekly because ad copy, targeting setups, and landing copy lack conversion hooks." },
      { title: "Broken Conversion Paths", desc: "Ads redirect to standard, uninspired shop homepages rather than dedicated landing structures." },
    ],
    solution: [
      { title: "Precision Target Modeling", desc: "Sifting databases to identify high-intent target parameters and custom demographic segments." },
      { title: "Direct-Response Creative", desc: "Highly persuasive copy, dynamic scroll-stoppers, and problem-focused direct ad hooks." },
      { title: "Automated Booking Bridges", desc: "Connecting ads directly to high-converting booking bridges that pre-qualify every inbound lead." },
    ],
    process: [
      { step: "01", title: "Data Integration", desc: "We set up tracking pixels, target identifiers, and analytics dashboard connections." },
      { step: "02", title: "Creative Sprints", desc: "We script and design multiple variations of scroll-stopping visual hooks and copywriting lines." },
      { step: "03", title: "Funnel Deployment", desc: "We launch highly targeted lookalike structures, custom segments, and retargeting ads." },
      { step: "04", title: "Analytical Optimisation", desc: "We monitor performance metrics daily, cutting low-performing creatives and scaling winner systems." },
    ],
    deliverables: [
      "Full setup and weekly scaling management across Meta, Google, and LinkedIn ad accounts",
      "Dynamic ad creatives including high-engagement edited reels and high-contrast images",
      "Persistent testing sprints of copywriting options, hooks, and targeting structures",
      "Real-time analytical dashboard access and comprehensive weekly ROAS spreadsheets",
    ],
    faq: [
      { q: "What is your recommended minimum monthly ad budget?", a: "We recommend starting with a minimum of $2,000/month in direct ad spend to collect statistically significant feedback." },
      { q: "Do you guarantee a specific ROAS or conversion rate?", a: "We guarantee the engineering of conversion funnels based on audited metrics. While exact ROAS depends on your product, we aim for a minimum of 3.5x." },
      { q: "How long until we start seeing booked consult slots?", a: "Initial campaign activations typically yield pre-qualified consultation bookings within the first 7 to 10 days of going live." },
    ],
  },
  "influencer-marketing": {
    title: "Creator Partnerships & Influencer Engines",
    subheadline: "Engineered creator partnerships that build instant brand credibility and drive organic acquisition.",
    pains: [
      { title: "Unscalable Creator Outreach", desc: "Wasting hours sending manual cold emails to creators only to get ignored or quoted ridiculous fees." },
      { title: "Low-Performing Placements", desc: "Paying influencers for sponsored slots that return zero actual sales because the content lacked conversion context." },
      { title: "Zero Tracking Transparency", desc: "Sponsoring channels without dedicated tracking models, leaving you completely blind to actual performance." },
    ],
    solution: [
      { title: "Proprietary Creator Network", desc: "Instant access to vetted, conversion-focused micro-influencers and authority figures." },
      { title: "Direct-Response Storyboards", desc: "We construct conversion-focused script storyboards for influencers, ensuring they outline pain points." },
      { title: "Dedicated Tracking Engines", desc: "Attribution models, personalized booking links, and customized checkout codes for every placement." },
    ],
    process: [
      { step: "01", title: "Target Mapping", desc: "We define matching creator demographics, alignment variables, and budget constraints." },
      { step: "02", title: "Outreach & Negotiations", desc: "Our team handles negotiations, locking in optimal pricing, deliverables, and usage rights." },
      { step: "03", title: "Briefing & Storyboarding", desc: "We provide creators with highly optimized direct-response briefs and script templates." },
      { step: "04", title: "Deployment & Attribution", desc: "We launch partnerships, track attribution, and scale relationships with top-performing creators." },
    ],
    deliverables: [
      "Vetted, customized micro-influencer rosters aligning perfectly with your brand's vertical",
      "Custom briefing documents, direct-response script outlines, and call-to-action cards",
      "Contract negotiation, asset collection management, and usage rights handshakes",
      "Precise attribution sheets tracking click conversions, purchases, and booked slots",
    ],
    faq: [
      { q: "Do you work with macro-influencers or micro-influencers?", a: "We specialize in highly targeted micro and mid-tier influencers (10k-200k followers) due to their high trust and strong engagement margins." },
      { q: "Who pays the creator fees?", a: "Creator fees are set by agreement and are typically paid out of your allocated campaign placement budgets managed by us." },
      { q: "Can we reuse creator-generated content in our paid ads?", a: "Yes. We negotiate full advertising usage rights for influencer assets so you can use them inside your paid ad engines." },
    ],
  },
  "social-media-handling": {
    title: "Hands-Off Social Media Operations",
    subheadline: "Complete content distribution, platform SEO setups, and daily analytical iteration.",
    pains: [
      { title: "Endless Manual Uploads", desc: "Your executive team wastes valuable growth hours manually uploading, writing tags, and sorting video files." },
      { title: "Invisible Channel Searchability", desc: "Content gets zero views because page descriptions, video titles, and keywords bypass platform search indexes." },
      { title: "Stagnating Brand Feeds", desc: "Feeds look abandoned because updates are irregular, comments go unaddressed, and profile grids lack design." },
    ],
    solution: [
      { title: "Automated Distribution", desc: "Hands-off uploading across YouTube, Instagram, TikTok, LinkedIn, and Facebook feeds." },
      { title: "Platform SEO Integration", desc: "Optimizing metadata, writing video transcripts, researching tags, and indexing keywords for searches." },
      { title: "Active Community Nurturing", desc: "Consistent engagement, answering queries in the comments, and capturing hot booking leads in DMs." },
    ],
    process: [
      { step: "01", title: "Profile Auditing", desc: "We clean up account profiles, optimizing bios, headers, navigation, and links." },
      { step: "02", title: "Editorial Calendar", desc: "We organize a consistent, conversion-focused publishing timetable mapped across channels." },
      { step: "03", title: "SEO Writing & Uploads", desc: "Our team drafts keyword-rich copy, titles, descriptions, tags, and manages all publishing queues." },
      { step: "04", title: "DM Lead Bridging", desc: "We monitor notifications, capturing inquiries, answering FAQs, and routing hot leads to your scheduler." },
    ],
    deliverables: [
      "Consistent, multi-channel publishing scheduling and metadata setups",
      "Optimized bio copies, custom custom profile headers, and link-in-bio structures",
      "Platform keyword research, transcripts creation, and tags optimizations",
      "Daily DM/Comment lead tracking and routing to your booked call pipelines",
    ],
    faq: [
      { q: "Will I need to share absolute password access to my profiles?", a: "No. We utilize secure platform managers (like Meta Business Suite, Google Workspace, and scheduling tools) to publish securely without direct logins." },
      { q: "Do you reply to technical customer support questions in comments?", a: "We align on a customized FAQ sheet. For complex inquiries, we route leads to your internal sales or support team." },
      { q: "How many posts do you schedule per week?", a: "We establish optimal posting schedules for your vertical, typically ranging from 5 to 14 uploads across active channels weekly." },
    ],
  },
  seo: {
    title: "Organic Search Dominance Engine",
    subheadline: "Commanding organic search dominance for high-intent queries that capture buyer traffic on autopilot.",
    pains: [
      { title: "Zero Organic Discovery", desc: "Relying purely on expensive paid advertising because your site is completely invisible on Google." },
      { title: "Low-Intent Traffic Clicks", desc: "Ranking for empty informational keywords that drive clicks but fail to generate any consult requests." },
      { title: "Toxic Technical Elements", desc: "Search index blocks because your page layout suffers from slow response metrics or crawl errors." },
    ],
    solution: [
      { title: "High-Intent Keyword Map", desc: "We discover bottom-of-funnel search phrases that potential clients search when they are ready to buy." },
      { title: "Deep Content Clusters", desc: "Creating dense collections of expert articles, guides, and pages that establish instant topical authority." },
      { title: "Technical Architecture Tuning", desc: "Optimizing schemas, clean internal linking structures, clean XML sitemaps, and Core Web Vitals." },
    ],
    process: [
      { step: "01", title: "Technical Auditing", desc: "We run deep crawler audits, pinpointing index blocks, broken redirects, and speed drops." },
      { step: "02", title: "Intent Research", desc: "We identify search phrases with immediate transactional intent matching your core offers." },
      { step: "03", title: "Content Sprint", desc: "We author expert, high-authority articles structured cleanly with header schemas and CTA links." },
      { step: "04", title: "Authority Backlinking", desc: "We build premium editorial links and PR mentions that boost your site's authority." },
    ],
    deliverables: [
      "Deep keyword maps highlighting transactional terms that generate booked calls",
      "Weekly SEO-optimized, expert articles formatted cleanly with header schemas",
      "Full technical optimization audits correcting index blocks, sitemaps, and redirections",
      "Premium, white-hat editorial backlinks and mentions from authority sites monthly",
    ],
    faq: [
      { q: "How long does it take to start ranking on Google's page one?", a: "SEO is a compound growth engine. Competitive queries typically require 3 to 6 months to secure page one dominance." },
      { q: "Do you write all the article content yourself?", a: "Yes. Our team of expert content strategists writes, edits, and formats every article to meet the highest editorial guidelines." },
      { q: "What metrics do you track in SEO campaigns?", a: "We optimize for organic impressions, ranking positions, organic click-throughs, and most importantly, organic consult bookings." },
    ],
  },
  "content-creation": {
    title: "High-Velocity Content Strategy & Creative Engine",
    subheadline: "Bespoke brand direct-response playbooks, custom hook templates, script frameworks, and retention analytics auditing.",
    pains: [
      { title: "Boring Script Structures", desc: "Your video transcripts read like dry textbook guidelines rather than persuasive audience narratives." },
      { title: "Directionless Production", desc: "Wasting thousands of dollars filming random ideas with no clear conversion path or target hook metrics." },
      { title: "Algorithmic Stagnation", desc: "Generating flat-line views because your content formats fail to adapt to platform changes." },
    ],
    solution: [
      { title: "Direct-Response Scripting", desc: "Structuring video and written scripts using proven attention hooks, body retention, and action CTA beats." },
      { title: "Custom Content Blueprinting", desc: "Bespoke visual ideas, format styles, and hook architectures tailored for your specific brand." },
      { title: "Weekly Retention Auditing", desc: "Reviewing performance curves to identify where viewers drop off, rewriting scripts to patch loops." },
    ],
    process: [
      { step: "01", title: "Persona Analysis", desc: "We identify client pain patterns, visual styles, and narrative hooks." },
      { step: "02", title: "Playbook Construction", desc: "We author your custom scripting framework, formatting guidelines, and brand guides." },
      { step: "03", title: "Script Writing Sprints", desc: "Our team drafts exact, word-for-word scripts equipped with specific call-outs and editing cues." },
      { step: "04", title: "Retention Iteration", desc: "We review uploaded content curves, editing formatting beats, hook styles, and CTA paths." },
    ],
    deliverables: [
      "Customized, multi-channel direct-response content strategy playbook",
      "Weekly direct-response video scripts equipped with editing cues and hook variants",
      "Deep structural audits of uploaded assets with hook-by-hook retention metrics",
      "Ongoing ideation sprints covering rising trends, formats, and competitor campaigns",
    ],
    faq: [
      { q: "Do we film the content ourselves?", a: "Yes. You film the videos using our custom scripts and briefs, then ship the raw files to our production engines to edit and publish." },
      { q: "Do you write scripts for written platforms like LinkedIn or Twitter?", a: "Yes. We specialize in cross-platform narrative design, creating scripts for short videos, long videos, and written authority threads." },
      { q: "How many scripts do you write for us weekly?", a: "Our standard campaigns cover 3 to 6 customized scripts weekly depending on your publishing pace." },
    ],
  },
};

// Generates static paths at build-time for instant loading
export async function generateStaticParams() {
  return Object.keys(servicesContent).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesContent[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 select-none bg-white">
        
        {/* Service Hero */}
        <section className="relative py-20 border-b border-light-gray/20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Back Button */}
            <Link
              href="/#services"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-soft-gray hover:text-deep-black mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Growth Engine</span>
            </Link>

            <div className="max-w-4xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Capabilities Segment
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-7xl text-deep-black tracking-tight leading-[0.95]">
                {service.title}
              </h1>
              <p className="text-soft-gray text-lg md:text-xl max-w-2xl leading-relaxed">
                {service.subheadline}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Pain Points (Problem Section) */}
        <section className="bg-deep-black text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-3">
                The Bottlenecks
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white">
                What’s Suppressing Your Conversions?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.pains.map((pain, i) => (
                <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 relative group hover:border-brand-orange/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex items-center justify-center mb-6 text-brand-orange">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-white mb-4">
                    {pain.title}
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    {pain.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Solution Framework */}
        <section className="py-20 bg-light-gray/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-3">
                Our Solution
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-deep-black">
                The BrandScalr Framework.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.solution.map((sol, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-light-gray hover:border-brand-orange/20 transition-all duration-300">
                  <div className="w-10 h-10 bg-deep-black text-white rounded-xl flex items-center justify-center mb-6">
                    <Layers className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-deep-black mb-4">
                    {sol.title}
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Execution Process */}
        <section className="py-20 border-b border-light-gray/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-3">
                Execution Roadmap
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-deep-black">
                How We Deploy & Scale.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {service.process.map((proc, i) => (
                <div key={i} className="relative p-6 bg-light-gray/30 rounded-2xl border border-light-gray/50">
                  <span className="text-4xl font-heading font-extrabold text-brand-orange/20 block mb-4">
                    {proc.step}
                  </span>
                  <h3 className="text-lg font-heading font-extrabold text-deep-black mb-2">
                    {proc.title}
                  </h3>
                  <p className="text-soft-gray text-xs leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Tangible Deliverables */}
        <section className="py-20 bg-deep-black text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-orange">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                  Project Scope
                </span>
                <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white">
                  Exactly What <br />You Receive.
                </h2>
                <p className="text-soft-gray text-sm leading-relaxed max-w-sm">
                  We maintain absolute transparency. Every active month translates directly to high-quality system deliverables.
                </p>
              </div>

              <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 space-y-6">
                {service.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-white/95 leading-relaxed">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Pricing Philosophy */}
        <section className="py-20 bg-light-gray/20">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
            <div className="w-14 h-14 bg-deep-black text-white rounded-2xl flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-brand-orange" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
              Investment Structure
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-deep-black">
              Custom Scaling Pricing
            </h2>
            <p className="text-soft-gray text-base max-w-2xl mx-auto leading-relaxed">
              We do not believe in rigid templates pricing. We design custom partnership packages based on your brand's active audience scope, current content pacing, and overall growth/scaling goals.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white border border-light-gray rounded-full px-5 py-2">
              <span className="text-xs font-bold text-deep-black">
                Performance-driven alignment structures available
              </span>
            </div>
          </div>
        </section>

        {/* Section 7: SEO Focused FAQs Accordion */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <HelpCircle className="w-8 h-8 text-brand-orange mx-auto" />
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deep-black">
                Frequently Answered Queries
              </h2>
            </div>

            <div className="space-y-6">
              {service.faq.map((item, i) => (
                <div key={i} className="bg-light-gray/30 border border-light-gray/50 rounded-2xl p-6 md:p-8 space-y-3">
                  <h4 className="text-lg font-heading font-extrabold text-deep-black">
                    {item.q}
                  </h4>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Action Footer CTA */}
        <section className="bg-deep-black text-white py-20 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-brand-orange/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
              Direct Action Hook
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white">
              Ready To Engineer <br />Your Custom Strategy?
            </h2>
            <p className="text-soft-gray text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Book a call with our specialist now or message us on WhatsApp for instant onboarding details.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link href="/#contact">
                <MagneticButton className="bg-brand-orange text-white hover:bg-deep-black text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/35 hover:shadow-xl transition-all duration-300">
                  Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </MagneticButton>
              </Link>

              <a
                href="https://wa.me/917389526779"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton className="bg-transparent border-2 border-white/20 hover:border-brand-orange text-white hover:text-white hover:bg-brand-orange text-xs font-semibold uppercase tracking-wider py-[14px] px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20">
                  Talk on WhatsApp
                </MagneticButton>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
