/**
 * Created by Administrator on 2016/5/27.
 */
angular.service('myAngularApp', function($route, $location, $window) {

    $route.when('/main', {template: 'main.html', controller: App.Controllers.TodoController});
    $route.when('/credits', {template: 'credits.html'});
    $route.otherwise({redirectTo: '/main'});

    var self = this;

    self.$on('$afterRouteChange', function(){
        $window.scrollTo(0,0);
    });

}, {$inject:['$route', '$location', '$window'], $eager: true});
