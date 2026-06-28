export type ScamCategory = {
  id: string;
  title: string;
  icon: string;
  risk: string;
  description: string;
  redFlags: string[];
  preventionTips: string[];
};

export const scamLibrary: ScamCategory[] = [
  {
    id: "kyc-scam",
    title: "Bank KYC Scam",
    icon: "Building2",
    risk: "Critical",
    description: "Scammers pose as bank officials claiming your account will be suspended unless you complete a mandatory KYC (Know Your Customer) update via a provided link.",
    redFlags: [
      "Urgent threat of account suspension",
      "Link directs to an unofficial banking portal",
      "Request for OTP or PIN to 'verify' identity",
    ],
    preventionTips: [
      "Never click links in SMS/Emails for KYC updates",
      "Banks never ask for your PIN or OTP",
      "Contact your bank directly via their official app or phone number",
    ],
  },
  {
    id: "upi-fraud",
    title: "UPI Fraud",
    icon: "Smartphone",
    risk: "High",
    description: "Fraudsters trick victims into authorizing a UPI payment under the guise of receiving money. They exploit the fact that entering a UPI PIN always deducts money, it never receives it.",
    redFlags: [
      "Being asked to enter UPI PIN to receive a refund or payment",
      "Fake customer care numbers found on search engines",
      "QR codes sent with instructions to scan to receive funds",
    ],
    preventionTips: [
      "Remember: UPI PIN is ONLY for sending money, never for receiving",
      "Do not scan unknown QR codes",
      "Verify merchant names before completing any transaction",
    ],
  },
  {
    id: "job-scam",
    title: "Job Scam",
    icon: "Briefcase",
    risk: "High",
    description: "Victims are offered lucrative part-time jobs (like liking YouTube videos or reviewing products) with high daily payouts, but are eventually asked to pay 'security deposits' or 'upgrade fees'.",
    redFlags: [
      "Unsolicited WhatsApp or Telegram messages offering jobs",
      "Promises of high pay for minimal, unskilled work",
      "Requirement to pay an initial fee or buy crypto to unlock tasks",
    ],
    preventionTips: [
      "Legitimate employers never ask you to pay to work",
      "Ignore unsolicited job offers on messaging apps",
      "Research the company thoroughly before engaging",
    ],
  },
  {
    id: "lottery-scam",
    title: "Lottery Scam",
    icon: "Gift",
    risk: "Medium",
    description: "You receive a message claiming you have won a massive lottery or prize draw, but you must pay a 'processing fee' or 'taxes' upfront to claim the winnings.",
    redFlags: [
      "Winning a contest you never entered",
      "Requests for upfront payment to release funds",
      "Use of official-sounding but fake organizations (e.g., 'WhatsApp International Lottery')",
    ],
    preventionTips: [
      "You cannot win a lottery you did not enter",
      "Never pay money to receive money",
      "Block and report the sender immediately",
    ],
  },
  {
    id: "otp-scam",
    title: "OTP Scam",
    icon: "KeySquare",
    risk: "Critical",
    description: "Attackers socially engineer victims into sharing their One-Time Password (OTP), often pretending to be delivery executives, telecom operators, or support staff.",
    redFlags: [
      "Callers demanding an OTP to cancel an order you didn't place",
      "Claims of network upgrades requiring OTP verification",
      "Sense of extreme urgency or panic induced by the caller",
    ],
    preventionTips: [
      "Treat your OTP like your ATM PIN — never share it",
      "Read the full SMS containing the OTP to understand what it is authorizing",
      "Disconnect suspicious calls and verify independently",
    ],
  },
  {
    id: "courier-scam",
    title: "Courier Scam",
    icon: "Package",
    risk: "High",
    description: "Scammers pose as customs or courier officials claiming a package in your name contains illegal items. They demand an immediate fine payment to avoid police action.",
    redFlags: [
      "Unexpected calls about international parcels",
      "Threats of arrest or police involvement (digital arrest)",
      "Demands for payment via untraceable methods or crypto",
    ],
    preventionTips: [
      "Law enforcement will not demand fines over the phone to drop charges",
      "Do not panic; disconnect the call immediately",
      "Report the incident to the national cybercrime portal",
    ],
  },
  {
    id: "investment-scam",
    title: "Investment Scam",
    icon: "TrendingUp",
    risk: "High",
    description: "Victims are lured into fake trading apps or crypto schemes promising guaranteed, unrealistic daily returns. Early small withdrawals are allowed to build trust before blocking access.",
    redFlags: [
      "Guaranteed high returns with zero risk",
      "Pressure to invest quickly before an 'opportunity' closes",
      "Being added to WhatsApp or Telegram groups filled with fake testimonials",
    ],
    preventionTips: [
      "If an investment sounds too good to be true, it is a scam",
      "Only use SEBI-registered brokers and official trading platforms",
      "Never invest money through unknown links or APKs sent on chat apps",
    ],
  },
  {
    id: "tech-support-scam",
    title: "Tech Support Scam",
    icon: "Headset",
    risk: "Medium",
    description: "Fraudsters display fake virus alerts on your computer or call claiming to be from Microsoft/Apple, tricking you into installing remote access software.",
    redFlags: [
      "Pop-up warnings on websites with a phone number to call",
      "Unsolicited calls claiming your device is compromised",
      "Requests to install software like AnyDesk or TeamViewer",
    ],
    preventionTips: [
      "Tech companies do not proactively call you about computer viruses",
      "Never give remote access of your device to a stranger",
      "Close browser pop-ups using Task Manager if they freeze your screen",
    ],
  },
  {
    id: "qr-code-scam",
    title: "QR Code Scam",
    icon: "QrCode",
    risk: "Medium",
    description: "Scammers place fake QR codes over real ones at shops, or send them online pretending it's a 'receive money' code. Scanning it initiates a payment to the scammer.",
    redFlags: [
      "Being asked to scan a QR code to receive payment",
      "Stickers placed haphazardly over existing store QR codes",
      "Unverified names appearing on the UPI app after scanning",
    ],
    preventionTips: [
      "Scanning a QR code is only for making payments, not receiving",
      "Verify the merchant name that appears on your app before paying",
      "Check physical QR codes in stores for tampering",
    ],
  },
  {
    id: "romance-scam",
    title: "Romance Scam",
    icon: "Heart",
    risk: "High",
    description: "Scammers create fake profiles on dating apps or social media, build a deep emotional connection over months, and eventually ask for money due to a fabricated emergency.",
    redFlags: [
      "Quick declarations of love without meeting in person",
      "Refusal to video call or meet, with constant excuses",
      "Sudden financial emergencies requiring money transfers or gift cards",
    ],
    preventionTips: [
      "Never send money to someone you have only met online",
      "Do a reverse image search of their profile pictures",
      "Be wary of sob stories designed to exploit your empathy",
    ],
  },
];
