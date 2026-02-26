# FitSleeps Website Reverse-Engineering Specification

## Overview
**Brand:** FitSleeps®
**Domain:** fitsleeps.com
**Platform:** Shopify (Store ID: 88205951325)
**Currency:** USD
**Primary Market:** US

---

## STEP 1 — DESIGN SYSTEM

### Colors
```
Primary Brand:     #23BA81  (green — CTA buttons, links, highlights)
Star/Rating:       #0EB679  (slightly darker green for stars)
Background:        #FFFFFF  (page background)
Surface/Card:      #F7F7F7  (light gray section backgrounds, card backgrounds)
Surface Alt:       #F2F2F2  (alternate subtle sections)
Text Primary:      #111111  (headings, bold text)
Text Body:         #333333  (body copy)
Text Muted:        #666666  (captions, secondary text)
Text Light:        #999999  (placeholder, meta info)
Link:              #23BA81  (same as primary)
Border:            #E5E5E5  (subtle dividers)
Border Dark:       #D0D0D0  (card borders, input borders)
Button CTA BG:     #23BA81
Button CTA Text:   #FFFFFF
Button CTA Hover:  #1DA870  (5% darker)
Strike/Compare:    #999999  (strikethrough original price)
Badge Green:       #23BA81
Badge BG:          #E8F9F2  (light green badge background)
Alert/Sale:        #E53935  (red for sale/urgency)
Warning:           #FF6B00  (orange for limited stock)
Announcement Bar:  #111111  (dark background)
Announcement Text: #FFFFFF
```

### Gradients
```css
/* Hero section subtle gradient */
background: linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 100%);

/* Green CTA hover */
background: linear-gradient(135deg, #23BA81 0%, #1DA870 100%);

/* Trust bar */
background: linear-gradient(90deg, #F7F7F7 0%, #FFFFFF 50%, #F7F7F7 100%);
```

### Typography
```
Primary Font: "Roboto", sans-serif
Google Fonts Import: https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap

Heading H1:  font-size: 2.5rem (40px) / mobile: 1.75rem (28px)
             font-weight: 700
             line-height: 1.2
             letter-spacing: -0.02em

Heading H2:  font-size: 2rem (32px) / mobile: 1.5rem (24px)
             font-weight: 700
             line-height: 1.25
             letter-spacing: -0.01em

Heading H3:  font-size: 1.5rem (24px) / mobile: 1.25rem (20px)
             font-weight: 600
             line-height: 1.3

Heading H4:  font-size: 1.25rem (20px)
             font-weight: 600
             line-height: 1.4

Body Large:  font-size: 1.125rem (18px)
             font-weight: 400
             line-height: 1.7

Body:        font-size: 1rem (16px)
             font-weight: 400
             line-height: 1.65

Body Small:  font-size: 0.875rem (14px)
             font-weight: 400
             line-height: 1.6

Caption:     font-size: 0.75rem (12px)
             font-weight: 400
             line-height: 1.5
             letter-spacing: 0.02em

Button:      font-size: 1rem (16px)
             font-weight: 600
             letter-spacing: 0.01em
             text-transform: none

Badge/Tag:   font-size: 0.75rem (12px)
             font-weight: 700
             text-transform: UPPERCASE
             letter-spacing: 0.08em

Nav Link:    font-size: 0.9375rem (15px)
             font-weight: 500
```

### Spacing & Layout
```
Max Content Width:    1200px
Contained Padding:    0 24px (mobile), 0 40px (tablet), 0 20px (desktop within 1200px container)
Section Padding:      80px 0 (desktop), 48px 0 (mobile)
Section Padding SM:   48px 0 (desktop), 32px 0 (mobile)
Card Padding:         24px (desktop), 16px (mobile)
Card Border Radius:   12px (product cards), 8px (badges), 6px (buttons), 4px (inputs)
Grid Gap:             24px (desktop), 16px (mobile)
Button Height:        52px (CTA large), 44px (standard), 36px (small)
Button Padding:       16px 32px (large), 12px 24px (standard)
```

### Breakpoints
```
Mobile:   max-width: 640px
Tablet:   641px – 1024px
Desktop:  1025px+
```

### Grid Layouts Used
```
2-column:   Product detail (image | info), Benefit split sections
3-column:   Product card grid (features/accessories), Trust badges
4-column:   Small accessories grid (desktop only, becomes 2-col on tablet)
1-column:   Mobile: all grids collapse to single column
```

### Visual Style
- **Style:** Clean, modern health/wellness — lifestyle-meets-medical-authority
- **Feel:** Trustworthy, conversion-optimized DTC (direct-to-consumer)
- **Icons:** Simple filled SVG icons, minimal outline icons for trust badges
- **Images:** Mix of product renders (clean white background) + lifestyle photos (person sleeping/waking)
- **Shadows:** Subtle — `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` on cards; `0 4px 24px rgba(35,186,129,0.25)` on CTA buttons
- **Borders:** Very subtle `1px solid #E5E5E5` on cards
- **Animations:** Subtle fade-in-up on scroll, smooth hover transitions (0.2s ease)
- **Photography style:** Lifestyle shots with natural light, dark bedroom scenes with green accent lighting

---

## STEP 2 — PAGE INVENTORY

### Page 1: Homepage
**URL:** /
**Title:** FitSleeps® | 100% Wake-Up Guarantee | Vibrating Alarm
**Purpose:** Brand entry point, social proof, product showcase

**Section Order (top → bottom):**
1. Announcement Bar
2. Header / Navigation
3. Hero Section (headline + alarm product image + CTA)
4. Social Proof Bar (65,000+ customers, star rating, press logos)
5. Problem/Solution Split (why vibrating alarm beats traditional)
6. Product Feature Highlights (3-column icon grid)
7. Featured Products Grid (main alarm variants)
8. How It Works (3-step numbered process)
9. Customer Reviews Carousel (Judge.me)
10. Accessories / Sleep Bundle Section
11. Guarantee Section (100-night trial)
12. FAQ Accordion
13. Final CTA Banner (green background)
14. Footer

### Page 2: Product Page — 100% Wake-Up Alarm
**URL:** /products/100-wake-up-alarm
**Title:** 100% Wake-Up Alarm – FitSleeps®
**Purpose:** Main product purchase page

**Section Order:**
1. Breadcrumb
2. Product Gallery + Product Info (split 50/50)
3. Trust Badges (under ATC button)
4. Product Description Tabs
5. Feature Deep-Dive (icon grid with descriptions)
6. How It Works Section
7. Who It's For Section
8. Comparison Table (FitSleeps vs Traditional Alarm)
9. Customer Reviews (Judge.me embed)
10. FAQ Accordion
11. Related Products

### Page 3: Product Page — Pro Version
**URL:** /products/100-wake-up-alarm-pro-version-copy
**Purpose:** Premium product, same structure as above with upgraded specs

### Page 4: Collections
**URL:** /collections/all
**Purpose:** Full product catalog grid

### Page 5: About / Our Story
**URL:** /pages/about-us
**Purpose:** Brand story, mission, team

---

## STEP 3 — PRODUCT DATA

### Product 1: 100% Wake-Up Alarm (Standard)
```json
{
  "name": "100% Wake-Up Alarm",
  "handle": "100-wake-up-alarm",
  "sku": "ALARM-BLK-001",
  "price": 4900,
  "compare_at_price": 7900,
  "discount_pct": 38,
  "badge": "BESTSELLER",
  "short_description": "The original vibrating wristband alarm. Wake up without disturbing your partner.",
  "weight": "50g",
  "availability": "In stock",
  "variants": [
    { "title": "Default / Black", "price": 4900 }
  ],
  "features": [
    "Silent vibration wakes only you — not your partner",
    "Clinically-inspired vibration pattern activates nerve endings",
    "175,000+ active users can't be wrong",
    "Comfortable all-night wrist strap",
    "USB rechargeable — 30+ days battery life",
    "Simple 1-button operation",
    "100-night money-back guarantee",
    "Lightweight at just 50g"
  ],
  "tags": ["bestseller", "bracelets", "homepage"],
  "image_count": 11
}
```

### Product 2: 100% Wake-Up Alarm – Pro Version
```json
{
  "name": "100% Wake-Up Alarm - Pro Version",
  "handle": "100-wake-up-alarm-pro-version-copy",
  "sku": "ALARM-BLACK-002",
  "price": 8400,
  "compare_at_price": 11700,
  "discount_pct": 28,
  "badge": "PRO",
  "short_description": "2x stronger vibration, extended strap, longer battery. Built for the deepest sleepers.",
  "weight": "50g",
  "availability": "In stock",
  "variants": [
    { "title": "Default / Black Pro", "price": 8400 }
  ],
  "features": [
    "Up to 2x stronger vibration intensity",
    "Extended strap for all wrist sizes",
    "Extended battery life — 60+ days",
    "Includes extra device backup",
    "Simplified user-friendly controls",
    "Same silent operation — zero noise",
    "100-night money-back guarantee"
  ],
  "tags": ["pro", "bestseller"],
  "image_count": 10
}
```

### Product 3: 100% Wake-Up Alarm – Blue
```json
{
  "name": "100% Wake-Up Alarm - Blue",
  "handle": "100-wake-up-alarm-blue",
  "sku": "ALARM-BLUE-001",
  "price": 6300,
  "compare_at_price": 7900,
  "badge": "POPULAR",
  "short_description": "Same silent vibrating alarm, now in blue.",
  "variants": [
    { "title": "Blue", "price": 6300 }
  ]
}
```

### Product 4: 100% Wake-Up Alarm – Red
```json
{
  "name": "100% Wake-Up Alarm - Red",
  "handle": "100-wake-up-alarm-red",
  "sku": "ALARM-RED-001",
  "price": 6300,
  "compare_at_price": 7900,
  "badge": null,
  "variants": [
    { "title": "Red", "price": 6300 }
  ]
}
```

### Product 5: 100% Wake-Up Alarm – White
```json
{
  "name": "100% Wake-Up Alarm - White",
  "handle": "100-wake-up-alarm-white",
  "sku": "ALARM-WHITE-001",
  "price": 6300,
  "compare_at_price": 7900,
  "badge": null,
  "variants": [
    { "title": "White", "price": 6300 }
  ]
}
```

### Product 6: 100% Wake-Up Alarm Pro – White
```json
{
  "name": "100% Wake-Up Alarm Pro - White",
  "handle": "100-wake-up-alarm-pro-white",
  "price": 8900,
  "compare_at_price": 11700,
  "badge": "PRO"
}
```

### Product 7: Premium Nose Strips
```json
{
  "name": "Premium Nose Strips",
  "handle": "premium-nose-strips",
  "sku": "NASALSTRIPS01",
  "price": 2400,
  "compare_at_price": 3900,
  "discount_pct": 38,
  "badge": "POPULAR",
  "short_description": "Breathe easier, sleep better. Opens nasal passages up to 40%.",
  "description": "Our nasal strips gently open your nasal passages with a flexible spring-like design, improving airflow by up to 40% and making it easier to breathe through the night.",
  "weight": "200g",
  "image_count": 8
}
```

### Product 8: Premium Mouth Tape
```json
{
  "name": "Premium Mouth Tape",
  "handle": "premium-mouth-tape",
  "sku": "MOUTHTAPE-001",
  "price": 2300,
  "compare_at_price": 3900,
  "discount_pct": 41,
  "badge": "NEW",
  "short_description": "Soft, skin-friendly tape that promotes nasal breathing and reduces snoring.",
  "description": "Soft, skin-friendly mouth tape that gently keeps your lips closed at night, encouraging natural nasal breathing for improved sleep quality and reduced snoring.",
  "weight": "200g",
  "image_count": 8
}
```

### Product 9: Nose Strips & Mouth Tape Bundle
```json
{
  "name": "Nose Strips & Mouth Tape Bundle",
  "handle": "nose-strips-and-mouth-tape-bundle",
  "price": 3600,
  "compare_at_price": 6300,
  "badge": "BUNDLE",
  "short_description": "Best value: get both nose strips and mouth tape together.",
  "includes": ["Premium Nose Strips x1", "Premium Mouth Tape x1"]
}
```

### Product 10: Blue Light Glasses – For Deep Sleepers
```json
{
  "name": "Blue Light Glasses - For Deep Sleepers",
  "handle": "blue-light-glasses-for-deep-sleepers",
  "price": 3600,
  "compare_at_price": null,
  "badge": "NEW",
  "short_description": "Block sleep-disrupting blue light for deeper, faster sleep.",
  "features": [
    "Blocks 99% of blue light",
    "Comfortable lightweight frame",
    "Wear for 1-2 hours before bed",
    "Clinically shown to improve sleep onset"
  ]
}
```

### Product 11: Premium Sleep Mask
```json
{
  "name": "Premium Sleep Mask",
  "handle": "premium-sleep-mask",
  "price": 2285,
  "compare_at_price": 5400,
  "discount_pct": 58,
  "badge": "SALE",
  "short_description": "Total blackout comfort for deeper, uninterrupted sleep.",
  "image_count": 3
}
```

### Product 12: FitSleeps Bracelet
```json
{
  "name": "FitSleeps Bracelet",
  "handle": "fitsleeps-bracelet",
  "price": 2000,
  "compare_at_price": null,
  "short_description": "Replacement strap for your Wake-Up Alarm."
}
```

### Add-On / Accessory Products
```json
[
  { "name": "Add a Charger", "price": 895, "handle": "add-a-charger" },
  { "name": "Shipping Insurance", "price": 295, "handle": "shipping-insurance" },
  { "name": "Upgrade to Waterproof", "price": 795, "handle": "upgrade-to-waterproof" },
  { "name": "Add a Storage Case", "price": 995, "handle": "add-a-storage-case" },
  { "name": "10-Year Warranty", "price": 1800, "handle": "10-year-warranty" }
]
```

### Free Digital Products
```json
[
  { "name": "Calm Start – Guided Breathwork", "price": 0, "type": "digital" },
  { "name": "Night Reset – Guided Breathwork", "price": 0, "type": "digital" }
]
```

---

## STEP 4 — HOME PAGE SECTIONS (Detailed)

### Section 1: Announcement Bar
- **Background:** #111111 (near-black)
- **Text Color:** #FFFFFF
- **Text:** "FREE SHIPPING ON ORDERS OVER $50 | 100-Night Trial | 175,000+ Happy Customers"
- **Layout:** Full-width, centered, single line
- **Font:** 12px, weight 500, letter-spacing 0.05em
- **Height:** 36px
- **Link:** Entire bar links to shop/products

### Section 2: Navigation Header
- **Background:** #FFFFFF
- **Border-bottom:** 1px solid #E5E5E5
- **Height:** 64px (desktop), 56px (mobile)
- **Logo:** "FitSleeps" text logo or SVG, left-aligned on desktop, centered on mobile
- **Logo Color:** #23BA81 (green) with dark text
- **Nav Links (desktop):** Shop | About | Reviews | Blog | Contact
- **Icons (right):** Search icon, Cart icon with item count badge
- **Mobile:** Hamburger menu left, logo center, cart right
- **Sticky:** Yes — sticks to top on scroll with `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`

### Section 3: Hero
- **Background:** White with subtle light gray gradient or lifestyle image overlay
- **Layout:** Split 50/50 (left: text, right: product image) on desktop; stacked on mobile
- **Contained:** 1200px max-width
- **Headline:** "Finally. An Alarm That Guarantees You Wake Up."
- **Sub-headline:** "The silent vibrating wristband alarm that wakes only you — not your whole house. Trusted by 175,000+ deep sleepers."
- **CTA Button:** "Shop Now — 100-Night Trial" → /products/100-wake-up-alarm
- **CTA Color:** #23BA81 background, white text, border-radius 6px
- **Social Proof below CTA:** ★★★★★ "4.9/5 from 65,000+ reviews"
- **Product Image:** Right side, clean product shot on white/light background
- **Badges on image:** "BESTSELLER" green pill badge

### Section 4: Social Proof Bar
- **Background:** #F7F7F7
- **Layout:** Horizontal flex row, 3–4 trust items, full-width
- **Items:**
  1. ★ 4.9/5 Rating — 65,000+ Reviews
  2. 🛡 100-Night Money-Back Guarantee
  3. 🚚 Free Shipping Over $50
  4. 👥 175,000+ Happy Customers
- **Dividers:** `|` or vertical 1px #E5E5E5 line between items
- **Padding:** 16px 0
- **Font:** 14px, weight 500
- **Color:** #333333 text, #23BA81 icons

### Section 5: Problem/Solution Split
- **Background:** #FFFFFF
- **Layout:** Split 50/50 — left (problem: traditional alarm), right (solution: FitSleeps)
- **Headline:** "Why Your Current Alarm Is Failing You"
- **Left side (Problem):**
  - Red X icons + text: "Wakes your partner", "You hit snooze 3x", "Causes morning anxiety"
- **Right side (Solution):**
  - Green check icons + text: "Vibrates only your wrist", "Physical signal you can't ignore", "Gentle, stress-free wake-up"

### Section 6: Feature Highlights (3-Column)
- **Background:** #F7F7F7
- **Layout:** 3-column grid, contained 1200px
- **Section Headline:** "Built for the Deepest Sleepers"
- **Cards (3):**
  1. Icon: Vibration wave → "Silent Vibration Technology" — "Wakes you through your wrist, not your ears."
  2. Icon: Battery → "30+ Day Battery Life" — "Charge once a month, wake up every day."
  3. Icon: Shield → "100-Night Guarantee" — "Don't love it? Full refund. No questions asked."
- **Card Style:** White background, 12px border-radius, 24px padding, subtle shadow

### Section 7: Featured Products Grid
- **Background:** #FFFFFF
- **Layout:** 2–4 column product card grid
- **Section Headline:** "Choose Your Wake-Up System"
- **Products shown:** Standard, Pro, Blue, Color variants + accessories
- **Card style:** See Component Specs

### Section 8: How It Works
- **Background:** #F7F7F7
- **Layout:** Centered, 3-step numbered horizontal process
- **Section Headline:** "Wake Up in 3 Simple Steps"
- **Steps:**
  1. "Charge Your Alarm" — Plug in USB, fully charged in 2 hours
  2. "Set Your Wake Time" — One button, one time, done
  3. "Sleep & Wake Up" — Vibration activates at your exact time, every time
- **Step indicator:** Large numbered circles in #23BA81

### Section 9: Customer Reviews
- **Background:** #FFFFFF
- **Layout:** Carousel, 3 cards visible on desktop, 1 on mobile
- **Section Headline:** "What 65,000+ Customers Are Saying"
- **Review cards:** Star rating, quote, reviewer name, verified badge
- **Powered by:** Judge.me
- **Star color:** #0EB679

### Section 10: Sleep Bundle / Accessories
- **Background:** #F7F7F7
- **Layout:** 2 or 3-column grid
- **Section Headline:** "Complete Your Sleep Routine"
- **Products:** Nose strips, mouth tape, sleep mask, blue light glasses
- **CTA:** "Shop All Accessories"

### Section 11: Guarantee Section
- **Background:** #23BA81 (green) or dark background #111111
- **Text Color:** #FFFFFF
- **Layout:** Centered, full-width
- **Headline:** "100-Night, 100% Wake-Up Guarantee"
- **Body:** "If you don't wake up to your alarm even once in the first 100 nights, we'll give you a full refund. No forms. No hassle."
- **CTA Button:** "Try Risk-Free" → /products/100-wake-up-alarm
- **Button Style:** White background, #23BA81 text, or outlined white

### Section 12: FAQ Accordion
- **Background:** #FFFFFF
- **Layout:** Contained, single column, max-width 800px, centered
- **Section Headline:** "Frequently Asked Questions"
- **FAQs:**
  1. Q: "How does the vibrating alarm work?" A: "The FitSleeps alarm uses a precise vibration motor in the wristband that activates at your set time, transmitting physical sensation through your wrist to wake you without sound."
  2. Q: "Will it wake my partner?" A: "No. The vibration is contained within the wristband and only felt by the wearer. It produces zero noise."
  3. Q: "How long does the battery last?" A: "The standard version lasts 30+ days per charge. The Pro version lasts 60+ days."
  4. Q: "What if it doesn't wake me up?" A: "That's exactly what our 100-Night Guarantee is for. If you fail to wake up even once in the first 100 nights, contact us for a full refund."
  5. Q: "Is it waterproof?" A: "The standard version is splash-resistant. For full waterproofing, add the Waterproof Upgrade to your order."
  6. Q: "How do I set the alarm?" A: "Press and hold the button to enter set mode, then use short presses to adjust hours and minutes."
- **Style:** Border-bottom dividers, + / − toggle icons, smooth expand animation

### Section 13: Final CTA Banner
- **Background:** #111111 (dark) or brand green
- **Headline:** "Stop Sleeping Through Your Life"
- **Sub:** "Join 175,000+ people who never miss their morning."
- **CTA:** "Get Yours — Risk Free" → /products/100-wake-up-alarm
- **Padding:** 80px 0

---

## STEP 5 — PRODUCT PAGE SECTIONS (Detailed)

### Product Gallery
- **Layout:** Left column 55%, sticky on desktop
- **Thumbnail strip:** Horizontal below main image (5–6 thumbnails)
- **Main image:** Square, full-width in column
- **Zoom:** Click to open lightbox / pinch-to-zoom on mobile
- **Image count:** 10–11 product images
- **Mobile:** Horizontal swipe carousel

### Product Info Column (Right 45%)
- **Breadcrumb:** Home > Shop > Product Name
- **Badge:** Green pill — "BESTSELLER" / "PRO"
- **Product Title:** H1, 28px, weight 700
- **Review summary:** ★★★★★ 4.9 (2,431 reviews) — clickable anchor to reviews
- **Price Block:**
  - Strike-through original: ~~$79.00~~
  - Sale price: $49.00 in large green text
  - Savings badge: "SAVE $30 (38% OFF)"
- **Variant selector:** If multiple colors, color swatch pills with labels
- **Quantity selector:** Minus / number input / Plus buttons, border 1px #E5E5E5
- **Add to Cart button:**
  - Full width, 52px height
  - Background: #23BA81
  - Text: "Add to Cart — $49.00"
  - Border-radius: 6px
  - Font: 16px, weight 700
  - Hover: slight darken #1DA870 + scale 1.02
- **Buy Now (secondary):** Outlined button below ATC
- **Trust Badges (below buttons):**
  - 🔒 Secure Checkout
  - 🔄 100-Night Returns
  - 🚚 Free Shipping $50+
  - ⚡ In Stock & Ships Today

### Sticky Mobile Bottom Bar
- **Triggers:** After scrolling past ATC button
- **Height:** 72px
- **Background:** #FFFFFF with `box-shadow: 0 -2px 16px rgba(0,0,0,0.12)`
- **Content:** Product image thumbnail | Price | "Add to Cart" button (green, right-aligned)
- **Z-index:** 100

### Section Below Fold (Product Page)

**Feature Deep-Dive:**
- 4-item icon grid
- Icons: SVG line/filled icons at 40px
- Feature + 1-2 sentence description each

**Who It's For:**
- 3-column cards or list
- Target personas: "Partner-Conscious Sleepers", "Deep Sleepers", "People with Hearing Difficulties", "Heavy Phone Users (no phone in bedroom)"

**Comparison Table:**
```
Feature              | Traditional Alarm | FitSleeps
---------------------|-------------------|----------
Wakes partner?       | ✅ Yes (noise)    | ❌ No (silent)
Can sleep through it?| ✅ Yes            | ❌ Hard to ignore
Screen in bedroom?   | ✅ Required       | ❌ Not needed
Battery life         | Daily/plug-in     | 30-60 days
Snooze temptation    | High              | Low
Guarantee            | None              | 100 nights
```

**Reviews Section:**
- Headline: "Real Reviews from Real Customers"
- Star rating summary bar (5★ ████ 89%, 4★ █ 7%, etc.)
- Review cards: photo thumbnail, name, location, date, star rating, review text
- Verified Buyer badge
- Load More button

**FAQ Section:**
- Same accordion style as homepage FAQ

---

## STEP 6 — NAVIGATION & FOOTER

### Announcement Bar
- **Background:** #111111
- **Text:** "🚚 FREE SHIPPING ON ORDERS $50+ | ⭐ 175,000+ Happy Customers | 🔄 100-Night Trial"
- **Height:** 36px
- **Font:** 12px, weight 500, uppercase, letter-spacing 0.05em
- **Rotates:** 3 messages on a 4s interval (optional)

### Header
- **Background:** #FFFFFF
- **Position:** Sticky, top: 36px (below announcement bar)
- **Height:** 64px
- **Left:** Logo — "FitSleeps®" text, Roboto 700, 22px, color #111111 with green ® symbol
- **Center (desktop):** Navigation links
- **Right:** Search icon (20px), Cart icon (20px) with count badge
- **Nav Links:** Shop | About | Reviews | Blog | Contact
- **Active link:** #23BA81 underline or color
- **Mobile:** Hamburger (left) | Logo (center) | Cart (right)

### Footer
- **Background:** #111111 (dark)
- **Text Color:** #FFFFFF
- **Accent:** #23BA81 for links on hover

**Footer Columns (4 columns desktop, stacked on mobile):**

Column 1 — Brand:
- FitSleeps® logo (white version)
- Tagline: "Better sleep. Better mornings."
- Social icons: Instagram, TikTok, Facebook, YouTube
- Social icon style: circle outline, 24px, white

Column 2 — Shop:
- 100% Wake-Up Alarm
- Pro Version
- Sleep Accessories
- All Products
- Gift Cards

Column 3 — Support:
- FAQ
- Shipping Info
- Returns & Refunds
- Contact Us
- Track Your Order

Column 4 — Company:
- About FitSleeps
- Blog
- Reviews
- Affiliates
- Press / Media

**Footer Bottom Bar:**
- **Border-top:** 1px solid #333333
- **Left:** © 2024 FitSleeps. All rights reserved.
- **Right:** Privacy Policy | Terms of Service | Refund Policy
- **Payment Icons:** Visa, Mastercard, American Express, PayPal, Apple Pay, Shop Pay

**Newsletter Section (above footer columns):**
- **Background:** #1A1A1A
- **Headline:** "Wake Up Better, Starting Now"
- **Sub:** "Get sleep tips, product updates, and exclusive offers."
- **Input:** Email placeholder "Enter your email"
- **Button:** "Subscribe" — green background

---

## STEP 7 — COMPONENT SPECIFICATIONS

### Component: Product Card
```
Purpose: Display product in grid listings
Layout (Desktop):
  - Aspect ratio: 1:1 image at top (square)
  - Below image: badge (top-left overlay), 12px padding
  - Product name: 15px, weight 600, #111111
  - Star rating: small stars + count, 13px
  - Price: Sale price #23BA81 bold, strike-through original #999999
  - "Add to Cart" or "Shop Now" small button

Styling:
  - Border: 1px solid #E5E5E5
  - Border-radius: 12px
  - Background: #FFFFFF
  - Padding: 0 (image flush) + 16px for text section
  - Shadow: 0 2px 8px rgba(0,0,0,0.06)
  - Hover: shadow 0 8px 24px rgba(0,0,0,0.12), transform: translateY(-2px)
  - Transition: 0.2s ease all

Badge (overlay on image):
  - Position: absolute, top: 12px, left: 12px
  - Background: #23BA81 (green) or #E53935 (sale)
  - Text: white, 10px, weight 700, uppercase, letter-spacing 0.08em
  - Padding: 4px 10px
  - Border-radius: 4px

Mobile: Full width single column or 2-column compact
```

### Component: Hero Section
```
Purpose: Main landing area, primary CTA
Layout:
  - Full viewport height or min-height: 600px
  - Container: max-width 1200px, split 50/50
  - Left: text stack (badge → headline → sub → CTA → social proof)
  - Right: product image, slight float/parallax on scroll

Headline: 40px, weight 700, line-height 1.2, color #111111
Sub: 18px, weight 400, line-height 1.7, color #333333, max-width 480px
CTA Button: 52px height, full width on mobile, auto on desktop, #23BA81
Social proof: ★★★★★ inline, 14px, weight 500

Background: white or very light gray gradient
Image: drop shadow: 0 20px 60px rgba(0,0,0,0.15), border-radius 16px
```

### Component: Add-to-Cart Button
```
Height: 52px
Width: 100%
Background: #23BA81
Text: "Add to Cart — $XX.XX", 16px, weight 700, white
Border-radius: 6px
Box-shadow: 0 4px 16px rgba(35,186,129,0.3)
Hover: background #1DA870, transform scale(1.01), shadow stronger
Active: transform scale(0.99)
Disabled: background #CCCCCC, cursor not-allowed
```

### Component: Review Card
```
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border-radius: 12px
Padding: 20px 24px
Stars: #0EB679 filled stars, 16px
Reviewer name: 14px, weight 600, #111111
Date: 12px, #999999
Badge: "Verified Buyer" — green outline pill, 11px
Review text: 14px, #333333, line-height 1.6
Photo thumbnail: optional 48px square in corner, border-radius 6px
```

### Component: FAQ Accordion
```
Container: max-width 800px, centered
Item:
  - Border-bottom: 1px solid #E5E5E5
  - Question: 16px, weight 600, #111111, padding 20px 0
  - Toggle icon: + (closed) / − (open), right-aligned, color #23BA81
  - Answer: 15px, #333333, line-height 1.65, padding-bottom 20px
  - Animation: height 0 → auto with 0.25s ease transition
  - Background: transparent
Active question: color #23BA81
```

### Component: Trust Badge Row
```
Layout: flex row, gap 24px, centered
Each badge:
  - Icon: 24px SVG
  - Text: 13px, weight 500, #333333
  - Vertical stacked: icon above text
  OR horizontal: icon left of text
Padding: 20px 0
Background: #F7F7F7 or transparent
Border: 1px solid #E5E5E5 (top + bottom)
```

### Component: Comparison Table
```
Container: max-width 900px
Header row: 3 columns: Feature | Traditional | FitSleeps
FitSleeps column header: green background #23BA81, white text
Row styling:
  - Alt rows: #F7F7F7 background
  - Padding: 14px 20px per cell
  - Border: 1px solid #E5E5E5
  - Check ✓: green #23BA81, weight 700
  - X mark ✗: red #E53935
  - FitSleeps column: slight green tint background
```

### Component: Sticky Mobile Bar
```
Position: fixed, bottom: 0, left: 0, right: 0
Background: #FFFFFF
Height: 72px
Padding: 0 16px
Box-shadow: 0 -2px 16px rgba(0,0,0,0.12)
Border-top: 1px solid #E5E5E5
Layout: flex, space-between
Left: product image (40px square, border-radius 4px) + price info
Right: ATC button (auto width, height 44px, green)
Z-index: 999
Visibility: hidden until past ATC button; smooth fade-in
```

---

## STEP 8 — TONE & COPY STYLE

### Brand Voice
- **Tone:** Confident + empathetic + slightly scientific
- **Not:** Clinical/cold or overly casual/bro-y
- **Target:** Sleep-conscious adults 25–45, couples, professionals

### Headline Formula
- Pattern: **Bold Problem Acknowledgment + Solution Promise**
- Examples:
  - "Finally. An Alarm That Guarantees You Wake Up."
  - "Stop Sleeping Through Your Life"
  - "Why Your Current Alarm Is Failing You"
  - "Built for the Deepest Sleepers"
- Formula: Action/emotional hook + specific outcome

### CTA Formula
- "Shop Now — 100-Night Trial"
- "Try Risk-Free"
- "Get Yours — Risk Free"
- "Add to Cart — $49.00" (price in button for clarity)

### Social Proof Style
- **Numbers first:** "175,000+ active users", "65,000+ reviews", "4.9/5 rating"
- Specific and large numbers build instant credibility
- "Happy Customers" not just "users"

### Urgency Tactics
- 100-Night Guarantee (reduces friction, not pressure)
- Stock counter: "Only 12 left in stock" (on product page)
- Free shipping threshold creates urgency to add more
- Compare-at prices show savings always
- "Ships Today" badge for immediate gratification

### Trust Language
- "100% Wake-Up Guarantee" — literal product promise in name
- "No questions asked" refund
- "Clinically-inspired vibration"
- "175,000+ active users" — safety in numbers
- Judge.me verified reviews
- "Trusted by" social proof

---

## STEP 9 — TECHNICAL STACK RECOMMENDATION

```
Frontend Framework:    Next.js 14 (App Router)
Language:              TypeScript
Styling:               Tailwind CSS v3
Animation:             Framer Motion
Component Library:     None (build from scratch per design)
State Management:      Zustand (cart state)
Image Optimization:    Next.js Image component (built-in)
Font Loading:          next/font/google with Roboto
CMS/Data:              Static JSON (or Shopify Storefront API if going headless)
Forms:                 React Hook Form
Reviews:               Judge.me embed or static JSON mock
Deployment:            Vercel
```

---

## STEP 10 — REBUILD INSTRUCTIONS

### Step 1: Project Setup
```bash
npx create-next-app@latest fitsleeps-rebuild \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd fitsleeps-rebuild
npm install framer-motion zustand
npm install @next/font
```

**Files to create:**
- `tailwind.config.ts` — full design token config (see below)
- `src/app/globals.css` — CSS variables and base styles
- `src/lib/fonts.ts` — Roboto font setup

### Step 2: Layout Shell
**Files:**
- `src/components/layout/AnnouncementBar.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/app/layout.tsx` — root layout wrapping all pages

### Step 3: Shared Components
**Files:**
- `src/components/ui/Button.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/StarRating.tsx`
- `src/components/ui/TrustBadge.tsx`
- `src/components/ui/FAQAccordion.tsx`
- `src/components/ui/ProductCard.tsx`
- `src/components/ui/QuantitySelector.tsx`
- `src/components/ui/ComparisonTable.tsx`

### Step 4: Home Page Sections
**Files:**
- `src/components/home/HeroSection.tsx`
- `src/components/home/SocialProofBar.tsx`
- `src/components/home/ProblemSolution.tsx`
- `src/components/home/FeatureHighlights.tsx`
- `src/components/home/ProductGrid.tsx`
- `src/components/home/HowItWorks.tsx`
- `src/components/home/ReviewsCarousel.tsx`
- `src/components/home/AccessoriesSection.tsx`
- `src/components/home/GuaranteeSection.tsx`
- `src/components/home/FAQSection.tsx`
- `src/components/home/FinalCTABanner.tsx`
- `src/app/page.tsx` — assembles all sections

### Step 5: Product Page
**Files:**
- `src/components/product/ProductGallery.tsx`
- `src/components/product/ProductInfo.tsx`
- `src/components/product/AddToCartButton.tsx`
- `src/components/product/StickyMobileBar.tsx`
- `src/components/product/ProductFeatures.tsx`
- `src/components/product/WhoItsFor.tsx`
- `src/components/product/ProductComparison.tsx`
- `src/components/product/ReviewsSection.tsx`
- `src/components/product/ProductFAQ.tsx`
- `src/app/products/[handle]/page.tsx`

### Step 6: Additional Pages
**Files:**
- `src/app/collections/all/page.tsx` — product grid
- `src/app/pages/about/page.tsx`

### Step 7: Cart
**Files:**
- `src/store/cartStore.ts` — Zustand store
- `src/components/cart/CartDrawer.tsx`
- `src/components/cart/CartItem.tsx`

### Step 8: Polish
- Add Framer Motion scroll animations (fade-in-up on sections)
- Add image hover effects
- Add skeleton loaders

### Step 9: Responsive QA
- Test all breakpoints: 375px, 768px, 1024px, 1440px
- Verify sticky behavior on mobile
- Test cart drawer on mobile

---

## CODE ARTIFACTS

### Tailwind Config
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#23BA81",
          dark: "#1DA870",
          light: "#E8F9F2",
          star: "#0EB679",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F7",
          alt: "#F2F2F2",
          dark: "#111111",
          card: "#FFFFFF",
        },
        text: {
          primary: "#111111",
          body: "#333333",
          muted: "#666666",
          light: "#999999",
        },
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#D0D0D0",
        },
        alert: {
          red: "#E53935",
          orange: "#FF6B00",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      fontSize: {
        "xs":    ["0.75rem",   { lineHeight: "1.5" }],
        "sm":    ["0.875rem",  { lineHeight: "1.6" }],
        "base":  ["1rem",      { lineHeight: "1.65" }],
        "lg":    ["1.125rem",  { lineHeight: "1.7" }],
        "xl":    ["1.25rem",   { lineHeight: "1.4" }],
        "2xl":   ["1.5rem",    { lineHeight: "1.3" }],
        "3xl":   ["2rem",      { lineHeight: "1.25" }],
        "4xl":   ["2.5rem",    { lineHeight: "1.2" }],
      },
      spacing: {
        "section":    "80px",
        "section-sm": "48px",
        "container":  "1200px",
      },
      borderRadius: {
        "card":   "12px",
        "btn":    "6px",
        "badge":  "4px",
        "pill":   "9999px",
      },
      boxShadow: {
        "card":     "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover":"0 8px 24px rgba(0,0,0,0.12)",
        "btn":      "0 4px 16px rgba(35,186,129,0.3)",
        "sticky":   "0 -2px 16px rgba(0,0,0,0.12)",
        "nav":      "0 2px 8px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        "site":  "1200px",
        "prose": "800px",
      },
    },
  },
  plugins: [],
};

export default config;
```

### Google Fonts Import
```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
```

### Next.js Font Setup
```typescript
// src/lib/fonts.ts
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});
```

### Product Data JSON
```json
// src/data/products.json
[
  {
    "id": "1",
    "name": "100% Wake-Up Alarm",
    "handle": "100-wake-up-alarm",
    "sku": "ALARM-BLK-001",
    "price": 49.00,
    "compareAtPrice": 79.00,
    "badge": "BESTSELLER",
    "badgeColor": "brand",
    "shortDescription": "The original silent vibrating alarm. Wake up without disturbing your partner.",
    "images": [
      "/images/alarm-standard-1.jpg",
      "/images/alarm-standard-2.jpg",
      "/images/alarm-standard-lifestyle.jpg"
    ],
    "features": [
      "Silent vibration — wakes only you",
      "30+ day battery life",
      "USB rechargeable",
      "100-night money-back guarantee",
      "Lightweight: 50g",
      "Simple 1-button operation"
    ],
    "rating": 4.9,
    "reviewCount": 2431,
    "inStock": true,
    "category": "alarm"
  },
  {
    "id": "2",
    "name": "100% Wake-Up Alarm – Pro Version",
    "handle": "100-wake-up-alarm-pro-version-copy",
    "sku": "ALARM-BLACK-002",
    "price": 84.00,
    "compareAtPrice": 117.00,
    "badge": "PRO",
    "badgeColor": "dark",
    "shortDescription": "2x stronger vibration. 60+ day battery. Built for the deepest sleepers.",
    "images": [
      "/images/alarm-pro-1.jpg",
      "/images/alarm-pro-2.jpg"
    ],
    "features": [
      "Up to 2x stronger vibration",
      "60+ day battery life",
      "Extended strap for all wrist sizes",
      "Includes extra backup device",
      "100-night money-back guarantee"
    ],
    "rating": 4.9,
    "reviewCount": 842,
    "inStock": true,
    "category": "alarm"
  },
  {
    "id": "3",
    "name": "Premium Nose Strips",
    "handle": "premium-nose-strips",
    "sku": "NASALSTRIPS01",
    "price": 24.00,
    "compareAtPrice": 39.00,
    "badge": "POPULAR",
    "badgeColor": "brand",
    "shortDescription": "Breathe easier, sleep better. Improves airflow by up to 40%.",
    "images": ["/images/nose-strips-1.jpg"],
    "features": [
      "Improves nasal airflow by up to 40%",
      "Flexible spring-like design",
      "Hypoallergenic adhesive",
      "30 strips per pack"
    ],
    "rating": 4.8,
    "reviewCount": 1204,
    "inStock": true,
    "category": "accessory"
  },
  {
    "id": "4",
    "name": "Premium Mouth Tape",
    "handle": "premium-mouth-tape",
    "sku": "MOUTHTAPE-001",
    "price": 23.00,
    "compareAtPrice": 39.00,
    "badge": "NEW",
    "badgeColor": "brand",
    "shortDescription": "Soft, skin-friendly tape that promotes nasal breathing and reduces snoring.",
    "images": ["/images/mouth-tape-1.jpg"],
    "features": [
      "Skin-friendly hypoallergenic material",
      "Gently promotes nasal breathing",
      "Reduces snoring significantly",
      "30 strips per pack",
      "Easy peel-and-apply"
    ],
    "rating": 4.7,
    "reviewCount": 678,
    "inStock": true,
    "category": "accessory"
  },
  {
    "id": "5",
    "name": "Blue Light Glasses – For Deep Sleepers",
    "handle": "blue-light-glasses-deep-sleepers",
    "price": 36.00,
    "compareAtPrice": null,
    "badge": "NEW",
    "badgeColor": "brand",
    "shortDescription": "Block 99% of blue light for faster, deeper sleep onset.",
    "images": ["/images/blue-light-glasses-1.jpg"],
    "features": [
      "Blocks 99% of blue light",
      "Wear 1-2 hours before bed",
      "Lightweight frame",
      "Improves melatonin production"
    ],
    "rating": 4.8,
    "reviewCount": 312,
    "inStock": true,
    "category": "accessory"
  },
  {
    "id": "6",
    "name": "Premium Sleep Mask",
    "handle": "premium-sleep-mask",
    "price": 22.85,
    "compareAtPrice": 54.00,
    "badge": "SALE",
    "badgeColor": "alert",
    "shortDescription": "Total blackout comfort for deeper, uninterrupted sleep.",
    "images": ["/images/sleep-mask-1.jpg"],
    "rating": 4.6,
    "reviewCount": 445,
    "inStock": true,
    "category": "accessory"
  },
  {
    "id": "7",
    "name": "Nose Strips & Mouth Tape Bundle",
    "handle": "nose-strips-mouth-tape-bundle",
    "price": 36.00,
    "compareAtPrice": 63.00,
    "badge": "BUNDLE",
    "badgeColor": "brand",
    "shortDescription": "Best value: nose strips + mouth tape together — save $27.",
    "includes": ["Premium Nose Strips x1", "Premium Mouth Tape x1"],
    "rating": 4.9,
    "reviewCount": 189,
    "inStock": true,
    "category": "bundle"
  }
]
```

### Sample React Component: ProductCard
```tsx
// src/components/ui/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  handle: string;
  price: number;
  compareAtPrice: number | null;
  badge?: string;
  badgeColor?: "brand" | "dark" | "alert";
  shortDescription: string;
  images: string[];
  rating: number;
  reviewCount: number;
}

const badgeStyles = {
  brand: "bg-brand text-white",
  dark:  "bg-surface-dark text-white",
  alert: "bg-alert-red text-white",
};

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1 mt-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="w-3.5 h-3.5"
            style={{ color: star <= Math.round(rating) ? "#0EB679" : "#E5E5E5" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-text-muted">
        {rating} ({count.toLocaleString()})
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white border border-border rounded-card overflow-hidden shadow-card group"
    >
      <Link href={`/products/${product.handle}`}>
        {/* Image */}
        <div className="relative aspect-square bg-surface-muted overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-badge ${
                badgeStyles[product.badgeColor ?? "brand"]
              }`}
            >
              {product.badge}
            </span>
          )}
          {/* Discount pill */}
          {discount && discount > 0 && (
            <span className="absolute top-3 right-3 bg-alert-red text-white text-[10px] font-bold px-2 py-0.5 rounded-badge">
              -{discount}%
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-text-primary leading-snug line-clamp-2">
            {product.name}
          </h3>
          <StarRating rating={product.rating} count={product.reviewCount} />
          <p className="text-xs text-text-muted mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-base font-bold text-brand">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-text-light line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* CTA */}
      <div className="px-4 pb-4">
        <Link
          href={`/products/${product.handle}`}
          className="block w-full text-center py-2.5 text-sm font-semibold rounded-btn
                     bg-brand text-white hover:bg-brand-dark transition-colors duration-200"
        >
          Shop Now
        </Link>
      </div>
    </motion.div>
  );
}
```

### Sample React Component: Hero Section
```tsx
// src/components/home/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="bg-white min-h-[600px] flex items-center py-section">
      <div className="max-w-site mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest
                               text-brand bg-brand-light px-3 py-1.5 rounded-pill mb-5">
                ★ 175,000+ Happy Customers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl lg:text-[2.75rem] font-bold text-text-primary leading-[1.15] mb-5"
            >
              Finally. An Alarm That{" "}
              <span className="text-brand">Guarantees</span> You Wake Up.
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-text-body leading-relaxed max-w-md mb-8"
            >
              The silent vibrating wristband alarm that wakes only you — not your
              whole house. Trusted by 175,000+ deep sleepers worldwide.
            </motion.p>

            {/* CTA */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
              <Link
                href="/products/100-wake-up-alarm"
                className="inline-flex items-center justify-center px-8 py-4
                           bg-brand text-white font-bold text-base rounded-btn
                           shadow-btn hover:bg-brand-dark hover:scale-[1.02]
                           active:scale-[0.99] transition-all duration-200"
              >
                Shop Now — 100-Night Trial
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-2 mt-5"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-brand-star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-text-body">
                4.9/5 from 65,000+ verified reviews
              </span>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative max-w-[480px] w-full">
              <Image
                src="/images/alarm-hero.jpg"
                alt="FitSleeps 100% Wake-Up Alarm"
                width={480}
                height={480}
                className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full"
                priority
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-card shadow-card p-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand font-bold text-sm">
                  ✓
                </span>
                <div>
                  <div className="text-xs font-bold text-text-primary">100-Night Guarantee</div>
                  <div className="text-[10px] text-text-muted">Full refund if it fails</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```
