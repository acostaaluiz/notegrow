import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { WhiteBackground, Title } from './LoginTemplatePassword.styled';
import { Input, Button, Image, StatusBarComponent } from '../../atoms';
import { ErrorInterface } from '../../../models/error';
import dataChecker from '../../../utils/dataChecker';

interface LoginTemplatePasswordProps {
  pending: boolean;
  error?: string;
  onSubmit: (password: string) => void;
}

function LoginPasswordTemplate({
  pending,
  error,
  onSubmit,
}: LoginTemplatePasswordProps) {
  const [password, setPassword] = useState('');
  const usernameInput = useRef<TextInput>();
  const passwordInput = useRef<TextInput>();

  const submit = () => {
    if (!password || (password && !password.length)) {
      passwordInput.current!.focus();
      return;
    }
    onSubmit(password);
  };

  return (
    <>
      <StatusBarComponent />
      <WhiteBackground>
        <View>
          <Image width="56px" height="16px" name="logo" />
          <Title>Digite sua senha</Title>
          <Input
            style={{ marginTop: 50 }}
            value={password}
            autoCapitalize="none"
            autoFocus
            onChangeText={text => setPassword(text)}
            placeholder="senha"
            onSubmitEditing={submit}
            innerref={usernameInput}
            textContentType="password"
            secureTextEntry
            error={error}
          />
          <Button
            style={{ marginTop: 36, marginBottom: 300, alignSelf: 'flex-end' }}
            icon={'arrow-forward'}
            onPress={submit}
          />
        </View>
      </WhiteBackground>
    </>
  );
}

LoginPasswordTemplate.defaultProps = {
  pending: false,
  onSubmit(username: string, password: string) {},
} as Partial<LoginTemplatePasswordProps>;

export default LoginPasswordTemplate;
