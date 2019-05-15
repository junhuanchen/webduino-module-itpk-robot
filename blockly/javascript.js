Blockly.JavaScript['itpk_robot'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = itpk_create();;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['itpk_ask'] = function(block) {
  var variable_itpk = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('itpk'), Blockly.Variables.NAME_TYPE);
  var value_question = Blockly.JavaScript.valueToCode(block, 'question', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.ask({1});\n".format(variable_itpk, value_question);;
  return code;
};

Blockly.JavaScript['itpk_clear'] = function(block) {
  var variable_itpk = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('itpk'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.answer()".format(variable_itpk);
  return code;
};

Blockly.JavaScript['itpk_answer'] = function(block) {
  var variable_itpk = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('itpk'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = "{0}.clear()".format(variable_itpk);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};