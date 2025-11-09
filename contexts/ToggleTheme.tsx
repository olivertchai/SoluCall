import {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
    useMemo // Importe o useMemo para otimização
} from 'react';

export interface ThemeColors {
    backgroundColor: string;
    textColor: string;
}

export interface ToggleThemeContextProps {
    theme: ThemeColors; 
    toggleTheme: () => void;
}

export const themes: {light: ThemeColors, dark: ThemeColors} = {
    light: {
        backgroundColor: '#2972CD',
        textColor: '#FFFFFF',
    },
    dark: {
        backgroundColor: '#0f0f0f',
        textColor: '#FFFFFF',
    }
};

const ToggleThemeContext= createContext<ToggleThemeContextProps | undefined>(
  undefined
);

export default function ToggleThemeContextProvider({
    children
}: PropsWithChildren) {
    const [currentThemeName, setCurrentThemeName] = useState<'light' | 'dark'>('light'); // Começa com o tema 'light'

    const toggleTheme = () => {
        setCurrentThemeName(prevName => (prevName === 'light' ? 'dark' : 'light'));
    };

    const theme = themes[currentThemeName];

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme]);

    return (
        <ToggleThemeContext.Provider value={contextValue}>
            {children}
        </ToggleThemeContext.Provider>
    );
}

export function useToggleThemeContext() {
  const context = useContext<ToggleThemeContextProps | undefined >(ToggleThemeContext);

  if (context === undefined) {
    throw new Error(
      "useToggleThemeContext must be used inside ToggleThemeContextProvider!"
    );
  }

  return context;
}