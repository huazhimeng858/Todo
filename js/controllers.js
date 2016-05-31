/**
 * Created by Administrator on 2016/5/27.
 */
angular.module('myApp', []).controller('myAngularApp', function($scope,$interval,$http) {
    $scope.names = [
        {img:'img/aa.jpg',name:'张一',mac:'1',time:'1'},
        {img:'img/aa.jpg',name:'李二',mac:'2',time:'2'},
        {img:'img/aa.jpg',name:'王三',mac:'3',time:'3'},
        {img:'img/aa.jpg',name:'张四',mac:'4',time:'4'},
        {img:'img/aa.jpg',name:'李五',mac:'5',time:'5'},
        {img:'img/aa.jpg',name:'王六',mac:'6',time:'6'},
        {img:'img/aa.jpg',name:'张七',mac:'7',time:'7'},
        {img:'img/aa.jpg',name:'李八',mac:'8',time:'8'},
        {img:'img/aa.jpg',name:'王九',mac:'9',time:'9'},
        {img:'img/aa.jpg',name:'张十',mac:'10',time:'10'},
        {img:'img/aa.jpg',name:'李十一',mac:'11',time:'11'},
        {img:'img/aa.jpg',name:'王十二',mac:'12',time:'12'},
        {img:'img/aa.jpg',name:'张十三',mac:'13',time:'13'},
        {img:'img/aa.jpg',name:'李十四',mac:'14',time:'14'}
    ];
    $scope.register=false;
    $scope.currentitem = true;
    $scope.count=0;
    $scope.init=true;
    $scope.number=$scope.total=14;
    $scope.k=0;
    $scope.complete = true;
    $scope.currenttime=new Date();
    $scope.countRegister=function(){
        $scope.count++;
    };
    $scope.objects=new Array();
    $scope.user=new Array();
    //**随机抽三个人显示出来***///
    $scope.randomPeople=function(){
        ///**只用于生产三个随机数***///
        if($scope.init){
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
            if($scope.total>3){
                $scope.objects.splice(3,$scope.total-2);
            }
            num.length=0;
        }else{
            for(var j=0;j<3;j++){
                $scope.objects[j]=$scope.names[j];
            }
            if($scope.total>3){
                $scope.objects.splice(3,$scope.total-2);
            }
        }

    };
    $scope.randomPeople();
    $scope.seeMore=function(){
        for(var i=0;i<$scope.total;i++){
            $scope.objects[i]=$scope.names[i];
        };
        $scope.seemorehide();
    };
    $scope.seemorehide=function(){
        $scope.morelist = true;
    };
    $scope.seemoreshow=function(){
        $scope.morelist = false;
    };
    $scope.completehide=function(){
        $scope.complete = true;
    };
    $scope.completeshow=function(){
        $scope.complete = false;
    };
    $scope.finishRegister=function(item){
        if($scope.total>3){
            $scope.seemoreshow();
        }else{
            $scope.seemorehide();
        }
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
        if($scope.total==0){
            $scope.completeshow();
        }
    };
    $scope.registerAgain=function(){
        $scope.count=0;
        $scope.completehide();
        $scope.init=false;
        $scope.total=$scope.number;
        for(var i=0;i<$scope.number;i++){
            $scope.names[i]=$scope.user[i];
        }
        $scope.user.splice(0,$scope.number);
        console.log($scope.user);
        $scope.currentpeople();
    };
    $scope.currentpeople=function(){
        for(var j=0;j<3;j++){
            $scope.objects[j]=$scope.names[j];
        }
        $scope.seemoreshow();
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