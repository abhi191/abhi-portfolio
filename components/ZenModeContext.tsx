import React, { createContext, useContext, useState, useEffect } from 'react';

interface ZenModeContextType {
    isZenMode: boolean;
    toggleZenMode: () => void;
}

const ZenModeContext = createContext<ZenModeContextType | undefined>(undefined);

export const ZenModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isZenMode, setIsZenMode] = useState(false);

    const toggleZenMode = () => {
        setIsZenMode(prev => !prev);
    };

    useEffect(() => {
        if (isZenMode) {
            document.body.classList.add('zen-mode');
        } else {
            document.body.classList.remove('zen-mode');
        }
    }, [isZenMode]);

    return (
        <ZenModeContext.Provider value={{ isZenMode, toggleZenMode }}>
            {children}
        </ZenModeContext.Provider>
    );
};

export const useZenMode = () => {
    const context = useContext(ZenModeContext);
    if (context === undefined) {
        throw new Error('useZenMode must be used within a ZenModeProvider');
    }
    return context;
};
