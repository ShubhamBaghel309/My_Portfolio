# Development Guide & Troubleshooting

This document outlines the development process, challenges encountered, and solutions implemented during the creation of the portfolio website.

## Major Challenges & Solutions

### 1. Contact Form Implementation

#### Challenge:
- Initial form submissions were not working
- Error handling was insufficient
- No visual feedback for users

#### Solution:
```typescript
// Enhanced form submission with proper error handling
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    console.log('Attempting to submit form with data:', formData);
    
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Please fill in all fields');
    }

    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: serverTimestamp()
    });
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 2. Resume Download Functionality

#### Challenge:
- Resume link caused page refresh
- File path issues
- Download not working consistently

#### Solution:
```typescript
// Updated Navigation component with correct resume path
<a
  href="/images/projects/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700"
>
  Resume
</a>
```

### 3. Project Modal Implementation

#### Challenge:
- Needed expandable view for project details
- Animation transitions were not smooth
- Mobile responsiveness issues

#### Solution:
```typescript
// Modal component with Framer Motion
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/80 z-50"
>
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    className="container mx-auto p-4 mt-10"
  >
    {/* Modal content */}
  </motion.div>
</motion.div>
```

### 4. Vercel Deployment Issues

#### Challenge:
- Build failures
- Path resolution problems
- Environment variable configuration

#### Solution:
1. Created proper `vercel.json`:
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

2. Correct project structure:
```
project/
├── public/
├── src/
├── package.json
├── vite.config.ts
└── vercel.json
```

### 5. Firebase Integration

#### Challenge:
- Security rules configuration
- Data structure design
- Error handling

#### Solution:
1. Firestore Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow read, write: if true;
    }
  }
}
```

2. Firebase Configuration:
```typescript
const firebaseConfig = {
  // Your Firebase config
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

## Performance Optimizations

1. **Image Optimization**
   - Used appropriate image formats
   - Implemented lazy loading
   - Optimized image sizes

2. **Code Splitting**
   - Implemented dynamic imports
   - Used React.lazy for component loading
   - Optimized bundle size

3. **Animation Performance**
   - Used hardware-accelerated animations
   - Implemented proper animation cleanup
   - Optimized animation triggers

## Development Tips

1. **Local Development**
   ```bash
   npm run dev
   # Access at http://localhost:5173
   ```

2. **Testing Changes**
   ```bash
   npm run build
   npm run preview
   ```

3. **Debugging**
   - Use React Developer Tools
   - Check browser console for errors
   - Monitor network requests

## Future Improvements

1. **Features to Add**
   - Blog section
   - Project filtering
   - Dark/Light theme toggle
   - Multi-language support

2. **Technical Improvements**
   - Add unit tests
   - Implement CI/CD pipeline
   - Add SEO optimization
   - Improve accessibility

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel deploy --prod
```

## Environment Setup

1. **Development Environment**
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

2. **Production Environment**
   - Configure in Vercel dashboard
   - Add necessary environment variables
   - Set up proper security headers

## Git Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/new-feature
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

2. **Deployment**
   ```bash
   git checkout main
   git merge feature/new-feature
   git push origin main
   ```

---

Remember to update this document as new challenges are encountered and solved. 