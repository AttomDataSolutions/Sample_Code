require 'uri' 
require 'net/http' 

url = URI("https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO")

http = Net::HTTP.new(url.host, url.port) 
http.use_ssl = true 
http.verify_mode = OpenSSL::SSL::VERIFY_NONE 

request = Net::HTTP::Get.new(url) 
request["accept"] = 'application/json' 
request["apikey"] = '870e26a0ffcc29cbb6b8bc86012a8c28' 

response = http.request(request) 
puts response.read_body
