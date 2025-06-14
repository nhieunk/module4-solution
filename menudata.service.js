(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  // Get all categories
  service.getAllCategories = function () {
    return $http({
      method: 'GET',
      url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
    }).then(function (response) {
      return response.data;
    });
  };

  // Get items for a specific category
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
    }).then(function (response) {
      return response.data;
    });
  };
}

})();