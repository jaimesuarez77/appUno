import{StyleSheet, Dimensions} from 'react-native';

const GeneralStyles = StyleSheet.create({
    container:{
        flex :1
       

    },
    logoContainer:{
       
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
        height : Dimensions.get('screen').height *.4,
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
    },
textButton:{
    color:'white',
    fontWeight: '300'
},
cardView:{

    height: Dimensions.get('screen').height * .2,
        borderBottomLeftRadius : 40,
        borderTopRightRadius:40,
        //justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : 'white',
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
	            width: 0,
	            height: 9,
                },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        flexDirection: 'row'
      
},
scrollList:{
    height : Dimensions.get('screen').height *.92,
} ,
containerInitio:{
    height: Dimensions.get('screen').height * .08,
    flexDirection: 'row',
   
    justifyContent: 'center',
    alignItems : 'center'
} ,
viewText:{
    marginLeft:20,
    fontSize : 20,
    justifyContent: 'center',
    alignItems : 'center'

},
viewImage:{
    width: 100,
    height: 100,
    marginLeft:20,
    

} 


});
export default GeneralStyles;