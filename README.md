# BailRecokning

A full-stack web application for managing bail-related cases and legal proceedings. This application helps legal professionals, judges, and lawyers to efficiently manage bail cases, track documents, and maintain case timelines.

## Features

### User Management

- User authentication and authorization
- Role-based access control (Admin, Lawyer, Judge)
- Profile management for lawyers and judges

### Case Management

- Create and manage legal cases
- Track case status and progress
- Document management and file uploads
- Timeline tracking for case events

### Bail Management

- Create and manage bail applications
- Track bail status and conditions
- Document management for bail applications
- Payment tracking

### Document Management

- Secure file uploads
- Document categorization
- Version control
- Access control

### Additional Features

- Real-time notifications
- Search and filtering
- Pagination
- Responsive design
- Dark/Light mode

## Tech Stack

### Frontend

- React 18
- Redux Toolkit for state management
- React Router for navigation
- TailwindCSS for styling
- Chart.js for data visualization
- React Hook Form for form handling
- Yup for validation
- React Error Boundary for error handling
- React Toastify for notifications

### Backend

- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- Winston for logging
- Helmet for security
- Multer for file uploads
- Rate limiting
- Error handling middleware

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/BailRecokning.git
cd BailRecokning
```

2. Install backend dependencies

```bash
cd Backend
npm install
```

3. Create backend environment variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Install frontend dependencies

```bash
cd ../Frontend
npm install
```

5. Create frontend environment variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

### Running the Application

1. Start the backend server

```bash
cd Backend
npm run dev
```

2. Start the frontend development server

```bash
cd Frontend
npm run dev
```

### Testing

1. Backend tests

```bash
cd Backend
npm test
```

2. Frontend tests

```bash
cd Frontend
npm test
```

## Project Structure

```
BailRecokning/
├── Backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   ├── app.js           # Express app setup
│   │   └── server.js        # Server entry point
│   ├── uploads/             # File uploads directory
│   ├── logs/                # Application logs
│   └── package.json
└── Frontend/
    ├── src/
    │   ├── app/             # Redux store and slices
    │   ├── components/      # Reusable components
    │   ├── hooks/           # Custom React hooks
    │   ├── pages/           # Page components
    │   ├── services/        # API services
    │   ├── styles/          # Global styles
    │   ├── utils/           # Utility functions
    │   ├── App.jsx          # Root component
    │   └── main.jsx         # Entry point
    └── package.json
```

## API Documentation

The API documentation is available at `/api-docs` when running the backend server. It includes detailed information about all available endpoints, request/response formats, and authentication requirements.

## Security Features

- JWT-based authentication
- Role-based access control
- Input validation
- Rate limiting
- Helmet security headers
- CORS protection
- Secure password hashing
- File upload validation
- Error handling middleware

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@bailrecokning.com or open an issue in the repository.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
