# SPEC VERSION: v1.0.2-mvp-6b2rev
SPEC HASH: 6b2rev
GENERATED: 2025-07-18T14:45:00.000Z
UPDATED_FROM: v1.0.1-mvp-6b1rev

This is an MVP specification with the essential 6 components needed for working code, updated to include environment configuration and improved error handling.

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

2. **Initial Check-In** – The app greets warmly: "How are you feeling today?" with quick-start options (e.g., "I just need to talk," "Teach me coping tools," "I'm having a really hard day").

3. **Conversation Flow** – The user types (or eventually speaks) freely. The LLM responds with empathetic, reflective listening, validating emotions and normalizing grief reactions.

4. **Guided Support** – Based on cues, the app introduces evidence-based grief models (e.g., Worden's Tasks, Dual Process) in conversational language, suggesting small coping actions ("Would you like to try writing a memory about your loved one?").

5. **Optional Psychoeducation** – If the user asks, the app explains grief concepts in supportive, easy-to-read terms.

6. **Session Closure** – The app summarizes key points ("It sounds like you miss her deeply, and that's a sign of love. You mentioned you might go for a walk later—would you like me to remind you tomorrow?").

7. **Follow-Up Option** – Users can opt to save the session, schedule a check-in, or continue chatting. Default is anonymous/no storage.

---

## • Inputs (CRITICAL)
✅ **Text Input** – Primary mode; users type freely.  
✅ **Voice Input (Later Milestone)** – Optional speech-to-text (Web Speech API); processed locally or via Whisper Worker (opt-in).  
✅ **Mood Check-Ins** – Quick-tap options like "sad," "angry," "numb" to guide tone.  
✅ **Optional File Uploads** – Journals, letters, or photos for reflection exercises (opt-in only).  
✅ **System Metadata** – Session history, time since last session, user preferences (only if opted in).

---

## • Outputs (CRITICAL)
✅ **Text Responses** – Empathetic, validating, and evidence-based.  
✅ **Crisis Detection** – Automatic detection of high-risk language triggers immediate crisis resources.  
✅ **Coping Suggestions** – Context-aware recommendations (e.g., breathing exercises, journal prompts).  
✅ **Session Summaries** – Optional email/export of key insights and resources.  
✅ **Progress Tracking** – Visualizations of mood/engagement over time (opt-in).

---

## • Technical Implementation (UPDATED)
### Environment Configuration
- `.env` file for local development (see `.env.example` for template)
- Required environment variables:
  - `OPENAI_API_KEY`: Your OpenAI API key
  - `PORT`: (Optional) Server port (default: 8787)
  - `NODE_ENV`: (Optional) Environment (development/production)

### Server
- Node.js HTTP server with Express-like routing
- Environment-aware configuration
- Basic error handling and logging
- CORS enabled for local development

### Frontend
- Simple HTML/CSS/JavaScript interface
- Connects to local server by default
- Basic error handling and loading states

### Testing
- Unit tests for core functionality
- Integration tests for API endpoints
- Test coverage for crisis detection

### Security
- Environment variables for sensitive data
- Input validation and sanitization
- Rate limiting (to be implemented)

---

## • Testing & Validation (UPDATED)
### Test Cases
1. **Environment Setup**
   - Verify `.env` configuration
   - Test server startup with valid/invalid API keys

2. **API Endpoints**
   - Test chat endpoint with various inputs
   - Verify error handling and responses

3. **Crisis Detection**
   - Test with crisis keywords
   - Verify appropriate crisis response

4. **Frontend Integration**
   - Test UI interactions
   - Verify error states and loading indicators

### Test Scripts
- `npm test`: Run basic test suite
- `node tests/debug_test.js`: Run detailed debug tests

---

## • Next Steps
1. **Immediate**
   - [x] Set up environment configuration
   - [x] Implement basic error handling
   - [ ] Add input validation
   - [ ] Implement rate limiting

2. **Short-term**
   - [ ] Enhance frontend UI/UX
   - [ ] Add session management
   - [ ] Implement persistent storage (opt-in)

3. **Future**
   - [ ] Voice input/output
   - [ ] Multi-language support
   - [ ] Integration with professional support services

---

## • Version History
- **v1.0.2 (Current)**
  - Added environment configuration
  - Improved error handling
  - Updated documentation
  - Added test scripts

- **v1.0.1**
  - Initial MVP specification
  - Basic chat functionality
  - Crisis keyword detection

---

## • Notes for Developers
- Always use the `.env` file for configuration
- Follow the error handling patterns in the code
- Write tests for new features
- Document any changes to the API
