import { heightPercentageToDP as deviceHeight, widthPercentageToDP as deviceWidth, listenOrientationChange as lor, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default {
    
    myHeight: deviceHeight,
    myWidth: deviceWidth,

    titleColor: '#1F2937',
    subTitleColor: '#4B5563',
    primaryColor: '#32B768',

    featuredCards: [
        { id: 1, route: 'contact', title: 'Flash Offer', subTitle: 'We are here with the best deserts intown', featuredImage: require('../assets/featured1.png') },
        { id: 2, route: 'contact', title: 'Flash Offer', subTitle: 'We are here with the best deserts intown', featuredImage: require('../assets/featured1.png') },
        { id: 3, route: 'contact', title: 'Flash Offer', subTitle: 'We are here with the best deserts intown', featuredImage: require('../assets/featured1.png') },
        { id: 4, route: 'contact', title: 'Flash Offer', subTitle: 'We are here with the best deserts intown', featuredImage: require('../assets/featured1.png') },
        { id: 5, route: 'contact', title: 'Flash Offer', subTitle: 'We are here with the best deserts intown', featuredImage: require('../assets/featured1.png') }
    ],

}
