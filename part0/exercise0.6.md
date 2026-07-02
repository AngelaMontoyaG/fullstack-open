```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: The user writes a note and clicks the "Save" button
    Note over browser: The JavaScript code appends the new note to the list locally and rerenders the view

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note over server: The server saves the new note to the notes array
    server-->>browser: HTTP 201 Created (JSON confirmation)
    deactivate server