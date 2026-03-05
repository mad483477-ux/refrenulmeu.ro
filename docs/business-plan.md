# RefrenulMeu.ro — Business Plan & Strategy Doc

> Ultima actualizare: 3 martie 2026
> Document viu — se actualizează pe parcursul discuțiilor

---

## 1. IDENTITATE BRAND

### Nume: RefrenulMeu.ro
### Mascotă: **Domnul Dirijor**
- Personaj: un domn elegant cu frac, pălărie, baston de dirijor (bagetă)
- Ton: respectuos, cald, profesionist dar prietenos
- Animație: prezent permanent pe ecran, dirijează orchestra când clientul acționează
- Univers narativ: Domnul Dirijor → adună orchestra → repetiții → livrează opera muzicală
- Exemple comunicare:
  - "Spune-i Domnului Dirijor povestea ta"
  - "Domnul Dirijor va aduna orchestra și vor face repetiții timp de 2 minute"
  - "Domnul Dirijor a terminat compoziția. Ascultă cele 2 variante."

### Ton comunicare
- Premium dar cald
- Direct, orientat pe emoție și viteză
- NU corporate, NU cringe, NU exagerat
- Ca un prieten care știe ce face

### Regula AI
- NU menționăm "AI" sau "inteligență artificială" în comunicarea front-facing
- Folosim: "Domnul Dirijor", "tehnologie avanzată de compoziție muzicală"
- Mențiune discretă în Termeni și Condiții: "Serviciul folosește tehnologie de compoziție muzicală automatizată"
- Mențiune în footer: "Melodiile sunt create cu ajutorul tehnologiei avansate de compoziție muzicală"

---

## 2. PRODUS & PRICING

### Selling Point #1: POVESTEA care creează EMOȚIA
- Produsul nu e "o melodie" — e emoția pe care o simte destinatarul
- Formularul = story builder, nu form tehnic
- Cu cât extragem mai multe detalii emoționale, cu atât melodia e mai personalizată
- Totul trebuie proiectat să extragă poveste din client

### Pachete

| Pachet | Preț | Include |
|--------|------|---------|
| **Simplu** | 39.99 lei | Melodie personalizată + 2 variante + download |
| **Special** | 59.99 lei | + Versuri personalizate + 1 mențiune nume + mesaj personal |
| **Premium** | 89.99 lei | + Intro vorbit + outro + poveste extinsă |

> Toate pachetele includ 2 variante generate. VIP eliminat — 3 pachete sunt suficiente pentru MVP.

### Add-ons (Atingeri Personale)
- Mențiune de nume: +5 lei/nume
- Mesaj în melodie: +15 lei
- Intro vorbit: +20 lei
- Outro cu dedicație: +15 lei
- Strigătură personalizată (doar Manele): +5 lei/buc
- Poveste extinsă: +25 lei
- Versuri personalizate: +10 lei

### Dedicații (DOAR Manele)
- Sistem separat de Atingeri Personale — activ numai când stilul este Manele
- **Vrei dedicație?** — toggle NU/DA → input nume persoană dedicată (apare în piesă)
- **Vrei să arunci cu bani?** — toggle NU/DA → selector sumă:
  - 10 lei plătit → "s-a primit 100 lei" în melodie
  - 20 lei plătit → "s-a primit 500 lei" în melodie
  - 50 lei plătit → "s-a primit 1.000 lei" în melodie
  - 100 lei plătit → "s-a primit 5.000 lei" în melodie
- Se pot adăuga dedicații multiple (aditive)
- Prețul dedicațiilor se adaugă la prețul pachetului/bazei

### Retry / Regenerare
- Clientul primește 2 variante la prima generare
- Dacă nu e mulțumit: buton "Încearcă încă o dată" pe compunere.html
- Poate ajusta detalii (textarea) → regenerare → primește 2 variante noi
- **Total maxim: 4 melodii generate** (2 originale + 2 retry)
- Dacă nici după retry nu e mulțumit: "Contactează-ne la contact@refrenulmeu.ro"
- Retry-ul e automat, fără email, fără fricțiune

### Chat panel Domnul Dirijor
- Click pe mascota Domnul Dirijor → se deschide chat panel
- Mesaj: "Bună! Eu sunt Domnul Dirijor. Adun imediat toată orchestra și ne pregătim să-ți cântăm."
- 2 butoane: "Ajută-mă să aleg" / "Știu ce vreau"
- Click pe buton → smooth scroll la formular + selectează calea automată
- Înlocuiește comportamentul anterior (mesaje random la click)

### Notă legală licențiere
- "Melodiile create pe RefrenulMeu.ro sunt licențiate pentru uz personal, cadou și evenimente private."
- "Primești dreptul de a asculta, descărca, trimite și folosi melodia ta la orice ocazie personală."
- "Melodiile nu pot fi redistribuite comercial (ex: vânzare pe platforme de streaming)."
- Bazat pe Suno Premier Plan: drepturi de uz comercial, dar NU ownership deplin.

---

## 3. STILURI MUZICALE (ordinea pe site)

### Ordine finală (validată v3):

| # | Stil | Emoji | Subgenuri (opționale, chipuri) |
|---|------|-------|-------------------------------|
| 1 | **Pop** | 🎤 | Nostalgia 2000s, Pop Romantic, Pop Energic, Pop Acustic, Pop Dance, K-Pop |
| 2 | **Latino** | 💃 | Reggaeton, Salsa, Bachata, Kizomba |
| 3 | **Hip-Hop** | 🎙️ | R&B, Rap, Old School Hip-Hop, Modern Hip-Hop |
| 4 | **Trap** | 🔥 | Trap Melodic, Trap Agresiv, Drill, Phonk |
| 5 | **Manele** | 🎻 | De petrecere, De jale, Trapanele, Lăutărești, Orientale, De pahar |
| 6 | **Disco** | 🪩 | Disco Classic, Nu-Disco, Funk |
| 7 | **House** | 🎧 | Afro House, Melodic House, Tech House, Deep House, Tropical House |
| 8 | **Chill** | 🏖️ | Lo-fi, Acoustic Chill, Ambient, Blues |

**Total: 8 stiluri, 38 subgenuri**

### UX Subgenuri:
- La selectarea stilului principal → apar subgenurile ca chipuri/butoane mici
- Clientul poate selecta unul SAU ignora (opțional)
- Dacă nu selectează: "Domnul Dirijor va alege nuanța potrivită pe baza poveștii tale"
- Label: "Alege o nuanță (opțional)" — nu "subgen"

### Limba versurilor (checkpoint obligatoriu):
- Câmp vizual cu steaguri: 🇷🇴 Română (default) · 🇬🇧 Engleză · 🇪🇸 Spaniolă · 🇮🇹 Italiană · 🇫🇷 Franceză
- Suno e mai performant pe engleză; română necesită diacritice
- Spaniolă/Italiană/Franceză: relevante pentru diaspora RO în acele țări
- Plasat la Step 3 (lângă destinatar + relație)

### Limba site-ului (interfață):
- Lansare: doar Română
- Post-lansare (lună 2-3): adăugăm Engleză
- Diaspora română înțelege site-ul în română

### Stiluri de adăugat în viitor:
- Populară / Etno (piață mare la 40+ ani, nunți tradiționale)
- Colind (sezonier, decembrie)
- Rock RO (nișă dar public loial)

---

## 4. OCAZII SUPORTATE

- Ziua de naștere
- Nuntă
- Botez
- Valentine's Day / Dragobete
- 8 Martie (Ziua Femeii)
- Crăciun / Revelion
- Aniversare relație
- Cerere în căsătorie
- Absolvire / Promovare
- Pensionare
- **Eveniment Corporate** (petreceri firmă, team building)
- **Imn de firmă** (branding audio)
- Doar de drag (fără ocazie specială)
- Altă ocazie (custom)

---

## 5. FORMULAR — Dual Path (Ghidat + Direct)

### Principiu: Doi clienți diferiți, două experiențe
- **Clientul A (~60-70%):** "Nu știu exact ce vreau, ghidează-mă"
- **Clientul B (~30-40%):** "Știu ce vreau, vreau manele, let's go"
- Ambele căi duc la același rezultat, dar experiența e diferită

### La deschiderea formularului — ALEGERE:

> **"Cum vrei să începem?"**
>
> 🎭 **"Ajută-mă să aleg"**
> Domnul Dirijor ascultă, înțelege, apoi compune.
>
> 🎯 **"Știu ce vreau"**
> Alege direct stilul și completează detaliile.

---

### CALEA GHIDATĂ (7 steps)

**Step 1: "Ce vibe cauți?"** (chipuri vizuale emoționale — devine TON melodie în prompt Suno)
- Vesel & Energic
- Romantic & Tandru
- Emoțional & Profund
- De petrecere & Dansant
- Nostalgic & Cald
- Funny & Amuzant

*Notă: Vibe-ul NU filtrează stiluri. Se adaugă ca mood/ton în prompt-ul Suno.*

**Step 2: "Pentru ce ocazie?"** (carduri/chipuri)
- Ziua de naștere, Nuntă, Botez, Valentine's, 8 Martie, Cerere căsătorie,
  Aniversare, Absolvire, Pensionare, Corporate, Imn firmă, Doar de drag, Altă ocazie

**Step 3: "Pentru cine e melodia?"**
- Nume destinatar
- Relația (partener, părinte, prieten, coleg, copil, familie...)
- Limba versurilor: 🇷🇴 Română · 🇬🇧 Engleză · 🇪🇸 Spaniolă · 🇮🇹 Italiană · 🇫🇷 Franceză
- Notă: "Scrie cu diacritice (ă, â, î, ș, ț) pentru ca melodia să fie cântată corect."

**Step 4: "Spune-i povestea ta Domnului Dirijor"**
- Câmp text mare cu prompturi ghid CONTEXTUALE (se adaptează pe ocazie):
  - Nuntă → "Cum s-au cunoscut mirii? Ce moment a fost special?"
  - Zi naștere → "Ce face persoana asta specială? Ce amintire ați împărțit?"
  - Valentine's → "Cum s-au îndrăgostit? Ce cuvinte i-ai spune?"
  - Corporate → "Ce realizări are echipa? Ce vibe vreți la petrecere?"

**Step 5: "Alege stilul muzical"**
- Afișăm Top 3 cele mai populare pentru ocazia selectată cu badge "Popular"
- Plus TOATE cele 8 stiluri vizibile dedesubt
- Subgenurile apar ca chipuri opționale la selectarea stilului
- Dacă nu selectează subgen: "Domnul Dirijor va alege nuanța potrivită"

**Step 6: "Fă melodia și mai specială"** (Atingeri Personale + Pachete)
- Toggle: "Alege un pachet" / "Personalizează singur"
- Add-ons individuale cu prețuri
- Clientul e deja investit emoțional → upsell natural

**Step 7: Email + Plată**

---

### CALEA DIRECTĂ (4 steps)

**Step 1:** Stil muzical (grid cu 8 stiluri + subgenuri) + Vibe/Ton
**Step 2:** Ocazie + Destinatar + Limbă versuri + Povestea
**Step 3:** Atingeri Personale + Pachete
**Step 4:** Email + Plată

*Aceleași câmpuri, mai puțini pași, mai puțin ghidaj.*

---

### Recomandări stiluri per ocazie (popularitate, nu mapping vibe):

| Ocazie | Top 3 populare (badge "Popular") |
|--------|--------------------------------|
| Zi de naștere | Pop, Latino, Hip-Hop |
| Nuntă | Manele, Pop, Latino |
| Botez | Manele, Pop, Latino |
| Valentine's / Dragobete | Pop, Hip-Hop, Chill |
| 8 Martie | Pop, Hip-Hop, Chill |
| Corporate | Pop, Disco, House |
| Cerere căsătorie | Pop, Hip-Hop, Chill |
| Aniversare | Pop, Hip-Hop, Chill |
| Pensionare | Pop, Disco, Chill |
| Imn firmă | Pop, House, Trap |
| Absolvire | Pop, Trap, Latino |
| Doar de drag | Pop, Chill, Hip-Hop |

### Cum funcționează cele două axe:
- **Vibe (Step 1)** → merge ca ton/mood în prompt-ul Suno. NU influențează recomandarea de stil.
- **Ocazie (Step 2)** → declanșează recomandările de stil la Step 5 ("Cele mai recomandate stiluri de către Domnul Dirijor pentru ocazia ta").
- Ambele axe sunt independente. Vibe = emoția melodiei. Ocazie = ce stiluri sunt populare.
- Toate cele 8 stiluri rămân mereu vizibile și selectabile, recomandările doar ghidează.

### Terminologie: "vibe" vs "emoție"
- Folosim "vibe" (mai modern, mai cool) ca termen principal
- Alternăm cu "emoție" unde sună mai natural în context
- Exemplu Step 1: "Ce vibe cauți?"
- Exemplu Step 5: "Cele mai recomandate stiluri de către Domnul Dirijor pentru vibe-ul tău"

---

## 6. COMPETITORI DIRECȚI

| Competitor | Preț | Livrare | Stiluri | Tech |
|-----------|------|---------|---------|------|
| **manele.io** | 24.99 lei | 2-5 min | 9 substiluri manele | AI |
| **muzicalacomanda.ro** | de la 29.99 lei | 6h - 5 zile | Multi-genre | AI + supervizare |
| **melodiepersonalizata.ro** | 39.99-99.99 lei | 48-72h | 18+ genuri | AI |
| **melodiilacomanda.ro** | de la 99 lei | 24-72h | Multi-genre | AI |
| Songfinch (intl) | $49-199 | 3-7 zile | Multi | Artiști umani |
| Songlorious (intl) | $35-150 | 3-14 zile | Multi | Artiști umani |

### Avantajul nostru:
1. **VITEZA** — 3-5 min vs ore/zile (killer USP)
2. **UX premium** — Domnul Dirijor, story builder, animații
3. **Subgenuri** la TOATE stilurile (nu doar manele)
4. **Pachete tier** (Simplu → VIP)
5. **Atingeri Personale** premium (nu dedicații cu sume de bani)

---

## 7. SWOT SUMMARY

### Strengths
- First mover cu UX premium în RO
- Livrare 3-5 min (nimeni altcineva)
- Preț impuls (39.99 lei)
- Manele + multi-genre
- Suno Premier Plan (calitate maximă)

### Weaknesses
- Dependență Suno API
- Pronunție română imperfectă
- Brand awareness zero
- AI quality variabilă

### Opportunities
- Diaspora românească (4-5M)
- Corporate/B2B
- Parteneriate DJ nuntă
- TikTok viral (reacții emoționale)
- Campanii sezoniere (Valentine's, 8 Martie, Crăciun)

### Threats
- Suno crește prețurile
- Copycats (barieră tehnică joasă)
- Procese copyright (labels vs Suno)
- EU AI Act disclosure

---

## 8. TECH STACK

- **Frontend:** Single-file HTML+CSS+JS (index.html, compunere.html)
- **Generare muzică:** Suno API (Premier Plan, 10K credite/lună)
- **Automatizare:** n8n (webhook → Suno → ffmpeg watermark → email)
- **Plăți:** Stripe (+ potențial Netopia/PayU pentru RO)
- **Hosting:** Vercel
- **Watermark audio:** ffmpeg (concatenare TTS "refrenulmeu.ro" + melodie)
- **Email:** confirmare + livrare melodie
- **Audit/Logging:** n8n → Google Sheet (order ID, form data, prompt Suno, generation IDs, URLs audio, email, sumă, status)
- **Suno Dashboard:** acces direct pentru verificare melodii generate + prompt history
- **Scop:** Dacă un client se plânge, poți arăta exact ce a dat în prompt + ce a generat Suno

---

## 9. CALENDAR MARKETING (sezonalitate)

| Perioadă | Ocazie | Potențial | Campanie |
|----------|--------|-----------|----------|
| Ianuarie | New Year follow-up | Mediu | Retargeting |
| Februarie | Valentine's + Dragobete | MARE | Ads + influenceri |
| Martie | 8 Martie, Mărțișor | MARE | Campanie "pentru ea" |
| Aprilie-Mai | Start sezon nunți | Mare | Parteneriate DJ |
| Iunie-Sept | Peak nunți + botezuri | MAXIM | Ads continue |
| Octombrie | Zile naștere | Constant | Evergreen |
| Noiembrie | Black Friday | Mare | Discount pachete |
| Decembrie | Crăciun + Revelion | MARE | Colinde personalizate |

---

## 10. NEXT STEPS (de implementat)

### Prioritate 1 — Decizii confirmate
- [x] Multi-genre cu Manele expandat (nu nișat)
- [x] "Domnul Dirijor" — mascota finală
- [x] Pachete tier (Simplu → VIP)
- [x] Atingeri Personale (nu dedicații cu sume de bani)
- [x] Subgenuri opționale pe chipuri la fiecare stil
- [x] Eveniment Corporate + Imn firmă la ocazii
- [x] Povestea = selling point #1
- [x] Notă diacritice în formular
- [x] Dual path: Calea Ghidată (7 steps) + Calea Directă (4 steps)
- [x] 8 stiluri: Pop, Latino, Hip-Hop, Trap, Manele, Disco, House, Chill
- [x] Hip-Hop înlocuiește R&B (R&B + Rap devin subgenuri)
- [x] Pop include: Nostalgia 2000s, K-Pop
- [x] 5 limbi versuri: RO, EN, ES, IT, FR
- [x] Blues ca subgen la Chill
- [x] Vibe-ul = ton/mood pentru prompt Suno (NU filtru pentru stiluri)
- [x] Recomandări stiluri = bazate pe popularitate per ocazie (nu mapping vibe)
- [x] Site lansare: doar RO, EN post-lansare lună 2-3

### Prioritate 2 — De implementat pe site (REDESIGN MAJOR) ✅ COMPLETAT
- [x] Rebranding Dirijorul → Domnul Dirijor (texte + animație)
- [x] Dual path selector la deschiderea formularului
- [x] Calea Ghidată: Redesign complet (7 steps)
- [x] Calea Directă: Flow simplificat (4 steps)
- [x] 8 stiluri cu 38 subgenuri (chipuri opționale)
- [x] Redesign secțiune dedicații → Atingeri Personale (cu descrieri)
- [x] Pachete tier vizuale (Simplu/Special/Premium — VIP eliminat)
- [x] Notă licențiere în footer + Termeni
- [x] Actualizare hero/secțiuni cu messaging Domnul Dirijor
- [x] Badge "Potrivit" (nu "Popular") la recomandări stil per ocazie
- [x] Testimoniale carousel (11 recenzii, auto-slide)
- [x] Chat panel Domnul Dirijor (click → ghidare spre formular)
- [x] Retry/regenerare pe compunere.html (max 4 variante)
- [x] Limbaj orchestral pe compunere.html (repetiții, partitură, operă)
- [x] Lottie pregătit (CDN) pentru animații viitoare
- [x] "Altă ocazie" cu câmp text custom

### Prioritate 3 — Setup tehnic
- [ ] Test Suno API cu cont Premier (generare 5-10 melodii test)
- [ ] Setup n8n workflow
- [ ] Integrare Stripe
- [ ] Watermark audio cu ffmpeg
- [ ] Email template livrare

### Prioritate 4 — Pre-lansare
- [ ] 10-15 melodii demo pentru marketing
- [ ] Business Plan financiar detaliat
- [ ] Trademarking "RefrenulMeu" la OSIM
- [ ] Pagini legale: Termeni, GDPR, Cookies, Retur

---

*Acest document se actualizează continuu pe baza discuțiilor.*
