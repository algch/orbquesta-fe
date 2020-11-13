import json

import falcon


class LessonResource:
    def on_get(self, req, res, lesson_id):
        lesson = {
            "id": lesson_id,
            "video_url": "https://www.youtube.com/embed/ziwhcJFiQV8",
        }
        res.body = json.dumps(lesson)

class UserResource:
    def on_get(self, req, res, user_id):
        user = {
            "id": user_id,
            "name": "Oziel",
            "next_lesson": 0,
        }
        res.body = json.dumps(user)

def handle_404(req, resp):
    requested_path = req.relative_uri
    resp.status = falcon.HTTP_404
    resp.body = 'NO NO NO ' + requested_path

app = falcon.API()

app.add_route('/users/{user_id}', UserResource())
app.add_route('/lessons/{lesson_id}', LessonResource())
app.add_sink(handle_404, '')