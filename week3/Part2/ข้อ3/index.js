function setTimeoutAndLog() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("a")
      resolve();
    }, 1000);
  });
}

async function runB() {
 await setTimeoutAndLog();
 return new Promise(resolve => {
  setTimeout(() => {
    console.log("b")
    resolve();
  }, 1000);
});
}

async function runC() {
  await runB();
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("c")
      resolve();
    }, 1000);
  });
}

async function runD() {
  await runC();
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("d")
      resolve();
    }, 1000);
  });
}

runD()
 


