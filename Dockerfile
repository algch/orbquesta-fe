FROM python:3.7-alpine
WORKDIR /api
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8000
COPY . .
CMD ["gunicorn", "orbquesta:app"]
