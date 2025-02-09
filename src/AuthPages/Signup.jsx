// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
// const navigate = useNavigate();
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
//       {/* Background Image for Mobile */}
//       <div className="absolute inset-0 bg-cover bg-center md:hidden z-20" 
//            style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg')" }}>
//       </div>
//       <div className="absolute inset-0 bg-gray-900 opacity-90 md:hidden z-30"></div>

//       {/* Left Side - Signup Form */}
//       <div className="w-full md:w-1/2 h-screen flex items-center justify-center z-40">
//         <div className="w-full max-w-md p-8 rounded-lg">
//           <h1 className="text-6xl font-stretch-extra-expanded font-bold mb-10 text-white">MRS</h1>
//           <h2 className="text-2xl font-semibold mb-4">Signup</h2>
//           <form>
//             <div className="mb-4">
//               <input 
//                 type="text" 
//                 className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//               />
//             </div>
//             <div className="mb-4">
//               <input 
//                 type="email" 
//                 className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//               />
//             </div>
//             <div className="mb-4">
//               <input 
//                 type="password" 
//                 className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//             </div>
//             <div className="mb-4">
//               <input 
//                 type="password" 
//                 className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//               />
//             </div>
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 transition">SIGN UP</button>
//           </form>
//           <p className="text-sm text-center mt-4">
//             Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/login')}
//             >Login Here</span>
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Movie Poster (Desktop) */}
//       <div className="hidden md:flex md:w-1/2 bg-cover bg-center" 
//            style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg')" }}>
//       </div>
//     </div>
//   );
// }

// export default Signup;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Background Image for Mobile */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden z-20 animate-fade-in-scale" 
           style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg')" }}>
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-90 md:hidden z-30"></div>

      {/* Left Side - Signup Form */}
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center z-40">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h1 className="text-6xl font-stretch-extra-expanded font-bold mb-10 text-white animate-slide-in-left">MRS</h1>
          <h2 className="text-2xl font-semibold mb-4 animate-slide-in-left delay-100">Signup</h2>
          <form>
            <div className="mb-4 animate-slide-in-bottom delay-200">
              <input 
                type="text" 
                className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mb-4 animate-slide-in-bottom delay-300">
              <input 
                type="email" 
                className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mb-4 animate-slide-in-bottom delay-400">
              <input 
                type="password" 
                className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="mb-4 animate-slide-in-bottom delay-500">
              <input 
                type="password" 
                className="w-full p-3 bg-transparent border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 transition animate-slide-in-bottom delay-600">
              SIGN UP
            </button>
          </form>
          <p className="text-sm text-center mt-4 animate-fade-in-scale delay-700">
            Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/login')}>Login Here</span>
          </p>
        </div>
      </div>

      {/* Right Side - Movie Poster (Desktop) */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center animate-fade-in-scale" 
           style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg')" }}>
      </div>
    </div>
  );
}

export default Signup;