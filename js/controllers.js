/**
 * Created by Administrator on 2016/5/27.
 */
angular.module('myApp', []).controller('myAngularApp', function($scope,$interval,$http) {
    $scope.names = [
        {img:'todo/images/people.jpg',name:'张一',mac:'1',time:'1'},
        {img:'todo/images/people.jpg',name:'李二',mac:'2',time:'2'},
        {img:'todo/images/people.jpg',name:'王三',mac:'3',time:'3'},
        {img:'todo/images/people.jpg',name:'张四',mac:'4',time:'4'},
        {img:'todo/images/people.jpg',name:'李五',mac:'5',time:'5'},
        {img:'todo/images/people.jpg',name:'王六',mac:'6',time:'6'},
        {img:'todo/images/people.jpg',name:'张七',mac:'7',time:'7'},
        {img:'todo/images/people.jpg',name:'李八',mac:'8',time:'8'},
        {img:'todo/images/people.jpg',name:'王九',mac:'9',time:'9'},
        {img:'todo/images/people.jpg',name:'张十',mac:'10',time:'10'},
        {img:'todo/images/people.jpg',name:'李十一',mac:'11',time:'11'},
        {img:'todo/images/people.jpg',name:'王十二',mac:'12',time:'12'},
        {img:'todo/images/people.jpg',name:'张十三',mac:'13',time:'13'},
        {img:'todo/images/people.jpg',name:'李十四',mac:'14',time:'14'}
    ];
    $scope.register=false;
    $scope.currentitem = true;
    $scope.count=0;
    $scope.total=14;
    $scope.currenttime=new Date();
    $scope.countRegister=function(){
        $scope.count++;
    };
    $scope.stringTime="2016-05-1 01:01:01";
    $scope.objects=new Array();
    $scope.user=new Array();
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
        console.log($scope.objects);
        if($scope.total>3){
            $scope.objects.splice(3,$scope.total-2);
        }
        num.length=0;
    };
    $scope.randomPeople();
    $scope.seeMore=function(){
        for(var i=0;i<$scope.total;i++){
            $scope.objects[i]=$scope.names[i];
        };
    };
    $scope.finishRegister=function(item){
        console.log($scope.names);
        for(var i=0;i<$scope.total;i++){
            if(item==$scope.names[i]){
                $scope.names.splice(i,1);
            }
        }
        $scope.total--;
        this.currentitem = false;
        item.time=new Date().getTime().toString();
        console.log(item);
        $scope.user.push(item);
        console.log($scope.user);
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