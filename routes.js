(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Define states
  $stateProvider
    // Home state
    .state('home', {
      url: '/',
      templateUrl: 'home.template.html'
    })
    // Categories state
    .state('categories', {
      url: '/categories',
      template: '<categories items="$resolve.categories"></categories>',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    // Items state
    .state('items', {
      url: '/items/{categoryShortName}',
      template: '<items items="$resolve.items"></items>',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
}

})();