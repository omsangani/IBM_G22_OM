// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Validation functions
//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePassword = (password) => {
//     const errors = [];
//     if (password.length < 8) errors.push("At least 8 characters required.");
//     if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter.");
//     if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter.");
//     if (!/[0-9]/.test(password)) errors.push("At least one number.");
//     if (!/[\W_]/.test(password)) errors.push("At least one special character.");
//     return errors;
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.username.trim()) {
//       newErrors.username = "Username is required.";
//     } else if (formData.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters.";
//     }

//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Invalid email format.";
//     }

//     const passwordErrors = validatePassword(formData.password);
//     if (passwordErrors.length > 0) {
//       newErrors.password = passwordErrors.join(" ");
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear errors when user types
//     setErrors(prev => ({
//       ...prev,
//       [name]: '',
//       general: ''
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();

//     if (Object.keys(newErrors).length === 0) {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:5001/api/users/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({
//             username: formData.username,
//             email: formData.email,
//             password: formData.password
//           }),
//         });

//         // Check if response is empty
//         const text = await response.text();
//         if (!text) {
//           throw new Error('Empty response from server');
//         }

//         let data;
//         try {
//           data = JSON.parse(text);
//         } catch (error) {
//           console.error('Failed to parse response:', text);
//           throw new Error('Invalid response format from server');
//         }

//         if (!response.ok) {
//           throw new Error(data.message || 'Registration failed');
//         }

//         // Store the token and userId in localStorage
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);

//         // Store user data
//         localStorage.setItem('user', JSON.stringify({
//           username: formData.username,
//           email: formData.email
//         }));

//         setLoading(false);
//         navigate('/'); // Navigate to home page after successful registration
//       } catch (error) {
//         console.error('Signup error:', error);
//         setLoading(false);
//         setErrors({
//           general: error.message || 'An error occurred during registration. Please try again.'
//         });
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
//       {/* Background Image for Mobile */}
//       <div className="absolute inset-0 bg-cover bg-center md:hidden z-20 animate-fade-in-scale" 
//            style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg')" }}>
//       </div>
//       <div className="absolute inset-0 bg-gray-900 opacity-90 md:hidden z-30"></div>

//       {/* Left Side - Signup Form */}
//       <div className="w-full md:w-1/2 h-screen flex items-center justify-center z-40">
//         <div className="w-full max-w-md p-8 rounded-lg">
//           <h1 className="text-6xl font-stretch-extra-expanded font-bold mb-10 text-white animate-slide-in-left">MRS</h1>
//           <h2 className="text-2xl font-semibold mb-4 animate-slide-in-left delay-100">Signup</h2>
          
//           <form onSubmit={handleSubmit}>
//             {errors.general && (
//               <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-500 text-sm">
//                 {errors.general}
//               </div>
//             )}
            
//             <div className="mb-4 animate-slide-in-bottom delay-200">
//               <input 
//                 type="text"
//                 name="username"
//                 className={`w-full p-3 bg-transparent border ${errors.username ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Username"
//                 required
//               />
//               {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
//             </div>

//             <div className="mb-4 animate-slide-in-bottom delay-300">
//               <input 
//                 type="email"
//                 name="email"
//                 className={`w-full p-3 bg-transparent border ${errors.email ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//               />
//               {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
//             </div>

//             <div className="mb-4 animate-slide-in-bottom delay-400">
//               <input 
//                 type="password"
//                 name="password"
//                 className={`w-full p-3 bg-transparent border ${errors.password ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 required
//               />
//               {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
//             </div>

//             <div className="mb-4 animate-slide-in-bottom delay-500">
//               <input 
//                 type="password"
//                 name="confirmPassword"
//                 className={`w-full p-3 bg-transparent border ${errors.confirmPassword ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm Password"
//                 required
//               />
//               {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
//             </div>

//             <button 
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 transition animate-slide-in-bottom delay-600 flex items-center justify-center"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="flex items-center">
//                   <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
//                   </svg>
//                   Creating Account...
//                 </span>
//               ) : (
//                 "SIGN UP"
//               )}
//             </button>
//           </form>

//           <p className="text-sm text-center mt-4 animate-fade-in-scale delay-700">
//             Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/login')}>Login Here</span>
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Movie Poster (Desktop) */}
//       <div className="hidden md:flex md:w-1/2 bg-cover bg-center animate-fade-in-scale" 
//            style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg')" }}>
//       </div>
//     </div>
//   );
// }

// export default Signup;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, AlertCircle, Loader } from 'lucide-react'; // Added User icon

// --- Animation Variants (Consistent with Login) ---
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Use the corrected valid easing
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


function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // --- Validation Functions (Keep existing logic) ---
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push('At least 8 characters.');
    if (!/[A-Z]/.test(password)) errors.push('Needs uppercase.');
    if (!/[a-z]/.test(password)) errors.push('Needs lowercase.');
    if (!/[0-9]/.test(password)) errors.push('Needs number.');
    if (!/[\W_]/.test(password)) errors.push('Needs special char.'); // \W is non-word chars
    return errors;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
       newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      // Join errors for display, maybe limit length if too many
      newErrors.password = passwordErrors.slice(0, 2).join(' '); // Show first two unmet criteria
       if(passwordErrors.length > 2) newErrors.password += ' ...';
    }

    if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  // --- Event Handlers (Keep existing logic) ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error and general error on change
    setErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[name]; // Remove specific error
        delete updatedErrors.general; // Remove general error
        // Optionally re-validate password criteria dynamically here if desired
        return updatedErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors); // Set errors found

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setErrors({}); // Clear errors before submission
      try {
        const response = await fetch('http://localhost:5001/api/users/signup', { // Using your endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json', // Good practice to include Accept
          },
          body: JSON.stringify({
            username: formData.username.trim(), // Trim whitespace
            email: formData.email.trim(),
            password: formData.password, // Send password as is
          }),
        });

        const text = await response.text(); // Read response as text first

        // Handle potential empty successful responses (e.g., 204 No Content)
        if (!text && response.ok) {
            console.log('Signup successful, but no response body.');
            // Decide if login or navigation is appropriate here based on API behavior
            setLoading(false);
            navigate('/login', { state: { message: 'Signup successful! Please log in.' } }); // Redirect to login
            return; // Exit early
        }

        if (!text) {
            throw new Error('Empty response from server');
        }

        let data;
        try {
          data = JSON.parse(text); // Try parsing the text as JSON
        } catch (error) {
          console.error('Failed to parse API response:', text);
          // Provide a more user-friendly error if JSON parsing fails but response might contain text error
          throw new Error(response.ok ? 'Received an invalid response from server.' : (text || 'Signup failed with non-JSON response.'));
        }

        if (!response.ok) {
          // Use message from parsed JSON data if available, otherwise default
          throw new Error(data.message || `Registration failed with status: ${response.status}`);
        }

        // --- SUCCESS ---
        // Decide whether to auto-login or redirect to login page
        // Auto-login:
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        // Store basic info needed for Home page immediately
        localStorage.setItem('userName', data.username || formData.username); // Use returned username if available
        localStorage.setItem('userEmail', data.email || formData.email);

        setLoading(false);
        navigate('/'); // Redirect to home page after successful auto-login

        // OR Redirect to login:
        // setLoading(false);
        // navigate('/login', { state: { message: 'Signup successful! Please log in.' } });

      } catch (error) {
        console.error("Signup Error:", error);
        setLoading(false);
        setErrors({
          general: error.message || 'An unexpected error occurred during registration.',
        });
      }
    } else {
      // If validation errors exist, set a general hint
      setErrors(prev => ({...prev, general: 'Please correct the errors below.'}))
      console.log("Validation Errors:", validationErrors);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Signup Form Container */}
      <motion.div
        variants={containerVariants}
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
          HoloFlix
        </motion.h1>

        {/* Create Account Title */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-white text-center mb-6 md:mb-8">
          Create Account
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

        <form onSubmit={handleSubmit} noValidate>
          {/* Username Input */}
          <motion.div variants={itemVariants} className="mb-5 relative">
            <label htmlFor="username" className="sr-only">Username</label>
            <User
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                errors.username ? 'text-red-400' : 'text-gray-400'
              } transition-colors`}
            />
            <input
              id="username"
              type="text"
              name="username"
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/60 border ${
                errors.username ? 'border-red-600/70 ring-1 ring-red-600/50' : 'border-gray-700/80'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/80 transition-all duration-200`}
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              aria-invalid={!!errors.username}
              aria-describedby={errors.username ? "username-error" : undefined}
              required
            />
            <AnimatePresence>
              {errors.username && (
                <motion.p
                   id="username-error"
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="text-red-400 text-xs mt-1.5 absolute -bottom-5 left-0"
                >
                   {errors.username}
                 </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

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
              name="email"
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/60 border ${
                errors.email ? 'border-red-600/70 ring-1 ring-red-600/50' : 'border-gray-700/80'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/80 transition-all duration-200`}
              value={formData.email}
              onChange={handleChange}
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
          <motion.div variants={itemVariants} className="mb-5 relative">
             <label htmlFor="password" className="sr-only">Password</label>
             <Lock
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                  errors.password ? 'text-red-400' : 'text-gray-400'
                } transition-colors`}
             />
            <input
              id="password"
              type="password"
              name="password"
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/60 border ${
                 errors.password ? 'border-red-600/70 ring-1 ring-red-600/50' : 'border-gray-700/80'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/80 transition-all duration-200`}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : "password-hint"} // Describe by hint or error
              required
            />
            {/* Password Hint/Error Display */}
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
             {/* Optional: Add password requirements hint here */}
              <p id="password-hint" className="text-gray-500 text-xs mt-1.5 px-1">
                  Min 8 chars: 1 uppercase, 1 lowercase, 1 number, 1 special.
              </p>
          </motion.div>

          {/* Confirm Password Input */}
          <motion.div variants={itemVariants} className="mb-8 relative"> {/* Increased margin before button */}
             <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
             <Lock
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                  errors.confirmPassword ? 'text-red-400' : 'text-gray-400'
                } transition-colors`}
             />
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/60 border ${
                 errors.confirmPassword ? 'border-red-600/70 ring-1 ring-red-600/50' : 'border-gray-700/80'
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/80 transition-all duration-200`}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
              required
            />
             <AnimatePresence>
              {errors.confirmPassword && (
                <motion.p
                   id="confirmPassword-error"
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="text-red-400 text-xs mt-1.5 absolute -bottom-5 left-0"
                 >
                   {errors.confirmPassword}
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
                  Creating Account...
                </span>
              ) : (
                'Sign Up'
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Login Link */}
        <motion.div variants={itemVariants} className="text-center mt-6 text-sm text-gray-400">
          <p>
            Already have an account?{' '}
            <span
              className="font-medium text-red-500 hover:text-red-400 cursor-pointer transition-colors duration-200 hover:underline"
              onClick={() => navigate('/login')}
            >
              Sign in
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Signup;