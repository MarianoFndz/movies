import "./App.css";
import MainGrid from "./layout/MainGrid";
import Navbar from "./layout/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "utilities/theme.js";

//Redux
import { Provider } from "react-redux";
import store from "redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainGrid>
          <Navbar></Navbar>
        </MainGrid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
