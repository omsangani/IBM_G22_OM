// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { Plus, Edit2, Trash2, X, User } from 'lucide-react';

// // Memoized UserModal component
// const UserModal = memo(({ 
//   showModal, 
//   onClose, 
//   onSubmit, 
//   formData, 
//   onInputChange, 
//   editingUser 
// }) => {
//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg max-w-2xl w-full p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">
//             {editingUser ? 'Edit User' : 'Add New User'}
//           </h2>
//           <button onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>

//         <form onSubmit={onSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               required={!editingUser}
//               placeholder={editingUser ? "Leave blank to keep current password" : ""}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Role</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               required
//             >
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               {editingUser ? 'Update User' : 'Add User'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// });

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user'
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch('http://localhost:5001/api/admin/users', {
//         headers: {
//           'x-auth-token': token
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }

//       const data = await response.json();
//       setUsers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('adminToken');
//       const url = editingUser 
//         ? `http://localhost:5001/api/admin/users/${editingUser._id}`
//         : 'http://localhost:5001/api/admin/users';
      
//       const method = editingUser ? 'PUT' : 'POST';

//       // If editing and password is empty, remove it from the request
//       const requestData = { ...formData };
//       if (editingUser && !requestData.password) {
//         delete requestData.password;
//       }

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': token
//         },
//         body: JSON.stringify(requestData)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to save user');
//       }

//       setShowModal(false);
//       setEditingUser(null);
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user'
//       });
//       fetchUsers();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (user) => {
//     setEditingUser(user);
//     setFormData({
//       name: user.name,
//       email: user.email,
//       password: '', // Password will be optional when editing
//       role: user.role
//     });
//     setShowModal(true);
//   };

//   const handleDelete = async (userId) => {
//     if (!window.confirm('Are you sure you want to delete this user?')) {
//       return;
//     }

//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch(`http://localhost:5001/api/admin/users/${userId}`, {
//         method: 'DELETE',
//         headers: {
//           'x-auth-token': token
//         }
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to delete user');
//       }

//       fetchUsers();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 text-center p-4">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Manage Users</h2>
//         <button
//           onClick={() => {
//             setEditingUser(null);
//             setFormData({
//               name: '',
//               email: '',
//               password: '',
//               role: 'user'
//             });
//             setShowModal(true);
//           }}
//           className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//         >
//           <Plus size={20} className="mr-2" />
//           Add New User
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-10 w-10">
//                       <User className="h-10 w-10 text-gray-400" />
//                     </div>
//                     <div className="ml-4">
//                       <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{user.email}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     user.role === 'admin' 
//                       ? 'bg-purple-100 text-purple-800' 
//                       : 'bg-green-100 text-green-800'
//                   }`}>
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => handleEdit(user)}
//                       className="text-blue-600 hover:text-blue-900"
//                     >
//                       <Edit2 size={20} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(user._id)}
//                       className="text-red-600 hover:text-red-900"
//                     >
//                       <Trash2 size={20} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <UserModal
//         showModal={showModal}
//         onClose={() => setShowModal(false)}
//         onSubmit={handleSubmit}
//         formData={formData}
//         onInputChange={handleInputChange}
//         editingUser={editingUser}
//       />
//     </div>
//   );
// };

// export default AdminUsers; 



import React, { useState, useEffect, useCallback, memo } from 'react';
import { Plus, Edit2, Trash2, X, User as UserIcon, Loader, AlertTriangle, ShieldCheck, UserCircle } from 'lucide-react'; // Added more relevant icons
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration (Consistent with other Admin components) ---
const ACCENT_COLOR_CLASS = 'teal'; // Or 'blue', 'indigo', etc. Match your theme.

// --- Animation Variants (Consistent) ---
const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 200 } },
  exit: { opacity: 0, scale: 0.9, y: 30 }
};

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } }
};

const tableRowVariants = { // Simple variant for table rows
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};


// --- User Modal Component (Styled for Dark Theme) ---
const UserModal = memo(({
  showModal,
  onClose,
  onSubmit,
  formData,
  onInputChange,
  editingUser,
  apiError // Prop to display API errors from parent
}) => {
  if (!showModal) return null;

  // Helper for consistent input fields
  const InputField = ({ name, label, type = 'text', required = true, children, ...props }) => (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{label}</label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={formData[name] || ''}
          onChange={onInputChange}
          className={`mt-1 block w-full rounded-md p-4 bg-gray-700/60 border-gray-600 text-gray-200 text-sm focus:ring-1 focus:ring-${ACCENT_COLOR_CLASS}-500 focus:border-${ACCENT_COLOR_CLASS}-500 shadow-sm transition appearance-none px-3 py-2`} // Basic select styling
          required={required}
          {...props}
        >
          {children}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={formData[name] || ''}
          onChange={onInputChange}
          className={`mt-1 block w-full rounded-md p-4 bg-gray-700/60 border-gray-600 text-gray-200 text-sm focus:ring-1 focus:ring-${ACCENT_COLOR_CLASS}-500 focus:border-${ACCENT_COLOR_CLASS}-500 shadow-sm transition`}
          required={required}
          {...props}
        />
      )}
    </div>
  );


  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key="user-modal-backdrop"
          variants={modalOverlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            key="user-modal-content"
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gray-800 rounded-lg shadow-xl max-w-lg w-full border border-gray-700" // Max width adjusted
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white flex items-center">
                 <UserCircle size={20} className={`mr-2 text-${ACCENT_COLOR_CLASS}-400`}/>
                {editingUser ? 'Edit User' : 'Add New User'}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90, color: '#f87171' }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="p-4 md:p-6 space-y-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700/50">
               {apiError && (
                   <div className="p-3 bg-red-900/30 border border-red-600/50 rounded-md flex items-center gap-2 text-red-300 text-sm">
                      <AlertTriangle size={16} /> {apiError}
                   </div>
                )}

              <InputField name="name" label="Full Name" />
              <InputField name="email" label="Email Address" type="email" />
              <InputField
                name="password"
                label="Password"
                type="password"
                required={!editingUser} // Only required when adding
                placeholder={editingUser ? "Leave blank to keep current" : ""}
                autoComplete="new-password" // Prevent browser autofill issues
              />
              <InputField name="role" label="Role" type="select" required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </InputField>

              {/* Footer Actions */}
              <div className="flex justify-end space-x-3 pt-4">
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 bg-gray-600 text-gray-200 text-sm font-medium rounded-md hover:bg-gray-500 transition-colors"
                  >
                      Cancel
                  </motion.button>
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className={`px-4 py-2 bg-${ACCENT_COLOR_CLASS}-600 text-white text-sm font-medium rounded-md hover:bg-${ACCENT_COLOR_CLASS}-700 transition-colors shadow`}
                  >
                      {editingUser ? 'Update User' : 'Add User'}
                  </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});


// --- Main Admin Users Component (Styled for Dark Theme) ---
const AdminUsers = () => {
  // State Hooks (Keep As Is)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Page level error
  const [modalApiError, setModalApiError] = useState(null); // Error for modal actions
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'user'
  });

  // Fetch Users on Mount (Keep As Is, Added Standard Auth Header)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found.');

      const response = await fetch('http://localhost:5001/api/admin/users', {
        headers: {
           'Authorization': `Bearer ${token}`, // Standard
           'x-auth-token': token, // Keep if needed
           'Accept': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch users (Status: ${response.status})`);
      }
      const data = await response.json();
      setUsers(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Input Change Handler (Keep As Is)
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setModalApiError(null); // Clear modal error on change
  }, []);

   // Form Reset Utility
  const resetFormData = useCallback(() => {
     setFormData({
        name: '', email: '', password: '', role: 'user'
     });
  }, []);

  // Form Submit Handler (Keep As Is, Added Standard Auth Header)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalApiError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found.');

      const url = editingUser
        ? `http://localhost:5001/api/admin/users/${editingUser._id}`
        : 'http://localhost:5001/api/admin/users';
      const method = editingUser ? 'PUT' : 'POST';

      const requestData = { ...formData };
      if (editingUser && !requestData.password) {
        delete requestData.password; // Don't send empty password on edit
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Standard
          'x-auth-token': token, // Keep if needed
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to save user (Status: ${response.status})`);
      }

      // Success
      setShowModal(false);
      setEditingUser(null);
      resetFormData();
      fetchUsers();
    } catch (err) {
      setModalApiError(err.message); // Show error in modal
    }
  };

  // Edit Handler (Keep As Is)
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name || '',
      email: user.email || '',
      password: '', // Clear password field for editing
      role: user.role || 'user'
    });
    setModalApiError(null);
    setShowModal(true);
  };

  // Delete Handler (Keep As Is, Added Standard Auth Header)
  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found.');
      const response = await fetch(`http://localhost:5001/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
           'Authorization': `Bearer ${token}`, // Standard
           'x-auth-token': token // Keep if needed
        }
      });
      if (!response.ok) {
         const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to delete user (Status: ${response.status})`);
      }
      fetchUsers(); // Refresh list
    } catch (err) {
      setError(err.message); // Show page level error
    }
  };

  // --- Loading State ---
  if (loading) {
    return (
      <div className="flex items-center justify-center pt-20">
        <Loader className={`animate-spin h-8 w-8 text-${ACCENT_COLOR_CLASS}-500`} />
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 mx-auto max-w-md mt-6 text-center bg-gray-800 border border-red-500/50 rounded-lg shadow-lg"
      >
        <AlertTriangle className="text-red-400 h-6 w-6 mx-auto mb-2" />
        <p className="text-sm text-red-400">{error}</p>
        <button onClick={fetchUsers} className="mt-3 text-xs text-gray-400 hover:underline">Retry Fetch</button>
      </motion.div>
    );
  }

  // --- Main Render ---
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" className="space-y-6 p-6 h-screen bg-gray-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
            <UserIcon size={22} className={`mr-2.5 text-${ACCENT_COLOR_CLASS}-400`} />
            Manage Users
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingUser(null);
            resetFormData();
            setModalApiError(null);
            setShowModal(true);
          }}
          className={`flex items-center px-4 py-2 bg-${ACCENT_COLOR_CLASS}-600 text-white text-sm font-medium rounded-md hover:bg-${ACCENT_COLOR_CLASS}-700 transition-colors duration-200 shadow focus:outline-none focus:ring-2 focus:ring-${ACCENT_COLOR_CLASS}-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
        >
          <Plus size={18} className="mr-1.5" />
          Add New User
        </motion.button>
      </div>

      {/* Users Table */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {users.map((user) => (
                <motion.tr
                    key={user._id}
                    variants={tableRowVariants}
                    initial="hidden"
                    animate="visible"
                    layout // Animate layout changes on delete/add
                    className="hover:bg-gray-700/40 transition-colors duration-150"
                 >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        {/* Placeholder Icon - Could use an avatar URL if available */}
                        <UserCircle className="h-8 w-8 text-gray-500" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-200">{user.name || 'N/A'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{user.email || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* Styled Role Badge */}
                    <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'admin'
                        ? `bg-purple-500/20 text-purple-300 border border-purple-500/30`
                        : `bg-green-500/15 text-green-300 border border-green-500/30`
                    }`}>
                      {user.role || 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2"> {/* Reduced space */}
                       <motion.button
                         whileHover={{ scale: 1.1, backgroundColor: `rgba(var(--color-${ACCENT_COLOR_CLASS}-rgb), 0.15)`}}
                         whileTap={{ scale: 0.9 }}
                         onClick={() => handleEdit(user)}
                         className={`p-1.5 rounded-full text-${ACCENT_COLOR_CLASS}-400 hover:text-${ACCENT_COLOR_CLASS}-300 transition-colors`}
                         aria-label="Edit user"
                         title="Edit"
                       >
                         <Edit2 size={16} />
                       </motion.button>
                       <motion.button
                         whileHover={{ scale: 1.1, backgroundColor: 'rgba(248, 113, 113, 0.15)' }} // Red transparent bg
                         whileTap={{ scale: 0.9 }}
                         onClick={() => handleDelete(user._id)}
                         className="p-1.5 rounded-full text-red-400 hover:text-red-300 transition-colors"
                         aria-label="Delete user"
                         title="Delete"
                       >
                         <Trash2 size={16} />
                       </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
               {users.length === 0 && !loading && (
                   <tr>
                       <td colSpan="4" className="text-center py-10 text-gray-500">
                           No users found.
                       </td>
                   </tr>
               )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render Modal */}
      <UserModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        formData={formData}
        onInputChange={handleInputChange}
        editingUser={editingUser}
        apiError={modalApiError} // Pass modal error state
      />
    </motion.div>
  );
};

export default AdminUsers;