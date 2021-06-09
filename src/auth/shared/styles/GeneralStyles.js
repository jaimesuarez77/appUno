import{StyleSheet, Dimensions} from 'react-native';

const GeneralStyles = StyleSheet.create({
    container:{
        flex :1
       

    },
    logoContainer:{
       
        height: Dimensions.get('screen').height * .25,
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
        height : Dimensions.get('screen').height *.05,
        paddingLeft : 30,
        marginTop  : 15,
        shadowColor: "#000",
        shadowOffset: {
	            width: 0,
	            height: 9,
                },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    inputDataEditar:{
       
        backgroundColor: 'white',
        borderRadius: 50,
        width: Dimensions.get('screen').width *.85,
        height : Dimensions.get('screen').height *.05,
        paddingLeft : 30,
        marginTop  : 5,
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
cardViewReservas:{

    height: Dimensions.get('screen').height * .25,
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
    height : Dimensions.get('screen').height *.94,
} ,
containerInitio:{
    height: Dimensions.get('screen').height * .06,
    flexDirection: 'row',
   
    justifyContent: 'center',
    alignItems : 'center'
} ,
viewText:{
    marginLeft:10,
    fontSize : 15,
    justifyContent: 'center',
    alignItems : 'center'

},
viewBotton:{
    flexDirection: 'row'
},
viewImage:{
    width: 120,
    height: 120,
    marginLeft:10,
    borderBottomLeftRadius : 40

},
user:{
    justifyContent: 'center',
    alignItems : 'center'
} 


});
export default GeneralStyles;