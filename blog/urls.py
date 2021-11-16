from django.urls import path
from blog.views import (
    all_blog_posts,
	create_blog_view,
	detail_blog_view,
	edit_blog_view,
)

# app_name = 'blog'

urlpatterns = [
    path('', all_blog_posts, name="blog"),
    path('create/', create_blog_view, name="create"),
    path('<slug>/', detail_blog_view, name="detail"),
    path('<slug>/edit/', edit_blog_view, name="edit"),
    path('admin/', https://8000-copper-weasel-5yc6ckfh.ws-eu18.gitpod.io/admin/),
    path('', include('blog.urls')),
]