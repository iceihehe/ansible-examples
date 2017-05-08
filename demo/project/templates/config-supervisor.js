[program:{{ project_name }}]
user=nginx
command={{ venv }}/bin/uwsgi --ini conf/uwsgi.ini
directory=/var/www/{{ project_name }}
stdout_logfile=/var/log/supervisor/{{ project_name }}.log
stderr_logfile=/var/log/supervisor/{{ project_name }}.log

[program:{{ project_name }}_celery]
user=nginx
command={{ venv }}/bin/celery -A celery_app.celery worker -l info -c 10 -Q sms_q,unlock_q,monitor_q,anti_q
directory=/var/www/{{ project_name }}
stdout_logfile=/var/log/supervisor/{{ project_name }}_celery.log
stderr_logfile=/var/log/supervisor/{{ project_name }}_celery.log

[program:{{ project_name }}_beat]
user=nginx
command={{ venv }}/bin/celery -A celery_app.celery beat -l info -s /tmp/{{ project_name }}_beat --pidfile {{ project_name }}_beat.pid
directory=/var/www/{{ project_name }}
stdout_logfile=/var/log/supervisor/{{ project_name }}_beat.log
stderr_logfile=/var/log/supervisor/{{ project_name }}_beat.log
