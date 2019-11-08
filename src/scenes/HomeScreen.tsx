import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { doLogoff } from '../store/actions/LoginActions';
import { HomeTemplate } from '../components/templates';
import { AuthGuard } from '../components/utils';
interface HomeScreenProps {
  navigation: NavigationPageProp;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const login = useSelector(({ login }: AppState) => login.data);
  const dispatch = useDispatch();
  const onLogoff = () => doLogoff(dispatch);

  return (
    <AuthGuard navigation={navigation}>
      <HomeTemplate
        pageName={(navigation.state as any).routeName}
        login={login!}
        onLogoff={onLogoff}
      />
    </AuthGuard>
  );
}

export default HomeScreen;
