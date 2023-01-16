import { heIL } from '@mui/material/locale';
import {
  createTheme,
  PaletteColorOptions,
  PaletteColor
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface Palette {
    neutral: PaletteColor;
  }
}

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "FF5B00",
      dark: "990000",
    },
    secondary: {
      main: "D4D925",
      light: "FFEE63",
    },
    text: {
      primary: "#1E1729",
    },
    neutral: {
      main: "#3BCE96",
      light: "#BEEFDC",
      dark: "#2DB480",
    },
    grey: {
      50: "#F3F5F7",
      100: "#E7EBEE",
      200: "#DBE0E6",
      300: "#C3CCD5",
      400: "#9FADBC",
      500: "#8799AB",
      600: "#6F859B",
      700: "#647A90",
      800: "#4B5C6C",
      900: "#2A333C",
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#004FD1",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          backgroundColor: theme.palette.grey[200],
          margin: "1rem 0",
          height: "1px",
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }: any) => ({
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          textAlign: "start",
          backgroundColor: theme.palette.neutral.light,
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          "& MuiTableRow-body": {
            "& > *": {
              borderTop: `1px solid ${theme.palette.neutral.main}`,
            },
          },
        }),
      },
    },
  },
},
  heIL,
);
