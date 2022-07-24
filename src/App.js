import React from 'react';
import styled from 'styled-components';
import Mensagens from './Components/Mensagens';

const TelaInteira = styled.div`
  height: 95vh;
  width: 800px;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  margin: 20px auto;
  background-color: #E5DDD6;
  border-radius: 5px;
  box-shadow: 0 0 5px;
`

const Header = styled.div`
  background-color: whitesmoke;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
`

const ContainerMensagens = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 15px;
`

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const InputNome = styled.input`
  width: 100px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 2px;
`
const InputMensagem = styled.input`
  width: 560px;
  margin: 0 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 2px;
`
const BotaoEnivar = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 2px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #E5E5E5;
  }
`

class App extends React.Component {
  state = {
    mensagens: [{
      usuario: '',
      mensagem: ''
    }],
    inputUsuario: '',
    inputMensagem: ''
  };

  aoEnviar = (e) => {
    e.preventDefault()
    if (this.state.inputMensagem === '') {
      alert('Obrigatório escrever uma mensagem')
    } else if (this.state.inputUsuario === '') {
      alert('Obrigatório o nome de usuário')
    } else {
      const novaMensagem = { usuario: this.state.inputUsuario, mensagem: this.state.inputMensagem }
      this.setState({
        mensagens: [...this.state.mensagens, novaMensagem],
        inputMensagem: '',
      })
    }

  };

  apagaMensagem = (mensagem) => {
    const novasMensagens = [...this.state.mensagens].filter(objeto => objeto.mensagem !== mensagem)
    if (window.confirm('Tem certeza que quer apagar a mensagem?')) {
      this.setState({mensagens: novasMensagens})
    }
}

  onChangeUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value })
  }

  render() {

    return (
      <TelaInteira>
        <Header><h1>WhatsLab</h1></Header>
        <ContainerMensagens>
          <Mensagens
            mensagens={this.state.mensagens}
            apagaMensagem={this.apagaMensagem}
          />
        </ContainerMensagens>
        <ContainerInput>
          <form onSubmit={this.aoEnviar}>
            <InputNome
              value={this.state.inputUsuario}
              placeholder={'Usuário'}
              onChange={this.onChangeUsuario}
            />
            <InputMensagem
              value={this.state.inputMensagem}
              placeholder={'Mensagem'}
              onChange={this.onChangeMensagem}
            />
            <BotaoEnivar type="submit">Enviar</BotaoEnivar>
          </form>
        </ContainerInput>
      </TelaInteira>
    );
  }
}


export default App;