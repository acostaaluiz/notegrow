import * as LoginActions from './LoginActions';
import * as LoginPasswordActions from './LoginPasswordActions';
import * as PreferencesActions from './PreferencesActions';

export default {
  ...LoginActions,
  ...LoginPasswordActions,
  ...PreferencesActions,
};
