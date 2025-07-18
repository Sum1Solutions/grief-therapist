# Grief Therapist MVP

This project implements a minimal prototype of the **Grief Counseling Companion** described in `app-spec-v1.0.2-mvp-6b2rev.md`.

## Features

- AI-powered grief counseling companion using OpenAI GPT-4o-mini
- Crisis keyword detection and response
- Simple web interface for interaction
- Local development and testing setup

## Project Structure

- `src/worker.js` – HTTP server handling chat requests and forwarding them to OpenAI with crisis keyword detection.
- `public/index.html` – Simple browser UI to interact with the chatbot.
- `tests/` – Test scripts for development and debugging.
  - `test_prompts.js` – Basic test script for the chat functionality.
  - `debug_test.js` – Detailed test script with response inspection.
- `.env.example` – Example environment configuration file.
- `app-spec-v1.0.2-mvp-6b2rev.md` – Application specification and requirements.

## Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)
- OpenAI API key

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grief-therapist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:8787`

5. **Open the web interface**
   - Open `public/index.html` in your browser
   - The interface will connect to the local server automatically

## Running Tests

To run the basic test suite:
```bash
npm test
```

For more detailed debugging:
```bash
node tests/debug_test.js
```

## Configuration

You can customize the application by editing the `.env` file. Available options:

- `OPENAI_API_KEY` (required) – Your OpenAI API key
- `PORT` (optional, default: 8787) – Port for the server to listen on
- `NODE_ENV` (optional) – Set to 'production' in production environments

## Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Configure a reverse proxy (like Nginx) for better security and performance
3. Set up HTTPS using Let's Encrypt or similar
4. Consider using PM2 or similar process manager for reliability

## Living Specification

This project follows a living specification approach, meaning the specification evolves with the project. The current specification can be found in [`app-spec-v1.0.2-mvp-6b2rev.md`](app-spec-v1.0.2-mvp-6b2rev.md).

### Specification Versioning
- **Version Format**: `v<major>.<minor>.<patch>-<stage>-<hash>`
  - `major`: Breaking changes
  - `minor`: New features, backward-compatible
  - `patch`: Bug fixes and minor updates
  - `stage`: Development stage (e.g., mvp, beta, rc)
  - `hash`: Short git commit hash

### How to Update the Specification
1. Create a copy of the current specification with an incremented version number
2. Update the `UPDATED_FROM` field to reference the previous version
3. Make your changes to the new specification file
4. Update the README to reference the new specification version
5. Commit both the new specification and updated README

## Version History

### v1.0.2 (Current)
- Added environment configuration with `.env` support
- Improved error handling and validation
- Added detailed test scripts
- Updated documentation

### v1.0.1
- Initial MVP release
- Basic chat functionality
- Crisis keyword detection
- Simple web interface

## License

[Specify your license here]

## Contributing

We welcome contributions! Please see our [Contribution Guidelines](CONTRIBUTING.md) for more information.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
