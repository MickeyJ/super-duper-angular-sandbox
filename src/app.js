import angular from 'angular'
import 'angular-ui-router'

import HomeController from './Home/home_controller'
import InfoController from './Info/info_controller'
import Router from './router'

angular.module('app', ['ui.router'])
  .controller( 'HomeController', HomeController )
  .controller( 'InfoController', InfoController )
  .config( Router );
