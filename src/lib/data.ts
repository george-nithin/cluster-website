export const KER_PATH = "M318 40 C330 100 342 170 352 230 C358 280 366 330 378 380 C388 424 402 456 442 492 C414 466 396 434 390 390 C380 342 372 292 366 240 C356 178 344 108 334 52 Z";
export const PEN_PATH = "M318 40 C330 100 342 170 352 230 C358 280 366 330 378 380 C388 424 402 452 446 494 C458 504 466 502 474 492 C506 462 536 436 564 406 C596 372 622 356 654 344 C688 330 708 322 738 306 C766 292 788 272 800 244 C812 216 814 196 812 172 C810 148 796 128 772 116 C748 104 716 100 686 104 C656 84 620 76 584 82 C548 72 508 72 474 82 C440 72 402 74 372 86 C350 72 330 52 318 40 Z";
export const UNITS = [{ x: 360, y: 298 }, { x: 410, y: 338 }];

export const HUBS = [
  { id: 'h1', n: 'KANNUR', c: 420, x: 332, y: 175, st: 'kl' },
  { id: 'h2', n: 'KOZHIKODE', c: 700, x: 341, y: 250, st: 'kl' },
  { id: 'h3', n: 'THRISSUR', c: 600, x: 355, y: 315, st: 'kl' },
  { id: 'h4', n: 'KOCHI', c: 850, x: 370, y: 360, st: 'kl' },
  { id: 'h5', n: 'ALAPPUZHA', c: 460, x: 364, y: 410, st: 'kl' },
  { id: 'h6', n: 'KOLLAM', c: 480, x: 386, y: 470, st: 'kl' },
  { id: 'h7', n: 'THIRUVANANTHAPURAM', c: 500, x: 365, y: 520, st: 'kl' },
  
  { id: 'h8', n: 'CHENNAI', c: 950, x: 740, y: 215, st: 'tn' },
  { id: 'h9', n: 'SALEM', c: 520, x: 535, y: 305, st: 'tn' },
  { id: 'h10', n: 'TIRUPPUR', c: 620, x: 485, y: 345, st: 'tn' },
  { id: 'h11', n: 'COIMBATORE', c: 820, x: 435, y: 375, st: 'tn' },
  { id: 'h12', n: 'TIRUCHIRAPPALLI', c: 480, x: 550, y: 405, st: 'tn' },
  { id: 'h13', n: 'MADURAI', c: 700, x: 505, y: 475, st: 'tn' },
  { id: 'h14', n: 'TIRUNELVELI', c: 400, x: 450, y: 520, st: 'tn' }
];

export const PROCESS = [
  { t: "Design & Development", d: "Translating concepts into tech packs and initial prototypes." },
  { t: "Sourcing", d: "Procuring high-quality raw materials and trims." },
  { t: "Cutting", d: "Precision automated cutting for minimal wastage." },
  { t: "Stitching", d: "High-volume assembly using advanced machinery." },
  { t: "Finishing & QC", d: "Stringent quality checks and finishing processes." },
  { t: "Packaging", d: "Retail-ready packaging and dispatch." }
];

export const STATS = {
  workforce: 350,
  keralaWorkforce: 100,
  tamilNaduWorkforce: 250
};


export const JOURNEY = [
  {
    n: "01",
    sub: "Design",
    t: "Design & Development",
    d: "Translating concepts into tech packs and initial prototypes.",
    stat: "Concept to prototype",
    icon: "design"
  },
  {
    n: "02",
    sub: "Materials",
    t: "Sourcing",
    d: "Procuring high-quality raw materials and trims.",
    stat: "Quality raw materials",
    icon: "sourcing"
  },
  {
    n: "03",
    sub: "Fabrication",
    t: "Cutting & Stitching",
    d: "Precision automated cutting and high-volume assembly using advanced machinery.",
    stat: "High precision automation",
    icon: "cutting"
  },
  {
    n: "04",
    sub: "Inspection",
    t: "Finishing & QC",
    d: "Stringent quality checks and finishing processes.",
    stat: "Zero defect policy",
    icon: "qc"
  },
  {
    n: "05",
    sub: "Dispatch",
    t: "Packaging",
    d: "Retail-ready packaging and dispatch to customers.",
    stat: "Ready for retail",
    icon: "packaging"
  }
];
