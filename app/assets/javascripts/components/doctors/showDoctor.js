angular
  .module('doctorApp')
  .component('showDoctor', {
  templateUrl: 'doctors/showDoctor.template.html',
  controller: ShowDoctorController,
  controllerAs: 'ctrl'
});

ShowDoctorController.$inject = ['$http', '$stateParams'];

function ShowDoctorController($http, $stateParams) {
  var vm = this;

  vm.doctor = {};

  $http.get('/api/doctors/' + $stateParams.id).then(function(resp) {
    vm.doctor = resp.data;
  });
}
