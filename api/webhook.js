// Vercel Serverless Function — Stripe Webhook Handler
// Environment variables required:
//   STRIPE_SECRET_KEY — sk_live_... or sk_test_...
//   STRIPE_WEBHOOK_SECRET — whsec_...
//   SUNO_API_KEY — (for future Suno API integration)
//   SITE_URL — https://refrenulmeu.ro

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Vercel doesn't parse body for webhooks — we need raw body
module.exports.config = {
  api: {
    bodyParser: false,
  },
};

function getRawBody(req) {
  return new Promise(function (resolve, reject) {
    var chunks = [];
    req.on('data', function (chunk) { chunks.push(chunk); });
    req.on('end', function () { resolve(Buffer.concat(chunks)); });
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  var rawBody;
  try {
    rawBody = await getRawBody(req);
  } catch (err) {
    return res.status(400).json({ error: 'Could not read request body' });
  }

  var sig = req.headers['stripe-signature'];
  var event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: 'Webhook signature invalid' });
  }

  // Handle payment success
  if (event.type === 'checkout.session.completed') {
    var session = event.data.object;
    var metadata = session.metadata || {};
    var customerEmail = session.customer_email || session.customer_details?.email;

    console.log('Payment successful:', {
      sessionId: session.id,
      email: customerEmail,
      amount: session.amount_total,
      packageType: metadata.packageType,
      style: metadata.style,
      recipient: metadata.recipient,
      promoCode: metadata.promoCode,
    });

    // ============================================
    // TODO: SUNO API INTEGRATION
    // ============================================
    // After payment is confirmed, trigger song generation:
    //
    // 1. Build prompt from metadata:
    //    - style, subgenre, vibe → music style prompt
    //    - story, recipient, occasion → lyrics prompt
    //    - language → target language
    //
    // 2. Call Suno API to generate 2 variants:
    //    const response = await fetch('https://api.suno.ai/v1/...', {
    //      method: 'POST',
    //      headers: { 'Authorization': 'Bearer ' + process.env.SUNO_API_KEY },
    //      body: JSON.stringify({ prompt, style, ... })
    //    });
    //
    // 3. Store song URLs (Supabase / KV / temp storage)
    //
    // 4. Send delivery email to customerEmail with link to:
    //    https://refrenulmeu.ro/compunere.html?session_id=SESSION_ID
    //
    // 5. Log promo code usage for ambassador tracking:
    //    if (metadata.promoCode) {
    //      // Log: promoCode, amount, date, email
    //    }
    // ============================================

    // For MVP: just log the order
    // The composition page will poll for results via /api/order-status
  }

  // Acknowledge receipt
  return res.status(200).json({ received: true });
};
