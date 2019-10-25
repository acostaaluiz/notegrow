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
  const user = useSelector(({ user }: AppState) => user.data);
  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user]);

  if (!user) return null;

  return <>{children}</>;
}

export default AuthGuard;
