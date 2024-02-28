import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import LoginScreen from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

function App() {
  return (
    <PaperProvider>
      <StarshipFeedScreen />
    </PaperProvider>
  );
}

export default App;
