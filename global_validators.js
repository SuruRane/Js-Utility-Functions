(function() {
  var JsValidators;

  JsValidators = function() {};

  JsValidators.prototype.checkPhoneLength = function(string) {
    var regex;
    regex = /^\d{10,12}$/;
    return regex.test(string);
  };

  JsValidators.prototype.isEmpty = function(string) {
    if (string && !string.trim()) {
      return true;
    }
    return false;
  };

  JsValidators.prototype.checkPastDate = function(date_value) {
    var date, formatted_new_date, formatted_today, month, new_date, today;
    today = new Date();
    date = today.getDate();
    month = today.getMonth();
    if (today.getDate() < 10) {
      date = '0' + today.getDate();
    }
    if (today.getMonth() < 10) {
      month = '0' + today.getMonth();
    }
    formatted_today = today.getFullYear() + '-' + month + '-' + date;
    new_date = new Date(date_value);
    date = new_date.getDate();
    month = new_date.getMonth();
    if (new_date.getDate() < 10) {
      date = '0' + new_date.getDate();
    }
    if (new_date.getMonth() < 10) {
      month = '0' + new_date.getMonth();
    }
    formatted_new_date = new_date.getFullYear() + '-' + month + '-' + date;
    if (formatted_new_date < formatted_today) {
      return false;
    } else {
      return true;
    }
  };

  this.jsvalidators = new JsValidators();

}).call(this);
