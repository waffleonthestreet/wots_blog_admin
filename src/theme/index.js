import {CssVarsProvider, extendTheme} from '@mui/joy/styles';
import {primaryColor} from "../config";
import {
  useColorScheme as useMaterialColorScheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme,
  THEME_ID
} from "@mui/material/styles";

const joyTheme = extendTheme({
  fontFamily: {
    body: 'Noto Sans KR',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: '#d44402'
          },
        }
      }
    },
    JoyInput: {
      styleOverrides: {
        root: {
          '&:focus-within': {
            '--Input-focusedHighlight': primaryColor,
            // border: `1px solid ${primaryColor}`,
            // outline: `1px solid ${primaryColor}`,
            // outlineOffset: '2px',
          },
        }
      }
    }
  }
});


const materialTheme = experimental_extendTheme();
materialTheme.components = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans KR',
      }
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        paddingTop: "0px",
        paddingBottom: '0px',
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        fontFamily: "Roboto",
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: '#d44402'
          },
        },
      },

    }
  }
}

export {joyTheme, materialTheme};