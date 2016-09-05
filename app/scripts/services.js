'use strict';

angular.module('confusionApp')
	.service('menuFactory', ['$http','baseURL',function($http,baseURL) {
	
		this.getDishes = function(){
			return $http.get(baseURL+"dishes");
		};
		this.getDish = function (index) {
			return  $http.get(baseURL+"dishes/"+index);
		};
	}]);