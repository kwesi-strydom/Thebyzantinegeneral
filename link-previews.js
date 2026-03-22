/**
 * Link Preview Hover Cards — The Byzantine General
 *
 * Drop this script into any act page to enable hover previews
 * on external hyperlinks. Desktop only (no hover on mobile).
 *
 * Usage: <script src="link-previews.js" defer></script>
 */

(function() {
  'use strict';

  // ── Preview data: URL → { title, description, source, image } ──
  // image is optional — falls back to a favicon/domain icon
  const previews = {

    // ═══ ACT 1 ═══
    "https://bitcoinmagazine.com/culture/bitcoin-adam-back-and-digital-cash": {
      title: "The Cypherpunk Movement & Digital Cash",
      description: "How Adam Back, David Chaum, and a generation of cryptographers laid the groundwork for Bitcoin through decades of experimentation with digital money.",
      source: "Bitcoin Magazine",
      image: "https://i.postimg.cc/QN4Vkps6/756-F49-F2-00-A8-4-EAE-B23-F-A2-AD880-CCA4-B.jpg"
    },
    "https://www.bitstamp.net/learn/crypto-101/what-is-the-byzantine-generals-problem/": {
      title: "The Byzantine Generals Problem",
      description: "A foundational computer science problem about achieving consensus among distributed parties who cannot trust each other \u2014 the core challenge Bitcoin solves.",
      source: "Bitstamp",
      image: "https://i.postimg.cc/fRz6DgJC/Blockchain-Technology.jpg"
    },
    "http://www.weidai.com/bmoney.txt": {
      title: "B-Money: Wei Dai\u2019s Original Proposal",
      description: "The 1998 proposal for an anonymous, distributed electronic cash system. One of Bitcoin\u2019s direct precursors, cited in the whitepaper.",
      source: "Wei Dai",
      image: "https://i.postimg.cc/1XLJFB9Z/Bitcoin-Whitepaper.jpg"
    },
    "https://cypherpunks.venona.com/date/1997/03/msg00774.html": {
      title: "Adam Back\u2019s HashCash Proposal",
      description: "The 1997 cypherpunk mailing list post introducing HashCash, a proof-of-work system that became the basis for Bitcoin\u2019s mining mechanism.",
      source: "Cypherpunks Mailing List",
      image: "https://i.postimg.cc/QN4Vkps6/756-F49-F2-00-A8-4-EAE-B23-F-A2-AD880-CCA4-B.jpg"
    },
    "https://www.investing.com/news/cryptocurrency-news/satoshi-nakamoto-bitcoin-whitepaper-turns-16-on-this-date-details-3694895": {
      title: "Bitcoin Whitepaper Turns 16",
      description: "On October 31, 2008, Satoshi Nakamoto published \u2018Bitcoin: A Peer-to-Peer Electronic Cash System\u2019 to the cryptography mailing list.",
      source: "Investing.com",
      image: "https://i.postimg.cc/1XLJFB9Z/Bitcoin-Whitepaper.jpg"
    },
    "https://satoshi.nakamotoinstitute.org/emails/cryptography/16/": {
      title: "Satoshi\u2019s Email: The Genesis Block",
      description: "Satoshi\u2019s correspondence on the cryptography mailing list around the time the first Bitcoin block was mined on January 3, 2009.",
      source: "Nakamoto Institute",
      image: "https://i.postimg.cc/qvrWZBTH/9-C1-E5-F58-C488-424-E-8-FC5-44-AE8-B4-D9-CC3.jpg"
    },
    "https://www.reuters.com/article/technology/fbi-shuts-alleged-online-drug-marketplace-silk-road-idUSBRE9910TR/": {
      title: "FBI Shuts Down Silk Road",
      description: "The FBI seizes the Silk Road online marketplace and arrests its founder Ross Ulbricht, bringing Bitcoin into mainstream awareness through its association with illicit trade.",
      source: "Reuters",
      image: "https://i.postimg.cc/fTHMGgwb/Ross-Jail.jpg"
    },
    "https://www.theguardian.com/technology/2014/mar/07/satoshi-nakamoto-denies-inventing-bitcoin": {
      title: "Dorian Nakamoto Denies Being Bitcoin\u2019s Creator",
      description: "After Newsweek identified Dorian Satoshi Nakamoto as Bitcoin\u2019s creator, the 64-year-old California man firmly denied any involvement.",
      source: "The Guardian",
      image: "https://i.postimg.cc/9FyQ7fp6/Satoshi-Nakamoto-surround-016.jpg"
    },
    "https://www.bbc.com/news/technology-36168863": {
      title: "Craig Wright Claims to Be Bitcoin Creator",
      description: "Australian entrepreneur Craig Wright publicly claims to be Satoshi Nakamoto in a BBC interview, but fails to provide conclusive cryptographic proof.",
      source: "BBC News",
      image: "https://i.postimg.cc/PqJH2fWr/Craig-BBC.jpg"
    },

    // ═══ ACT 2 ═══
    "https://bitcoinmagazine.com/industry-events/vitalik-buterin-and-joseph-poon-call-out-craig-wright-deconomy-2018": {
      title: "Vitalik Buterin Calls Craig Wright a Fraud",
      description: "At the Deconomy 2018 conference in Seoul, Ethereum founder Vitalik Buterin publicly challenges Craig Wright\u2019s Satoshi claim using signaling theory.",
      source: "Bitcoin Magazine",
      image: "https://i.postimg.cc/SQ3CfsQ7/Deconomy-conference.jpg"
    },
    "https://www.coindesk.com/markets/2019/04/15/binance-delists-bitcoin-sv-ceo-calls-craig-wright-a-fraud": {
      title: "Binance Delists Bitcoin SV",
      description: "Binance CEO Changpeng Zhao removes Bitcoin SV from the exchange and publicly calls Craig Wright a fraud, triggering other exchanges to follow.",
      source: "CoinDesk",
      image: "https://i.postimg.cc/BvmmCKvQ/image.jpg"
    },
    "https://decrypt.co/25906/craig-wright-abandons-libel-lawsuit-against-vitalik-buterin": {
      title: "Wright Abandons Libel Lawsuit Against Buterin",
      description: "Craig Wright drops his libel case against Vitalik Buterin after pursuing legal action against multiple critics who questioned his Satoshi claim.",
      source: "Decrypt",
      image: "https://i.postimg.cc/t4yDQ5Z4/vitalik-Craig.jpg"
    },
    "https://bitcoinmagazine.com/legal/hodlonaut-wins-defamation-case-against-craig-wright": {
      title: "Hodlonaut Wins Defamation Case",
      description: "A Norwegian court rules in favor of pseudonymous Bitcoiner Hodlonaut, finding that calling Craig Wright a fraud was justified and protected speech.",
      source: "Bitcoin Magazine",
      image: "https://i.postimg.cc/hGtrht0F/Hodlonaut-law-suit.jpg"
    },
    "https://www.theguardian.com/technology/2024/mar/14/australian-craig-wright-not-bitcoin-creator-satoshi-nakamoto-high-court-rules": {
      title: "UK High Court: Wright Is Not Satoshi",
      description: "The UK High Court concludes that Craig Wright is not Satoshi Nakamoto, finding he forged documents on a grand scale to support his claim.",
      source: "The Guardian",
      image: "https://i.postimg.cc/rsny2nsv/Craig-Wright-Copa.jpg"
    },

    // ═══ ACT 3 ═══
    "https://gizmodo.com/gavin-andresen-i-was-not-hacked-and-i-believe-craig-w-1774226431": {
      title: "Gavin Andresen: \u2018I Believe Craig Wright Is Satoshi\u2019",
      description: "After a private signing session in London, Bitcoin\u2019s lead developer Gavin Andresen publicly vouches for Craig Wright, a declaration that would cost him his reputation.",
      source: "Gizmodo",
      image: "https://i.postimg.cc/15YfGzVM/Gavin-Andresen.jpg"
    },
    "https://web.archive.org/web/20250824133528/https://gavinandresen.ninja/satoshi": {
      title: "Gavin\u2019s Blog: \u2018Satoshi\u2019",
      description: "Gavin Andresen\u2019s personal blog post recounting his experience verifying Craig Wright\u2019s identity claim and the aftermath.",
      source: "gavinandresen.ninja (archived)",
      image: "https://i.postimg.cc/15YfGzVM/Gavin-Andresen.jpg"
    },
    "https://www.youtube.com/watch?v=2qLI3VIHuKU": {
      title: "The 2016 BBC Proof Session",
      description: "The BBC interview where Craig Wright attempts to publicly prove he is Satoshi Nakamoto but fails to provide a convincing cryptographic demonstration.",
      source: "YouTube / BBC",
      image: "https://i.postimg.cc/PqJH2fWr/Craig-BBC.jpg"
    },

    // ═══ ACT 4 ═══
    "https://www.theguardian.com/technology/2015/may/29/silk-road-ross-ulbricht-sentenced": {
      title: "Ross Ulbricht Sentenced to Life in Prison",
      description: "Silk Road founder Ross Ulbricht receives a life sentence without parole, the harshest punishment for a non-violent cyber crime at the time.",
      source: "The Guardian",
      image: "https://i.postimg.cc/fTHMGgwb/Ross-Jail.jpg"
    },
    "https://www.justice.gov/usao-sdny/pr/liberty-reserve-founder-arthur-budovsky-sentenced-manhattan-federal-court-20-years": {
      title: "Liberty Reserve Founder Sentenced to 20 Years",
      description: "Arthur Budovsky, founder of the Liberty Reserve digital currency platform, sentenced for laundering over $6 billion through 55 million transactions.",
      source: "U.S. Department of Justice",
      image: "https://i.postimg.cc/fRz6DgJC/Blockchain-Technology.jpg"
    },

    // ═══ ACT 5 ═══
    "https://lustrous-paletas-82011f.netlify.app/": {
      title: "3D Map of Satoshi-Related YouTube Content",
      description: "An interactive 3D visualization mapping the landscape of YouTube videos discussing Satoshi Nakamoto\u2019s identity, showing clusters of theories and discourse.",
      source: "The Byzantine General",
      image: "https://i.postimg.cc/fRz6DgJC/Blockchain-Technology.jpg"
    },
    "https://www.courtlistener.com/docket/6309656/1/20/kleiman-v-wright/": {
      title: "Kleiman v. Wright \u2014 Court Filing",
      description: "Court documents from the Kleiman estate lawsuit against Craig Wright, including the claim that Dave Kleiman co-created Bitcoin.",
      source: "CourtListener",
      image: "https://i.postimg.cc/wMm8St4m/court.jpg"
    },

    // ═══ ACT 6 ═══
    "https://crypto.marketswiki.com/index.php?title=David_Kleiman": {
      title: "David Kleiman \u2014 Profile",
      description: "Biographical profile of Dave Kleiman, covering his military service, cybersecurity career, and alleged involvement in Bitcoin\u2019s creation.",
      source: "MarketWiki",
      image: "https://i.postimg.cc/KzHHGqSk/Dave-Childhood.webp"
    },
    "https://davekleiman.com/": {
      title: "Dave Kleiman Memorial Site",
      description: "A memorial website dedicated to Dave Kleiman, documenting his life, career in computer forensics, and the motorcycle accident that left him paralyzed.",
      source: "davekleiman.com",
      image: "https://i.postimg.cc/Jnxzr7Jn/wheelchair.jpg"
    },
    "http://archive.vn/Gtpvb": {
      title: "Kleiman\u2019s Work for NASA & DoD",
      description: "Archived evidence of Dave Kleiman\u2019s development of cryptographic tools for NASA and the Department of Defense during the early 2000s.",
      source: "Archive.today",
      image: "https://i.postimg.cc/d1CnmqZ6/NASA-med.jpg"
    },
    "https://coingeek.com/dave-kleiman-likely-too-sick-to-be-satoshi-nakamoto-medical-expert-tells-kleiman-vs-wright-jury/": {
      title: "Medical Expert: Kleiman Too Sick to Be Satoshi",
      description: "During the Kleiman v. Wright trial, a medical expert testifies that Dave Kleiman\u2019s declining health made it unlikely he could have been actively involved in Bitcoin\u2019s development.",
      source: "CoinGeek",
      image: "https://i.postimg.cc/zX4B48yK/hospital.jpg"
    },
    "https://www.govinfo.gov/app/details/USCOURTS-flsd-9_18-cv-80176/context": {
      title: "W&K Info Defense Research LLC \u2014 Court Records",
      description: "Official U.S. court records for the case involving W&K Info Defense Research, the Florida company registered by Dave Kleiman for crypto-related IP.",
      source: "GovInfo",
      image: "https://i.postimg.cc/wMm8St4m/court.jpg"
    },
    "https://modernconsensus.com/cryptocurrencies/bitcoin/exclusive-cocaine-booze-benzos-and-bullets-the-strange-death-of-the-man-craig-wright-says-helped-him-create-bitcoin/": {
      title: "The Strange Death of Dave Kleiman",
      description: "An investigation into the circumstances of Dave Kleiman\u2019s death in April 2013 \u2014 found alone at home from a combination of bacterial infection and overdose.",
      source: "Modern Consensus",
      image: "https://i.postimg.cc/Qt71MTmb/military-cemetery.jpg"
    },
    "https://www.aljazeera.com/economy/2021/12/6/self-described-bitcoin-inventor-ordered-to-pay-100m-in-damages": {
      title: "Kleiman Estate Awarded $100 Million",
      description: "A Florida jury orders Craig Wright to pay $100 million in damages to the Kleiman estate for misappropriating intellectual property related to Bitcoin.",
      source: "Al Jazeera",
      image: "https://i.postimg.cc/wMm8St4m/court.jpg"
    },

    // ═══ ACT 7 ═══
    "https://mathshistory.st-andrews.ac.uk/Biographies/Rees_David/": {
      title: "David Rees \u2014 Mathematician Biography",
      description: "The biography of David Rees, the mathematician whose name appears in connection with the broader Satoshi investigation narrative.",
      source: "St Andrews University",
      image: "https://i.postimg.cc/fRz6DgJC/Blockchain-Technology.jpg"
    },
    "https://coingeek.com/coingeek-conversations/ian-grigg-how-i-learnt-the-full-story-of-satoshi-nakamoto-coingeek-conversations/": {
      title: "Ian Grigg: The Full Story of Satoshi Nakamoto",
      description: "Cryptographer Ian Grigg discusses his relationship with Craig Wright and how he came to understand the creation story of Bitcoin in this CoinGeek podcast.",
      source: "CoinGeek Conversations",
      image: "https://i.postimg.cc/pT8XZXtn/24941-D08-DE74-4-BDD-95-B6-CF24-D1-DCE225.jpg"
    },
    "https://web.archive.org/web/20160508181815/https://twitter.com/dr_craig_wright": {
      title: "Craig Wright\u2019s Archived Twitter Profile",
      description: "A 2016 snapshot of Craig Wright\u2019s Twitter account captured before key posts were deleted, preserved by the Wayback Machine.",
      source: "Web Archive / Twitter",
      image: "https://i.postimg.cc/zXwGxK9N/Craig-Wright-Gizmodo.jpg"
    },
    "https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=WKINFODEFENSERESEARCH%20L110000199040&aggregateId=flal-l11000019904-dce79b55-176a-4442-93a7-3c8896316aa2&searchTerm=W%26K%20Info%20&listNameOrder=WKINFODEFENSERESEARCH%20L110000199040": {
      title: "W&K Info Defense Research \u2014 Florida Filing",
      description: "Official Florida Division of Corporations filing for W&K Info Defense Research LLC, the company registered by Dave Kleiman in 2011.",
      source: "Sunbiz.org",
      image: "https://i.postimg.cc/fRz6DgJC/Blockchain-Technology.jpg"
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
        <img class="lp-image" src="" alt="">
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
      .lp-image {
        width: 100%;
        height: 120px;
        object-fit: cover;
        display: block;
        filter: brightness(0.8);
      }
      .lp-image[src=""], .lp-image:not([src]) {
        display: none;
      }
      .lp-content {
        padding: 12px 14px;
      }
      .lp-title {
        font-size: 14px;
        font-weight: 600;
        color: #e8e6e1;
        line-height: 1.35;
        margin-bottom: 6px;
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 16px;
      }
      .lp-desc {
        font-size: 12px;
        color: #8a8880;
        line-height: 1.5;
        margin-bottom: 8px;
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

    const img = tooltip.querySelector('.lp-image');
    if (data.image) {
      img.src = data.image;
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }

    // Position near the link
    const rect = link.getBoundingClientRect();
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const tW = 320;
    const tH = data.image ? 260 : 140;

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
