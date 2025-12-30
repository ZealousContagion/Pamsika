
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login("user@example.com", "Demo User"); // Simulated login with mock data
        onClose();
        navigate('/profile');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="auth-modal">
                <button className="close-btn-abs" onClick={onClose}><X size={24} /></button>

                <div className="auth-content">
                    <h2>{isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}</h2>
                    <p className="auth-sub">
                        {isLogin ? 'Enter your details to access your account' : 'Join Pamsika for exclusive access'}
                    </p>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <input type="text" placeholder="Full Name" required />
                            </div>
                        )}
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" required />
                        </div>

                        <button type="submit" className="btn btn-primary auth-submit">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button className="link-btn" onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? 'Sign Up' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(5px);
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .auth-modal {
            width: 90%;
            max-width: 400px;
            background: rgba(22, 22, 22, 0.9);
            backdrop-filter: blur(20px);
            border-radius: var(--radius-lg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            padding: 3rem 2rem;
            animation: scaleIn 0.2s ease-out;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .close-btn-abs {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: var(--color-text-muted);
        }
        .close-btn-abs:hover {
            color: white;
        }
        .auth-content h2 {
            text-align: center;
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        .auth-sub {
            text-align: center;
            color: var(--color-text-muted);
            margin-bottom: 2rem;
            font-size: 0.9rem;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-group input {
            width: 100%;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-md);
            color: white;
            transition: all 0.2s;
        }
        .form-group input:focus {
            outline: none;
            border-color: var(--color-primary);
            background: rgba(255, 255, 255, 0.1);
        }
        .auth-submit {
            width: 100%;
            padding: 1rem;
            margin-top: 1rem;
        }
        .auth-footer {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.9rem;
            color: var(--color-text-muted);
        }
        .link-btn {
            color: var(--color-primary);
            font-weight: 600;
        }
        .link-btn:hover {
            text-decoration: underline;
        }
      `}</style>
        </div>
    );
};

export default AuthModal;
