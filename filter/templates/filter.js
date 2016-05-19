(function () {
    'use strict';

    angular
        .module('<%= appname %>')
        .filter('<%= name %>', <%= name %>);

    function <%= name %>(input, arg) {

        return 'output';

    } //function <%= name %>

})();
