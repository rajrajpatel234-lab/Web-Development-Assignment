# MOPTro Dashboard - Web Development Assignment

A modern, responsive vehicle information platform built with React.js and MongoDB, featuring user authentication and comprehensive dashboard analytics.

## 🚀 Features

- **User Authentication**
  - Sign up with email/password
  - Sign in functionality
  - Social login UI (Apple, Facebook, Google)
  - Remember me functionality

- **Dashboard**
  - User profile card with status indicator
  - MOPTro vehicle information with real-time metrics
  - Interactive charts using Chart.js
  - Platform settings with toggle switches
  - Product showcase (WASP, SNAA, E-Vehicle)
  - Weekly utilization analytics

- **Design**
  - Dark theme with gradient accents
  - Responsive layout
  - Modern UI/UX matching Adobe XD designs
  - Smooth animations and transitions

## 🛠️ Tech Stack

### Frontend
- **React.js** (v19.2.0) - UI library
- **Vite** - Build tool
- **React Router DOM** (v7.11.0) - Navigation with HashRouter
- **Chart.js** (v4.5.1) - Data visualization
- **react-chartjs-2** (v5.3.1) - React wrapper for Chart.js
- **Axios** (v1.13.2) - HTTP client

### Backend
- **Node.js** with **Express** (v5.2.1)
- **MongoDB** with **Mongoose** (v9.1.2)
- **CORS** enabled
- **dotenv** for environment variables

## 📁 Project Structure

```
webapp/
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── auth/       # SignIn & SignUp pages
│   │   │   └── dashboard/  # Dashboard page
│   │   ├── components/
│   │   │   ├── auth/       # Auth components
│   │   │   └── dashboard/  # Dashboard components
│   │   ├── charts/         # Chart.js components
│   │   ├── services/       # API services
│   │   ├── styles/         # CSS modules
│   │   └── routes/         # React Router setup
│   ├── public/             # Static assets
│   └── package.json
│
└── server/                 # Backend Node.js application
    ├── models/            # Mongoose schemas
    ├── routes/            # Express routes
    ├── db/                # Database connection
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd /home/user/webapp
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Configuration

1. **Server Environment Variables** (`server/.env`)
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

2. **Client Environment Variables** (`client/.env`)
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   # Client runs on http://localhost:5173
   ```

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173`
   - Create a new account or sign in
   - Explore the dashboard

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop: 1536x714, 1280x603
- Tablet: 768px and above
- Mobile: 640px and below

## 🎨 Design Details

### Color Palette
- Primary Background: `#0a0e27`
- Secondary Background: `#1a1f3a`
- Card Background: `#1e2442`
- Accent Blue: `#4d7cff`
- Accent Purple: `#7c3aed`
- Success Green: `#10b981`
- Text Primary: `#ffffff`
- Text Secondary: `#a8b3cf`

### Typography
- Font Family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- Headings: 700 weight
- Body: 400-600 weight

## 📊 Dashboard Features

### MOPTro Information
- Charge Percentage with progress indicator
- Efficiency metrics with trend charts
- Performance indicators
- Consumption tracking
- Monthly distance traveled

### Utilization Analytics
- Weekly bar chart visualization
- Estimated costs
- Average distance
- Revenue targets
- Savings tracker

### Platform Settings
- Toggle switches for various settings
- Real-time updates
- Visual feedback

### Products Showcase
- WASP digital workstation
- SNAA platform
- E-Vehicle solutions

## 🔒 Security Notes

- Passwords should be hashed in production (use bcrypt)
- Implement JWT tokens for authentication
- Add input validation and sanitization
- Enable HTTPS in production
- Implement rate limiting

## 🚀 Deployment

### Vercel (Recommended for Frontend)
```bash
cd client
npm run build
# Deploy dist folder to Vercel
```

### Netlify (Alternative for Frontend)
```bash
cd client
npm run build
# Deploy dist folder to Netlify
```

### Backend Deployment
- MongoDB Atlas for database
- Render, Railway, or Vercel Serverless Functions for backend

## 📝 Assignment Requirements

✅ Design Consistency - Adheres to Adobe XD design specifications
✅ React.js with Chart.js for data visualization
✅ HashRouter for navigation
✅ MongoDB for data storage
✅ Responsive design for multiple viewports
✅ Clean, maintainable code structure

## 🧪 Testing Checklist

- [ ] User can sign up with email/password
- [ ] User can sign in with credentials
- [ ] Dashboard loads with all components
- [ ] Charts render correctly
- [ ] Toggle switches work
- [ ] Navigation between pages works
- [ ] Responsive design works on all screen sizes
- [ ] Backend API endpoints respond correctly

## 📄 License

© 2025 Greendzine Technologies Pvt Ltd

## 👨‍💻 Developer

Assignment completed as per requirements specified in the Web Development Assignment document.

---

**Note**: This is an assignment project. For production use, implement proper authentication, security measures, and environment-specific configurations.