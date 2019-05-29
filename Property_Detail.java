OkHttpClient client = new OkHttpClient(); 

Request request = new Request.Builder() 
  .url("https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO")
  .get() 
  .addHeader("accept", "application/json") 
  .addHeader("apikey", "870e26a0ffcc29cbb6b8bc86012a8c28") 

  .build(); 

Response response = client.newCall(request).execute();
