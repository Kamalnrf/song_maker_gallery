import json
import os
from rest_framework.renderers import JSONRenderer
from concurrent.futures import ThreadPoolExecutor
from django_cron import CronJobBase, Schedule
import requests
from .models import ToDo
from .take_screenshots import take_screenshots

BACKEND_POST_URL = 'http://localhost:3000/api/screenshot/partial-update/'  # double check with postman

class ScreenshotterCron(CronJobBase):
    RUN_EVERY_MINS = 5
    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'bot.cron'

    def do(self):
        todo = ToDo.objects.all()
        for gallery in todo:
            data = take_screenshots(gallery)
            jsn = json.dumps(data)
            res = requests.patch(
                BACKEND_POST_URL,
                headers={
                    'Authorization': f'Token {os.getenv("CUSTOM_AUTH_TOKEN")}',
                    'Content-Type': 'application/json',
                },
                data=jsn,
            )
        # delete all ToDo objects in "data" queryset
            if res.status_code == 200:
                print(f'Success for {data["url_extension"]}')
                todo.delete()
            else:
                print(f'Failure for {data["url_extension"]}')
