import React from 'react';
import styled from 'styled-components';

const ContainerBaloes = styled.div`
  display: flex;
  flex-direction: column;
`

const BalaoMinhaMensagem = styled.div`
    background-color: #DDF7C8;
    align-self: flex-end;
    max-width: 60%;
    word-wrap: break-word;
    padding: 0 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 0.8;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    position: relative;

    &:after{
        content: '';
	    border: 10px solid transparent;
	    border-top-color: black;
        position: absolute;
        top: 0;
        right: -10px;
        border-top-color: #DDF7C8
    }
`

const BalaoMensagemUsuario = styled.div`
    background-color: white;
    align-self: flex-start;
    max-width: 60%;
    word-wrap: break-word;
    padding: 0.8em 0.8em 0 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 0.8;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    position: relative;

    &:after{
        content: '';
	    border: 10px solid transparent;
	    border-top-color: black;
        position: absolute;
        top: 0;
        left: -10px;
        border-top-color: white;
    }
`

const BalaoMensagem1 = styled.div`
    background-color: white;
    align-self: flex-start;
    max-width: 60%;
    word-wrap: break-word;
    padding: 0 0.8em 0 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 0.8;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
`

const BalaoMensagem2 = styled.div`
    background-color: #DDF7C8;
    align-self: flex-end;
    max-width: 60%;
    word-wrap: break-word;
    padding: 0 0.8em 0 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 0.8;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
`

const ContainerNome = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`

class Mensagens extends React.Component {
    render() { // eslint-disable-next-line
        const listaMensagens = this.props.mensagens.map((objeto, index) => {
            if (index > 0) {
                if (objeto.usuario.toLowerCase() === 'eu') {
                    if (objeto.usuario === this.props.mensagens[index - 1].usuario && index > 1) {
                        return (
                            <BalaoMensagem2 key={index} onDoubleClick={() => this.props.apagaMensagem(objeto.mensagem)}>
                                <p>{objeto.mensagem}</p>
                            </BalaoMensagem2>
                        )
                    } else {
                        return (
                            <BalaoMinhaMensagem key={index} onDoubleClick={() => this.props.apagaMensagem(objeto.mensagem)}>
                                <p>{objeto.mensagem}</p>
                            </BalaoMinhaMensagem>
                        )
                    }

                } else { // Checa se for o mesmo usuário. Se for, retorna sem o nome repetido
                    if (objeto.usuario === this.props.mensagens[index - 1].usuario && index > 1) {
                        return (
                            <BalaoMensagem1 key={index} onDoubleClick={() => this.props.apagaMensagem(objeto.mensagem)}>
                                <p>{objeto.mensagem}</p>
                            </BalaoMensagem1>
                        )
                    } else {
                        return ( // Se não, retona com o nome do usuário
                            <BalaoMensagemUsuario key={index} onDoubleClick={() => this.props.apagaMensagem(objeto.mensagem)}>
                                <ContainerNome>{objeto.usuario}</ContainerNome>
                                <p>{objeto.mensagem}</p>
                            </BalaoMensagemUsuario>
                        )
                    }
                }
            }

        })
        return (
            <ContainerBaloes>
                {listaMensagens}
            </ContainerBaloes>
        )
    }
}

export default Mensagens