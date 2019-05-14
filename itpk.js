+(function (factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function (scope) {
    'use strict';

    var proto;
    var Module = scope.Module;
    var answer = "";

    function RobotItpk() {
        Module.call(this);
    }

    RobotItpk.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: RobotItpk
        }
    });

    
    proto.ask = function (question) {
        $.post("https://i.itpk.cn/api.php", {
            'question': question
        }, function (data) {
            console.log(data);
            answer = data;
        });
    }
    
    proto.clear = function () {
        answer = "";
    }

    proto.answer = function () {
        return answer;
    }

    scope.module.RobotItpk = RobotItpk;

}));

function unit_test() {
  itpk = (new webduino.module.RobotItpk());
  // console.log(itpk);
  itpk.ask('东莞天气如何？');
}

// unit_test();