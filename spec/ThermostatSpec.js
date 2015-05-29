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

describe("has an down button", function() {

    it("can decrease by 1 degree ", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("can decrease by 2 degrees ", function() {
      thermostat.down();
      thermostat.down();
      expect(thermostat.temperature).toEqual(18);
    });
  });
});
