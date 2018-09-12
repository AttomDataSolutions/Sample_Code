using System;
using System.Net.Http;
using System.Xml;

namespace CSHttpClientSample
{
    static class Program
    {
        static void Main()
        {
            MakeApiRequest();

            Console.WriteLine("Hit ENTER to exit...");
            Console.ReadLine();
        }

        static async void MakeApiRequest()
        {
            var client = new HttpClient();

            /////////////////////////////////////////////////////////////
            ///
            ///  MODIFY THESE INPUT VALUES TO SUITE YOUR REQUIREMENTS
            /// 
            /////////////////////////////////////////////////////////////
            var apiKey = "###### your api key here ######";
            var headerAccept = "application/xml";
            var inputAddress = "1731 INGRAM TER, DELTONA, FL 32725";
            /////////////////////////////////////////////////////////////

            client.DefaultRequestHeaders.Add("apikey", apiKey);
            client.DefaultRequestHeaders.Add("accept", headerAccept);

            var uri = string.Format("https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address={0}", inputAddress);

            string response = await client.GetStringAsync(uri);

            // DISPLAY RESPONSE TO CONSOLE
            Console.WriteLine(response);

            // DESERIALIZE TO XML DOC FOR QUERYING
            var xml = new XmlDocument();
            xml.LoadXml(response);
        }
    }
}