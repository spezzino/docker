FROM phusion/baseimage:0.9.19
MAINTAINER Stefano Pezzino <github.com/spezzino/docker>

ENV DEBIAN_FRONTEND noninteractive

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# add PPA for php 5.6
RUN add-apt-repository ppa:ondrej/php

# Main package installation
RUN apt-get update
RUN apt-get -y --allow-unauthenticated install nginx php5.6 php5.6-fpm mysql-server php5.6-mysql php5.6-mbstring php5.6-gd php5.6-mcrypt php5.6-xml php5.6-xmlrpc

# Extra package installation
RUN apt-get -y install git vim wget unzip

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Create new MySQL admin user
RUN service mysql start; mysql -u root -e "CREATE USER 'admin'@'%' IDENTIFIED BY 'pass';";mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;";

# MySQL configuration
RUN sed -i 's/bind-address/#bind-address/' /etc/mysql/my.cnf
RUN mkdir /etc/service/mysql
ADD mysql.sh /etc/service/mysql/run
RUN chmod +x /etc/service/mysql/run

# php5-fpm configuration
RUN sed -i "s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/" /etc/php/5.6/fpm/php.ini
RUN mkdir /etc/service/php5.6-fpm
ADD php5.6-fpm.sh /etc/service/php5.6-fpm/run
RUN chmod +x /etc/service/php5.6-fpm/run

# phpmyadmin configuration
RUN phpenmod -v 5.6 mcrypt
ADD phpmyadmin.zip /tmp/
RUN cd /tmp && unzip phpmyadmin.zip && mv /tmp/phpmyadmin /usr/share/phpmyadmin && rm -rf /tmp/phpmyadmin.zip

# Nginx configuration
ADD nginx.conf /etc/nginx/
ADD default /etc/nginx/sites-available/
RUN mkdir /etc/service/nginx
ADD nginx.sh /etc/service/nginx/run
RUN chmod +x /etc/service/nginx/run

# Basic PHP website
ADD index.php /usr/share/nginx/html/

EXPOSE 80 3306
