/* @namespace controller
 * @desc Validate controller module - to validate the content of sign up and sign in page.
 * to write logic to display of angular error messages.
 * if validated succesfully, use user information and create database of record of user
 *
 * @desc : scope is heap area 
 *        $scope is a method to access variables define in scope.
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
 		
 		/* @desc : to define list of functions exposed in the view and can be accessed 
 		 *       in html form model
 		 */
 		$scope.submitForm = submitForm;
 		

 		///////
 		/* Implementation Details Starts Below */
 		
 		/* this is binding member of controller. When user submits signupForm, it passes control
 		 * to this function. Two way data binding of model & view
		 * let's deep dive into function definition and expression.
		 * @function : submitForm is used as function deifinition not funtion expression
		 * submitForm = function(form) is function expression. If we use this method , we would
		 * have ran into trouble (JavaScript Hoisting trouble)
		 * @tutorial : read more about it at :
		 *  bindable Members at top - https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#comments
		 *  Javascriupt hoisting issues - https://johnpapa.net/angular-function-declarations-function-expressions-and-readable-code/
 		 */
 		function submitForm(form){
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