# 🚀 CI/CD Task Manager

A web application with a fully automated CI/CD pipeline using GitHub Actions and Vercel.

## 🔄 Pipeline Architecture
Code Push → Lint → Tests → Coverage → Build → Deploy

## 🛠️ Tech Stack
- React + Vite (Frontend)
- GitHub Actions (CI/CD)
- Vitest + Testing Library (Tests)
- ESLint (Code Quality)
- Vercel (Deployment)

## 📦 Pipeline Stages
| Stage | Tool | Purpose |
|---|---|---|
| Lint | ESLint | Code quality check |
| Test | Vitest | Automated testing |
| Coverage | Vitest Coverage | Code coverage report |
| Build | Vite | Production build |
| Deploy | Vercel | Live deployment |

## 🚀 Getting Started
```bash
npm install
npm run dev      # Run locally
npm test         # Run tests
npm run coverage # Run coverage
npm run lint     # Run linter
npm run build    # Build for production
```

## ✅ Project Status
![CI/CD Pipeline](https://github.com/Tejaswini123-dot/cicd-task-manager/actions/workflows/ci-cd.yml/badge.svg)
