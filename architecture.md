smart-study-monitor/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── arduino/
│   └── smart_study_monitor.ino
│
├── docs/
│   └── architecture.md
│
├── README.md
├── .gitignore
└── .env.example
# Smart Study Monitor Architecture

Arduino Uno
      ↓
IR Sensor
      ↓
Node.js Backend
      ↓
MongoDB
      ↓
Web Dashboard

Future versions will include real-time analytics, Socket.IO updates,
gamification, and cloud deployment.