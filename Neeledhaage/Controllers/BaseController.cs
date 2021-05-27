using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Mvc;
using Neeledhaage.Common;
using Neeledhaage.Models.Common;
using Newtonsoft.Json;

namespace Neeledhaage.Controllers
{
    public class BaseController : Controller
    {
        
        protected ResponseData<TResponse> APIPostCaller<TRequest, TResponse>(string url, TRequest request)
        {
            url = ApiPath.APIBaseUrl + url;
            string authToken = "";
            ResponseData<TResponse> response = url.ToPostAPI<TRequest, TResponse>(request, authToken);

            //IsAuthorized<TResponse>(response);

            return response;
        }

        protected static string Token { get; set; }
        protected static string RefreshToken { get; set; }

        protected async Task<ResponseData<T>> APIGetCaller<T>(string url)
        {
            url = ApiPath.APIBaseUrl + url;
            string authToken = Token;
            ResponseData<T> response = url.ToGetAPI<T>(authToken);

            //IsAuthorized<T>(response);

            return response;
        }
        protected async Task<ResponseData<TResponse>> APIAnonymousPostCaller<TRequest, TResponse>(string url, TRequest request)
        {
            url = ApiPath.APIBaseUrl + url;
            string authToken = Token;
            ResponseData<TResponse> response = url.ToPostAPI<TRequest, TResponse>(request, authToken);

            return response;
        }

        protected ResponseData<T> APIAnonymousGetCaller<T>(string url)
        {
            url = ApiPath.APIBaseUrl + url;
            ResponseData<T> response = url.ToGetAPI<T>();

            return response;
        }

        protected void SuccessMessage(string message)
        {
            TempData["SuccessMessage"] = message;
        }

        protected void ErrorMessage(string message)
        {
            TempData["ErrorMessage"] = message;
        }

    }
}
