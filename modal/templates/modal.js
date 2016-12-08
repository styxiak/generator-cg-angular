(function () {
    'use strict';

    angular
        .module('<%= appname %>')
        .controller('<%= ctrlname %>', <%= ctrlname %>);

    function <%= ctrlname %>($scope, $modalInstance) {
        $scope.ok = ok;
        $scope.cancel = cancel;

        initialize();

        // ----- Functions

        function initialize() {

        }

        function ok() {
            $modalInstance.close(true);
        }

        function cancel() {
            $modalInstance.dismiss('cancel');
        }


    } //function <%= ctrlname %>

})();
