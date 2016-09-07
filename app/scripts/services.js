'use strict';

angular.module('confusionApp')
	.service('menuFactory', ['$resource','baseURL',function($resource,baseURL) {
	
		this.getDishes = function(){
			return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
		};
	}]);