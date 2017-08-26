(function(){

	angular
		.module("service_module",[]);

	angular
		.module("service_module")	
		.service("userSignUpService",userSignUpService);

	userSignUpService.$inject = ['$http','$q'];
	
	function userSignUpService($http,$q){
		
		this.addUser = function(userDetails){
			$http.post('/user',userDetails)
				 .then(function(res){
				 	
				 	console.log('Add user response' 
				 		        + JSON.stringify(res.data)
				 		       );
				 	return $q.defer.resolve(res.data);
				 },function(err){
				 	
				 	console.log('Add user error' 
				 				+ JSON.stringify(err.status) 
				 				+ '' 
				 				+ JSON.stringify(err.statusText) 
				 				);	
				 	return $q.defer.reject(err);
			});
		};

		this.getUserById = function(userId){
			$http.get('user/' + userId)
				 .then(function(res){
				 	console.log('User details by id' 
				 		        + JSON.stringify(res.data)
				 		       );
				 	return res.data;
				 },function(err){
				 	console.log('Get user by id error' 
				 				+ JSON.stringify(err.status) 
				 				+ '' 
				 				+ JSON.stringify(err.statusText) 
				 				);
				 
				 });
		}



	}; 
	
	
		



	
})();