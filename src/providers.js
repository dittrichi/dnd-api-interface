import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import DnDProvider from "./providers/dnd-provider";

const Providers = () => {
  return (
    <main>
      <DnDProvider>
        <ResetCSS />
        <App />
      </DnDProvider>
    </main>
  );
};

export default Providers;
