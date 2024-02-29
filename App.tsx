import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkProvider } from "react-native-offline";

import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <StarshipFeedScreen />
        </PaperProvider>
      </QueryClientProvider>
    </NetworkProvider>
  );
}

export default App;
