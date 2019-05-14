+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.itpk_create = function (itpk_name) {
    return "new webduino.module.RobotItpk('{0}')".format(itpk_name);
  }

  scope.itpk_ask = function (itpk_name, question) {
    return "{0}.ask({1})".format(itpk_name, question);
  }

  scope.itpk_answer = function (itpk_name) {
    return "{0}.answer()".format(itpk_name);
  }

  scope.itpk_clear = function (itpk_name) {
    return "{0}.clear()".format(itpk_name);
  }

}));
