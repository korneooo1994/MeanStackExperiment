'use strict';

import LoginController from './login.controller';

export default angular.module('meanStackApp.login', [])
  .controller('LoginController', LoginController)
  .name;
