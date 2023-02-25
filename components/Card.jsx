import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const placeholderImage = require( '../assets/images/images.png' );

class Card extends React.PureComponent {

    

    render() {

        const {Item , navigation } = this.props;

        return (

            <View  >

                <TouchableOpacity style = { styles.container }  onPress={() => navigation.navigate('Details' , { movieId : Item.id }  )}  >
                 
                    <Image resizeMode= "cover"  
                           style = { styles.Img }  
                           source={  Item.poster_path  ?    {uri : `https://image.tmdb.org/t/p/w500/${Item.poster_path}`} : placeholderImage  } 
                    />

                    { !Item.poster_path && <Text style={ styles.movie_title} >{Item.title}</Text> }

                 



                </TouchableOpacity>

            </View>

        )
    }

}


const styles = StyleSheet.create({

    container : {
        padding : 5,
        position : 'relative',
        alignItems : 'center',
        justifyContent : 'center',
        height: 200,
      
    },


    Img : {
        width : 120,
        height : 200,
        borderRadius : 20
    },

    movie_title : {
        position : "absolute",
        top : 0,
        color : 'black',
        width: 100,
        textAlign: 'center'
    }
      
    }
) 


export default Card;