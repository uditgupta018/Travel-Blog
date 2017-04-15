(function(){
	
	
	angular
		.module("app",["ngRoute","controller_module"])
		.config(config);

	function config($routeProvider){

	    $routeProvider
	    	.when('/',{
	   			template : 'Home page '
	    	})
	    	.when('/profile',{
   				templateUrl : 'app/pages/home.html'
   			})
   			.when('/favorites',{
				templateUrl : 'app/pages/home.html'
			})
			.when('/trendyArtickles',{
				'template'  : '<h1>My Hotel Booking Application </h1>'
			});

	};

	angular.module("app").run(function(){

	});

	
})();