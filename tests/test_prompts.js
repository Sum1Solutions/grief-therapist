const prompts = [
  'I just feel so sad all the time.',
  "I'm angry they left me.",
  'I feel nothing. Is that normal?',
  "I keep distracting myself so I don't have to think about it.",
  "I feel guilty that I'm still alive."
];

(async () => {
  for (const p of prompts) {
    console.log('Sending:', p);
    try {
      const resp = await fetch('http://localhost:8787/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: p })
      });
      const data = await resp.json();
      console.log('Response:', (data.response || '').slice(0, 60) + '...');
    } catch (err) {
      console.error('Error:', err.message);
    }
  }
})();
