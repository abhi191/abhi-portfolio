import React from 'react';
import { useZenMode } from './ZenModeContext';
import { LotusIcon, CloseIcon } from './icons';

const ZenModeToggle: React.FC = () => {
    const { isZenMode, toggleZenMode } = useZenMode();

    return (
        <button
            onClick={toggleZenMode}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out group ${isZenMode
                    ? 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                    : 'bg-white text-brand-dark hover:bg-brand-highlight hover:scale-110'
                }`}
            aria-label={isZenMode ? "Exit Zen Mode" : "Enter Zen Mode"}
            title={isZenMode ? "Exit Zen Mode" : "Enter Zen Mode"}
        >
            {isZenMode ? (
                <CloseIcon className="w-6 h-6" />
            ) : (
                <LotusIcon className="w-6 h-6" />
            )}

            {/* Tooltip-ish text that appears on hover */}
            <span className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-sm font-medium transition-opacity duration-300 pointer-events-none ${isZenMode ? 'bg-stone-200 text-stone-600' : 'bg-brand-dark text-white'
                } opacity-0 group-hover:opacity-100`}>
                {isZenMode ? 'Exit Zen Mode' : 'Zen Mode'}
            </span>
        </button>
    );
};

export default ZenModeToggle;
