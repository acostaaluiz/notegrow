# Votorantim Cimentos

## Pré-Instalação

### Liberação de usuário root do Mac

Se você não tem a senha de root (para executar comandos **sudo**) no seu Mac, siga o passo a passo:

1. No menu superior, clique no menu Apple () > Preferências do Sistema > Usuários e Grupos.
2. Clique no cadeado, insira seu usuário e senha.
3. Na lista de usuários (seu usuário, usuários convidados), clique em Opções de Início (Login Options)
4. Em "Servidor de Contas de Rede", clique no botão "Conectar..." (Join)
5. Clique em "Abrir Utilitário de Diretório..." (Open Directory Utility)
6. Na janela de Utilitário de Diretório, clique no cadeado e insira seu usuário e senha
7. Com o cadeado liberado, no menu superior clique em Editar (Edit) > Ativar Usuário Root (Enable Root User)
8. Insira a sua senha de root

Pronto! Você já pode executar comandos sudo!

### Instalação básica

#### Homebrew

Siga o [guia de instalação do Homebrew](https://brew.sh/)

#### Xcode

Instale o Xcode pela AppStore

#### Android Studio

Instale o [Android Studio no site oficial](https://developer.android.com/studio). Escolha **Custom** e selecione:

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM) (See here for AMD)
- Android Virtual Device

Quando finalizar, incialize o Android Studio, no prompt inicial, clique em **"Configure"** e selecione **"SDK Manager"** e instale o **Android 9 (Pie)** (verificando se o `Android SDK Platform 28` e `Intel x86 Atom_64 System Image` / `Google APIs Intel x86 Atom System Image` estão selecionados)

Clique em Apply para instalar.

##### Variáveis de ambiente do Android Studio

Nas configurações do seu terminal `~/.bash_profile`, `~/.bashrc` ou `~/.zshrc`, insira as seguintes linhas:

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### N

O N é um gerenciador de versão do NodeJS.
Vamos executar o comando de instalação pelo N-Install:

```sh
curl -L https://git.io/n-install | bash
```

O N-Install faz alterações no `~/.bash_profile` ou `~/.bashrc`, se você utiliza algum outro terminal diferente do bash (como o zsh), replique as alterações nos arquivos de configuração do seu terminal.

O N-Install já instala a versão LTS do NodeJS.

#### Yarn

O Yarn é um gerenciador de pacotes do NodeJS (igual ao NPM, mas é o recomendado pelo Facebook, o desenvolvedor do React Native)

Execute o comando

```sh
brew install yarn
```

#### React Native Cli

```
yarn global add react-native-cli
```

#### Dependências do React Native

```sh
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

#### VsCode

Instale o [VsCode pelo site oficial](https://code.visualstudio.com/download), abra a pasta do projeto nele.

Com isso, abra a aba de extensões e instale as extensões recomendadas (Prettier, Eslint, EditorConfig, etc...)

## Instalação

Para instalar as dependências do projeto, execute:

```
yarn install
```

e rode o comando

```
yarn pod:install
```

## Rodando o projeto

### Executando no emulador

#### iOS

`yarn ios`

#### Android

Com um emulador rodando pelo AVD, execute
`yarn android`

## Scripts

### Generator

O gerador de arquivos utiliza o Hygen para criar componentes, reducers, scenes, através do prompt de comando.

Temos os seguintes comandos:

#### Gerar componentes Atom Design

`yarn generate component new`

Ele gerará o componente para você e incluirá na dependência do tipo de componente que você escolheu.

## Desenvolvendo

### Variáveis de ambiente

Utilizamos o `react-native-config` para configurarmos as variáveis de ambiente de desenvolvimento e de produção.

Por padrão, o projeto lê o arquivo `.env`. Para alteramos o ambiente, devemos setar a variável `ENVFILE` antes de executarmos o `yarn ios` ou `yarn android`, ou mesmo antes de buildarmos o projeto. Dessa seguinte forma:

```
# Staging
ENVFILE=.env.staging react-native run-ios

# Production
ENVFILE=.env.production react-native run-ios
```

## Build

### Android

#### 1 - Atualize a versão da aplicação

Atualize os campos versionCode e versionName nos arquivo de configuração do Gradle: /android/app/build.gradle

```
...
defaultConfig {
        applicationId "com.react_native_starter_kit"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
    }
...
```

#### 2 - Generate AAP file

Rode os seguintes commandos no terminal:

```
cd android
./gradlew bundleRelease
```

O arquivo AAB pode ser encontrado no seguinte caminho: android/app/build/outputs/bundle/release/app.aab.

### iOS

O processo de build do iOS pode ser encontrado na [site da documentação do React Native](https://facebook.github.io/react-native/docs/running-on-device)

## Estrutura

### Dependências principais

- react

  - Biblioteca de criação de interface

- react-native

  - A biblioteca de criação de aplicativos nativos usando React

- redux

  - Biblioteca de gerenciamento de estados da aplicação

- react-redux

  - Integração do Redux no React

<!-- - redux-thunk

  - Habilita executar comandos assíncronos no Redux -->

- typescript

  - Checagem de tipagem e superconjunto de novas features do JS

- react-native-config

  - Gerenciamento de variáveis de ambiente para cada ambiente

- i18n-js

  - Biblioteca de internacionalização e de tradução de conteúdo

- react-native-localize

  - Biblioteca que expõe a API de internacionalização nativa para o React

<!-- - react-native-gesture-handler

  - Biblioteca que expõe a API de gestos para o React -->

<!-- - react-native-vector-icons

  - Ícones Open Source e customizáveis para React Native -->

- hygen

  - Ferramenta para geração de código

### Estrutura de arquivos

#### Raiz

```
.
├── __tests__/                      # Testes automatizados
├── android/                        # Configurações e Código nativo para Android
├── ios/                            # Configurações e Código nativo para iOS
├── src/                            # Código fonte do projeto
├── .editorconfig                   # Arquivo de configuração padrão dos editores
├── .eslintrc.js                    # Configuração do Eslint
├── .flowconfig                     # Configuração do Flow
├── .gitattribuites                 # Git attributes
├── .gitignore                      # Arquivos e diretórios ignorados no commit
├── .watchmanconfig
├── App.js                          # Ponto inicial da aplicação
├── app.json                        # Algumas constantes de texto da aplicação
├── babel.config.js                 # Configuração do Babel
├── index.js                        # Registro da aplicação
├── jest.config.js                  # Configuração do Jest
├── metro.config.js                 # Configuração do Metro
├── package.json                    # Dependências e scripts do projeto
└── README.md                       # Documentação do projeto
```

#### Pasta src/

```
.
├── assets/                        # Pasta de assets estáticos
│   ├── img/                       # Pasta de imagens
│   │   └── *.{png,jpg,svg}        # arquivos de imagens
│   └── images.js                  # Expõe as imagens para o projeto
├── components/                    # Componentes do padrão Atom Design
│   ├── atoms/
│   ├── commons/
│   ├── molecules/
│   ├── organisms/
│   ├── organisms/
│   └── templates/
├── constants/                      # Textos e constantes do projeto
├── locales/                        # Arquivos de internacionalização
│   ├── [locale]/                   # Pasta com o conteúdo de uma região
│   │   ├── index.js                # Recebe o conteúdo traduzido
│   │   └── [name].js               # Conteúdo traduzido
│   └── index.js                    # Exporta todas as localizações
├── router/                         # Configuração de roteamento
├── scenes/                         # Contêineres de páginas
├── store/                          # Arquivos da store do Redux store
└── utils/                          # Arquivos de utilitários, como o serviço de API
```

<!-- ├── stacks/                         # Stacks de navigação -->
<!-- ├── themes/                         # Estilos de temas e configurações -->
<!-- ├── styles/                         # Estilizações globais -->
