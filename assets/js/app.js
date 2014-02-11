/* @codekit-prepend '../../vendor/jquery/jquery.js' */
/* @codekit-prepend '../../vendor/angular/angular.js' */
/* @codekit-prepend '../../vendor/fastclick/lib/fastclick.js' */



var app = angular.module('app', []);

app.run(function(){
	FastClick.attach(document.body);
})



.directive('codeBlock', ['$templateCache', function($templateCache){
	return {
		restrict:'E',
		template: function(el, attrs) {
			return '<pre><code class="language-'+attrs.language+'"></code></pre>';
		},
		link: function(scope, el, attrs) {
			var file = attrs.file;
			var template = $templateCache.get(file);
			if(template) {
				$('code', el).text(template);
				Prism.highlightElement($('code', el)[0]);
			} else {
				$.get(file, function(fileContent){
					$templateCache.put(file, fileContent);
					$('code', el).text(fileContent);
					Prism.highlightElement($('code', el)[0]);
				});
			}
			
		}
	};
}]);



!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
