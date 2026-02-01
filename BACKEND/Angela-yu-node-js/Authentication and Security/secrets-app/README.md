# Secrets App - Pure HTML/CSS/JavaScript Version

This is a converted version of the EJS-based Secrets application, now running entirely with vanilla HTML, CSS, and JavaScript.

## Features

- **User Registration & Login**: Create accounts and authenticate users
- **Anonymous Secret Sharing**: Submit and view secrets anonymously
- **Local Storage**: User data persists in browser's local storage
- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Client-side validation for all forms

## Organized File Structure

```
secrets-app/
├── index.html                    # Home page (entry point)
├── pages/                        # All application pages
│   ├── login.html               # Login page
│   ├── register.html            # Registration page
│   ├── secrets.html             # View secrets page (requires login)
│   └── submit.html              # Submit new secret page (requires login)
├── assets/                       # Static assets
│   ├── css/
│   │   └── styles.css           # Application styles
│   └── js/                      # JavaScript modules
│       ├── app.js               # Main application logic
│       ├── auth.js              # Authentication handling
│       ├── secrets.js           # Secrets display logic
│       └── submit.js            # Secret submission logic
├── templates/                    # Reusable templates
│   ├── header.html              # Header template (for reference)
│   └── footer.html              # Footer template (for reference)
└── README.md                     # This file
```

## How to Use

1. **Open the Application**: Open `secrets-app/index.html` in your web browser
2. **Register**: Click "Register" to create a new account
3. **Login**: Use your credentials to log in
4. **View Secrets**: After login, you'll see all submitted secrets
5. **Submit Secrets**: Click "Submit a Secret" to add your own anonymous secret
6. **Logout**: Click "Log Out" to end your session

## Folder Organization Benefits

### Clean Separation
- **Pages**: All HTML pages organized in `pages/` folder
- **Assets**: CSS and JS files organized in `assets/` with subfolders
- **Templates**: Reusable header/footer templates for new pages
- **Root**: Only the main entry point (`index.html`) in root

### Easy Navigation
- Clear folder structure makes finding files simple
- Related files grouped together (all JS in `assets/js/`)
- Templates separated for easy reference

### Scalability
- Easy to add new pages in `pages/` folder
- New CSS/JS files go in appropriate `assets/` subfolders
- Template system for consistent page structure

## Key Changes from EJS Version

### Removed EJS Dependencies
- All `<%- include() %>` statements replaced with complete HTML
- Header and footer templates are now reference files in `templates/` folder
- Server-side variables replaced with JavaScript objects
- EJS loops and conditions converted to JavaScript DOM manipulation

### Added Client-Side Features
- **Local Storage Database**: User accounts and secrets stored in browser
- **Session Management**: Login state persisted across page refreshes
- **Form Validation**: Real-time validation with user feedback
- **Dynamic Content**: Secrets loaded and displayed via JavaScript
- **Navigation**: Proper routing between pages with relative paths

### JavaScript Architecture
- **Modular Design**: Separate JS files for different functionality
- **Event Handling**: Form submissions and user interactions
- **Data Persistence**: localStorage for user data and sessions
- **Error Handling**: User-friendly error messages and validation

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses localStorage (supported in all modern browsers)

## Security Notes

⚠️ **Important**: This is a client-side only implementation for demonstration purposes:

- User data is stored in browser's localStorage (not secure for production)
- Passwords are stored in plain text (use proper hashing in production)
- No server-side validation (always validate on server in production)
- No protection against XSS or other web vulnerabilities

## Development Notes

### Data Structure
```javascript
// Users array in localStorage
[
  {
    email: "user@example.com",
    password: "password123",
    secrets: ["My secret 1", "My secret 2"]
  }
]
```

### Session Management
- `userLoggedIn`: Boolean flag for login state
- `currentUser`: Email of currently logged-in user

### Path Structure
- Pages in `pages/` use `../assets/` to reference assets
- Root `index.html` uses `assets/` to reference assets
- All navigation uses relative paths for portability

## Header and Footer Structure

### Current Approach (Embedded)
- Header and footer content is directly embedded in each HTML file
- This ensures the app works without a server (can open HTML files directly)
- Each page is self-contained and doesn't require external file loading

### Templates Folder
The `templates/` folder contains:
- `header.html` - Template showing the standard page header structure
- `footer.html` - Template showing the standard page footer structure

These are **reference templates** you can use when creating new pages. To add a new page:

1. Copy the content from `templates/header.html`
2. Add your page-specific content
3. Add the appropriate JavaScript file reference
4. Copy the content from `templates/footer.html`
5. Adjust CSS/JS paths based on page location

### Why Not Dynamic Includes?
Dynamic includes (like the original EJS `<%- include() %>`) require either:
- A web server to serve the files
- JavaScript fetch() calls (which need a server due to CORS)
- Complex build tools

The current approach prioritizes simplicity and allows the app to run by simply opening HTML files in a browser.

## Future Enhancements

- Add password hashing
- Implement proper backend API
- Add secret categories or tags
- Include user profiles
- Add secret voting/rating system
- Implement real-time updates