# Project Overview

This is a TypeScript project that uses Express.js. It also serves as a "meta" project, providing a framework and workflow for using a Gemini-powered AI assistant within the Cursor editor. The project is named "Memory Bank" and it provides a structured approach to development using specialized modes for different phases of the development process.

## Building and Running

*   **Build:** `npm run build`
*   **Run:** `npm run serve`
*   **Test:** `npm run test`
*   **Lint:** `npm run lint`
*   **Format:** `npm run format`

## Development Conventions

The project uses a system of "custom modes" for interacting with the AI assistant. These modes are:

*   **VAN:** Initialization
*   **PLAN:** Task Planning
*   **CREATIVE:** Design
*   **IMPLEMENT:** Building
*   **REFLECT:** Review
*   **ARCHIVE:** Documentation

Each mode has a specific purpose and a set of associated tools and instructions. The workflow generally follows the order VAN -> PLAN -> CREATIVE -> IMPLEMENT -> REFLECT -> ARCHIVE.

The project also includes a set of "QA" functions that can be called from any mode to perform technical validation.

The core of the "Memory Bank" system is a set of markdown files that store the state of the development process:

*   `tasks.md`: The central source of truth for task tracking.
*   `activeContext.md`: Maintains the focus of the current development phase.
*   `progress.md`: Tracks implementation status.
*   `creative-*.md`: Design decision documents generated during CREATIVE mode.
*   `reflect-*.md`: Review documents created during REFLECT mode.
