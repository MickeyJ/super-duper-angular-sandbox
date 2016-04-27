
export default (
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) =>{

      require('./style/main.scss');

      $stateProvider
        .state('home', {
          url: '/',
          scope: {},
          template: require('./Home/home_page.html'),
          controllerAs: 'vm',
          controller: 'HomeController'
        });
      
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true)
    }
  ]
);