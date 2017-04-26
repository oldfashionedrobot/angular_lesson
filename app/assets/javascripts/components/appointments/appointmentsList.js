angular
  .module('doctorApp')
  .component('appointmentsList', {
  templateUrl: 'appointments/appointmentsList.template.html',
  controller: AppointmentsListController,
  controllerAs: 'ctrl'
});

AppointmentsListController.$inject = ['$http'];

function AppointmentsListController($http) {

  var vm = this;

  vm.appointments = [];

  $http.get('/api/appointments').then(function(resp) {
    vm.appointments = resp.data;
  });
}
