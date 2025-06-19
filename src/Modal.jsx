import React, { useEffect, useState } from 'react';
import './modal.css';

/**
 * Animated modal component for confirmations or messages.
 *
 * @component
 * @param {Object} props
 * @param {Function} props.onClose - Callback triggered on modal close.
 * @param {React.ReactNode} props.children - Content displayed inside the modal.
 * @returns {JSX.Element} Animated modal with custom content and a close button.
 */
export function ModalMessage({ children, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleOverlayClick = () => triggerClose();
  const handleModalClick = (e) => e.stopPropagation();

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`overlay ${isClosing ? 'hidden' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modal ${isVisible ? '' : 'hidden'} ${isClosing ? 'hidden' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={handleModalClick}
      >
        {/* Close button with SVG icon */}
        <svg
          onClick={triggerClose}
          className="close-button"
          aria-label="close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24"
          height="24"
        >
          <path
            fill="black"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          />
        </svg>

        {/* Modal content (custom JSX) */}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
