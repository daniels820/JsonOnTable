/**
 * Created by Exam on 4/4/2017.
 */

app.controller('TableCtrl', function($scope, $http) {
    $scope.updateBool = false;
    var editindex = 0 ;
    $scope.sortType     = 'Name';
    $scope.sortReverse  = false;
    $scope.searchFish   = '';

    var people =  $.getJSON("test.json" , function(  data ) {
     return data;
    });
    function loadData () {
        var httpRequest = $http({
            method: 'POST',
            url: 'test.json',
            data: people

        }).success(function (data, status) {
            $scope.people = data;
        });
    }
    loadData();
    

    $scope.addNewRow = function(){
        $scope.addingNewRow = true ;
    };


    $scope.addRow = function(){

        $scope.people.push({ 'Name':$scope.name, 'Address': $scope.Address, 'Phone Number':$scope.PhoneNumber, 'Image URL':$scope.Img });
        $scope.name='';
        $scope.Address='';
        $scope.PhoneNumber='';
        $scope.Img='';
        $scope.addingNewRow = false ;




        var t = document.getElementsByTagName('table');
        console.log(t);


        //$scope.$apply();
        console.log($scope.people);
    };


    $scope.delete = function (person) {
        $scope.people.splice($scope.people.indexOf(person),1);
        // debugger;
        
    };

    $scope.editContent = function (p) {
        $scope.addingNewRow = false;
        $scope.updateBool = true;
        ExPerson = p;
        $scope.editablerow = '';
        $scope.editablerow = angular.copy(p);
    };

    $scope.saveData = function (editablerow) {
        // console.log(ExPerson );
        // console.log(editablerow);
        var index = $scope.people.indexOf(ExPerson);
        $scope.people[index] = angular.copy($scope.editablerow);
        // console.log($scope.people);
        $scope.cancel();
    };

    $scope.cancel = function(){
        $scope.addingNewRow = false;
        $scope.updateBool = false;
        $scope.editablerow = [];
    };

    $scope.reset = function () {
        $.getJSON( "assets/json/people.json" , function( data ) {
            console.log(data);
            $scope.people = data;


            var httpRequest = $http({
                method: 'DELETE',
                url: 'test.json',
                data: people

            }).success(function (data, status) {
                $scope.people = data;
            });


        });

    };

    //TODO validation media queries for toolbar 





    // $("#form").validate({
    //     rules: {
    //         "name": {
    //             required: true,
    //             minlength: 1
    //         },
    //         "email": {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         "name": {
    //             required: "Please, enter a name"
    //         },
    //         "email": {
    //             required: "Please, enter an email",
    //             email: "Email is invalid"
    //         }
    //     },
    //     submitHandler: function (form) { // for demo
    //         alert('valid form submitted'); // for demo
    //         return false; // for demo
    //     }
    // });







    //$scope.sort = "";
    ////$scope.reverse = "";
    //$scope.Sort = function(val)
    //{
    //    alert(val);
    //    if($scope.sort == val)
    //    {
    //        $scope.reverse = !$scope.reverse;
    //        //return;
    //    }
    //    $scope.sort = val;
    //    //$('th a i').each(function()
    //    //{
    //    //    //alert(this.className);
    //    //    $(this).removeClass().addClass('icon-sort');
    //    //});
    //
    //    if($scope.reverse)
    //    {
    //        $('th .'+val+' i').removeClass().addClass('icon-chevron-up');
    //    } else {
    //        $('th .'+val+' i').removeClass().addClass('icon-chevron-down');
    //    }
    //};

});