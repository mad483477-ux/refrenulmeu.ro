// Vercel Serverless Function — Create Stripe Checkout Session
// Environment variables required (set in Vercel Dashboard):
//   STRIPE_SECRET_KEY — sk_live_... or sk_test_...
//   SITE_URL — https://refrenulmeu.ro (or http://localhost:3000 for dev)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PACKAGE_PRICES = {
  simplu: { amount: 3999, label: 'Pachet Simplu' },
  special: { amount: 5999, label: 'Pachet Special' },
  premium: { amount: 8999, label: 'Pachet Premium' },
};

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      packageType,
      email,
      dedicationsTotal,
      // Order metadata (passed through to webhook)
      style,
      subgenre,
      vibe,
      occasion,
      recipient,
      relation,
      language,
      story,
      atingeri,
    } = req.body;

    // Validate package
    const pkg = PACKAGE_PRICES[packageType];
    if (!pkg) {
      return res.status(400).json({ error: 'Pachet invalid' });
    }

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email invalid' });
    }

    // Build line items
    const lineItems = [
      {
        price_data: {
          currency: 'ron',
          product_data: {
            name: pkg.label + ' — Melodie Personalizată',
            description: 'Melodie unică generată de Domnul Dirijor, livrată digital.',
          },
          unit_amount: pkg.amount,
        },
        quantity: 1,
      },
    ];

    // Add dedications as separate line item if any
    const dedTotal = parseInt(dedicationsTotal, 10) || 0;
    if (dedTotal > 0) {
      lineItems.push({
        price_data: {
          currency: 'ron',
          product_data: {
            name: 'Dedicații personalizate',
            description: 'Atingeri personale adăugate la melodie.',
          },
          unit_amount: dedTotal * 100, // cents
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    // Promo codes are handled natively by Stripe (allow_promotion_codes: true)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: lineItems,
      allow_promotion_codes: true,
      success_url: (process.env.SITE_URL || 'https://refrenulmeu.ro') +
        '/compunere.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: (process.env.SITE_URL || 'https://refrenulmeu.ro') +
        '/#comanda',
      metadata: {
        packageType,
        style: style || '',
        subgenre: subgenre || '',
        vibe: vibe || '',
        occasion: occasion || '',
        recipient: recipient || '',
        relation: relation || '',
        language: language || 'ro',
        story: (story || '').substring(0, 500), // Stripe metadata max 500 chars
        atingeri: JSON.stringify(atingeri || {}),
      },
    });

    return res.status(200).json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return res.status(500).json({ error: 'Eroare la crearea sesiunii de plată.' });
  }
};
