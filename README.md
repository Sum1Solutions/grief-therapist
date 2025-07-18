# Grief Therapist MVP

This project implements a minimal prototype of the **Grief Counseling Companion** described in `app-spec-v1.0.1-mvp-6b1rev.md`.

## Structure

- `src/worker.js` – Cloudflare Worker handling chat requests and forwarding them to OpenAI GPT‑4o‑mini with basic crisis keyword detection.
- `public/index.html` – Simple browser UI to converse with the bot.
- `tests/test_prompts.js` – Developer test script that sends five prompts to a local worker instance.

## Running

1. Start the worker locally (requires an `OPENAI_API_KEY` env var):
   ```bash
   npm start
   ```
   This uses `node src/worker.js` for local testing. In production, deploy to Cloudflare Workers.

2. Open `public/index.html` in your browser. It expects the worker to be running at `http://localhost:8787` and the API endpoint `/api/chat`.

3. Developer tests:
   ```bash
   npm test
   ```
   This runs `tests/test_prompts.js`, sending sample prompts and logging responses.

Network access to OpenAI is required to get real responses. Without it, the tests will fail.
