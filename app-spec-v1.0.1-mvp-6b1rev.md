# SPEC VERSION: v1.0.1-mvp-6b1rev
SPEC HASH: 6b1rev
GENERATED: 2025-07-18T14:12:00.000Z

This is an MVP specification with the essential 6 components needed for working code, updated to include developer testing and early crisis detection.

---

## • Goal (CRITICAL)
We are building an AI-powered grief counseling companion app that uses large language models to provide empathetic, evidence-informed conversational support. The goal is to help people process grief by offering validation, education on healthy coping strategies, and gentle guidance through recognized grief models. We are building it to fill the gap between professional counseling sessions or for those without access to therapy, giving users a supportive, always-available space to express their emotions and feel understood.

---

## • Primary User (CRITICAL)
The primary user is someone actively grieving a loss, seeking emotional support, validation, and guidance. They can:
✅ Talk freely about their feelings.
✅ Ask questions about grief and coping.
✅ Receive compassionate, nonjudgmental responses.

They cannot receive medical or psychiatric diagnoses, nor crisis intervention; the app will redirect them to professional or emergency help in such cases.

Secondary Users include caregivers or friends seeking guidance on supporting someone grieving.

---

## • Core Workflow (CRITICAL)
### Happy Path Scenario:

1. **User Opens App** – The grieving user logs in or enters anonymously.

2. **Initial Check-In** – The app greets warmly: “How are you feeling today?” with quick-start options (e.g., “I just need to talk,” “Teach me coping tools,” “I’m having a really hard day”).

3. **Conversation Flow** – The user types (or eventually speaks) freely. The LLM responds with empathetic, reflective listening, validating emotions and normalizing grief reactions.

4. **Guided Support** – Based on cues, the app introduces evidence-based grief models (e.g., Worden’s Tasks, Dual Process) in conversational language, suggesting small coping actions (“Would you like to try writing a memory about your loved one?”).

5. **Optional Psychoeducation** – If the user asks, the app explains grief concepts in supportive, easy-to-read terms.

6. **Session Closure** – The app summarizes key points (“It sounds like you miss her deeply, and that’s a sign of love. You mentioned you might go for a walk later—would you like me to remind you tomorrow?”).

7. **Follow-Up Option** – Users can opt to save the session, schedule a check-in, or continue chatting. Default is anonymous/no storage.

---

## • Inputs (CRITICAL)
✅ **Text Input** – Primary mode; users type freely.  
✅ **Voice Input (Later Milestone)** – Optional speech-to-text (Web Speech API); processed locally or via Whisper Worker (opt-in).  
✅ **Mood Check-Ins** – Quick-tap options like “sad,” “angry,” “numb” to guide tone.  
✅ **Optional File Uploads** – Journals, letters, or photos for reflection exercises (opt-in only).  
✅ **System Metadata** – Session history, time since last session, user preferences (only if opted in).

---

## • Outputs (CRITICAL)
✅ **Conversational Responses** – Empathetic, human-like text or synthesized voice (later).  
✅ **Guided Suggestions** – Brief, actionable coping activities or exercises.  
✅ **Psychoeducational Insights** – Simple grief science framed supportively.  
✅ **Session Summaries** – Short recap of feelings & suggested next steps (opt-in).  
✅ **Follow-Up Prompts** – Gentle invitations to return or revisit tools.  
✅ **Crisis Redirects** – Basic keyword detection in MVP (e.g., “suicide,” “can’t go on”), immediate resource output.

---

## • Stack Constraints (CRITICAL)
✅ **Platform** – Entirely browser-based (Chrome, Safari, Edge) on mobile phones, tablets (iPad, Android), and desktop (Mac/PC). No native app required for MVP.

✅ **Front End** – Lightweight React (or Next.js without /app directory), mobile-first responsive design.

✅ **Back End** – Fully hosted on Cloudflare:
- **Cloudflare Workers** for API orchestration & LLM proxying.
- **Cloudflare KV / D1** for user preferences & opt-in summaries.
- **Cloudflare AI Gateway** to route LLM calls securely & cheaply.

✅ **LLM** – OpenAI GPT-4o-mini (initial), with proxy option to Anthropic.

✅ **Voice Support** – Deferred until Milestone 3 (Web Speech API first, Whisper optional).

✅ **Privacy & Security** – HIPAA-adjacent best practices: end-to-end encryption, opt-in storage, “delete all data” button.

✅ **Cost Optimization** – Primarily serverless; static educational content cached via Cloudflare Pages/CDN to reduce LLM calls.

---

## • Developer Testing (NEW CRITICAL PATH ADDITION)
Include a simple `/tests` page or console script to run the following **5 Test Prompts** and compare against ideal responses (tone, empathy, invitation to continue).

1. Deep Sadness
2. Anger
3. Numbness
4. Avoidance / Distraction
5. Guilt

(Scripts should score 1–5 for Empathy, Validation, Follow-Up Invitation.)

---

## --- Version Control ---
**Save as:** `app-spec-v1.0.1-mvp-6b1rev.md`  
**Git commit message:**
```
feat: add MVP spec v1.0.1-mvp-6b1rev (developer test prompts & crisis detection added)
```