import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import { searchItems } from '../../../actions';
import ProductList from '../../productList';
import style from './style';


class Search extends Component{

     constructor(props){
        super(props);
        this.state = { isEmpty: true };
        props.items = null;
    }


    componentWillReceiveProps(receiveProps){
        let { message } = receiveProps.previousStep;
        this.props.searchItems(message)
        
        if (this.props.items !== receiveProps.items){
            this.setState({ isEmpty: false })
        }
        
    }
    
    render(){

        if (this.state.isEmpty == true){
            return(
                <View style={ style.container }>
                    <ActivityIndicator size="large" color="#006eb2" />
                </View>
            );
        }else {
            return(
                <ProductList key={ this.props.key } items={ this.props.items } />
            );
        }

    }
}

mapStateToProps = state => { 
    return({
        items: state.items
    }) 
  }
  
  mapDispatch = {
    searchItems
  }
  
export default connect(mapStateToProps, mapDispatch)(Search);