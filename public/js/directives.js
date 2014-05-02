angular.module('app')

.directive('inputFields', function() {
   	return {
    	restrict: 'AE'
    	,
    	scope: {
			fieldInfo: '=fieldInfo'
		}
		,
		template: '<label for="{{ fieldInfo.name }}">{{ fieldInfo.label }}</label>'
					+ '<input numbers-only name="{{ fieldInfo.name }}" id="{{ fieldInfo.name }}" type="{{ fieldInfo.type }}" ng-model="fieldInfo.value" max="{{ fieldInfo.max }}" min="{{ fieldInfo.min }}"/>'
					+ '<span class="error" ng-show="agesForm.input.$error.required">Required!</span>'
					+ '<span class="error" ng-show="agesForm.input.$error.number">Not valid number!</span>'
		,
		link: function(scope, element, attrs) {
			
		}
  	};
})

.directive('selectMultiFields', function() {
   	return {
    	restrict: 'AE'
    	,
    	scope: {
			fieldInfo: '=fieldInfo'
		}
		,
		template: '<label ng-repeat-start="answer in fieldInfo.answers" for="{{ fieldInfo.name }}">{{ answer.label }}</label>'
					+ '<input ng-repeat-end name="{{ fieldInfo.name }}" value="{{ answer.name }}" id="{{ answer.name }}" type="{{ fieldInfo.type }}"'
					+ ' ng-checked="answer.selected === true" ng-click="newValue(answer.name)"/>'
		,
		link: function(scope, element, attrs) {

			console.log("Starting Value: " +
				scope.fieldInfo.value);

			// removes all selected values from rootscope
			function clearSelectedValues()
			{
				scope.fieldInfo.value = [];
				for (var index in scope.fieldInfo.answers)
			    {
			    	scope.fieldInfo.answers[index].selected = false;
			    }
			}

			scope.newValue = function(value) {

				var element = angular.element( document.querySelector( "#" + value ) )
					selected = element.prop( "checked");

				// radio buttons do not allow for multiple selection
				if (element.attr("type") === "radio")
					clearSelectedValues();

				// update the individual items selected boolean
		     	for (var index in scope.fieldInfo.answers)
			     	if (scope.fieldInfo.answers[index].name === value)
			     		scope.fieldInfo.answers[index].selected = selected;

			    // update the list of selected values
			    if (selected)
			    {
			     	if (scope.fieldInfo.value.indexOf(value) < 0)
			     		scope.fieldInfo.value.push(value);
			    }
			    else
			    {
					var index = scope.fieldInfo.value.indexOf(value);
			     	if (index > -1) {
					    scope.fieldInfo.value.splice(index, 1);
					}
			    }
			}
		}
  	};
})

.directive('selectDropDownFields', function() {
   	return {
    	restrict: 'AE'
    	,
    	scope: {
			fieldInfo: '=fieldInfo'
		}
		,
		template: '<label for="{{ fieldInfo.name }}">{{ fieldInfo.label }}</label>'
					+ '<select name="{{ fieldInfo.name }}" id="{{ fieldInfo.name }}" ng-model="fieldInfo.value" ng-change="newValue(value)">'
					+ '	<option ng-repeat="answer in fieldInfo.answers" ng-selected="fieldInfo.value ===  answer.name" value="{{ answer.value }}" >{{ answer.label }}</option>'
					+ '</select>'
		,
		link: function(scope, element, attrs) {
			scope.newValue = function(value) {
			     console.log(value);
			}
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

				var isValid = true;
				if (parseInt(inputValue) <= parseInt(scope.min))
				{
					isValid = false;
				}
				if (parseInt(inputValue) >= parseInt(scope.max))
				{
					isValid = false;	
				}
				mainController.$setValidity('numbersOnly', isValid);

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