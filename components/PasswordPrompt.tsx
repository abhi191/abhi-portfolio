
import React from 'react';
import { CloseIcon } from './icons';

interface PasswordPromptProps {
  onSubmit: (password: string) => boolean;
  onClose: () => void;
}

const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onSubmit, onClose }) => {
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // Auto-focus the input field when the component mounts
    inputRef.current?.focus();

    // Handle Escape key press
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!password) {
      setError('Password cannot be empty.');
      return;
    }
    const success = onSubmit(password);
    if (!success) {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-brand-background/80 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="relative bg-brand-card w-full max-w-md p-8 sm:p-10 rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-dark/50 hover:text-brand-dark transition-colors"
          aria-label="Close password prompt"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-brand-dark text-center">Protected content</h2>
        <p className="text-center text-brand-dark/70 mt-3">
          Please enter the password to view this case study.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="password-input" className="sr-only">Password</label>
            <input
              ref={inputRef}
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-brand-background border-2 border-brand-dark/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
              aria-describedby="password-error"
            />
             {error && (
              <p id="password-error" className="text-red-600 text-sm mt-2 text-center" role="alert">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-brand-dark text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark"
          >
            Unlock project
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;
