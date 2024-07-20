from django.http import HttpResponse
from django.http import HttpResponse, JsonResponse

def status_check(request):
    return JsonResponse({"status": "ok"})

from django.views.decorators.http import require_http_methods

@require_http_methods(["GET"])
def function1(request):
    return HttpResponse("This is Function 1")

def function2(request):
    return HttpResponse("This is Function 2")

def function3(request):
    return HttpResponse("This is Function 3")