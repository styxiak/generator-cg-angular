(function () {
    'use strict';

    angular
        .module('<%= _.camelize(name) %>', [
            'ui.bootstrap',
            'ui.utils',
            '<%= routerModuleName %>',
            'ngAnimate']);

    angular
        .module('appConfig')
        .config(configure);

    <% if (!uirouter) { %>
    function configure($routeProvider) {

        /* Add New States Above */

    } //function configure
    <% } %><% if (uirouter) { %>
        function configure($stateProvider) {

            /* Add New States Above */

        } //function configure

    <% } %>
})();
