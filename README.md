# LinkedIn Clone - Backend

Backend API for LinkedIn Clone built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage
- **Mailtrap** - Email service

## 📋 Features

- User Authentication (JWT)
- User Profiles Management
- Posts CRUD Operations
- Connection Requests
- Real-time Notifications
- Image Upload (Cloudinary)
- Email Notifications

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/linkedin-backend.git
cd linkedin-backend
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```env
NODE_ENV=development
PORT=5000
BASE_URL=http://localhost:5000

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Mailtrap
MAILTRAP_TOKEN=your_mailtrap_token
EMAIL_FROM=admin@example.com
EMAIL_FROM_NAME=linkedin-clone

# JWT
JWT_SECRET=your_jwt_secret

# Client
CLIENT_URL=http://localhost:5173
```

4. Start server
```bash
npm run dev
```

## 📁 API Endpoints

### Auth
- `POST /api/v1/auth/signup` - Register user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/me` - Get current user

### Users
- `GET /api/v1/users/me` - Get current user profile
- `GET /api/v1/users/suggestions` - Get connection suggestions
- `PUT /api/v1/users/profile` - Update profile
- `GET /api/v1/users/:username` - Get user by username

### Posts
- `GET /api/v1/posts` - Get all posts
- `POST /api/v1/posts` - Create post
- `DELETE /api/v1/posts/:id` - Delete post
- `POST /api/v1/posts/:id/like` - Like/unlike post
- `POST /api/v1/posts/:id/comment` - Add comment

### Connections
- `GET /api/v1/connections/requests` - Get connection requests
- `POST /api/v1/connections/request/:userId` - Send connection request
- `PUT /api/v1/connections/accept/:requestId` - Accept request
- `PUT /api/v1/connections/reject/:requestId` - Reject request

### Notifications
- `GET /api/v1/notifications` - Get notifications
- `PUT /api/v1/notifications/:id/read` - Mark as read

## 👨💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)