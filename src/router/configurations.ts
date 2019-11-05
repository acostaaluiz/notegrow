import { CreateNavigatorConfig, NavigationStackRouterConfig, NavigationRoute, NavigationParams } from 'react-navigation';
import { NavigationStackConfig, NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';

export const noHeader: CreateNavigatorConfig<NavigationStackConfig, NavigationStackRouterConfig, NavigationStackOptions, NavigationStackProp<NavigationRoute<NavigationParams>, any>> = {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
