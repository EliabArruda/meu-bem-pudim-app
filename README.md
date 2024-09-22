# Meu Bem Pudim - Mobile App

Este é o aplicativo oficial da **Meu Bem Pudim**, uma empresa especializada em pudins deliciosos, localizada no Bairro do Janga, Paulista, PE. Este app foi desenvolvido para facilitar a gestão de pedidos e interações com os clientes via WhatsApp.

## Visão Geral

Este aplicativo foi criado utilizando **React Native** e está disponível para dispositivos Android. Ele permite a comunicação direta com os clientes via WhatsApp, organizando e separando os pedidos recebidos e possibilitando o envio de mensagens personalizadas sem a necessidade de abrir o aplicativo do WhatsApp.

## Funcionalidades

- Gerenciamento de pedidos via WhatsApp
- Envio simultâneo de mensagens para clientes cadastrados
- Persistência de dados utilizando `AsyncStorage` e `SQLite`
- Navegação simples e funcional com **React Navigation**
- Interface moderna utilizando `LinearGradient` e `ImageBackground`

---

## Requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [Yarn](https://yarnpkg.com/) ou npm (gerenciador de pacotes)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio (para emulação e builds)

---

## Instalação

1. **Clone este repositório em sua máquina local:**
   ```bash
   git clone https://github.com/seu-usuario/meu-bem-pudim.git
   ```

2. **Entre no diretório do projeto:**
   ```bash
   cd meu-bem-pudim
   ```

3. **Instale as dependências do projeto utilizando npm ou yarn:**
   - **Usando npm:**
     ```bash
     npm install
     ```

   - **Usando yarn:**
     ```bash
     yarn install
     ```

4. **Instale as dependências específicas do Android:**
   ```bash
   npx react-native doctor
   ```



## Execução

Para iniciar o aplicativo em um dispositivo ou emulador Android, siga as etapas abaixo:

1. Certifique-se de que o Android Studio esteja configurado corretamente, e que um emulador ou dispositivo físico esteja conectado.

2. Execute o comando abaixo para iniciar o aplicativo no Android:

   ```bash
   npx react-native run-android

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
/meu-bem-pudim
│
├── /android/                # Configurações específicas do Android
├── /ios/                    # Configurações específicas do iOS
├── /src/                    # Código fonte do aplicativo
│   ├── /components/         # Componentes reutilizáveis
│   ├── /screens/            # Telas do aplicativo
│   ├── /services/           # Serviços como API
│   ├── /assets/             # Imagens e arquivos estáticos
│   └── /navigation/         # Configuração de navegação
│
├── App.js                   # Ponto de entrada do aplicativo
├── package.json             # Arquivo de dependências do projeto
└── README.md                # Documentação do projeto
```

## Bibliotecas Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **React Navigation**: Navegação entre telas
- **AsyncStorage**: Armazenamento de dados local
- **SQLite**: Banco de dados local para persistência de dados
- **LinearGradient**: Efeitos de gradiente nas telas
- **ImageBackground**: Exibição de imagens de fundo nas telas

## Estilo de Código

O projeto utiliza um padrão simples de estilos globais com gradientes e imagens de fundo nas telas. Aqui está um exemplo de como os estilos são aplicados:

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
```

## Como Contribuir

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou fazer um pull request. Se você tiver sugestões ou melhorias, envie suas ideias e colaborações.

## Contato

Se você tiver alguma dúvida ou precisar de mais informações, entre em contato com:

**Eliab Arruda da Silva**  
Email: [eliabad20t@gmail.com](mailto:eliabad20t@gmail.com)

Obrigado por utilizar o app **Meu Bem Pudim!**