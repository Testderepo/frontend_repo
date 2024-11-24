'use client';

import { Provider } from 'react-redux';
import store from '../store/store';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default ReduxProvider;
