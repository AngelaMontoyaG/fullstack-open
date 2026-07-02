```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: The user writes a note and clicks the "Save" button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note over server: The server saves the new note to the notes array
    server-->>browser: HTTP 302 / Redirect to /exampleapp/notes
    deactivate server

    Note over browser: The browser reloads the page due to the redirect

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: main.js
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the updated JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "Your new note", "date": "2026-07-02" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function and renders all notes, including the new one