'use strict';

import SignupController from './signup.controller';

export default angular.module('meanStackApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
