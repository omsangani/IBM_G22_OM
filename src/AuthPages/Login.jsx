// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Email validation function
//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   // Password validation function
//   const validatePassword = (password) => {
//     const errors = [];
//     if (password.length < 8) errors.push("At least 8 characters required.");
//     if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter.");
//     if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter.");
//     if (!/[0-9]/.test(password)) errors.push("At least one number.");
//     if (!/[\W_]/.test(password)) errors.push("At least one special character.");
//     return errors;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!validateEmail(email)) {
//       newErrors.email = "Invalid email format.";
//     }

//     const passwordErrors = validatePassword(password);
//     if (passwordErrors.length > 0) {
//       newErrors.password = passwordErrors.join(" ");
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:5001/api/users/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || 'Login failed');
//         }

//         // Store the token in localStorage
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);

//         // Update global state if needed
//         // For example, you might want to set a global auth state here

//         setLoading(false);
//         navigate('/'); // Navigate to home page after successful login
//       } catch (error) {
//         setLoading(false);
//         setErrors({
//           general: error.message || 'An error occurred during login'
//         });
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white relative">
//       {/* Background Image for Mobile */}
//       <div className="absolute inset-0 bg-cover bg-center md:hidden z-20 animate-fade-in-scale" 
//            style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg')" }}>
//       </div>
//       <div className="absolute inset-0 bg-gray-900 opacity-90 md:hidden z-30"></div>

//       {/* Login Form */}
//       <div className="w-full md:w-1/2 h-screen flex items-center justify-center z-40">
//         <div className="w-full max-w-md p-8 rounded-lg">
//           <h1 className="text-6xl font-stretch-extra-expanded font-bold mb-10 text-white animate-slide-in-left">MRS</h1>
//           <h2 className="text-2xl font-semibold mb-4 animate-slide-in-left delay-100">Login</h2>
//           <form onSubmit={handleLogin}>
//             {errors.general && (
//               <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-500 text-sm">
//                 {errors.general}
//               </div>
//             )}
//             <div className="mb-4 animate-slide-in-bottom delay-200">
//               <input 
//                 type="email" 
//                 className={`w-full p-3 bg-transparent border ${errors.email ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setErrors((prev) => ({ ...prev, email: "", general: "" }));
//                 }}
//                 placeholder="Email"
//                 required
//               />
//               {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
//             </div>

//             <div className="mb-4 animate-slide-in-bottom delay-300">
//               <input 
//                 type="password" 
//                 className={`w-full p-3 bg-transparent border ${errors.password ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setErrors((prev) => ({ ...prev, password: "", general: "" }));
//                 }}
//                 placeholder="Password"
//                 required
//               />
//               {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
//             </div>

//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 transition flex items-center justify-center animate-slide-in-bottom delay-400"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="flex items-center">
//                   <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
//                   </svg>
//                   Logging in...
//                 </span>
//               ) : (
//                 "LOGIN"
//               )}
//             </button>
//           </form>
//           <p className="text-sm text-center mt-4 animate-fade-in-scale delay-300">
//             Not have an Account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/signup')}>Signup Here</span>
//           </p>
//           <p className="text-sm text-center mt-4 animate-fade-in-scale delay-400">
//             <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/forgotpassword')}>
//               Forgot Password?
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Movie Poster */}
//       <div className="hidden md:flex md:w-1/2 bg-cover bg-center animate-fade-in-scale" 
//            style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg')" }}>
//       </div>
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, AlertCircle, Loader } from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      // ease: [0.6, 0.05, -0.01, 0.9], // <<< REPLACED THIS INVALID VALUE
      ease: "easeOut",                   // <<< WITH A VALID STANDARD EASING
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Basic email format validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email || !validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password) {
      newErrors.password = 'Password cannot be empty.'; // Simple check for empty password
    }

    setErrors(newErrors);

    // Proceed only if no client-side validation errors
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5001/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }

        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);

        // Update global state if needed
        // For example, you might want to set a global auth state here

        setLoading(false);
        navigate('/'); // Navigate to home page after successful login
      } catch (error) {
        setLoading(false);
        setErrors({
          general: error.message || 'An error occurred during login'
        });
      }
    }
  };

  // (The rest of the component remains the same...)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Login Form Container */}
      <motion.div
        variants={containerVariants} // Uses the corrected variants
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md p-6 md:p-10 bg-black/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50"
      >
        {/* Logo/Brand Name */}
        <motion.h1
          variants={itemVariants}
          className="text-center text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-red-500 mb-4 md:mb-6 cursor-pointer hover:animate-pulse"
          onClick={() => navigate('/')}
        >
          MRS
        </motion.h1>

        {/* Sign In Title */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-white text-center mb-6 md:mb-8">
          Sign In
        </motion.h2>

        {/* General Error Message Area */}
        <AnimatePresence>
          {errors.general && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 p-3 bg-red-900/30 border border-red-600/50 rounded-lg flex items-center gap-2 text-red-300 text-sm overflow-hidden"
            >
              <AlertCircle size={18} className="flex-shrink-0" />
              <span>{errors.general}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleLogin} noValidate>
          {/* Email Input */}
          <motion.div variants={itemVariants} className="mb-5 relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
             <Mail
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                  errors.email ? 'text-red-400' : 'text-gray-400'
                } transition-colors`}
              />
            <input
              id="email"
              type="email"
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/60 border ${
                errors.email ? 'border-red-600/70 ring-1 ring-red-600/50' : 'border-gray-700/80'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/80 transition-all duration-200`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: '', general: '' }));
              }}
              placeholder="Email Address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                   id="email-error"
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="text-red-400 text-xs mt-1.5 absolute -bottom-5 left-0"
                >
                   {errors.email}
                 </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Password Input */}
          <motion.div variants={itemVariants} className="mb-8 relative">
             <label htmlFor="password" className="sr-only">Password</label>
             <Lock
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                  errors.password ? 'text-red-400' : 'text-gray-400'
                } transition-colors`}
             />
            <input
              id="password"
              type="password"
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/60 border ${
                 errors.password ? 'border-red-600/70 ring-1 ring-red-600/50' : 'border-gray-700/80'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/80 transition-all duration-200`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                 setErrors((prev) => ({ ...prev, password: '', general: '' }));
              }}
              placeholder="Password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              required
            />
             <AnimatePresence>
              {errors.password && (
                <motion.p
                   id="password-error"
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="text-red-400 text-xs mt-1.5 absolute -bottom-5 left-0"
                 >
                   {errors.password}
                 </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{
                 scale: 1.03,
                 boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
                 transition: { duration: 0.2 }
               }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader className="animate-spin h-5 w-5" />
                  Signing In...
                </span>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Links */}
        <motion.div variants={itemVariants} className="text-center mt-6 text-sm text-gray-400 space-y-2">
          <p>
            New to MRS?{' '}
            <span
              className="font-medium text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-200 hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign up now
            </span>
          </p>
          <p>
            <span
              className="font-medium text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-200 hover:underline"
              onClick={() => navigate('/forgotpassword')}
            >
              Forgot Password?
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;