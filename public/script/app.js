
module.controller('AppController', function () {
    var scope = this;
    scope.name = 'Nati';
  });

module.controller('ContactUsCtr', ['$scope',function($scope){

  $scope.submit = function(){
    console.log($scope.fullname);
  }
}]);

module.controller('AddressCtr', ['$scope', function($scope){
 $scope.addresses = [
   {
     branchName: 'Cebu',
     address: 'Cebu City',
     TelephoneNum: ['12345','5312']
   },
	 {
		 branchName: 'Davao',
		 address: 'Davao City',
		 TelephoneNum: ['1231314','12312312']
	 }
 ];
}]);


module.directive('addresses', function() {
	return {
		templateUrl: './templates/addresses.html'
	};
});;
