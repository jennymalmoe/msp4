from django.contrib import admin
from blog.models import BlogPost


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'date_published')
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(BlogPost, PostAdmin)
