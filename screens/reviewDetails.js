import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import{globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({navigation, route}) {

  const { item} = route.params
  //const {rating} = route.params.rating;
  const pressHandler = () => {
    navigation.goBack();
  }
  console.log(item);
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={style.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[item.rating]} />
        </View>
      </Card>
    </View>
  );
} 
//        <Text>{item.rating}</Text>  
const style = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
})
/*
 const title  = route.params;

 return (
   <View style={globalStyles.container}>
     <Text>{title}</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

*/