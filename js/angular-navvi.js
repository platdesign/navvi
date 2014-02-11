angular.module('pd.navvi', [])
.directive('navvi', [function () {
	var counter=0;
	return {
		restrict: 'E',
		transclude:true,
		template:function(el, attrs){
			counter++;
			var id = attrs.name || 'navvi-' + counter + '-checkbox';
			return '\
			<div>\
				<input type="checkbox" id="'+ id +'" />\
				<label for="'+ id +'" class="burger"> Nav</label>\
				<ul ng-transclude>\
					\
				</ul>\
			</div>\
		';
		},
		replace:true,
		link: function (scope, el, attrs) {
			
			/*
				TODO: 
				- automatically close on focusout
				- ...
			*/

			
		}
	};
}]);