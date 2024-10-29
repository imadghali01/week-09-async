const fakeCallToAnAPIPromises = (url) => {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 4500) + 500;
      setTimeout(() => {
        if (delay > 4000) {
          reject("Connection Timeout ! :(");
        } else {
          resolve(`Here is your fake data from ${url}`);
        }
      }, delay);
    });
};
fakeCallToAnAPIPromises("api/movies")
  .then((data) => {
    console.log("SUCCESS (1)");
    console.log(data);
    return fakeCallToAnAPIPromises("api/movies/7");
  })
  .then((data) => {
    console.log("SUCCESS (2)");
    console.log(data);
    return fakeCallToAnAPIPromises("api/pictures/7");
  })
  .then((data) => {
    console.log("SUCCESS (3)");
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
});