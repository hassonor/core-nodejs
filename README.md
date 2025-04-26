# Core Node.js – Concepts, Patterns & Hands‑On Examples

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js >= 18](https://img.shields.io/badge/node-%3E%3D18.x-brightgreen)

A **curated knowledge base** of Node.js code & learning resources collected from courses, books and production back‑ends. The project is organised as a mono‑repo where **each top‑level folder is a self‑contained mini‑project** – clone the repo, `cd` into a folder, install and run.

> **Tip ▸** Can’t see a folder mentioned below? The repository is evolving – pull to get the latest or open an issue and we’ll add it.

---

## 🗂 Directory Index (root‑level)

| Folder | Quick glance |
|--------|--------------|
| `async-patterns` | Callback → Promise → async/await, control‑flow helpers (`async` lib) |
| `async-sync-refresher` | Event‑loop phases, micro‑tasks vs. macro‑tasks illustrated |
| `examples_from_books` | Annotated code taken from **Node.js Design Patterns** & others |
| `express-essential` | Idiomatic Express: routing, middleware, template engines |
| `http-with-node` | Bare‑metal HTTP/HTTPS servers with `http` core module |
| `interview-questions` | Common coding tasks + explanations (throttling, debouncing…) |
| `javascript-concepts` | Language fundamentals, modules, closures, prototypes |
| `node-microservices` | gRPC & NATS demos, Docker Compose service mesh |
| `nodejs-getting-started` | Intro track: setup → modules → NPM → first server |
| `objects-prototypes-classes` | Deep‑dive OOP in JS & TypeScript |
| `promises-and-async-programming` | Advanced Promise patterns, cancellation, `AsyncLocalStorage` |
| `real-time-web-with-socket-io` | Websockets chat, Redis adapter horizontal scaling |
| `restful-mongo-node-express` | CRUD REST API with MongoDB/Mongoose + JWT auth |
| `security-best-practices` | Helmet, rate‑limiting, OWASP cheatsheets *(WIP)* |
| `website-with-node-and-express` | Full MVC website (EJS) with sessions & passport‑local |

_The easiest way to explore is `gh repo clone hassonor/core-nodejs && tree -L 2`_

---

## 🚀 Run an Example

```bash
# clone once
$ git clone https://github.com/hassonor/core-nodejs.git
$ cd core-nodejs

# pick a project
$ cd express-essential/04-basic-routing

# install deps & start
$ npm install
$ npm start
```

Containers or databases? Look for a `docker-compose.yml` inside that folder and simply `docker compose up -d`.

---

## 🧭 Suggested Learning Paths

| Track | Order |
|-------|-------|
| **Beginner** | `nodejs-getting-started` → `javascript-concepts` → `async-sync-refresher` |
| **Web API** | `express-essential` → `restful-mongo-node-express` → `security-best-practices` |
| **Real‑time** | `real-time-web-with-socket-io` → scale with `node-microservices` |
| **Interview prep** | `interview-questions` → review `objects-prototypes-classes` |

---

## 🛠 Common Tooling

* **ESLint + Prettier** configs where needed
* **Jest** / `node:test` for unit tests
* `.env.example` files + `dotenv` for configuration
* **Docker** multi‑stage builds (small production images)

---

## 🤝 Contributing

Spotted a broken link? Got a cool example? **PRs welcome!**

1. Fork → feature branch → PR.
2. Pass `npm test` in affected projects.
3. For large additions open an issue first.

---

## 📝 License

MIT © [@hassonor](https://github.com/hassonor)
