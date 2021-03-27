import {StyleSheet}from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection: 'column'
    },
    section1:{
        flex:1,
        
    },
    section2:{
        flex:1,
        backgroundColor :'grey'
    },
    card:{
        width:150,
        height:150,    
        margin: 10
    },
    cardTitle:{
        flex:1,
        backgroundColor: '#009688',
        borderTopLeftRadius: 20,
        borderTopRightRadius:20
    },
    cardBody:{
        flex: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        borderBottomWidth: 1,
      
        borderEndWidth:1,
        borderLeftWidth:1,
        borderColor:'black'



    },
    cardContainer1:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent : 'center'
        


    }


});

export default Styles;