
 
 var app = new Vue({ 
    el: '#app',
    data: {
        userInput: "",
        responseData: null
    },
    methods:{
        async fetchWeather(){
            // Make a http call to our server, providing our city as a route parameter
            if (this.userInput !== ""){

                var url = "http://localhost:3000/" + this.userInput + "/";
                
                const response = await fetch(url);
                console.log(response);
                console.log(response.status);  

                const data = await response.json();//converting the response to JSON form is also a promise
                
                if (data.code !== 0 || response.status !== 200){
                    switch (data.code){
                        case (1): {
                            alert("A city of this name could not be found!");
                            break;
                        }
                        case (2):{
                            alert("Unknown characters in the city input!");
                            break;
                        }
                        case (3):{
                            alert("Sorry, weather request failed, please try again and make sure to enter a valid city name.");
                            break;
                        } 
                        default: {
                            alert("Sorry, request failed");
                        }
                    }
                }

                // data.code is 0, which means the request succeeded
                this.responseData = data;
                // console.log(data);
            }
            
        }        
    }
});