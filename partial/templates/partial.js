(function () {
    'use strict';

    angular
        .module('<%= appname %>')
        .controller('<%= ctrlname %>', <%= ctrlname %>);

    function <%= ctrlname %>($scope) {

        initialize();

        // ----- Functions

        function initialize() {

        }

    } //function <%= ctrlname %>

})();
