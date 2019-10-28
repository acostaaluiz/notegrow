import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { logoffUser } from '../store/actions/UserActions';
import { HomeTemplate } from '../components/templates';
import { AuthGuard } from '../components/utils';
interface HomeScreenProps {
  navigation: NavigationPageProp;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const user = useSelector(({ user }: AppState) => user.data);
  const dispatch = useDispatch();
  const onLogoff = () => logoffUser(dispatch);

  return (
    <AuthGuard navigation={navigation}>
      <HomeTemplate
        pageName={(navigation.state as any).routeName}
        user={user!}
        onLogoff={onLogoff}
      />
    </AuthGuard>
  );
}

export default HomeScreen;
