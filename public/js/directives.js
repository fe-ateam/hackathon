angular.module('app')

.directive('inputFields', function() {
   	return {
    	restrict: 'AE'
    	,
    	scope: {
			fieldInfo: '=fieldInfo'
		}
		,
		template: '<label for="{{ fieldInfo.fieldName }}">{{ fieldInfo.fieldLabel }}</label>'
					+ '<input numbers-only name="{{ fieldInfo.fieldName }}" id="{{ fieldInfo.fieldName }}" type="{{ fieldInfo.fieldType }}" ng-model="fieldInfo.fieldValue" max="{{ fieldInfo.max }}" min="{{ fieldInfo.min }}"/>'
					+ '<span class="error" ng-show="agesForm.input.$error.required">Required!</span>'
					+ '<span class="error" ng-show="agesForm.input.$error.number">Not valid number!</span>'
		,
		link: function() {
			
		}
  	};
})

.directive('numbersOnly', function(){
	return {
		require: 'ngModel'
		,
		scope:{
			max : '@max',
			min : '@min'
		}
		,
		link: function(scope, element, attrs, mainController) {
			mainController.$parsers.push(function (inputValue) {
				// this next if is necessary for when using ng-required on your input. 
				// In such cases, when a letter is typed first, this parser will be called
				// again, and the 2nd time, the value will be undefined
				console.log("inputValue: '" + inputValue + "'");
				console.log("scope.max" + scope.max)
				if (inputValue == undefined) return '' 
				var transformedInput = inputValue.replace(/[^0-9]/g, '');

				if (transformedInput!=inputValue) {
					console.log("going to update value to " + transformedInput);
					mainController.$setViewValue(transformedInput);
					mainController.$render();
				}         

				if (parseInt(inputValue) <= parseInt(scope.min))
				{
					mainController.$setValidity('numbersOnly', false);
				}
				if (parseInt(inputValue) >= parseInt(scope.max))
				{
					mainController.$setValidity('numbersOnly', false);
				}
				return transformedInput;         
			});
		}
	};
});

/*
		template: 'Hello {{ fieldName }} = "{{ fieldValue }}"'
			+ '<span class="error" ng-show="agesForm.input.$error.required">'
			+ 'Required!</span>'
				+ '<span class="error" ng-show="agesForm.input.$error.number">'
				+ 'Not valid number!</span>'
			,
		link: function (socpe, element, attrs) {
			scope.$watch('fieldValue', function(){
				updateFields();
			});

			function updateFields() {
				FieldsService.put(scope.fieldName, scope.fieldValue);
			}
			
		}
*/