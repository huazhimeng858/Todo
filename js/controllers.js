/**
 * Created by Administrator on 2016/5/27.
 */
angular.module('myApp', []).controller('myAngularApp', function($scope,$interval,$http) {
    $scope.names = [
        {img:'todo/images/people.jpg',name:'张三',mac:'1'},
        {img:'todo/images/people.jpg',name:'李四',mac:'2'},
        {img:'todo/images/people.jpg',name:'王五',mac:'3'},
        {img:'todo/images/people.jpg',name:'张三',mac:'4'},
        {img:'todo/images/people.jpg',name:'李四',mac:'5'},
        {img:'todo/images/people.jpg',name:'王五',mac:'6'},
        {img:'todo/images/people.jpg',name:'张三',mac:'7'},
        {img:'todo/images/people.jpg',name:'李四',mac:'8'},
        {img:'todo/images/people.jpg',name:'王五',mac:'9'},
        {img:'todo/images/people.jpg',name:'张三',mac:'10'},
        {img:'todo/images/people.jpg',name:'李四',mac:'11'},
        {img:'todo/images/people.jpg',name:'王五',mac:'12'},
        {img:'todo/images/people.jpg',name:'张三',mac:'13'},
        {img:'todo/images/people.jpg',name:'李四',mac:'14'}
    ];
    $scope.register=false;
    $scope.currentitem = true;
    $scope.count=0;
    $scope.total=14;
    $scope.countRegister=function(){
        $scope.count++;
    };
    $scope.objects=new Object();

    //**随机抽三个人显示出来***///
    $scope.randomPeople=function(){
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
        console.log(num);
        for(var j=0;j<3;j++){
            $scope.objects[j]=$scope.names[num[j]];
        }
        console.log($scope.objects);
    };
    //$scope.randomPeople();
    $scope.seeMore=function(){
        $scope.names.call($scope.objects);
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

    $scope.finishRegister=function(item){
        //**判断数据如果mac地址出现的时候就将该mac地址对应的人员显示出来，当没人的时候将只显示3个人**///
        //for(var p in $scope.names){
        //    if($scope.names[p].mac==$scope.myRegister.mac){
        //        $scope.names.splice(p, 1);
        //        //this.currentitem = false;
        //    }
        //}
        //**判断数据如果mac地址出现的时候就将该mac地址对应的人员显示出来，当没人的时候将只显示3个人---按钮实现**///
        $scope.register=true;
        console.log(this);
        this.currentitem = false;
        $scope.countRegister();
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