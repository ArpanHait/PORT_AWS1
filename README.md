# ☁️ Arpan's — Experimental Portfolio

A clean, cloud-engineer-styled personal portfolio website for **Arpan Hait**, built with **React 19** and **Vite 6**. Designed with a terminal/DevOps aesthetic to showcase full-stack projects, technical skills, and a developer timeline.

> **Demo Project** — This portfolio serves as a showcase of frontend development skills, modern React patterns, and AWS-ready static site architecture.

> **Currently I have stopped my instance so the live preview wasn't available !!🫤**
---

## ✨ Features

- **Cloud-themed UI** — Terminal-inspired design with status indicators, version tags, and a DevOps visual language
- **Responsive Layout** — Fully responsive across desktop, tablet, and mobile viewports
- **Project Showcase** — Cards for each project with tech stack, impact metrics, and live repo links
- **Skills Dashboard** — Grouped skill categories spanning frontend, backend, APIs, tooling, and CS fundamentals
- **Developer Timeline** — Version-based release path showing growth from core CS to cloud deployment
- **Contact Section** — Quick links to Email, LinkedIn, GitHub, and downloadable resume
- **Lucide Icons** — Lightweight, consistent icon set via `lucide-react`
- **Static Export** — Production build outputs to `dist/` for direct S3/CDN hosting

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
| ----------- | --------------------------------- |
| Framework   | React 19                          |
| Build Tool  | Vite 6                            |
| Language    | JavaScript (ES Modules)           |
| Icons       | Lucide React                      |
| Styling     | Vanilla CSS (custom properties)   |
| Deployment  | AWS S3 + CloudFront (target)      |

---

## 🚀 Featured Projects

| Project                              | Stack                                        | Highlight                  |
| ------------------------------------ | -------------------------------------------- | -------------------------- |
| **To-Do Task Manager**               | Django · Python · HTML/CSS/JS                | 8 CRUD views               |
| **Deepfake Detection Framework**     | React · FastAPI · MTCNN · EfficientNet-B0    | 5 REST endpoints           |
| **Industrial AI Anomaly Detection**  | Next.js · TypeScript · FastAPI · Scikit-Learn| WebSocket telemetry        |
| **AI Autocorrect Tool**              | JavaScript · Netlify Functions               | < 100 ms latency           |

---

## ☁️ AWS Deployment

1. **S3** — Create a bucket with static website hosting enabled and upload the contents of `dist/`.
2. **CloudFront** — Add a distribution pointing to the S3 bucket for edge caching and HTTPS.
3. **ACM** — Use AWS Certificate Manager to provision an SSL certificate.
4. **Route 53** — Optionally connect a custom domain.

---

## 📁 Project Structure

```
PORT_AWS1/
├── public/
│   ├── assets/             # Static images
│   └── Arpan_Hait_Resum.pdf
├── src/
│   ├── App.jsx             # Main application component
│   ├── App.css             # All styles
│   └── main.jsx            # React entry point
├── index.html              # HTML shell
├── vite.config.js          # Vite configuration
├── package.json
└── README.md
```

---

## 🤝 Connect

- **GitHub** — [github.com/ArpanHait](https://github.com/ArpanHait)
- **LinkedIn** — [linkedin.com/in/arpan-hait](https://www.linkedin.com/in/arpan-hait)
- **Email** — [arpanhait2006@gmail.com](mailto:arpanhait2006@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
