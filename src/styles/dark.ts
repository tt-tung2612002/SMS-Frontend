import { createTheme } from "@mui/material/styles";
import { RefineThemes } from "@refinedev/mui";
import type { ThemeConfig } from "antd";
import { theme } from "antd";

export const MaterialUIDarkTheme = createTheme({
  ...RefineThemes.PurpleDark,
  typography: {
    fontFamily: "Segoe UI, Roboto, sans-serif",
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightLight: 300,
  },
  palette: {
    ...RefineThemes.PurpleDark.palette,
    background: {
      default: "#141414",

      paper: "#1e1e1e",
    },
    primary: {
      main: "#c3a0e8",
      dark: "blue",
    },
    text: {
      primary: "#bebebe",
      secondary: "#bebebe",
    },
    secondary: {
      // color of sider background
      main: "#c3a0e8",
      contrastText: "#fff",
    },
    action: {
      active: "#c3a0e8",
      hover: "#c3a0e8",
      selected: "#c3a0e8",
      //   hoverOpacity: 0.08,
      focus: "#c3a0e8",
      activatedOpacity: 0.12,
    },
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: "24px",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        colorInfo: {
          color: "#c3a0e8",
        },
        colorSecondary: {
          color: "black",
        },
        root: {
          color: "black",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected:hover": {
            color: "#ffb2d7",
          },
          "&:hover": {
            color: "black",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          "&.Mui-selected:hover": {
            color: "#ffb2d7",
          },
          "&:hover": {
            color: "black",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected:hover": {
            color: "#ffb2d7",
          },
          "&:hover": {
            color: "black",
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 800,
        },
        h5: {
          fontWeight: 800,
          lineHeight: "2rem",
        },
        subtitle1: {
          color: "#c3a0e8",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: "#c3a0e8",
        },
        textSecondary: {
          color: "#c3a0e8",
        },
        icon: {
          color: "red",
        },
        root: {
          // borderRadius: 0,
        },
      },
    },
  },
});

export const CustomConfig: ThemeConfig = {
  algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
  token: {
    colorPrimary: "#BB86FC",
    colorBgBase: "#0d0d0d",
    colorText: "#bebebe",
    colorTextBase: "#bebebe",
    // colorBgBase: "#1f1f1f",
    // colorTextSecondary: "#03DAC6",
    // colorFillSecondary: "#03DAC6",
    fontFamily: "Segoe UI, Roboto, sans-serif",
    fontSizeIcon: 14,
  },
  components: {
    Drawer: {
      colorBgBase: "#1e1e1e",
      colorBorderBg: "#1e1e1e",
      colorFillContent: "black",
    },
    Space: {
      size: 16,
      colorTextSecondary: "#03DAC6",
    },
    Avatar: {
      textFontSize: 18,
    },
    Button: {
      // contentFontSize: 16,
    },
    Layout: {},
    Typography: {
      size: 16,
    },
    Modal: {
      contentBg: "#1e1e1e",
      headerBg: "#1e1e1e",
      borderRadius: 0,
    },

    Table: {
      colorBgBase: "black",
      cellFontSize: 14,
      fontSizeSM: 16,
      fontSize: 14,
      fontSizeLG: 20,
      // cellFontSizeSM: 14,
      // cellFontSizeMD: 16,
      // fontSizeIcon: 12,
      colorBorder: "transparent",
      colorBorderSecondary: "transparent",
      colorBgElevated: "#9d9d9e",
      colorBgTextActive: "transparent",
      rowHoverBg: "#424242",
      rowSelectedHoverBg: "#424242",
    },

    Radio: {
      // radioSize: 50,
      // size: 20,
      // sizeSM: 50,
      // sizeMS: 50,
      // sizeLG: 50,
      // fontSize: 30,
    },

    Input: {
      colorBgBase: "#1e1e1e",
      colorBorder: "transparent",
      activeBorderColor: "#9d9d9e",
      hoverBorderColor: "#9d9d9e",
      colorBgElevated: "#9d9d9e",
      // colorPrimaryBorderHover: "red",
      // colorBgSpotlight: "red",
      // colorFillContentHover: "red",
      // colorFillContent: "red",
    },
    Form: {
      // colorBgBase: "red",
    },
  },
};
