import{StyleSheet, Dimensions} from 'react-native';

const LoginStyles = StyleSheet.create({
    container:{
        flex :1,
       

    },
    logoContainer:{
        backgroundColor: 'orange',
        height: Dimensions.get('screen').height * .4,
        borderBottomLeftRadius : 100,
        justifyContent: 'center',
        alignItems : 'center'
    },
    logo:{
        width: 100,
        height: 100
    },
    title:{
        position:'absolute',
        right: -150,
        bottom: -20,
        fontSize : 22,
        color: 'white'
    },
    inputDataContainer:{
        height : Dimensions.get('screen').height *.6,
        alignItems:'center',
        paddingTop : 30,
        paddingBottom: 20
    },
    inputData:{
       
        backgroundColor: 'white',
        borderRadius: 50,
        width: Dimensions.get('screen').width *.85,
        paddingLeft : 20,
        marginTop  : 20,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
    }


});
export default LoginStyles;