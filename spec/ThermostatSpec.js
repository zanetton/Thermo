describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a starting temperature", function() {
    expect(thermostat.temperature).toEqual(20);
  });

describe("has an up button", function() {

  it("can increase by 1 degree ", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("can increase by 2 degrees ", function() {
    thermostat.up();
    thermostat.up();
    expect(thermostat.temperature).toEqual(22);
    });
    it("can increase by 5 degrees in powersave mode", function() {
      for (i=1; i<6; i++) {
        thermostat.up();
      };
    expect(thermostat.temperature).toEqual(25);
    });
    it("can increase by 12 degrees if not in powersave mode", function() {
      for (i=1; i<13; i++) {
        thermostat.powerSaveMode = false;
        thermostat.up();
      };
    expect(thermostat.temperature).toEqual(32);
    });

  });

describe("has an down button", function() {

    it("can decrease by 1 degree", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("can decrease by 2 degrees", function() {
      thermostat.down();
      thermostat.down();
      expect(thermostat.temperature).toEqual(18);
    });

    it("can decrease by 10 degrees ", function() {
      for (i=1; i<11; i++) {
        thermostat.down();
      };
    expect(thermostat.temperature).toEqual(10);
    });

  });

  describe("has a reset button", function () {

    it("can set temperature to 20", function() {
      thermostat.resetButton();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("has colours relating to temperature",function (){

    it("is green at 18 degrees", function() {
      thermostat.temperature=18;
      thermostat.colour();
      expect(thermostat.colour).toEqual("green");
    });

    it("is yellow if 24 degrees", function() {
      thermostat.temperature=24;
      thermostat.colour();
      expect(thermostat.colour).toEqual("yellow");
    });

    it("is yellow if 26 degrees", function() {
      thermostat.temperature=26;
      thermostat.colour();
      expect(thermostat.colour).toEqual("red");
    });

  });

});
