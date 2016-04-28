import angular from 'angular'
import 'angular-ui-router'
import './style/main.scss'

import HomeController from './components/home/home'
import Router from './router'

angular.module('app', ['ui.router'])
  .controller( 'HomeController', HomeController )
  .config( Router );

