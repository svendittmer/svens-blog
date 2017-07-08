---
title: Deploying Middleman to Github Pages
date: 2016-06-12 21:30 UTC
tags:
  - middleman
  - deploy
  - github
---

I've had quite some trouble deploying my site to github pages.
The reason is that the deploy needs to be configured differently,
depending on whether you create a website for a project or for your account.
The default configuration won't work if you're making a website for an
account. This configuration worked for me:

    activate :deploy do |deploy|
      deploy.deploy_method = :git
      deploy.branch = 'master'
    end

Also, note that the current version of middleman-deploy (1.0.0) doesn't seem to
do the trick, I had to use the alpha Version: `gem "middleman-deploy", "~> 2.0.0.pre.alpha"`

After figuring out how it works, I must say that I'm quite happy with the result:
The deploy works like a charm and I've got a free website now, ssl already included! 😄
