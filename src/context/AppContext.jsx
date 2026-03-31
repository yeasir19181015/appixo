import { createContext, useContext, useState } from "react";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [installedApps, setInstalledApps] = useState(() => {
    return loadFromLocalStorage("installedApps") || [];
  });

  const installApp = (app) => {
    const alreadyInstalled = installedApps.find((a) => a.id === app.id);
    if (alreadyInstalled) return;
    const updated = [...installedApps, app];
    setInstalledApps(updated);
    saveToLocalStorage("installedApps", updated);
  };

  const uninstallApp = (appId) => {
    const updated = installedApps.filter((a) => a.id !== appId);
    setInstalledApps(updated);
    saveToLocalStorage("installedApps", updated);
  };

  const isInstalled = (appId) => {
    return installedApps.some((a) => a.id === appId);
  };

  return (
    <AppContext.Provider value={{ installedApps, installApp, uninstallApp, isInstalled }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}