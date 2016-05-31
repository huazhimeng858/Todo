/**
 * Created by Administrator on 2016/5/27.
 */
angular.module('myApp', []).controller('myAngularApp', function($scope,$interval,$http) {
    $scope.names = [
        {img:'todo/images/people.jpg',name:'张三',mac:'1',register:false},
        {img:'todo/images/people.jpg',name:'李四',mac:'2',register:false},
        {img:'todo/images/people.jpg',name:'王五',mac:'3',register:false},
        {img:'todo/images/people.jpg',name:'张三',mac:'4',register:false},
        {img:'todo/images/people.jpg',name:'李四',mac:'5',register:false},
        {img:'todo/images/people.jpg',name:'王五',mac:'6',register:false},
        {img:'todo/images/people.jpg',name:'张三',mac:'7',register:false},
        {img:'todo/images/people.jpg',name:'李四',mac:'8',register:false},
        {img:'todo/images/people.jpg',name:'王五',mac:'9',register:false},
        {img:'todo/images/people.jpg',name:'张三',mac:'10',register:false},
        {img:'todo/images/people.jpg',name:'李四',mac:'11',register:false},
        {img:'todo/images/people.jpg',name:'王五',mac:'12',register:false},
        {img:'todo/images/people.jpg',name:'张三',mac:'13',register:false},
        {img:'todo/images/people.jpg',name:'李四',mac:'14',register:false}
    ];
    $scope.register=false;
    $scope.currentitem = true;
    $scope.count=0;
    $scope.total=14;
    $scope.currenttime=new Date();
    $scope.countRegister=function(){
        $scope.count++;
    };
    $scope.objects=new Object();
    //**随机抽三个人显示出来***///
    $scope.randomPeople=function(){
        ///**只用于生产三个随机数***///
        var num = new Array();
        for(var i = 0; i < 3; i++){
            var val =  Math.floor(Math.random() * $scope.total);
            var isEqu = false;
            for(var idx in num){
                if(num[idx] == val){isEqu = true; break;}
            }
            if(isEqu)
                i--;
            else
                num[num.length] = val;
        }
        for(var j=0;j<3;j++){
            $scope.objects[j]=$scope.names[num[j]];
        }
        num.length=0;
        console.log($scope.names);
    };
    $scope.randomPeople();
    $scope.seeMore=function(){
        $scope.objects =$scope.names;
    };
    $scope.currentPeople=function(){
        //$http.get("register.html").then(function (response) {
        //    $scope.myRegister = response.data;
        //    console.log($scope.myRegister);
        //});
        //
        //$scope.objects=$scope.myRegister;
        //console.log($scope.objects);


    };
    $scope.currentPeople();
    $scope.notRengister=function(){

    };
    $scope.finishRegister=function(item){
        for(var i=0;i<$scope.total;i++){
            if(item==$scope.names[i]){
                $scope.names.splice(i,1);
            }
        }
        $scope.total--;
        console.log($scope.names);
        console.log($scope.total);
        this.register=true;
        this.currentitem = false;
        $scope.currenttime=new Date();
        $scope.countRegister();
        if($scope.total>2){
            $scope.randomPeople();
            this.currentitem = true;
        }

    };
    //**每隔1s从后台取数据**//
    //$interval(function () {
    //    //$http.get("register.html").then(function (response) {
    //    //    $scope.myRegister = response.data;
    //    //    //console.log($scope.myRegister);
    //    //    $scope.finishRegister();
    //    //});
    //    $scope.randomPeople();
    //}, 1000);
});