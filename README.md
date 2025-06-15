# AK Code Lab Assessment Portal - Project Architecture

## 📋 Project Overview

**Project Name:** AK Code Lab Assessment Portal  
**Project Lead:** Er. ArunKumar P (CEO)  
**GitHub:** [parunkumar645](https://github.com/parunkumar645)  
**Description:** Development of a comprehensive assessment platform for technical evaluations  
**Technology Stack:** MERN Stack (MongoDB, Express.js, React.js, Node.js)

## 👥 Team Members
1. **Kuttalam T M** - Full Stack Developer - Trainee
2. **Navasri R** - Full Stack Developer - Trainee
3. **Ragul S** - Full Stack Developer - Trainee
4. **Srikanth S** - Full Stack Developer - Trainee
5. **Deepan Raj J** - Full Stack Developer - Trainee
6. **Jegiesh K** - Full Stack Developer - Trainee
7. **Selvigensh S** - BackEnd Developer / Lead - Engineering / AKCL
8. **Keerthana E** - Devops Engineer
9. **Niteesh Kumar G K** - Full Stack Developer / AKCL
10. **Siva S** - QA Engineer / AKCL
11. **Amuthan Arries C** - Database Architect / Lead - T&D / AKCL


---

## 🏗️ System Architecture

### High-Level Architecture Diagram
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API    │    │   Database      │
│   (React.js)    │◄──►│   (Node.js +     │◄──►│   (MongoDB)     │
│                 │    │    Express.js)   │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌────────▼────────┐             │
         │              │  Authentication │             │
         │              │   & Security    │             │
         │              └─────────────────┘             │
         │                                              │
         └──────────────────┬───────────────────────────┘
                           │
                  ┌────────▼────────┐
                  │   File Storage  │
                  │   (Cloud/Local) │
                  └─────────────────┘
```

---

## 🎯 Core Features & Modules

### 1. User Management System
- **Admin Panel**: Complete user management, test creation, analytics
- **Instructor Dashboard**: Test management, student progress tracking
- **Student Interface**: Test taking, results viewing, profile management
- **Authentication**: JWT-based secure login/logout system

### 2. Assessment Engine
- **Test Creation**: Dynamic question bank, multiple question types
- **Test Execution**: Real-time test taking with auto-save
- **Code Evaluation**: Automated code compilation and testing
- **Time Management**: Configurable time limits and warnings

### 3. Question Management
- **Question Bank**: Categorized storage of technical questions
- **Multiple Formats**: MCQ, Coding, Descriptive, Fill-in-the-blanks
- **Difficulty Levels**: Easy, Medium, Hard categorization
- **Tagging System**: Technology and topic-based organization

### 4. Results & Analytics
- **Automated Grading**: Instant results for objective questions
- **Manual Review**: Interface for subjective question evaluation
- **Performance Analytics**: Detailed reports and insights
- **Comparative Analysis**: Batch and individual performance metrics

---

## 🔧 Technical Architecture

### Frontend Architecture (React.js)
```
src/
├── components/
│   ├── common/           # Reusable UI components
│   ├── auth/            # Authentication components
│   ├── dashboard/       # Dashboard components
│   ├── assessment/      # Test-related components
│   └── admin/           # Admin panel components
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── TestInterface.jsx
│   └── Results.jsx
├── hooks/               # Custom React hooks
├── services/            # API integration services
├── utils/               # Utility functions
├── context/             # React Context for state management
└── assets/              # Static assets
```

### Backend Architecture (Node.js + Express.js)
```
server/
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── testController.js
│   └── resultController.js
├── models/
│   ├── User.js
│   ├── Test.js
│   ├── Question.js
│   └── Result.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── tests.js
│   └── results.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── services/
│   ├── emailService.js
│   ├── codeExecutor.js
│   └── reportGenerator.js
└── utils/
    ├── helpers.js
    └── constants.js
```

### Database Schema (MongoDB)
```javascript
// User Schema
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  role: String (admin/instructor/student),
  profile: {
    firstName: String,
    lastName: String,
    avatar: String
  },
  createdAt: Date,
  lastLogin: Date
}

// Test Schema
{
  _id: ObjectId,
  title: String,
  description: String,
  questions: [ObjectId], // Reference to Question documents
  duration: Number, // in minutes
  totalMarks: Number,
  passingMarks: Number,
  isActive: Boolean,
  createdBy: ObjectId, // Reference to User
  createdAt: Date
}

// Question Schema
{
  _id: ObjectId,
  type: String, // mcq, coding, descriptive
  question: String,
  options: [String], // for MCQ
  correctAnswer: String,
  marks: Number,
  difficulty: String,
  tags: [String],
  testCases: [Object], // for coding questions
  createdAt: Date
}

// Result Schema
{
  _id: ObjectId,
  userId: ObjectId,
  testId: ObjectId,
  answers: [Object],
  score: Number,
  percentage: Number,
  timeTaken: Number,
  status: String, // completed/in-progress/submitted
  submittedAt: Date
}
```

---

## 🔐 Security Implementation

### Authentication & Authorization
- **JWT Tokens**: Secure session management
- **Role-Based Access Control**: Admin, Instructor, Student roles
- **Password Encryption**: bcrypt for password hashing
- **Session Management**: Automatic logout on inactivity

### Data Security
- **Input Validation**: Comprehensive data validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Content sanitization
- **CORS Configuration**: Controlled cross-origin requests

### Code Execution Security
- **Sandboxed Environment**: Isolated code execution
- **Resource Limits**: Memory and time constraints
- **Malicious Code Detection**: Basic pattern recognition
- **Input Sanitization**: Clean user-submitted code

---

## 🚀 Deployment Architecture

### Development Environment
```
Development Stack:
├── Frontend: React Dev Server (Port 3000)
├── Backend: Node.js with Nodemon (Port 5000)
├── Database: Local MongoDB instance
└── Code Executor: Local Docker containers
```

### Production Environment
```
Production Stack:
├── Frontend: Nginx + React Build
├── Backend: PM2 + Node.js (Load Balanced)
├── Database: MongoDB Atlas (Cloud)
├── File Storage: AWS S3 / Cloudinary
├── Code Execution: Docker + Kubernetes
└── Monitoring: Winston Logs + Health Checks
```

### CI/CD Pipeline
```
GitHub Actions Workflow:
1. Code Push to Repository
2. Automated Testing (Jest + Cypress)
3. Build Creation (React + Node.js)
4. Docker Image Creation
5. Deployment to Staging
6. Production Deployment (Manual Approval)
```

---

## 📊 Performance Optimization

### Frontend Optimization
- **Code Splitting**: Route-based lazy loading
- **State Management**: Context API + useReducer
- **Caching**: React Query for API responses
- **Bundle Optimization**: Webpack optimization

### Backend Optimization
- **Database Indexing**: Optimized MongoDB queries
- **Caching Layer**: Redis for frequently accessed data
- **API Rate Limiting**: Prevent abuse and ensure stability
- **Connection Pooling**: Efficient database connections

### Code Execution Optimization
- **Container Reuse**: Persistent execution environments
- **Queue Management**: Background job processing
- **Resource Monitoring**: Memory and CPU usage tracking
- **Timeout Handling**: Graceful handling of long-running code

---

## 🧪 Testing Strategy

### Frontend Testing
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Cypress for user flow testing
- **Visual Testing**: Storybook for component documentation

### Backend Testing
- **Unit Tests**: Jest for individual functions
- **Integration Tests**: API endpoint testing
- **Database Tests**: MongoDB memory server
- **Load Testing**: Artillery.js for performance testing

### Security Testing
- **Vulnerability Scanning**: npm audit + Snyk
- **Penetration Testing**: OWASP security guidelines
- **Code Quality**: ESLint + SonarQube analysis

---

## 📈 Monitoring & Analytics

### Application Monitoring
- **Error Tracking**: Sentry for error monitoring
- **Performance Monitoring**: Application performance metrics
- **Uptime Monitoring**: Health check endpoints
- **Log Management**: Winston + ELK Stack

### User Analytics
- **Usage Statistics**: Test completion rates
- **Performance Metrics**: User score analytics
- **System Metrics**: Resource utilization tracking
- **Business Intelligence**: Custom dashboard for insights

---

## 🔄 Future Enhancements

### Phase 2 Features
- **Video Proctoring**: AI-powered monitoring
- **Advanced Analytics**: ML-based insights
- **Mobile Application**: React Native app
- **API Integration**: Third-party tool connections

### Scalability Improvements
- **Microservices Architecture**: Service decomposition
- **Event-Driven Architecture**: Async communication
- **Multi-tenant Support**: Organization isolation
- **Global CDN**: Worldwide content delivery

---

## 📝 Development Guidelines

### Code Standards
- **ESLint Configuration**: Consistent code formatting
- **Git Workflow**: Feature branch + Pull Request model
- **Documentation**: JSDoc for function documentation
- **Version Control**: Semantic versioning (SemVer)

### Team Collaboration
- **Daily Standups**: Progress tracking meetings
- **Code Reviews**: Peer review process
- **Sprint Planning**: Agile development methodology
- **Knowledge Sharing**: Technical documentation maintenance

---

## 📞 Support & Maintenance

### Technical Support
- **Issue Tracking**: GitHub Issues integration
- **Documentation**: Comprehensive README files
- **API Documentation**: Swagger/OpenAPI specs
- **Deployment Guides**: Step-by-step setup instructions

### Maintenance Schedule
- **Security Updates**: Monthly security patch reviews
- **Dependency Updates**: Quarterly package updates
- **Performance Audits**: Bi-annual optimization reviews
- **Backup Strategy**: Daily automated backups

---

*Last Updated: June 2025*  
*Maintained by: AK Code Lab Development Team*