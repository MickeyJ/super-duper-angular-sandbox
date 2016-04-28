
export default (
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) =>{

      $stateProvider
        .state('home', {
          url: '/',
          scope: {},
          template: require('./components/home/home.html'),
          controllerAs: 'home',
          controller: 'HomeController'
        });
      
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      console.log(process.env.NODE_ENV);
    }
  ]
);