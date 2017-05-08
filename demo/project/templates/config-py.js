# -*- coding: utf-8 -*-

import datetime


class Config:

    PROJECT = 'credit'

    SECRET_KEY = 'axdvno;qwjhefuiohasdf;kjase'
    BCRYPT_SALT = 'anti-fraud'

    # SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://credit:123456@10.1.4.251:3306/credit?charset=utf8'
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://{{ mysql_username }}:{{ mysql_password }}@localhost:3306/{{ mysql_database }}?charset=utf8'
    SQLALCHEMY_POOL_SIZE = 60
    SQLALCHEMY_POOL_RECYCLE = 900
    SQLALCHEMY_MAX_OVERFLOW = 10
    MONGODB_DB = '{{ mongodb_database }}'
    MONGODB_HOST = 'localhost'
    MONGODB_PORT = 27017
    MONGODB_USERNAME = ''
    MONGODB_PASSWORD = ''

    CELERY_BROKER_URL = 'amqp://{{ amqp_username }}:{{ amqp_password }}@localhost/{{ amqp_vhostname }}'
    CELERY_RESULT_BACKEND = 'redis://localhost:6379/1'

    LOCK_TIME = 60 * 2

    # 风控对外接口调用白名单
    API_WHITE_LIST = []

    # api接口查询
    URI = '{{ api_uri }}'
    SECRET = '{{ api_secret }}'
    APPKEY = '{{ api_appkey }}'
    TIMEOUT = 10

    # 马上正式的配置
    URL = 'https://dataapi.msxf.com/gateway2'
    FACE_URL = 'https://dataapi.msxf.com/gatewaypic'
    ENCRYPT_KEY = 'INTEFENIGEPNGE181'
    PARTNER = '10005248849418601488'
    SIGNKEY = 'afe6d44d815e44e4b8f19a2bdcc2347d4b2e76bc90134412a4cdb03f2eca83f1'
    SENTRY_DSN = 'https://2ef89b5842b14be69ed0c8d2442d376d:b77e934668d143259769f58a849249e0@sentry.cdecube.com/2'
    VERSION = '2.0'
    SIGN_TYPE = 'SHA1'
    CHARSET = 'UTF-8'
    METHOD = 'credit.single.realtime.query.sync'

    # 运营商对接的配置项
    CAPCHA_TOKEN_URL = 'http://e.apix.cn/apixanalysis/mobile/retrieve/phone/data/analyzed'
    APIX_KEY = '{{ apix_key }}'

    # 队列
    UNLOCK_QUEUE = 'unlock_q'
    MONITOR_QUEUE = 'monitor_q'
    SMS_QUEUE = 'sms_q'
    ANTI_QUEUE = 'anti_q'

    # 锁的过期时间
    LOCK_TIME = 60 * 10
    # 扫描锁过期的周期
    UNLOCK_PERIOD = 2
    # 七牛配置
    QINIU_ACCESS_KEY = "{{ qiniu_access_key }}"
    QINIU_SECRET_KEY = "{{ qiniu_secret_key }}"
    QINIU_BUCKET_NAME = "{{ qiniu_bucket_name }}"
    QINIU_BUCKET_DOMAIN = "{{ qiniu_bucket_domain }}"

    # 上上签信息
    SSQ_URL = 'https://www.bestsign.cn'
    SSQ_MID = ''
    SSQ_PRIVATE_KEY = ''
    SSQ_NAME = ''
    SSQ_MOBILE = ''
    SSQ_USERTYPE = '2'
    SSQ_SIGNIMAGETYPE = '1'
    SSQ_USERFILETYPE = '1'
    SSQ_FILETYPE = 'pdf'
    SSQ_EMAIL = ''

    # REDIS
    REDIS_HOST = 'localhost'
    REDIS_PORT = 6379
    REDIS_PASSWORD = ''
    REDIS_DB = '0'

    # 叮咚云
    DDY_APIKEY = '{{ dingdongcloud_apikey }}'
    DDY_SMSHOST = 'api.dingdongcloud.com'
    DDY_TZURI = '/v1/sms/sendtz'
    DDY_YZMURI = '/v1/sms/sendyzm'

    # 查询配置
    REPEAT_NUM = 'develop'
    CREDIT_DOMAIN = '{{ credit_domain }}'
    ENABLE_SENTRY = False

    # 高德地图key
    GD_KEY = '{{ gaode_key }}'
    # java微服务的域名
    JAVA_HOST = '{{ java_host }}'

    # pdf下载的地址
    PDF_URL = '{{ pdf_url }}'

    # TODO 需要进行设置
    FILE_SERVER_TOKEN = "{{ file_server_token }}"
    REMEMBER_COOKIE_DURATION = datetime.timedelta(seconds=1)
    SESSION_REFRESH_EACH_REQUEST = True
    MOJIE_TOKEN = '{{ mojie_token }}'
    
class TestConfig(Config):

    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://credit:123456@10.1.4.251:3306/credit_test'
    MONGODB_DB = 'credit_test'

    CELERY_BROKER_URL = 'redis://10.1.4.251:6379/0'
    CELERY_RESULT_BACKEND = 'redis://10.1.4.251:6379/0'
