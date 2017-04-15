/* @namespace controller
 * @desc Validate controller module - to validate the content of sign up and sign in page.
 * to write logic to display of angular error messages.
 * if validated succesfully, use user information and create database of record of user
 *
 *
 *
 */
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
 			
 		/* this is binding member of controller. When user submits signupForm, it passes control
 		 *  to this function
 		 */
 		$scope.submitForm = function (form){
			$scope.submitted = true;
			console.log(form.name);

			validateForm(form);
			
		}

		/* @desc : this function is to validate all the fields of bootstrap Sign up page form 
		 *         /pages/templates/sign-up.html
		 * @param form : it is bootstrap form variabler "<form name="signUpForm">, this is to 
		 *         access all form variables.
		 * @returns : this returns true value if all fields are validated succesfully 
		 * @memberof : $scope.submitForm (parent function)      
		 */
		function validateForm(form){
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
		

	}

})();