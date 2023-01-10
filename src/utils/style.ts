import { createTheme } from '@mui/material/styles';
import { heIL } from '@mui/material/locale';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "#80cbc4",
      light: "#b2fef7",
      dark: "#4f9a94",
    },
    secondary: {
      main: "#ffcc80",
      light: "#ffffb0",
      dark: "#ca9b52",
    },
    text: {
      primary: "#202020",
      secondary: "#727272",
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(),
  },
  shape: {
    borderRadius: 7,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: "3rem",
          padding: "3rem",
          height: "100%",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          border: `1px solid ${theme.palette.grey[200]}`,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          textAlign: "start",
          "&.MuiTableCell-head": {
            backgroundColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.grey[50],
          },
          backgroundColor: theme.palette.grey[100],
        }),
      },
    },
  },
},
  heIL,
);
