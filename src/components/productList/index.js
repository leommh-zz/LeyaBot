import React, { Component } from 'react';
import { Text, ListView, View } from 'react-native';

//Importações Personalizadas
import Product from './product';
import style from './style';

export default class productList extends Component {
  
  constructor(props){
    super(props);
    this.state = { dataSource: null, isEmpty: true };
  }

  componentWillMount(){
      this.createDataBase(this.props.items);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.createDataBase(this.props.items);
  }

  createDataBase(items){
    if (items !== undefined && items !== null){
      
      //Cria o DataSource para o ListView
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({ dataSource: ds.cloneWithRows(items) });
      this.setState({ isEmpty: false });
    }
  }

  renderRow(items){ return (<Product key={ items.id } items={ items } />) }

//Renderização Principal
  render() {

    if ( this.state.isEmpty == false ){
      return (
        <View style={ style.container }>
          <ListView
              key={Math.floor(Math.random())}
              style={ style.listView }
              enableEmptySections
              onEndReachedThreshold={1}
              dataSource={ this.state.dataSource }
              renderRow={ this.renderRow }
              horizontal={true}
          />
        </View>
      );
    } else{
      return <Text>Nenhum Resultado Encontrado!</Text>
    }
  }
  
}