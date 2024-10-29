const fakeCallToAnAPI = (url, success, failure) => {
    // Creates a random number of seconds it will take.
    const delay = Math.floor(Math.random() * 4500) + 500;
  
    // After the random time, it checks if it's greater than 4 seconds, in which case it's a timeout failure. Otherwise, if it's sooner, it returns the data.
    setTimeout(() => {
      if (delay > 4000) {
        failure("Connection Timeout ! :(");
      } else {
        success(`Here is your fake data from ${url}`);
      }
    }, delay);
  };
  
fakeCallToAnAPI(
    "api/movies",
    // The callback if it's a success
    (msg) => {
      console.log("SUCCESS (1)");
      console.log(msg);
      fakeCallToAnAPI(
        "api/movies/7",
        // The callback if it's a success
        (msg) => {
          console.log("SUCCESS (2)");
          console.log(msg);
          fakeCallToAnAPI(
            "api/pictures/7",
            // The callback if it's a success
            (msg) => {
              console.log("SUCCESS (3)");
              console.log(msg);
            }, // The callback if there was an error
            (msg) => {
              console.log("ERROR (3)");
              console.log(msg);
            }
          );
        }, // The callback if there was an error
        (msg) => {
          console.log("ERROR (2)");
          console.log(msg);
        }
      );
    }, // The callback if there was an error
    (msg) => {
      console.log("ERROR (1)");
      console.log(msg);
    }
);