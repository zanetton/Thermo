thermostat = new Thermostat

$(document).ready(function() {

  $('#Up').click(function() {
    thermostat.up();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour() });
  });

  $('#Down').click(function() {
    thermostat.down();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour() });
  });

  $('#Reset').click(function() {
    thermostat.resetButton();

    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour() });
  });

  $('#PowerSave').click(function() {
    thermostat.powerSave();
    $('#temp').html(thermostat.temperature);
    $('body').css({backgroundColor: thermostat.colour() });
  });



});
