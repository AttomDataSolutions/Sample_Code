var client = new RestClient("https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO");
var request = new RestRequest(Method.GET);
request.AddHeader("apikey", "870e26a0ffcc29cbb6b8bc86012a8c28"); 
request.AddHeader("accept", "application/json"); 
IRestResponse response = client.Execute(request);