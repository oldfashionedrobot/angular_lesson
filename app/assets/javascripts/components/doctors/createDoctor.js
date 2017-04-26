angular
  .module('doctorApp')
  .component('createDoctor', {
  templateUrl: 'doctors/createDoctor.template.html',
  controller: CreateDoctorController,
  controllerAs: 'ctrl'
});

CreateDoctorController.$inject = ['$http', '$state'];

function CreateDoctorController($http, $state) {
  var vm = this;

  vm.newDoctor = {
    name: '',
    photo_url: '',
    specialty: '',
    accepts_insurance: false
  };

  vm.createDoctor = function() {
    $http.post('/api/doctors', { doctor: vm.newDoctor }).then(function(resp) {
      $state.go('doctor_show', { id: resp.data.id });
    });
  };
}
