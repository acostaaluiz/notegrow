import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  WhiteBackground,
  Title,
  ImageBackground,
} from './LoginTemplate.styled';
import {
  Input,
  Button,
  Image,
  StatusBarComponent,
  LoadingModal,
} from '../../atoms';

interface LoginTemplateProps {
  loading: boolean;
  onSubmit: (username: string) => void;
}

function LoginTemplate({ onSubmit, loading }: LoginTemplateProps) {
  const [username, setUsername] = useState('');
  const usernameInput = useRef<TextInput>();
  const hasUsername = username && username.length;

  const submit = () => {
    if (!hasUsername) {
      usernameInput.current!.focus();
      return;
    }
    onSubmit(username);
  };

  return (
    <>
      <StatusBarComponent />
      {loading && <LoadingModal />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <WhiteBackground>
          <View>
            <Image width="56px" height="16px" name="logo" />
            <Title>Digite seu CPF para começar</Title>
            <Input
              style={{ marginTop: 50 }}
              value={username}
              autoCapitalize="none"
              onChangeText={text => setUsername(text)}
              placeholder="000.000.000-00"
              type="cpf"
              onSubmitEditing={submit}
              innerref={usernameInput}
            />
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginTop: 36,
              }}>
              <Button
                icon={'arrow-forward'}
                onPress={submit}
                disabled={!hasUsername}
              />
            </View>
          </View>
          <ImageBackground>
            <Image name="abstract1" width="360" height="151" />
          </ImageBackground>
        </WhiteBackground>
      </TouchableWithoutFeedback>
    </>
  );
}

LoginTemplate.defaultProps = {
  loading: false,
  onSubmit(username: string) {},
} as Partial<LoginTemplateProps>;

export default LoginTemplate;
