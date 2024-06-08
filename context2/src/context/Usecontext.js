import { createContext, useContext } from 'react'


export const ThemeContext = createContext({
    themeMode : "light",
    lightMode : ()=>{},
    darkMode : ()=>{}
});  

export const ThemeProvider = ThemeContext.Provider;

//ThemeProvide
//      | |
//       *
// (property) React.Context<{ themeMode: string; lightMode: () => void; darkMode: () => void; }>.Provider: React.Provider<{
//     themeMode: string;
//     lightMode: () => void;
//     darkMode: () => void;
// }>

export default function useTheme (){
    return useContext(ThemeContext)
}
