(function() {
  Array.prototype.merge = function(array) {
    var originalArr;
    originalArr = this;
    return array.forEach(function(value) {
      return originalArr.push(value);
    });
  };

  Object.prototype.isEqual = function(obj) {
    var key, originalObj, value;
    originalObj = this;
    if (Object.keys(originalObj).length !== Object.keys(obj).length) {
      return false;
    }
    for (key in originalObj) {
      value = originalObj[key];
      if (originalObj[key] !== obj[key]) {
        return false;
      }
    }
    return true;
  };

  String.prototype.truncateChars = function(len) {
    var originalStr;
    originalStr = this;
    return originalStr.substr(0, len);
  };

  Array.prototype.removeElement = function(ele) {
    var index, originalArr;
    originalArr = this;
    index = originalArr.indexOf(ele);
    return originalArr.splice(index, 1);
  };

  Array.prototype.isEqual = function(array) {
    var i, index, j, len1, originalArr;
    originalArr = this;
    if (originalArr.length !== array.length) {
      return false;
    }
    for (index = j = 0, len1 = originalArr.length; j < len1; index = ++j) {
      i = originalArr[index];
      if (originalArr[index] !== array[index]) {
        return false;
      }
    }
    return true;
  };

  window.location.searchQuery = function(parameter) {
    if window.location.search{
      var queryParams, urlParams;
      urlParams = window.location.search.split('?')[1].split('&');
      queryParams = {};
      $.each(urlParams, function(index, value) {
        var equalToSplit;
        equalToSplit = value.split('=');
        queryParams[equalToSplit[0]] = equalToSplit[1];
        if (Object.keys(queryParams).length > 0) {
          return queryParams[parameter];
        }
      });
      return false;
    }
  };

  this.loadExternalFile = function(type, file, callback) {
    var execCallback, input, script;
    if (callback == null) {
      callback = false;
    }
    if (type !== 'js') {
      console.log('unsupported format');
      return false;
    }
    script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    execCallback = function() {
      if (callback) {
        return callback();
      }
    };
    input = $('script[src="' + file + '"]');
    if ($(input).length === 0) {
      script.setAttribute('src', file);
      $('body').append(script);
      return script.onload = execCallback();
    }
  };

}).call(this);
