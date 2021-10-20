from django.db import models

from django.utils.text import slugify
from django.conf import settings
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver

from profiles.models import UserProfile


def upload_location(instance, filename, **kwargs):
    file_path = 'blog/{author_id}/{title}-{filename}'.format(
            author_id=str(instance.author.id), title=str(instance.title), filename=filename
        )
    return file_path

class BlogPost(models.Model):
    title                   = models.CharField(max_length=50, unique=True, null=False, blank=False)
    body                    = models.TextField(max_length=5000, null=False, blank=False)
    image                   = models.ImageField(upload_to=upload_location, null=False, blank=False)
    date_published          = models.DateTimeField(auto_now_add=True, verbose_name="date published")
    date_updated            = models.DateTimeField(auto_now=True, verbose_name="date updated")
    user_profile            = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='blogs')
    slug                    = models.SlugField(blank=True, unique=True)
    author                  = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
   


def __str__(self):
    return self.title

# To make sure to delete the img also when deleting a blog post
@receiver(post_delete, sender=BlogPost)
def submission_delete(sender, instance, **kwargs):
    instance.image.delete(False)

def pre_save_blog_post_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.author.username + "-" + instance.title)

pre_save.connect(pre_save_blog_post_receiver, sender=BlogPost)
