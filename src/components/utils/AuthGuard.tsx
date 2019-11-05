// Único elemento que pode se conectar com Redux
import React, { useEffect, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { NavigationPageProp } from '../../interfaces/navigation';

interface AuthGuardProps {
  navigation: NavigationPageProp;
}

function AuthGuard({
  navigation,
  children,
}: PropsWithChildren<AuthGuardProps>) {
  const login = useSelector(({ login }: AppState) => login.data);
  useEffect(() => {
    if (!login) {
      navigation.navigate('Login');
    }
  }, [login]);

  if (!login) return null;

  return <>{children}</>;
}

export default AuthGuard;
