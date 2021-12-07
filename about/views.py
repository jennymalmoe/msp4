from django.shortcuts import render

# Create your views here.


def view_about(request):
    """ A view that renders the about contents page """

    return render(request, 'about/about.html')
