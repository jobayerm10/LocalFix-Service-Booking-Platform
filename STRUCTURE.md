# LocalFix - Local Service Booking Platform

A full-featured React application for booking and managing local services. This project includes user dashboards, provider management, admin controls, and complete service booking functionality.

## Project Structure

```
localfix/
├── public/              # Static assets
├── src/
│   ├── assets/
│   │   ├── images/     # Image assets
│   │   └── icons/      # Icon assets
│   │
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Spinner.jsx
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── shared/             # Shared feature components
│   │       ├── ServiceCard.jsx
│   │       ├── BookingCard.jsx
│   │       ├── ReviewCard.jsx
│   │       └── RatingStars.jsx
│   │
│   ├── pages/
│   │   ├── public/             # Public pages
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceDetails.jsx
│   │   │   └── ProviderProfile.jsx
│   │   │
│   │   ├── auth/               # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── user/               # User (customer) pages
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── BookService.jsx
│   │   │
│   │   ├── provider/           # Service provider pages
│   │   │   ├── ProviderDashboard.jsx
│   │   │   ├── JobRequests.jsx
│   │   │   └── ManageServices.jsx
│   │   │
│   │   └── admin/              # Admin pages
│   │       ├── AdminDashboard.jsx
│   │       ├── ManageUsers.jsx
│   │       └── ManageServices.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx       # Main route configuration
│   │   └── PrivateRoute.jsx    # Protected routes component
│   │
│   ├── context/
│   │   ├── AuthContext.jsx     # Authentication context
│   │   └── BookingContext.jsx  # Booking management context
│   │
│   ├── firebase/
│   │   └── firebase.config.js  # Firebase configuration
│   │
│   ├── hooks/
│   │   ├── useAuth.js          # Auth hook
│   │   ├── useRole.js          # Role management hook
│   │   └── useBookings.js      # Bookings hook
│   │
│   ├── utils/
│   │   ├── formatDate.js       # Date formatting utilities
│   │   └── calculateRating.js  # Rating calculation utilities
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── App.css                 # App styles
│   └── index.css               # Global styles
│
├── .env.example               # Environment variables template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```

## Features

### 👥 User Features
- **Authentication**: Secure login/register system
- **Service Browsing**: Browse and search available services
- **Service Details**: View detailed information about services including ratings and reviews
- **Booking**: Book services with date, time, and duration selection
- **Dashboard**: Personalized user dashboard with stats
- **Bookings Management**: View and manage all bookings

### 👨‍🔧 Service Provider Features
- **Provider Dashboard**: Overview of active services and earnings
- **Service Management**: Add, edit, and delete services
- **Job Requests**: Receive and manage job requests from customers
- **Ratings & Reviews**: View customer reviews and ratings

### 👨‍💼 Admin Features
- **Admin Dashboard**: System-wide statistics and metrics
- **User Management**: Manage all users (block, delete, view details)
- **Service Management**: Approve, reject, or delete services
- **Reports**: View analytics and system reports

### 🎨 UI Components
- **Button**: Customizable button component with variants
- **Input**: Text input with validation
- **Modal**: Reusable modal dialog
- **Spinner**: Loading indicator
- **ServiceCard**: Display service information
- **BookingCard**: Display booking details
- **ReviewCard**: Display customer reviews
- **RatingStars**: Interactive rating display

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd localfix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a `.env` file based on `.env.example`
   - Add your Firebase credentials:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Technologies Used

- **React 19** - UI library
- **React Router v7** - Navigation and routing
- **Tailwind CSS 4** - Styling
- **Firebase** - Backend services (Auth, Firestore, Storage)
- **Recharts** - Data visualization
- **Vite** - Build tool and dev server
- **ESLint** - Code quality

## Usage

### Authentication
- Users can register as either a customer or service provider
- Login with email and password
- Access is protected by role-based routing

### Creating a Service (Provider)
1. Go to "Manage Services"
2. Click "Add New Service"
3. Fill in service details (title, description, price, category)
4. Submit to create service

### Booking a Service (User)
1. Browse services or search for specific ones
2. Click on a service to view details
3. Click "Book Now"
4. Fill in booking details (date, time, duration, address)
5. Confirm booking

### Admin Management
1. Access admin dashboard (/admin-dashboard)
2. Manage users: view, block, or delete users
3. Manage services: approve or reject pending services

## Available Routes

### Public Routes
- `/` - Home page
- `/services` - Browse services
- `/service-details/:id` - Service details
- `/provider-profile/:id` - Provider profile
- `/login` - Login page
- `/register` - Registration page

### Protected User Routes
- `/dashboard` - User dashboard
- `/my-bookings` - View bookings
- `/book-service` - Book a service

### Protected Provider Routes
- `/provider-dashboard` - Provider dashboard
- `/job-requests` - View job requests
- `/manage-services` - Manage services

### Protected Admin Routes
- `/admin-dashboard` - Admin dashboard
- `/admin/users` - Manage users
- `/admin/services` - Manage services

## Customization

### Theming
Modify Tailwind CSS colors in `tailwind.config.js` or use inline color classes throughout components.

### API Integration
- All components have `TODO` comments indicating where to replace mock data with actual API calls
- Update context files (AuthContext, BookingContext) to integrate with your backend
- Replace Firebase config with your credentials

### Component Customization
- All UI components accept props for customization
- Modify component styles by editing Tailwind classes
- Extend components by creating variations

## Best Practices

1. **State Management**: Use React Context for global state
2. **Code Organization**: Keep components focused and reusable
3. **Error Handling**: Implement try-catch blocks in API calls
4. **Performance**: Use React.memo for components that don't need frequent re-renders
5. **Accessibility**: Use semantic HTML and ARIA attributes

## Environment Variables

Current environment variables needed:
- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -am 'Add new feature'`
4. Push: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For issues or questions, please open an issue in the repository.

## Future Enhancements

- [ ] Real-time chat between users and providers
- [ ] Payment integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Advanced search and filtering
- [ ] Rating and review system improvements
- [ ] Mobile app version
- [ ] Service provider verification system
- [ ] Dispute resolution system
- [ ] Advanced analytics dashboard

---

**Happy coding! 🚀**
