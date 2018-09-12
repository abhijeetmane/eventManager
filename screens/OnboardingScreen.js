import React, {Component} from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper'; 

export default class OnboardingScreen extends Component {
    render() {
        return (
            <Onboarding
                pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('./images/digitalwallet.png')} />,
                    title: 'Your digital event wallet',
                    subtitle: 'Easily buy tokens via the EventX wallet app in any local currency and use them at any event. Before, during and after the event. One wallet for any event, easy, fast & secure',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('./images/wearable.png')} />,
                    title: 'Connect your wearable',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('./images/ideal.png')} />,
                    title: 'Instant buy with iDeal',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                ]}
            />
        );
    }
}