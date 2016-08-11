'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('meanStackApp.util', [])
  .factory('Util', UtilService)
  .name;
