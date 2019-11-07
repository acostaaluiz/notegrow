import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { WhiteBackground, Title, ImageBackground } from './LoginTemplate.styled';
import { Input, Button, Image, StatusBarComponent } from '../../atoms';


interface LoginTemplateProps {
  onSubmit: (username: string, password: string) => void;
}

function LoginTemplate({ onSubmit }: LoginTemplateProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameInput = useRef<TextInput>();

  const submit = () => {
    if (!username || (username && !username.length)) {
      usernameInput.current!.focus();
      return;
    }
    onSubmit(username, password);
  };

  return (
    <>
      <StatusBarComponent />
      <WhiteBackground>
        <View>
          <Image width="56px" height="16px" name="logo" />
          <Title>Digite seu CPF para começar</Title>
          <Input
            style={{ marginTop: 50 }}
            value={username}
            autoCapitalize="none"
            autoFocus
            onChangeText={text => setUsername(text)}
            placeholder="000.000.000-00"
            onSubmitEditing={submit}
            innerref={usernameInput}
          />
          <Button
            style={{ marginTop: 36, marginBottom: 300, alignSelf: "flex-end" }}
            icon={"arrow-forward"}
            onPress={submit} />
        </View>
        <ImageBackground>
          <Image name="abstract1" width="360" height="238" />
        </ImageBackground>
      </WhiteBackground>

    </>
  );
}

LoginTemplate.defaultProps = {
  pending: false,
  onSubmit(username: string) { },
} as Partial<LoginTemplateProps>;

export default LoginTemplate;
