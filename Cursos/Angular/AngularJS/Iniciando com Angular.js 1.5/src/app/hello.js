angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory, MathService) {
      this.hello = 'Hello World!';

      this.person = {
        name: 'José',
        lastname: 'Antônio'
      };

      this.list =
        [
          {
            name: 'Jose',
            lastname: 'Silva'
          },
          {
            name: 'Jose',
            lastname: 'Silva'
          },
          {
            name: 'Jose',
            lastname: 'Silva'
          },
        ];

      this.alertMe = function () {
        alert(this.person.name + this.person.lastname);
      };

      this.sum = function (num1, num2) {
        return alert(MathService.sumService(num1, num2));
      };

      this.sub = function (num1, num2) {
        return alert(MathFactory.sub(num1, num2));
      };
    }
  });
