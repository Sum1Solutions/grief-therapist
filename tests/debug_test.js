const prompts = [
  'I just feel so sad all the time.',
  "I'm angry they left me.",
  'I feel nothing. Is that normal?',
  "I keep distracting myself so I don't have to think about it.",
  "I feel guilty that I'm still alive."
];

(async () => {
  for (const p of prompts) {
    console.log('\n--- Sending:', p);
    try {
      const response = await fetch('http://localhost:8787/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: p })
      });
      
      // Get the raw response text first
      const responseText = await response.text();
      console.log('Status:', response.status);
      console.log('Headers:', Object.fromEntries(response.headers.entries()));
      console.log('Raw Response:', responseText);
      
      // Try to parse as JSON
      try {
        const data = JSON.parse(responseText);
        console.log('Parsed JSON:', data);
      } catch (e) {
        console.error('Failed to parse JSON:', e.message);
      }
    } catch (err) {
      console.error('Request Error:', err);
    }
  }
})();
