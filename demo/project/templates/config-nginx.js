server {
    listen 80;
    server_name {{ server_name }};

    client_max_body_size 20M;

    location ~ ^/static/ {
        root /var/www/{{ project_name }};
        expires 1h;
    }
    location ~ ^/templates/ {
        root /var/www/{{ project_name }};
        expires 1h;
    }
    location ~ ^/?$ {
        return 301 http://$host/signin;
    }
    location /files/ {
            proxy_pass http://127.0.0.1:8280/files/;
            proxy_pass_header Server;
            proxy_set_header Host $http_host;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Scheme $scheme;
    }
    location / {
        include uwsgi_params;
        uwsgi_pass unix:/tmp/{{ project_name }}.sock;
        uwsgi_read_timeout 180;
        proxy_pass_header Server;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Scheme $scheme;
    }
}
