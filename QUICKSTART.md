# LocalFix - Quick Start Guide

## Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Firebase
- Create a Firebase project at [firebase.google.com](https://console.firebase.google.com)
- Copy `.env.example` to `.env`
- Add your Firebase credentials to `.env`

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your app!

---

## Project Overview

**LocalFix** is a service booking platform with three user types:

1. **Users** - Browse and book services
2. **Providers** - Offer services and manage requests
3. **Admins** - Manage users and services

---

## File Organization

### Components (`src/components/`)
- **UI Components** - Reusable building blocks (Button, Input, etc.)
- **Layout** - Navigation and page structure
- **Shared** - Feature-specific components (ServiceCard, etc.)

### Pages (`src/pages/`)
- **public/** - Accessible to everyone
- **auth/** - Login and Register
- **user/** - Customer dashboards
- **provider/** - Service provider dashboards
- **admin/** - Admin controls

### Context (`src/context/`)
Global state management:
- `AuthContext` - User authentication and session
- `BookingContext` - Booking operations

### Hooks (`src/hooks/`)
Custom React hooks:
- `useAuth()` - Access auth context
- `useRole()` - Check user role
- `useBookings()` - Access booking data

---

## Key Components to Know

### Button
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

### Input
```jsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
```

### Modal
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  Modal content here
</Modal>
```

### ServiceCard
```jsx
<ServiceCard
  id="1"
  title="Plumbing Service"
  price="50"
  rating={4.5}
  image="/image.jpg"
/>
```

---

## Common Tasks

### Add a New Page
1. Create file in `src/pages/[category]/YourPage.jsx`
2. Add route in `src/routes/AppRoutes.jsx`
3. Link to page from navigation

### Add a New Component
1. Create in `src/components/[category]/YourComponent.jsx`
2. Export the component
3. Import and use where needed

### Update Context
1. Modify context in `src/context/`
2. Update the provider component
3. Use custom hook to access context

### Connect to Backend
Replace TODO comments with API calls:
```javascript
// Before
// TODO: Replace with actual API call
console.log('Fetching data...');

// After
const response = await fetch('/api/services');
const data = await response.json();
```

---

## Firebase Setup

### Enable Authentication
1. Go to Firebase Console → Authentication
2. Enable Email/Password method
3. Enable Google (optional)

### Setup Firestore Database
1. Go to Firestore Database
2. Start in test mode (for development)
3. Create collections for: users, services, bookings

### Setup Storage
1. Go to Storage
2. Upload any default images

---

## Environment Variables

Create `.env` file:
```
REACT_APP_FIREBASE_API_KEY=xxxxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxxxx
REACT_APP_FIREBASE_PROJECT_ID=xxxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxxxx
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxx
REACT_APP_FIREBASE_APP_ID=xxxxx
```

---

## Styling

All components use **Tailwind CSS**. Classes are inline:
```jsx
<div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg">
  Content
</div>
```

### Colors
- Primary: `blue-600`
- Success: `green-600`
- Danger: `red-600`
- Warning: `yellow-600`

---

## Routing

Protected routes use `PrivateRoute` wrapper:
```jsx
<PrivateRoute requiredRole="user">
  <UserDashboard />
</PrivateRoute>
```

Available roles:
- `user` - Customer
- `provider` - Service provider
- `admin` - Administrator

---

## State Management

### Using Auth Context
```jsx
import { useAuth } from '../hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  return <div>User: {user?.email}</div>;
}
```

### Using Booking Context
```jsx
import { useBookings } from '../hooks/useBookings';

function MyComponent() {
  const { bookings, isLoading, createBooking } = useBookings();
  
  return <div>Bookings: {bookings.length}</div>;
}
```

---

## Debugging

### Check Console
Open browser DevTools → Console to see errors and logs

### Check Network
DevTools → Network tab to see API calls

### Check State
Add console.log in components or use React DevTools extension

---

## Production Build

```bash
npm run build
```

Output will be in `dist/` folder

---

## Common Issues

### 1. Components not displaying
- Check if all imports are correct
- Verify routes are defined in AppRoutes.jsx
- Check browser console for errors

### 2. Authentication not working
- Verify Firebase credentials in .env
- Check Firebase Console for enabled auth methods
- Ensure AuthProvider wraps app in main.jsx

### 3. Styling looks broken
- Verify Tailwind CSS is imported in index.css
- Check for typos in class names
- Clear browser cache and restart dev server

---

## Need Help?

1. Check `STRUCTURE.md` for detailed overview
2. Look for TODO comments indicating what to implement
3. Review similar components for examples
4. Check browser console for error messages

---

**Happy Coding! 🎉**
