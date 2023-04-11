## Modules and Concurrency

### What exactly is a Module?

**Module (in Node.js)**: A file (or a folder) that contains code.

### The Event Loop

The mechanism Node.js uses to process asynchronous actions and interface them for developers, avoiding the need to deal with threads.

**Tip**: Run `ps -ef | grep node` to filter the process list for any processes matching the word "node".

### Errors vs Exceptions

- **Error is a "Problem"**: Indicates an issue or malfunction.
- **Exception is a "Condition"**: Represents an abnormal or unexpected event that occurs during program execution.
