/**
 * Created by Administrator on 2016/5/27.
 */
/**
 * Created by Administrator on 2016/5/27.
 */
var app=angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});
//angular.module('myApp', []).controller('myCtrl', function($scope) {
//    $scope.names = [
//        {name:'Jani',country:'Norway'},
//        {name:'Hege',country:'Sweden'},
//        {name:'Kai',country:'Denmark'}
//    ];
//});
//angular.module('myApp', []).controller('itemCtrl', function($scope) {
//    $scope.names = [
//        {img:'todo/images/people.jpg',name:'张三'},
//        {img:'todo/images/people.jpg',name:'李四'},
//        {img:'todo/images/people.jpg',name:'王五'}
//    ];
//});
//App.Controllers.RegisterController = function () {
//    var self = this;
//    //self.items = [
//
//
//
//    //self.addItem = function() {
//    //    self.items.
//    //};
//
//    self.finishRegister = function(item) {
//        item.register = true;
//        angular.Array.remove(self.items, item);
//    };
//
//    var countRegisters = function(register) {
//        return function() {
//            return angular.Array.count(self.items, function(x) {
//                return x.register === (register === "register");
//            });
//        }
//    };
//
//    self.remainingRegisters = countTodos("unregister");
//
//    self.finishedRegisters = countTodos("register");
//
//    self.hasFinishedRegisters = function() {
//        return self.finishedRegisters() > 0;
//    };
//
//    self.hasRegisters = function() {
//        return self.items.length > 0;
//    };
//
//    ///*
//    // The following code deals with hiding the hint *while* you are typing,
//    // showing it once you did *finish* typing (aka 500 ms since you hit the last key)
//    // *in case* the result is a non empty string
//    // */
//    //
//    //Rx.Observable
//    //    .FromAngularScope(self, "newTodo")
//    //    .SelectThenThrottledSelect(function(x){ return false; }, 500, function(x){ return x.length > 0; })
//    //    .ToOutputProperty(self, "showHitEnterHint");
//
//};
//App.Controllers.RegisterController.$inject = [];