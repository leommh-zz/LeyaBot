import React, { Component } from 'react';
import { View } from 'react-native';
import ChatBot from 'react-native-chatbot';

//Importações Personalizadas
import Search from './search';

export default class Leya extends Component {
  constructor(props){
    super(props);
    this.state = { key: 1 };
  }


  render() {

    let res = () => {
      this.setState({ key: Math.random() });
    }

    const steps = [
          {
            id: 'mensagem_1',
            message: 'Olá, meu nome é Leya e estou aqui para lhe ajudar, o que você procura?',
            trigger: 'pergunta_1',
          },
          {
            id: 'pergunta_1',
            options: [
              { value: 1, label: 'Achar um jogo', trigger: 'static_1' },
              { value: 2, label: 'Achar outra coisa', trigger: 'pesquisar_1' },
            ],
          },
    
          /*Parte de Pesquisa*/
          {
            id: 'pesquisar_1',
            message: 'O que deseja encontrar?',
            trigger: 'pesquisar_dados_1',
          },
          {
              id: 'pesquisar_dados_1',
              user: true,
              trigger: 'pesquisar_módulo_1',
          },
          {
              id: 'pesquisar_módulo_1',
              component: <Search key={'PesquisaAlgo'}/>,
              trigger: 'mensagem_pospesquisar'
          },
          {
            id: 'mensagem_pospesquisar',
            options: [
              { value: 1, label: 'Quero receber mais ajuda!', trigger: 'help' },
            ],
          },
          {
            id: 'help',
            message: 'OK!',
            end: true
          },
        
          /*Parte de Conversa (Opicional)*/
          {
            id: 'static_1',
            message: 'Por favor selecione o tipo abaixo:',
            trigger: 'pergunta_jogos',
          },
          {
            id: 'pergunta_jogos',
            options: [
              { value: 1, label: 'Jogo de Video Game', trigger: 'jogo_vd' },
              { value: 2, label: 'Jogo de Cartas', trigger: 'jogo_ct' },
            ],
          },
          {
            id: 'jogo_vd',
            component: <Search key={'JogoVD'}/>,
            trigger: 'mensagem_pospesquisar'
          },         
          {
            id: 'jogo_ct',
            component: <Search key={'JogoCV'}/>,
            trigger: 'mensagem_pospesquisar'
          },
          
      ];

    return (
      
      <View key={this.state.key} style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <ChatBot 
            steps={steps} 
            botAvatar='https://i.imgur.com/XsYlk5b.jpg'
            userAvatar='https://i.imgur.com/wHgr88i.jpg'
            botFontColor={ '#fff' } 
            userFontColor={ '#0084cc' }
            botBubbleColor={ '#0084cc' } 
            style={{ backgroundColor: null, marginTop: 5, paddingBottom: 5 }}
            contentStyle={{ backgroundColor: null }}
            footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
            submitButtonStyle={{ backgroundColor: '#0084cc', borderRadius: 4, width: 63, margin: 2 }}
            handleEnd={res}
          />
 
      </View>
    );
  }
}
