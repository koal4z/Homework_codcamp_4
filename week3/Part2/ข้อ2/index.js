function setTimeoutAndLog() {
  return new Promise(function(ful, rej) {
    setTimeout(err => {
      console.log("a");
      if (!err) {
        ful();
      }
    }, 1000);
  })
    .then(function() {
      return new Promise(function(ful, rej) {
        setTimeout(err => {
          console.log("b");
          if (!err) {
            ful();
          }
        }, 1000);
      });
    })
    .then(function() {
      return new Promise(function(ful, rej) {
        setTimeout(err => {
          console.log("c");
          if (!err) {
            ful();
          }
        }, 1000);
      });
    })
    .then(function() {
      return new Promise(function(ful, rej) {
        setTimeout(err => {
          console.log("d");
          if (!err) {
            ful();
          }
        }, 1000);
      });
    });
}

setTimeoutAndLog();
