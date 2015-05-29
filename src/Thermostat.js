function Thermostat() {
  this.temperature = 20;
  this.powerSaveMode = true;
};

Thermostat.prototype.up = function() {
  if (this.powerSaveMode == true && this.temperature<25) {
    this.temperature ++ ;
  }
  else if(this.powerSaveMode == false && this.temperature<32) {
    this.temperature ++;
  }
};

Thermostat.prototype.down = function() {
  this.temperature -- ;
};

Thermostat.prototype.powerSave = function() {

  if(this.powerSaveMode == true) {
      this.powerSaveMode = false;
    }
    else
    {
      this.powerSaveMode = true;
      if(this.temperature > 25) {
        this.temperature = 25;
      };
    };
  };
  
Thermostat.prototype.resetButton = function() {
      this.temperature = 20;
};
