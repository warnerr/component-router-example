(function() {
    var app = angular.module('app', ['oc.lazyLoad', 'ngComponentRouter', 'ngMaterial'])
        .config(function ($mdIconProvider, $mdThemingProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('yellow');
            $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey');

        })
        .value('$routerRootComponent', 'app')
        .component('app', {
            controller: ['$rootRouter', '$ocLazyLoad', function ($router, $ocLazyLoad) {
            
            $router.config([
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    useAsDefault: true,
                    loader: function () {
                        return $ocLazyLoad.load('dashboard/dashboard.component.js')
                            .then(function () {
                                return 'dashboard';
                            });
                    }
                },
                {
                    path: '/security', 
                    name: 'Security',
                    loader: function () {
                        return $ocLazyLoad.load('security/security.component.js')
                            .then(function () {
                                return 'security';
                            });
                    }
                },
                {path: '/jobs', name: 'Jobs', component: 'jobs'},
                {path: '/devices', name: 'Devices', component: 'devices'},
                {
                    path: '/user/...',
                    name: 'User',
                    loader: function () {
                        // lazy load the user module
                        return $ocLazyLoad.load('security/user.js')
                            .then(function () {
                                // return the user component name
                                return 'user';
                            });
                    }
                }
            ]);
        }]
    });
    app.component('jobs', {
        template: 'Jobs'
    });

    app.component('devices', {
        template: 'Devices'
    });
})();