import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [models, setModels] = useState({ all: true, chatgpt: false, gemini: false, gpt: false });
    const [model, setModel] = useState('all');

    return (
        <AppContext.Provider value={{ models, setModels, model, setModel }}>
            {children}
        </AppContext.Provider>
    );
}
