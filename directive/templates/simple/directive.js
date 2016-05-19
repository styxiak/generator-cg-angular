(function () {
    'use strict';

    angular
        .module('<%= appname %>')
        .directive('<%= name %>', <%= name %>);

    function <%= name %>(input, arg) {
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link(scope, element, attrs, fn) {

        }
    } //function <%= name %>

})();
