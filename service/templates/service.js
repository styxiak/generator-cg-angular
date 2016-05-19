(function () {
    angular
        .module('<%= appname %>')
        .factory('<%= name %>', <%= name %>);

    function <%= name %>() {
        var service = {};

        initialize();
        return service;

        // ----- Functions

        function initialize() {

        }

    } // function <%= name %>

})();
