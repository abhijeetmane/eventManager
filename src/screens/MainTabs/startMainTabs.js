import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-home", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-card" : "ios-card", 30),
        Icon.getImageSource("logo-xbox", 55),
        Icon.getImageSource(Platform.OS === 'android' ? "md-card" : "ios-card", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "wifi" : "ios-wifi", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "eventxapp.Funds",
                    label: "Funds",
                    title: "Funds",
                    icon: sources[0]
                },
                {
                    screen: "eventxapp.Wallets",
                    label: "Wallets",
                    title: "Wallets",
                    icon: sources[1]
                },
                {
                    screen: "eventxapp.transactions",
                    label: "",
                    title: "Wallet",
                    icon: sources[2],
                    iconInsets: { // add this to change icon position (optional, iOS only).
                        top: 6,
                        left: 0,
                        bottom: -6,
                        right: 0
                    }
                },
                {
                    screen: "eventxapp.Contacts",
                    label: "Contacts",
                    title: "Contacts",
                    icon: sources[3]
                },
                {
                    screen: "eventxapp.Wearables",
                    label: "Wearables",
                    title: "Wearables",
                    icon: sources[4]
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: '#b8165e',
                initialTabIndex: 2
             },
            animationType: 'fade'
        });
    });
};

export default startTabs;