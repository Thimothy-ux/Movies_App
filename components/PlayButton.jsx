import React from "react";
import { Pressable, Text , StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'




class PlayButton extends React.PureComponent {

    render() {
         const {onHandler} = this.props;
         return (
           <Pressable  onPress={ () => onHandler() }  style={styles.icon} >
                <Icon name="caret-forward-outline" size={30} color={'#fff'}  />
           </Pressable>
         )

    }

}

const styles = StyleSheet.create({

    icon : {
        alignContent : 'center',
        width : 50,
        backgroundColor : 'blue',
        borderRadius: 50,
        padding : 10
    },

    }
)


export default PlayButton;