import {StyleSheet, Dimensions} from 'react-native';

const ButtonStyles = StyleSheet.create({
    small:{
        width: Dimensions.get('screen').width * .5,
        marginTop: 50,
        padding: 10,
        borderRadius: 50,
        alignItems : 'center'
    },
    medium:{    
        width: Dimensions.get('screen').width * .7,
        marginTop: 50,
        padding: 10,
        borderRadius: 50,
        alignItems : 'center'

    },
    large : {    
        width: Dimensions.get('screen').width * .85,
        marginTop: 50,
        padding: 10,
        borderRadius: 50,
        alignItems : 'center'
    }

});

export default ButtonStyles;