import   React , {PureComponent} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Card from './Card';
import PropTypes  from 'prop-types';

const propTypes = {
   content : PropTypes.string,
   movies  : PropTypes.object 
} 


class List extends React.PureComponent {
    
   
   

    render ()  {

        const {content , movies , navigation} = this.props;

        return (

            <React.Fragment>

              <View style = { styles.list } >

                    <View >
                        <Text  style = { styles.text }   > {content} </Text>
                    </View>

                    <View  >

                        <FlatList  data={movies} horizontal = {true} renderItem = { ({item}) => <Card  navigation = {navigation}   Item = {item}  />   } />

                    </View>

              </View>
              

            </React.Fragment>
              
        )

    };

};


const styles = StyleSheet.create(
    {

        text : {
            fontSize : 20,
            fontWeight : 'bold',
            paddingBottom : 20,
            color : 'black'
        },

        list : {
            marginTop : 25,
        }


    }
)

List.propTypes = PropTypes;
export default List;

