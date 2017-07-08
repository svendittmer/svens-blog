---
title: Setting up postgres on linux mint debian edition
date: 2016-09-24 06:44 UTC
tags:
  - beginner series
  - postgres
---

This is a step-by-step guide to getting up and running with postgres on <abbr title="Linux Mint Debian Edition">LMDE</abbr>. I'm new to postgres, since I've only been working with mysql so far. I want to share with you the problems and solutions I encountered getting postgres up and running, hoping that it may help you setup postgres, too.

Setting up postgres on my local machine wasn't as easy as I expected. I had to get it up and running when I started using heroku, where postgres is the default database. At some point, the tutorial required a working installation of postgres, without explaining how it's done. But even if you don't use heroku, postgres offers some advantages to you, especially when used in a rails app. In case you're interested, check the further reading section after you finished this article.

## Installing postgres

This is actually simple, it takes two commands:

    ~ $ sudo apt-get update
    ~ $ sudo apt-get install postgresql postgresql-server-dev-<required-postgres-version, e.g. 9.4>

*postgresql* installs all you need to run the database, while *postgresql-server-dev-9.4* is required to install the *pg* gem later. You may also use Synaptics to install postgres if you prefer using a GUI.

## Getting access

When I tried the *psql* command, I got this error:

    Fatal: role lmde does not exist

After some research, I learned that a role is what you would call a user in mysql. So psql tried to access the database using my username as role, and that role did not exist. When installing postgres a user account and a role called *postgres* were created. So, in order to access the database, I had to login as *postgres*, like so:

    ~ $ su -
    ~ # su - postgres
    ~ $ createuser lmde --createdb

*createuser* is a utility command offered by postgres, which creates a role. Don't forget the *--createdb* option, or *rake db:create* will fail.

This is all I had to do to continue the heroku tutorial. If this guide doesn't work for you, here are some of the resources that helped me setup postgres:

- [How To Setup Ruby on Rails with Postgres \| DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres)
- [PostgreSQL: Documentation: 9.4: Creating a Database](https://www.postgresql.org/docs/9.4/static/tutorial-createdb.html)
