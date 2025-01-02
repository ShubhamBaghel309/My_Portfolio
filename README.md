# Modern Portfolio Website with React + TypeScript + Vite

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project features smooth animations, a dark theme, and sections for About, Projects, and Contact information.

## 🌟 Live Demo
Visit the live website: [Portfolio Website](https://shubham-pzt91cp61-shubhambaghel309s-projects.vercel.app)

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark Theme**: Eye-friendly dark theme with purple accents
- **Interactive Sections**:
  - About section with skills and expertise
  - Projects showcase with expandable details
  - Contact form with Firebase integration
  - Resume download functionality
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type-Safe**: Written in TypeScript for better development experience

## 🛠️ Technologies Used

- **Frontend**:
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Framer Motion (for animations)
  - Lucide React (for icons)

- **Backend/Services**:
  - Firebase (Firestore for contact form)
  - Vercel (for deployment)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShubhamBaghel309/My_Portfolio.git
   cd project-bolt-sb1-ok7iiyb2/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Firestore Database
   - Add Firebase configuration in `src/config/firebase.ts`
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
project/
├── public/
│   ├── images/
│   │   └── projects/    # Project images and resume
├── src/
│   ├── components/      # React components
│   ├── config/         # Configuration files
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔧 Common Issues & Solutions

1. **Resume Download Issue**
   - **Problem**: Resume link not working or causing page refresh
   - **Solution**: Ensure resume file is in correct location (`public/images/projects/resume.pdf`) and update the link path in Navigation component

2. **Contact Form Submission**
   - **Problem**: Form submissions not working
   - **Solution**: 
     - Check Firebase configuration
     - Update Firestore rules to allow write access
     - Add proper error handling in the form submission logic

3. **Deployment Issues**
   - **Problem**: Vercel deployment failing
   - **Solution**:
     - Ensure correct project structure
     - Add `vercel.json` configuration
     - Set proper build commands and output directory

4. **Project Modal Details**
   - **Problem**: Project details not showing in expandable view
   - **Solution**: Implement modal component with Framer Motion for smooth animations

## 🎨 Customization

1. **Colors and Theme**
   - Edit Tailwind configuration in `tailwind.config.js`
   - Modify color schemes in component files

2. **Content**
   - Update project details in `Projects.tsx`
   - Modify about section in `About.tsx`
   - Change contact information in `Contact.tsx`

3. **Animations**
   - Adjust Framer Motion animations in components
   - Modify transition timings and effects

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

1. **Prepare for deployment**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel deploy --prod
   ```

3. **Configuration**
   - Add environment variables if needed
   - Set up custom domain if desired
   - Configure project settings in Vercel dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vercel for hosting
- Firebase for backend services
- All contributors and users of this template

## 📧 Contact

For any questions or suggestions, please reach out through:
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ using React + TypeScript + Vite
