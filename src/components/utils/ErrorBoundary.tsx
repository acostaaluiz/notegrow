import React, { Component } from 'react';
import { View, Text } from 'react-native';

//https://pt-br.reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return (
        <View>
          <Text>Algo deu errado.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
