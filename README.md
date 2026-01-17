# Beon-IT Landing Page - Documentation

## 📋 Project Overview
B2B ERP Landing Page for **Beon-IT** (SAP Business One + Oracle NetSuite)
Target Market: Saudi Arabia & Gulf Region (GCC)
Goal: Lead Generation from Meta/Google/LinkedIn Ads

---

## 1️⃣ UI Specification

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark Teal | `#0F3F3A` | Headings, Footer, Dark sections |
| Accent Mint/Cyan | `#1FF2C2` | CTAs, Highlights, Icons, Hover states |
| Background | `#F7F9F9` | Page background |
| Text | `#0B1F1C` | Body text |
| Muted Gray | `#6B7C7A` | Subtitles, descriptions |
| White | `#FFFFFF` | Cards, Form backgrounds |

### Spacing System (8px Grid)
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-6`: 48px
- `--space-8`: 64px
- `--space-10`: 80px

### Typography
- **Arabic**: IBM Plex Sans Arabic
- **English**: Outfit
- **H1**: 3.2rem (52px) - Hero
- **H2**: 2.5rem (40px) - Section titles
- **H3**: 1.2rem (19px) - Card titles
- **Body**: 16px / 1.7 line-height

### Components
| Component | Border Radius | Shadow | Notes |
|-----------|--------------|--------|-------|
| Buttons | 12px | Accent shadow | Gradient on primary |
| Cards | 12px | Soft shadow | White bg, border on hover |
| Form Inputs | 12px | None | 2px border, focus highlight |
| Header | 0 | Backdrop blur | Fixed, semi-transparent |

### Sections Order
1. Header (Fixed)
2. Hero + Lead Form
3. Trust Bar (Partners)
4. Pain Points (4 cards)
5. Solution (Split layout)
6. Industries (6 cards grid)
7. Why Us (4 feature cards)
8. Testimonial (Full width, dark bg)
9. FAQ (Accordion)
10. Final CTA (Dark section)
11. Footer
12. Mobile Sticky CTA (768px and below)
13. WhatsApp Float Button

---

## 2️⃣ Copywriting Summary

### Hero Headlines (A/B Test Options)
**Option A (Benefits-focused):**
> أدِر عملياتك بكفاءة عالمية.. وحلول سعودية مبتكرة.

**Option B (Authority-focused):**
> شريكك المعتمد لأنظمة SAP و Oracle في المملكة والخليج.

### CTAs Used
- احجز استشارة مجانية / Book Free Consultation
- اطلب Demo مخصص / Request Custom Demo
- اكتشف الحل المناسب لك / Discover the Right Solution
- اتصل الآن / Call Now

### Microcopy
- Form note: "🔒 بياناتك آمنة ولن نشاركها مع أي طرف ثالث"
- Trust bar: "شركاء النجاح والاعتمادات"

---

## 3️⃣ Conversion Notes

### A/B Tests Suggested
1. **Hero Headline**: Benefits vs Authority messaging
2. **Form Position**: Inline vs Popup modal
3. **CTA Color**: Mint accent vs Orange/Gold
4. **Offer Type**: "استشارة مجانية" vs "تقييم مجاني لأنظمتك"

### Form Friction Strategy
- **Initial Form**: 3 fields only (Name, Company, Phone)
- **Thank You Page**: Request additional info (Industry, Employee count, Budget)
- **Phone Qualification**: Sales team qualifies during first call

### Trust Elements
- SAP Gold Partner badge
- Oracle NetSuite certification
- ZATCA Approved seal
- Monsha'at partnership
- Client testimonials with real names/titles
- Stats bar (150+ projects, 12+ years, 24/7 support)

---

## 4️⃣ Tracking Plan

### Conversion Events
```javascript
// Lead Form Submit
gtag('event', 'lead_submit', {
  'event_category': 'conversion',
  'event_label': 'hero_form'
});

// WhatsApp Click
gtag('event', 'whatsapp_click', {
  'event_category': 'engagement',
  'event_label': 'floating_button'
});

// Phone Call Click
gtag('event', 'call_click', {
  'event_category': 'engagement',
  'event_label': 'phone_link'
});
```

### GTM/Pixel Placement
- GTM container: `<head>` section
- Meta Pixel: Via GTM
- Google Ads Conversion: Via GTM
- LinkedIn Insight Tag: Via GTM

### Thank You Page Requirements
- Separate URL: `/thank-you`
- Confirmation message
- Next steps info
- 30-second company video (optional)
- Secondary qualification form
- Social proof reinforcement

---

## 5️⃣ Developer Handoff

### File Structure
```
landing-page/
├── index.html      # Main HTML structure
├── index.css       # Complete styles
├── main.js         # Language toggle, accordion, form handling
├── logo.png        # Company logo
├── content.json    # All content in JSON format
└── README.md       # This documentation
```

### Component Map
| Component | Description |
|-----------|-------------|
| `Header` | Fixed nav with logo, lang switch, CTA |
| `HeroSection` | Split layout with content + form |
| `TrustBar` | Partner logos row |
| `PainPoints` | 4-card grid |
| `Solution` | Split layout with features list + mockup |
| `Industries` | 6-card grid with icons |
| `WhyUs` | 4 numbered feature cards |
| `Testimonial` | Quote with author info |
| `FAQ` | Accordion with 6 items |
| `FinalCTA` | Dark section with 2 CTAs |
| `Footer` | 3-column grid with links |
| `MobileStickyCTA` | Fixed bottom CTA (mobile only) |
| `WhatsAppFloat` | Floating contact button |

### SEO Meta Tags
```html
<title>Beon-IT | حلول SAP & Oracle ERP في السعودية والخليج</title>
<meta name="description" content="شريكك المعتمد لأنظمة SAP Business One و Oracle NetSuite...">
<meta property="og:title" content="Beon-IT | حلول ERP للسعودية والخليج">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
```

### Performance Notes
- Use WebP images for partners/logos
- Lazy load below-fold images
- Preconnect to Google Fonts
- Minify CSS/JS for production
- Consider critical CSS inline
- Target LCP < 2.5s, FID < 100ms

### RTL/LTR Support
- Uses `dir="rtl"` and `dir="ltr"` on `<html>`
- CSS uses logical properties where possible
- WhatsApp button position flips based on direction

---

## 📞 Contact
For questions about this implementation, contact the development team.

© 2026 Beon-IT - All Rights Reserved
