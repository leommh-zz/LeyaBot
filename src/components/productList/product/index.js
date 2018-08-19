import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { Text, Rating, Card, Button, Badge } from 'react-native-elements'

//Importações Personalizadas
import style from './style';

export default class Product extends Component {

  render() {
    let { title, thumbnail, reviews: { rating_average }, available_quantity, price, permalink  } = this.props.items;

    if (title.length >= 35){
      let temp = title.toString();
      temp = title.substr(0, 35) + '...';
      title = temp;
    }

    return (
      <Card
        titleNumberOfLines={ 5 }
        title={ title }
        image={ { uri: thumbnail } } 
        imageProps={{ resizeMode: 'contain',  }}
        imageWrapperStyle={{ alignItems: 'center'  }}
        imageStyle={{ width: 90, height: 90 }}
        containerStyle={{padding: 7, borderRadius: 4 }}>

        <Rating
          showRating
          type="star"
          readonly
          showReadOnlyText={ false }
          fractions={ 3.3 }
          startingValue={ rating_average }
          imageSize={ 30 }
          style={ style.rating }
        />


        <View style={ style.container }>
          <Text h4>Price: $ { price } </Text>
        </View>

        <Button
          backgroundColor={ '#006eb2' }
          fontFamily={ 'Lato' }
          buttonStyle={ style.buttonStyle }
          onPress={ () => Linking.openURL(permalink) }
          title='Go product page' />
      </Card>

    );
  }
}
  
