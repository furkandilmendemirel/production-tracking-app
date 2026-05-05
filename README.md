# Production Tracking App – ProTrack

## Project Description

ProTrack is a fabric production tracking system designed to monitor fabric inventory, production stages, quality control status, and supplier-based performance.

The project focuses on improving visibility and traceability in textile production workflows. Each fabric roll can be tracked through a clear production lifecycle:

Pending → Processing → Quality Check → Completed

The final version includes:

- A React-based static frontend deployed on Vercel

- A Python-based domain model that demonstrates the core business logic

- State Design Pattern implementation for fabric lifecycle tracking

- CI/CD workflows with GitHub Actions

- CodeQL security scanning

- Dockerfile-based containerization support

---

## Main Features

- Demo login page

- Dashboard summary cards

- Fabric tracking table

- Search by barcode, supplier, or fabric type

- Filter by status and fabric type

- Move fabric to the next production stage

- Fabric details modal

- Production timeline

- Supplier performance reports

- State Design Pattern implementation in Python

- GitHub Actions CI/CD workflows

- CodeQL security scanning

- Vercel deployment

- Dockerfile and docker-compose support for containerization

---

## Tech Stack

### Frontend

- React

- Vite

- JavaScript

- CSS

- Vercel

### Backend / Domain Logic

- Python

- Object-Oriented Programming

- State Design Pattern

- Pytest

- Ruff

### DevOps, Deployment and Security

- GitHub

- GitHub Actions

- CodeQL

- Dependabot

- GitHub Secrets

- Vercel

- Docker

- Nginx

---

## Project Structure

```text

production-tracking-app/

├── .github/

│   ├── dependabot.yml

│   └── workflows/

│       ├── python-ci.yml 

│       └── codeql.yml

│

├── diagrams/

├── docs/

│   └── audit-notes.md

│

├── frontend/

│   ├── index.html

│   ├── package.json

│   ├── vite.config.js

│   ├── vercel.json

│   └── src/

│       ├── App.jsx

│       ├── main.jsx

│       ├── styles.css

│       ├── data/

│       │   └── fabrics.js

│       ├── assets/

│       │   └── protrack-logo.png

│       └── components/

│           ├── Login.jsx

│           ├── Dashboard.jsx

│           ├── TrackTable.jsx

│           ├── StatusBadge.jsx

│           ├── FabricDetailsModal.jsx

│           └── Reports.jsx

│

├── screenshots/

├── src/

│   ├── fabric.py

│   ├── main.py

│   ├── services.py

│   ├── states.py

│   └── supplier.py

│

├── tests/

│   └── test_fabric.py

│

├── Dockerfile

├── docker-compose.yml

├── .gitignore

├── README.md

├── requirements.txt

├── KNOWN_ISSUES.md

└── SECURITY_AUDIT_REPORT.md

```

---

## Local Setup Instructions

This project has two parts:

1. Python domain logic  

2. React frontend application

You can run them separately.

---

### Prerequisites

Before running the project locally, make sure you have these installed:

- Git

- Python 3.11 or newer

- pip

- Node.js 20 or newer

- npm

- Docker, optional

---

### 1. Clone the Repository

```bash

git clone https://github.com/furkandilmendemirel/production-tracking-app.git

cd production-tracking-app

```

---

### 2. Run the Python Domain Logic

The Python part represents the core business logic of the production tracking system. It includes fabric tracking, supplier management, cutting plan logic, and the State Design Pattern.

Run:

```bash

python3 src/main.py

```

This command demonstrates how fabrics move through production states:

```text

Pending → Processing → Quality Check → Completed

```

---

### 3. Install Python Dependencies

```bash

pip install -r requirements.txt

```

---

### 4. Run Python Tests

```bash

pytest

```

---

### 5. Run Ruff Lint Check

```bash

ruff check .

```

---

### 6. Run the React Frontend Locally

Go to the frontend directory:

```bash

cd frontend

```

Install frontend dependencies:

```bash

npm install

```

Start the development server:

```bash

npm run dev

```

The local frontend usually runs at:

```text
http://localhost:5173

```

Open this URL in your browser.

---

### 7. Demo Login

Use the following demo credentials:

```text

Username: admin

Password: 1234

```

---

### 8. Build the React Frontend Locally

Inside the `frontend/` directory:

```bash

npm run build

```

This creates the production build inside:

```text

frontend/dist/

```

To preview the production build locally:

```bash

npm run preview

```

---

### 9. Run with Docker

From the project root directory:

```bash

docker build -t protrack-frontend .

```

Then run:

```bash

docker run -p 8080:80 protrack-frontend

```

Open:

```text
http://localhost:8080

```

---

### 10. Run with Docker Compose

From the project root directory:

```bash

docker compose up --build

```

Then open:

```text
http://localhost:8080

```

To stop the container:

```bash

docker compose down

```

---

## Live Deployment

The React frontend is deployed on Vercel.

Live Demo:

```text

[YOUR VERCEL URL HERE]

```

Vercel was selected because it works well with Vite React applications, provides fast deployment, supports GitHub integration, and creates a public URL for the final live demo.

---

## Containerization

The project includes a `Dockerfile` to document how the React frontend can be containerized.

The Dockerfile uses a multi-stage build:

1. Node.js installs dependencies and builds the Vite React frontend.

2. Nginx serves the generated static files.

The project also includes an optional `docker-compose.yml` file for local container execution.

---

## CI/CD Pipeline

The project uses GitHub Actions for CI/CD.

Configured workflows:

- `python-ci.yml`  

  Runs Ruff and Pytest for Python quality checks.

- `codeql.yml`  

  Runs CodeQL static security analysis.

- `vercel-deploy.yml`  

  Builds and deploys the React frontend to Vercel.

These workflows help verify code quality, security, and deployment readiness.

---

## Environment Variables and Secrets

Deployment secrets are not stored in the repository.

The Vercel deployment workflow uses GitHub repository secrets:

```text

VERCEL_TOKEN

VERCEL_ORG_ID

VERCEL_PROJECT_ID

```

These values are stored in:

```text

GitHub Repository → Settings → Secrets and variables → Actions

```

Local Vercel files and environment files are excluded from Git using `.gitignore`.

Ignored examples:

```text

.vercel/

frontend/.vercel/

.env

.env.local

frontend/.env.local

```

---

## Security and Quality

The project includes:

- CodeQL static analysis

- Dependabot configuration

- GitHub Security and Quality review

- Secret scanning review

- Security audit notes

- Known issues and technical debt documentation

Security-related documentation:

```text

SECURITY_AUDIT_REPORT.md

KNOWN_ISSUES.md

docs/audit-notes.md

```

---

## Known Technical Debt

Some features were intentionally deferred because of academic project scope and limited development time:

- Real database integration

- Backend API connection

- Production-level authentication

- Role-based access control

- Automated frontend tests

- Advanced analytics

- Export PDF/CSV reports

---

## Team Members

- Aslı Çiçek

- Furkan Dilmen Demirel

- Özge Yüksel

---

## Repository

```text
https://github.com/furkandilmendemirel/production-tracking-app

```
