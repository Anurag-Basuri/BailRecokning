# BailRecokning

A full-stack web application for managing bail-related cases and legal proceedings.

## Features

- User authentication and authorization
- Case management
- Lawyer profiles
- Judge information
- Charge tracking
- Timeline management
- Similar case references
- Previous case history
- Pronouncement tracking

## Tech Stack

### Frontend

- React 18
- Redux Toolkit
- React Router
- TailwindCSS
- Chart.js
- React Hook Form
- Yup Validation
- React Error Boundary
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Winston Logger
- Helmet Security
- Rate Limiting
- Error Handling

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

3. Install frontend dependencies

```bash
cd ../Frontend
npm install
```

4. Create environment variables

- Backend: Create a `.env` file in the Backend directory
- Frontend: Create a `.env` file in the Frontend directory

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
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
└── Frontend/
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Security

- Rate limiting implemented
- Helmet security headers
- JWT authentication
- Input validation
- Error handling
- Secure password hashing
- CORS protection

## Support

For support, email support@bailrecokning.com or open an issue in the repository.
