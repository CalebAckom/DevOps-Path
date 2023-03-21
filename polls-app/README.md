# polls-app
Python | Django application

## Project Setup
**1. Whenever you are starting a new Django project, it's a good idea to first set up your development environment. Create a new directory for your project to live in, and navigate into it. In shell:**

> A [virtual environment](https://docs.python.org/3/tutorial/venv.html) is recommended. See the [setup information](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/).**
 
 
**1. Create and start your virtual environment. Inside the new directory you created for your project, run the commands below:**
 
1A. Ubuntu / MacOS
```
python3 -m venv venv
source venv/bin/activate
```
 >**Note:** If you don't use a virtual environment on Ubuntu or MacOS, you will need to specify your python or pip version at every of the following steps
 
1.B. Windows
```
pip install virtualenv
source\venv\Scripts\activate.bat
```

>Where **source** is the absolute path to the **venv directory**

**2. Update pip**
>For Windows

```
pip install --upgrade pip
```

>For MacOS/Ubuntu

```
sudo pip install --upgrade pip
```

 
**3. Install all of the Requirements. The `requirements.txt` file contains all packages needed to run this project. Instead of running the individual commands one after the other, Python provides a very easy way of getting all packages installed without stress. Just a line of code and we are good!**

```
pip install -r requirements.txt
```
 >After this step all packages required for the project are installed. Among them especially Django, Django RestFramework, Django Corsheaders and dotenv.
 
 
**4. This Project is using a .env file for API-Keys and some individual configurations. The command below makes a copy of the `.env.example` and names it `.env`. This environment file contains very sensitive information and must not be altered unless absolutely necessary.**

```
cp .env.example .env
```

**5. Migrate the Database.** 

>This creates a database for the project where all current and future data are stored.

```
python manage.py makemigrations
python manage.py migrate
```

**6. To get the project running, the server needs to be started. Use the command below to start the Server:**

```
python manage.py runserver
```

**Congratulations. If you do not get an error, everything works fine and you are done with the server side setup**