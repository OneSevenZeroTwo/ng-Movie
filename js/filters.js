;
(function() {
    var filters = angular.module('filters', []);
    filters.filter('html', ['$sce',function($sce) {
        return function(input) {
            return $sce.trustAsHtml(input);
        }
    }]);
    filters.filter('toNum', [function() {
        return function(input) {
            return (input+'000')*1;
        }
    }]);
    filters.filter('shortTitle', [function() {
        return function(input) {
            if(input.length>6){
                return input.slice(0,6)+'...'
            }else{
                return input
            }
        }
    }]);
})();
