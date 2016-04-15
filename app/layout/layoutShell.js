/**
 * Created by rwarner on 4/7/16.
 */
(function() {
    angular
        .module('app.layoutShell', ['ngMaterial', 'ngComponentRouter', 'ngMaterial'])
        .component('layoutShell', {
            templateUrl: 'layout/layoutShell.html',
            controller: function () {
                console.log('loaded');
            }
        });
})();