from django.shortcuts import render

# Create your views here.


def index(request):
    """
    View to return the index page
    """
    page_title = "Stephen Seagrave | Portfolio"
    template = "home/index.html"
    context = {
        'page_title': page_title,
    }
    return render(request, template, context)
