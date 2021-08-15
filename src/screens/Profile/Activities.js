import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import dataDB from '../../dataDB';

const gym = dataDB.gym

export default props => {

    function getActivitiesItem({item}){
        return(
            <ListItem key={item._id} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.endereco}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.hours} hrs</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
      <View style={styles.container}>
          <FlatList data={gym} keyExtractor={i => `${i._id}`}
            renderItem={getActivitiesItem}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
