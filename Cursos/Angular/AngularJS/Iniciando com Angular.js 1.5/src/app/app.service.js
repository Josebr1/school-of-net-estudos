angular
  .module('app')
  .service('MathService', function(MathFactory) {

    this.sumService = MathFactory.sum;
    this.subService = MathFactory.sub;

  });
