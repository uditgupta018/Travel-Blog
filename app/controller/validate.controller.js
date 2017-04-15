(function(){

	angular
		.module("controller_module",[])
		.controller("validateCtrl",validateCtrl);

	function validateCtrl($scope){
		$scope.submitted = false;

		$scope.isUsernameValid = true;
		$scope.isEmailValid = true;
		$scope.isPasswordValid = true;
		$scope.isRePasswordValid = true;
		$scope.isPasswordMatched = true;
 		
 		$scope.user = {};
 		
 		function validateForm(){
 			if(form.name.$untouched || form.name.$invalid){
				$scope.isUsernameValid = false;
			} else{
				$scope.isUsernameValid = true;
			}

			if(form.email.$untouched || form.email.$invalid){
				$scope.isEmailValid = false;
			} else{
				$scope.isEmailValid = true;
			}

			if(form.password.$untouched || form.password.$invalid){
				$scope.isPasswordValid = false;
			} else{
				$scope.isPasswordValid = true;
			}

			if(form.repassword.$untouched || form.repassword.$invalid){
				$scope.isRePasswordValid = false;
			} else{
				$scope.isRePasswordValid = true;
			}

			if(form.password.$valid && ($scope.user.password === $scope.user.repassword)){
				$scope.isPasswordMatched = true;
			} else{
				$scope.isPasswordMatched = false;
			}

			if($scope.isUsernameValid && $scope.isEmailValid && $scope.isPasswordValid && $scope.isRepasswordValid
			   && $scope.isPasswordMatched){
				return true;
			}

 		};

		$scope.submitForm = function(form){
			$scope.submitted = true;
			console.log(form.name)
			
		}

	}

})();