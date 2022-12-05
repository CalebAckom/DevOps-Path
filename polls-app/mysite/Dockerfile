# Dockerfile, Image, Container
# Container with python version 3.10
FROM python:3.10

RUN python3 -m pip install --user virtualenv

RUN python3 -m venv tutorial-env && . ./tutorial-env/bin/activate

RUN python3 -m venv venv && . ./venv/bin/activate

# Add python file and directory
ADD manage.py .

# upgrade pip and install pip packages
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir numpy 
    # Note: we had to merge the two "pip install" package lists here, otherwise
    # the last "pip install" command in the OP may break dependency resolution...
# RUN pip install -r requirements.txt
RUN pip freeze > requirements.txt

RUN pip install django django-prometheus

RUN python manage.py migrate

# run python program
# CMD ["python", "manage.py" , "0", "runserver"]

COPY . .

CMD python manage.py runserver