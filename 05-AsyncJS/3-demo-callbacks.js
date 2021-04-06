const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here if your fake date from ${url}`);
        }
    }, delay);
}

fakeRequestCallback("example.com/index", 
    function (response) {
        console.log("SUCCESS! (1)");
        console.log(response);
        fakeRequestCallback("example.com/feature1", 
            function (response) {
                console.log("SUCCESS! (2)")
                console.log(response)
                fakeRequestCallback("example.com/feature2",
                    function (response) {
                        console.log("SUCCESS! (3)")
                        console.log(response)
                    },
                    function (err) {
                        console.log("ERROR (3)")
                        console.log(err);
                    }
                );
            },
            function (err) {
                console.log("ERROR (2)");
                console.log(err);
            });
    }, function (err)  {
        console.log("ERROR (1)");
        console.log(err);
    }
);