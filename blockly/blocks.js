Blockly.Blocks['itpk_robot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("robot public");
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['itpk_ask'] = {
  init: function() {
    this.appendValueInput("question")
        .setCheck("String")
        .appendField("robot")
        .appendField(new Blockly.FieldVariable("itpk"), "itpk")
        .appendField("ask");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['itpk_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("robot")
        .appendField(new Blockly.FieldVariable("itpk"), "itpk")
        .appendField("clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['itpk_answer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("robot")
        .appendField(new Blockly.FieldVariable("itpk"), "itpk")
        .appendField("answer");
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};