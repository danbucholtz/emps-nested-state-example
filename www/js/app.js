angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('menu.tabs', {
      url: "/tabs",
      abstract: true,
      views: {
        'content@menu' :{
          templateUrl: "templates/tabs.html",
        }
      }
    })
    .state('menu.tabs.home', {
      url: "/home",
      abstract: true,
      views: {
        'home-tab@menu.tabs': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    }).state('menu.tabs.home.subview', {
      url: "/uiview",
      views: {
        'subview@menu.tabs.home': {
          templateUrl: "templates/uiview.html"
        }
      }
    })


    .state('menu.tabs.about', {
      url: "/about",
      views: {
        'about-tab@menu.tabs': {
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('menu.tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab@menu.tabs': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })




  $urlRouterProvider.otherwise("/menu/tabs/about");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
