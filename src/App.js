import React from 'react';
import {
  StyledEngineProvider,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as extendMaterialTheme,
  THEME_ID
} from '@mui/material/styles';
import {
  CssVarsProvider as JoyCssVarsProvider,
  useColorScheme as useJoyColorScheme
} from "@mui/joy/styles";
import {primaryColor} from "./config";
import {joyTheme, materialTheme} from "./theme";
import Router from "./routes";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MaterialCssVarsProvider theme={{[THEME_ID]: materialTheme}}>
        <JoyCssVarsProvider theme={joyTheme}>
          <Router/>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </StyledEngineProvider>

  );
}