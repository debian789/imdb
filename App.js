import "react-native-gesture-handler";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import SearchNavigation from "./src/navigations/SearchNavigation";

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <SearchNavigation></SearchNavigation>
    </NavigationContainer>
  );
}
