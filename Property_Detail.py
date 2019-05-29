import http.client 

conn = http.client.HTTPSConnection("api.gateway.attomdata.com") 

headers = { 
    'accept': "application/json", 
    'apikey': "870e26a0ffcc29cbb6b8bc86012a8c28", 
    } 

conn.request("GET", "/propertyapi/v1.0.0/property/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO", headers=headers) 

res = conn.getresponse() 
data = res.read() 

print(data.decode("utf-8"))
