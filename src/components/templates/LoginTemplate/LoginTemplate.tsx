import React, { useState, useRef } from 'react';
import { Button, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { Input, CloseKeyboard } from '../../atoms';

interface LoginTemplateProps {
  pending: boolean;
  onSubmit: (username: string, password: string) => void;
}

function LoginTemplate({ pending, onSubmit }: LoginTemplateProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameInput = useRef<TextInput>();
  const passwordInput = useRef<TextInput>();

  const submit = () => {
    if (!username || (username && !username.length)) {
      usernameInput.current!.focus();
      return;
    }
    if (!password || (password && !password.length)) {
      passwordInput.current!.focus();
      return;
    }
    onSubmit(username, password);
  };

  return (
    <CloseKeyboard>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          paddingTop: 50,
          width: '100%',
          paddingLeft: 20,
          paddingRight: 20,
        }}
        behavior="padding">
        <Text
          style={{
            fontSize: 24,
            marginBottom: 40,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Votorantim Cimentos
        </Text>
        <Input
          value={username}
          autoCapitalize="none"
          autoFocus
          onChangeText={text => setUsername(text)}
          placeholder="Usuário"
          onSubmitEditing={submit}
          innerref={usernameInput}
          style={{ marginBottom: 10 }}
        />
        <Input
          innerref={passwordInput}
          value={password}
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          placeholder="Senha"
          onSubmitEditing={submit}
          style={{ marginBottom: 10 }}
        />
        <Button title="Login" onPress={submit} disabled={pending} />
        {pending && <Text>Carregando...</Text>}
      </KeyboardAvoidingView>
    </CloseKeyboard>
  );
}

LoginTemplate.defaultProps = {
  pending: false,
  onSubmit(username: string, password: string) {},
} as Partial<LoginTemplateProps>;

export default LoginTemplate;
