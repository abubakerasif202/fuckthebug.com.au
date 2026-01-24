
import React, { useState } from 'react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden border-white/10 w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          &times;
        </button>
        <h2 className="text-3xl md:text-4xl font-black font-orbitron text-white text-center mb-8">
          AUTHENTICATE
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-neonPurple font-mono text-xs tracking-[0.4em] uppercase mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neonCyan"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-neonPurple font-mono text-xs tracking-[0.4em] uppercase mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neonCyan"
            />
          </div>
          <button
            type="submit"
            className="w-full text-lg font-bold px-6 py-3 border border-neonCyan text-neonCyan rounded-lg hover:bg-neonCyan hover:text-black transition-all duration-300 font-orbitron uppercase tracking-wider"
          >
            Engage
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
