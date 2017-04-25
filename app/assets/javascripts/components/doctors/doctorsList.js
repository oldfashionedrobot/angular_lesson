angular
  .module('doctorApp')
  .component('doctorsList', {
  templateUrl: 'doctors/doctorsList.template.html',
  controller: DoctorsListController,
  controllerAs: 'ctrl'
});

DoctorsListController.$inject = ['$http'];

function DoctorsListController($http) {

  var vm = this;

  vm.doctors = [];

  $http.get('/api/doctors').then(function(resp) {
    vm.doctors = resp.data;
  });
}
