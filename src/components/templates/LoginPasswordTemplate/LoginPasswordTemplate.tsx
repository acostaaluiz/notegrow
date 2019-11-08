import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { WhiteBackground, Title } from './LoginTemplatePassword.styled';
import {
  Input,
  Button,
  Image,
  StatusBarComponent,
  LoadingModal,
} from '../../atoms';

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
  const passwordInput = useRef<TextInput>();
  const hasPassword = password && password.length;

  const submit = () => {
    if (!hasPassword) {
      passwordInput.current!.focus();
      return;
    }
    onSubmit(password);
  };

  return (
    <>
      <StatusBarComponent />
      {pending && <LoadingModal />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <WhiteBackground>
          <View>
            <Image width="56px" height="16px" name="logo" />
            <Title>Digite sua senha</Title>
            <Input
              containerStyle={{ marginTop: 50 }}
              value={password}
              autoCapitalize="none"
              autoFocus
              onChangeText={text => setPassword(text)}
              placeholder="senha"
              onSubmitEditing={submit}
              innerref={passwordInput}
              textContentType="password"
              secureTextEntry
              error={error}
            />
            <View
              style={{
                marginTop: 36,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Button
                icon="arrow-forward"
                disabled={!hasPassword}
                onPress={submit}
              />
            </View>
          </View>
        </WhiteBackground>
      </TouchableWithoutFeedback>
    </>
  );
}

LoginPasswordTemplate.defaultProps = {
  pending: false,
  onSubmit(username: string, password: string) {},
} as Partial<LoginTemplatePasswordProps>;

export default LoginPasswordTemplate;
