angular
  .module('doctorApp', ['templates', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  /**
   * Routes and States
   */
  $stateProvider
    .state('appointments', {
      url: '/appointments',
      component: 'appointmentsList'
    })
    .state('doctors', {
      url: '/doctors',
      component: 'doctorsList'
    })
    .state('doctor_new', {
      url: '/doctors/new',
      component: 'createDoctor'
    })
    .state('doctor_show', {
      url: '/doctors/:id',
      component: 'showDoctor'
    });

  // default fall back route
  $urlRouterProvider.otherwise('/doctors');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
