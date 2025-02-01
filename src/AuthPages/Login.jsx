// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulating a backend request with a delay
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/dashboard'); // Navigate to the dashboard after "successful" login
//     }, 2000);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white relative">
//       {/* Background Image for Mobile */}
//       <div className="absolute inset-0 bg-cover bg-center md:hidden z-20 transition-all duration-500" 
//            style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg')" }}>
//       </div>
//       <div className="absolute inset-0 bg-gray-900 opacity-90 md:hidden z-30"></div>

//       {/* Login Form */}
//       <div className="w-full md:w-1/2 h-screen flex items-center justify-center z-40">
//         <div className="w-full max-w-md p-8 rounded-lg animate-fade-in">
//           <h1 className="text-6xl font-stretch-extra-expanded font-bold mb-10 text-white transition-transform transform hover:scale-105">MRS</h1>
//           <h2 className="text-2xl font-semibold mb-4 animate-slide-in">Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <input 
//                 type="email" 
//                 className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <input 
//                 type="password" 
//                 className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 transition flex items-center justify-center"
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
//           <p className="text-sm text-center mt-4">
//             Not have an Account? <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate('/signup')}>Signup Here</span>
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Movie Poster */}
//       <div className="hidden md:flex md:w-1/2 bg-cover bg-center transition-all duration-500 hover:scale-105" 
//            style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg')" }}>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("At least 8 characters required.");
    if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter.");
    if (!/[0-9]/.test(password)) errors.push("At least one number.");
    if (!/[\W_]/.test(password)) errors.push("At least one special character.");
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors.join(" ");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard'); // Navigate to dashboard
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white relative">
      {/* Background Image for Mobile */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden z-20 transition-all duration-500" 
           style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg')" }}>
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-90 md:hidden z-30"></div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center z-40">
        <div className="w-full max-w-md p-8 rounded-lg animate-fade-in">
          <h1 className="text-6xl font-stretch-extra-expanded font-bold mb-10 text-white transition-transform transform hover:scale-105">MRS</h1>
          <h2 className="text-2xl font-semibold mb-4 animate-slide-in">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input 
                type="email" 
                className={`w-full p-3 bg-transparent border ${errors.email ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" })); // Clear error while typing
                }}
                placeholder="Email"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <input 
                type="password" 
                className={`w-full p-3 bg-transparent border ${errors.password ? 'border-red-500' : 'border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" })); // Clear error while typing
                }}
                placeholder="Password"
                required
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "LOGIN"
              )}
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Not have an Account? <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate('/signup')}>Signup Here</span>
          </p>
        </div>
      </div>

      {/* Right Side - Movie Poster */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center transition-all duration-500 hover:scale-105" 
           style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg')" }}>
      </div>
    </div>
  );
}

export default Login;
