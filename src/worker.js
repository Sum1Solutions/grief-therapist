import http from 'http';

const PORT = process.env.PORT || 8787;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const crisisKeywords = ['suicide', "can't go on", 'kill myself'];

async function handleChat(message) {
  if (!OPENAI_API_KEY) {
    throw new Error('Missing OPENAI_API_KEY');
  }

  const crisisDetected = crisisKeywords.some(k => message.toLowerCase().includes(k));
  if (crisisDetected) {
    return 'If you are in crisis or thinking of harming yourself, please contact emergency services or a crisis hotline immediately.';
  }

  const payload = {
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: message }]
  };

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });
  const data = await resp.json();
  return data.choices?.[0]?.message?.content || '';
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const { message = '' } = JSON.parse(body || '{}');
        const reply = await handleChat(message);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ response: reply }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error: ' + err.message);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Worker listening on http://localhost:${PORT}`);
});
