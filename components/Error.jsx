import React from "react";
import { StyleSheet, Text, View } from "react-native";


class Error extends React.PureComponent {

    render()  {

        return (
            <React.Fragment>

              <View>
                   <Text>OOPs..! Something went wrong.</Text>
                   <Text>Try after sometime</Text>
              </View>  
              
            </React.Fragment>
               
        )

    }

}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        textAlign:'center',
        fontSize : 20,
        color : 'black'
    }

})

export default Error;