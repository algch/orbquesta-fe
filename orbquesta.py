import falcon

class TestResource(object):
    def on_get(self, req, res):
        """Handles all GET requests."""
        res.status = falcon.HTTP_200  # This is the default status
        res.body = ('This is me, Falcon, serving a resource!')

def handle_404(req, resp):
    requested_path = req.relative_uri
    resp.status = falcon.HTTP_404
    resp.body = 'NO NO NO ' + requested_path

# Create the Falcon application object
app = falcon.API()

# Instantiate the TestResource class
test_resource = TestResource()

# Add a route to serve the resource
#app.add_route('/api', test_resource)
app.add_route('/', test_resource)
app.add_sink(handle_404, '')