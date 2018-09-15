import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { YellowBox } from 'react-native';

import AuthScreen from "./src/screens/Auth/Auth";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import TransactionsScreen from "./src/screens/TransactionsScreen/TransactionsScreen";
import SplitBillScreen from './src/screens/SplitBillScreen/SplitBillScreen';
import AdjustBillScreen from './src/screens/AdjustBillScreen/AdjustBillScreen';
import configureStore from "./src/store/configureStore";


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

const store = configureStore();

Navigation.registerComponent(
  "eventxapp.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.LoginScreen",
  () => LoginScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.Funds",
  () => TransactionsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.Wallets",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.transactions",
  () => TransactionsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.Contacts",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.Wearables",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.SplitBillScreen",
  () => SplitBillScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "eventxapp.AdjustBillScreen",
  () => AdjustBillScreen,
  store,
  Provider
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "eventxapp.AuthScreen",
    title: "EventX"
  }
});