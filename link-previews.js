/**
 * Link Preview Hover Cards — The Byzantine General
 *
 * Hover previews on external hyperlinks. Desktop only.
 */

(function() {
  'use strict';

  // ── Preview data: URL → { title, description, source } ──
  const previews = {

    // ═══ INTRODUCTION ═══
    "https://www.theguardian.com/technology/2024/jan/11/bitcoin-etf-approved-sec-explained-meaning-securities-regulator-tweet": {
      title: "Bitcoin ETFs Approved by SEC",
      description: "The US Securities and Exchange Commission approves spot Bitcoin ETFs for the first time, marking a watershed moment for cryptocurrency's integration into mainstream finance.",
      source: "The Guardian"
    },
    "https://www.youtube.com/watch?v=rT7Dvh3QV1A": {
      title: "Michael Saylor Shuts Down Bold Bitcoin Creator Claim",
      description: "Michael Saylor responds to claims about Bitcoin's creator, reinforcing why the mythical narrative surrounding Satoshi Nakamoto remains so resistant to scrutiny.",
      source: "YouTube"
    },
    "https://www.jcf.org/learn/joseph-campbell-four-functions-of-myth": {
      title: "Joseph Campbell: The Four Functions of Myth",
      description: "An exploration of Joseph Campbell's framework for understanding how myths serve psychological, cosmological, sociological, and pedagogical functions in human culture.",
      source: "Joseph Campbell Foundation"
    },
    "https://behavioralscientist.org/steven-pinker-rationality-why-you-should-always-switch-the-monty-hall-problem-finally-explained/": {
      title: "The Monty Hall Problem — Finally Explained",
      description: "Steven Pinker breaks down the Monty Hall problem, explaining why switching doors always doubles your chances of winning and how conditional probability defies our intuitions.",
      source: "Behavioral Scientist"
    },
    "https://www.youtube.com/watch?v=cuItlQZ3RQg": {
      title: "The Best Satoshi Nakamoto Candidates",
      description: "A comprehensive overview of the most prominent candidates proposed as the creator of Bitcoin, examining the evidence for and against each one.",
      source: "YouTube"
    },
    "https://www.ibm.com/think/topics/cryptography": {
      title: "What Is Cryptography?",
      description: "An introduction to the science of encrypting and decrypting information — the foundational technology that secures Bitcoin's blockchain and protects Satoshi's identity.",
      source: "IBM"
    },

    // ═══ ACT 1 ═══
    "https://bitcoinmagazine.com/culture/bitcoin-adam-back-and-digital-cash": {
      title: "The Cypherpunk Movement & Digital Cash",
      description: "How Adam Back, David Chaum, and a generation of cryptographers laid the groundwork for Bitcoin through decades of experimentation with digital money.",
      source: "Bitcoin Magazine"
    },
    "https://www.bitstamp.net/learn/crypto-101/what-is-the-byzantine-generals-problem/": {
      title: "The Byzantine Generals Problem",
      description: "A foundational computer science problem about achieving consensus among distributed parties who cannot trust each other — the core challenge Bitcoin solves.",
      source: "Bitstamp"
    },
    "http://www.weidai.com/bmoney.txt": {
      title: "B-Money: Wei Dai's Original Proposal",
      description: "The 1998 proposal for an anonymous, distributed electronic cash system. One of Bitcoin's direct precursors, cited in the whitepaper.",
      source: "Wei Dai"
    },
    "https://cypherpunks.venona.com/date/1997/03/msg00774.html": {
      title: "Adam Back's HashCash Proposal",
      description: "The 1997 cypherpunk mailing list post introducing HashCash, a proof-of-work system that became the basis for Bitcoin's mining mechanism.",
      source: "Cypherpunks Mailing List"
    },
    "https://www.investing.com/news/cryptocurrency-news/satoshi-nakamoto-bitcoin-whitepaper-turns-16-on-this-date-details-3694895": {
      title: "Bitcoin Whitepaper Turns 16",
      description: "On October 31, 2008, Satoshi Nakamoto published 'Bitcoin: A Peer-to-Peer Electronic Cash System' to the cryptography mailing list.",
      source: "Investing.com"
    },
    "https://satoshi.nakamotoinstitute.org/emails/cryptography/16/": {
      title: "Satoshi's Email: The Genesis Block",
      description: "Satoshi's correspondence on the cryptography mailing list around the time the first Bitcoin block was mined on January 3, 2009.",
      source: "Nakamoto Institute"
    },
    "https://www.reuters.com/article/technology/fbi-shuts-alleged-online-drug-marketplace-silk-road-idUSBRE9910TR/": {
      title: "FBI Shuts Down Silk Road",
      description: "The FBI seizes the Silk Road online marketplace and arrests its founder Ross Ulbricht, bringing Bitcoin into mainstream awareness through its association with illicit trade.",
      source: "Reuters"
    },
    "https://www.theguardian.com/technology/2014/mar/07/satoshi-nakamoto-denies-inventing-bitcoin": {
      title: "Dorian Nakamoto Denies Being Bitcoin's Creator",
      description: "After Newsweek identified Dorian Satoshi Nakamoto as Bitcoin's creator, the 64-year-old California man firmly denied any involvement.",
      source: "The Guardian"
    },
    "https://www.bbc.com/news/technology-36168863": {
      title: "Craig Wright Claims to Be Bitcoin Creator",
      description: "Australian entrepreneur Craig Wright publicly claims to be Satoshi Nakamoto in a BBC interview, but fails to provide conclusive cryptographic proof.",
      source: "BBC News"
    },
    "https://bitcointalk.org/index.php?topic=5299346.0": {
      title: "Satoshi Nakamoto's Final Public Post",
      description: "The last message posted by Satoshi on BitcoinTalk, dated December 12, 2010 — after which Bitcoin's creator vanished from public forums forever.",
      source: "BitcoinTalk"
    },
    "https://riski.wiki/wiki/User:Gavinandresen/Blog/2022-04-26_Eleven_years_ago_today%E2%80%A6": {
      title: "Satoshi's Last Private Email",
      description: "Gavin Andresen recounts the final email exchange with Satoshi on April 26, 2011: 'I wish you wouldn't keep talking about me as a mysterious shadowy figure.'",
      source: "Riski Wiki / Gavin Andresen"
    },

    // ═══ ACT 2 ═══
    "https://bitcoinmagazine.com/industry-events/vitalik-buterin-and-joseph-poon-call-out-craig-wright-deconomy-2018": {
      title: "Vitalik Buterin Calls Craig Wright a Fraud",
      description: "At the Deconomy 2018 conference in Seoul, Ethereum founder Vitalik Buterin publicly challenges Craig Wright's Satoshi claim using signaling theory.",
      source: "Bitcoin Magazine"
    },
    "https://www.coindesk.com/markets/2019/04/15/binance-delists-bitcoin-sv-ceo-calls-craig-wright-a-fraud": {
      title: "Binance Delists Bitcoin SV",
      description: "Binance CEO Changpeng Zhao removes Bitcoin SV from the exchange and publicly calls Craig Wright a fraud, triggering other exchanges to follow.",
      source: "CoinDesk"
    },
    "https://decrypt.co/25906/craig-wright-abandons-libel-lawsuit-against-vitalik-buterin": {
      title: "Wright Abandons Libel Lawsuit Against Buterin",
      description: "Craig Wright drops his libel case against Vitalik Buterin after pursuing legal action against multiple critics who questioned his Satoshi claim.",
      source: "Decrypt"
    },
    "https://bitcoinmagazine.com/legal/hodlonaut-wins-defamation-case-against-craig-wright": {
      title: "Hodlonaut Wins Defamation Case",
      description: "A Norwegian court rules in favor of pseudonymous Bitcoiner Hodlonaut, finding that calling Craig Wright a fraud was justified and protected speech.",
      source: "Bitcoin Magazine"
    },
    "https://www.theguardian.com/technology/2024/mar/14/australian-craig-wright-not-bitcoin-creator-satoshi-nakamoto-high-court-rules": {
      title: "UK High Court: Wright Is Not Satoshi",
      description: "The UK High Court concludes that Craig Wright is not Satoshi Nakamoto, finding he forged documents on a grand scale to support his claim.",
      source: "The Guardian"
    },
    "https://coingeek.com/hash-war-continues-craig-wright-takes-care-business/": {
      title: "Bitcoin Satoshi Vision (BSV) — The Hash War",
      description: "Craig Wright launches Bitcoin SV in November 2018, forking from Bitcoin Cash and claiming to restore Satoshi's original protocol. The ensuing 'hash war' divides the community.",
      source: "CoinGeek"
    },

    // ═══ ACT 3 ═══
    "https://gizmodo.com/gavin-andresen-i-was-not-hacked-and-i-believe-craig-w-1774226431": {
      title: "Gavin Andresen: 'I Believe Craig Wright Is Satoshi'",
      description: "After a private signing session in London, Bitcoin's lead developer Gavin Andresen publicly vouches for Craig Wright, a declaration that would cost him his reputation.",
      source: "Gizmodo"
    },
    "https://web.archive.org/web/20250824133528/https://gavinandresen.ninja/satoshi": {
      title: "Gavin's Blog: 'Satoshi'",
      description: "Gavin Andresen's personal blog post recounting his experience verifying Craig Wright's identity claim and the aftermath.",
      source: "gavinandresen.ninja (archived)"
    },
    "https://www.youtube.com/watch?v=2qLI3VIHuKU": {
      title: "The 2016 BBC Proof Session",
      description: "The BBC interview where Craig Wright attempts to publicly prove he is Satoshi Nakamoto but fails to provide a convincing cryptographic demonstration.",
      source: "YouTube / BBC"
    },

    // ═══ ACT 4 ═══
    "https://www.theguardian.com/technology/2015/may/29/silk-road-ross-ulbricht-sentenced": {
      title: "Ross Ulbricht Sentenced to Life in Prison",
      description: "Silk Road founder Ross Ulbricht receives a life sentence without parole, the harshest punishment for a non-violent cyber crime at the time.",
      source: "The Guardian"
    },
    "https://www.justice.gov/usao-sdny/pr/liberty-reserve-founder-arthur-budovsky-sentenced-manhattan-federal-court-20-years": {
      title: "Liberty Reserve Founder Sentenced to 20 Years",
      description: "Arthur Budovsky, founder of the Liberty Reserve digital currency platform, sentenced for laundering over $6 billion through 55 million transactions.",
      source: "U.S. Department of Justice"
    },
    "https://embed.documentcloud.org/documents/2644012-20140218-Transcript-Redacted/?embed=1": {
      title: "ATO Transcript — Craig Wright Investigation",
      description: "Redacted transcript from the Australian Tax Office's 2014 investigation into Craig Wright's R&D tax rebate claims linked to Bitcoin and cryptocurrency IP.",
      source: "DocumentCloud"
    },
    "https://gizmodo.com/reports-police-raid-home-of-possible-bitcoin-creator-c-1747025289": {
      title: "AFP Raids Craig Wright's Home and Offices",
      description: "Hours after Gizmodo and Wired identify Craig Wright as a possible Bitcoin creator, Australian Federal Police raid his Sydney home and offices.",
      source: "Gizmodo"
    },
    "https://www.wired.com/2015/12/bitcoins-creator-satoshi-nakamoto-is-probably-this-unknown-australian-genius/": {
      title: "Wired: Bitcoin's Creator Is This Australian Genius",
      description: "Wired's December 2015 investigation publishing leaked documents that point to Craig Wright as the likely creator of Bitcoin.",
      source: "Wired"
    },
    "https://www.lrb.co.uk/the-paper/v38/n13/andrew-o-hagan/the-satoshi-affair": {
      title: "The Satoshi Affair — Andrew O'Hagan",
      description: "A long-form account by Andrew O'Hagan of his time embedded with Craig Wright, Calvin Ayre, and the team attempting to prove Wright is Satoshi Nakamoto.",
      source: "London Review of Books"
    },

    // ═══ ACT 5 ═══
    "https://lustrous-paletas-82011f.netlify.app/": {
      title: "3D Map of Satoshi-Related YouTube Content",
      description: "An interactive 3D visualization mapping the landscape of YouTube videos discussing Satoshi Nakamoto's identity, showing clusters of theories and discourse.",
      source: "The Byzantine General"
    },
    "https://www.courtlistener.com/docket/6309656/1/20/kleiman-v-wright/": {
      title: "Kleiman v. Wright — Court Filing",
      description: "Court documents from the Kleiman estate lawsuit against Craig Wright, including the claim that Dave Kleiman co-created Bitcoin.",
      source: "CourtListener"
    },

    // ═══ ACT 6 ═══
    "https://crypto.marketswiki.com/index.php?title=David_Kleiman": {
      title: "David Kleiman — Profile",
      description: "Biographical profile of Dave Kleiman, covering his military service, cybersecurity career, and alleged involvement in Bitcoin's creation.",
      source: "MarketWiki"
    },
    "https://davekleiman.com/": {
      title: "Dave Kleiman (1967–2013)",
      description: "In 1995, a devastating motorcycle accident left Dave Kleiman paralyzed and confined to a wheelchair. Rather than retreat, he dedicated himself to cybersecurity and encryption.",
      source: "davekleiman.com"
    },
    "http://archive.vn/Gtpvb": {
      title: "Kleiman's Work for NASA & DoD",
      description: "Archived evidence of Dave Kleiman's development of cryptographic tools for NASA and the Department of Defense during the early 2000s.",
      source: "Archive.today"
    },
    "https://coingeek.com/dave-kleiman-likely-too-sick-to-be-satoshi-nakamoto-medical-expert-tells-kleiman-vs-wright-jury/": {
      title: "Dave Kleiman's Hospitalization and Declining Health",
      description: "In late 2010, Dave Kleiman was admitted to a VA hospital for life-threatening infections caused by prolonged immobility. His health continued to deteriorate until his death in 2013.",
      source: "CoinGeek"
    },
    "https://www.govinfo.gov/app/details/USCOURTS-flsd-9_18-cv-80176/context": {
      title: "W&K Info Defense Research LLC — Court Records",
      description: "Official U.S. court records for the case involving W&K Info Defense Research, the Florida company registered by Dave Kleiman for crypto-related IP.",
      source: "GovInfo"
    },
    "https://modernconsensus.com/cryptocurrencies/bitcoin/exclusive-cocaine-booze-benzos-and-bullets-the-strange-death-of-the-man-craig-wright-says-helped-him-create-bitcoin/": {
      title: "The Strange Death of Dave Kleiman",
      description: "An investigation into the circumstances of Dave Kleiman's death in April 2013 — found alone at home from a combination of bacterial infection and overdose.",
      source: "Modern Consensus"
    },
    "https://www.aljazeera.com/economy/2021/12/6/self-described-bitcoin-inventor-ordered-to-pay-100m-in-damages": {
      title: "Kleiman Estate Awarded $100 Million",
      description: "A Florida jury orders Craig Wright to pay $100 million in damages to the Kleiman estate for misappropriating intellectual property related to Bitcoin.",
      source: "Al Jazeera"
    },

    // ═══ ACT 7 ═══
    "https://mathshistory.st-andrews.ac.uk/Biographies/Rees_David/": {
      title: "David Rees — Mathematician Biography",
      description: "The biography of David Rees, the mathematician whose name appears in connection with the broader Satoshi investigation narrative.",
      source: "St Andrews University"
    },
    "https://coingeek.com/coingeek-conversations/ian-grigg-how-i-learnt-the-full-story-of-satoshi-nakamoto-coingeek-conversations/": {
      title: "Ian Grigg: The Full Story of Satoshi Nakamoto",
      description: "Cryptographer Ian Grigg discusses his relationship with Craig Wright and how he came to understand the creation story of Bitcoin in this CoinGeek podcast.",
      source: "CoinGeek Conversations"
    },
    "https://web.archive.org/web/20160508181815/https://twitter.com/dr_craig_wright": {
      title: "Craig Wright's Archived Twitter Profile",
      description: "A 2016 snapshot of Craig Wright's Twitter account captured before key posts were deleted, preserved by the Wayback Machine.",
      source: "Web Archive / Twitter"
    },
    "https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=WKINFODEFENSERESEARCH%20L110000199040&aggregateId=flal-l11000019904-dce79b55-176a-4442-93a7-3c8896316aa2&searchTerm=W%26K%20Info%20&listNameOrder=WKINFODEFENSERESEARCH%20L110000199040": {
      title: "W&K Info Defense Research — Florida Filing",
      description: "Official Florida Division of Corporations filing for W&K Info Defense Research LLC, the company registered by Dave Kleiman in 2011.",
      source: "Sunbiz.org"
    }
  };

  // ── Excluded domains (social/footer links) ──
  const excludedDomains = [
    'x.com', 'twitter.com', 'youtube.com/@', 'substack.com',
    'linkedin.com', 'tiktok.com', 'instagram.com'
  ];

  function isExcluded(href) {
    return excludedDomains.some(d => href.includes(d));
  }

  // ── Detect mobile/touch ──
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  // ── Create tooltip element ──
  let tooltip = null;
  let hideTimeout = null;
  let currentLink = null;

  function createTooltip() {
    tooltip = document.createElement('div');
    tooltip.id = 'link-preview-tooltip';
    tooltip.innerHTML = `
      <div class="lp-inner">
        <div class="lp-content">
          <div class="lp-title"></div>
          <div class="lp-desc"></div>
          <div class="lp-source"></div>
        </div>
      </div>
    `;
    document.body.appendChild(tooltip);
  }

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #link-preview-tooltip {
        position: fixed;
        z-index: 9999;
        width: 320px;
        background: #111118;
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        box-shadow: 0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,110,0.1);
        overflow: hidden;
        opacity: 0;
        transform: translateY(6px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        pointer-events: none;
        font-family: 'Inter', -apple-system, sans-serif;
      }
      #link-preview-tooltip.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
      .lp-inner {
        display: flex;
        flex-direction: column;
      }
      .lp-content {
        padding: 14px 16px;
      }
      .lp-title {
        font-size: 16px;
        font-weight: 600;
        color: #e8e6e1;
        line-height: 1.35;
        margin-bottom: 8px;
        font-family: 'Cormorant Garamond', Georgia, serif;
      }
      .lp-desc {
        font-size: 12.5px;
        color: #8a8880;
        line-height: 1.55;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .lp-source {
        font-size: 10px;
        font-family: 'IBM Plex Mono', monospace;
        color: #c9a96e;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    `;
    document.head.appendChild(style);
  }

  function showPreview(link, data) {
    if (!tooltip) return;
    clearTimeout(hideTimeout);
    currentLink = link;

    tooltip.querySelector('.lp-title').textContent = data.title;
    tooltip.querySelector('.lp-desc').textContent = data.description;
    tooltip.querySelector('.lp-source').textContent = data.source;

    // Position near the link
    const rect = link.getBoundingClientRect();
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const tW = 320;
    const tH = 140;

    let left = rect.left + rect.width / 2 - tW / 2;
    let top = rect.bottom + 10;

    // Flip above if not enough room below
    if (top + tH > vpH - 20) {
      top = rect.top - tH - 10;
    }
    // Keep within horizontal bounds
    left = Math.max(12, Math.min(left, vpW - tW - 12));
    // Keep within vertical bounds
    top = Math.max(12, top);

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.classList.add('visible');
  }

  function hidePreview() {
    hideTimeout = setTimeout(() => {
      if (tooltip) tooltip.classList.remove('visible');
      currentLink = null;
    }, 150);
  }

  // ── Init ──
  function init() {
    if (isTouchDevice()) return; // No hover previews on mobile

    injectStyles();
    createTooltip();

    // Attach to all external links in the page content
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (isExcluded(href)) return;

      // Find preview data — try exact match first, then partial
      let data = previews[href];
      if (!data) {
        // Try matching without trailing slash or query params
        const cleanHref = href.replace(/\/?\??#?$/, '');
        data = Object.entries(previews).find(([url]) => {
          const cleanUrl = url.replace(/\/?\??#?$/, '');
          return cleanUrl === cleanHref || href.startsWith(url) || url.startsWith(href);
        });
        if (data) data = data[1];
      }

      if (!data) return; // No preview data for this link

      link.addEventListener('mouseenter', () => showPreview(link, data));
      link.addEventListener('mouseleave', hidePreview);
    });

    // Keep tooltip visible when hovering over it
    tooltip.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
    tooltip.addEventListener('mouseleave', hidePreview);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
