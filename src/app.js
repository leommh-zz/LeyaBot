import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

//Importações Personalizadas
import Leya from './components/Leya';
import style from './style';

export default class App extends Component{

    render(){
        
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                
                <View style={ style.app }>
                <StatusBar backgroundColor="rgb(5, 16, 43)" />
                    <ImageBackground source={ require('./img/background.gif') } style={ style.background }>
                        
                            <View style={ style.titleContainer }>
                                <Text style={ style.titleText }> Leya - The Best Chatbot Ever </Text>
                            </View>

                            <View style={ style.leya }>
                                <Leya />
                            </View>    
                            
                    </ImageBackground>      
                </View>    
            </Provider>
        );
    }

}