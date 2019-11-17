---
title: "Using 2 usernames with the same Git server"
date: "2017-06-21"
coverImage: "jason-blackeye-198848.jpg"
---

The quickest way to solve this is to have two entries in `~/.ssh/config`:

Host github.com
 HostName github.com
 IdentityFile /path/to/your/personal/github/private/key
 User personalusername

Host github-work
 HostName github.com
 IdentityFile /path/to/your/work/github/private/key
 User workusername

[Source](https://stackoverflow.com/a/25924462) [Jason Blackeye](http://unsplash.com/@jeisblack?utm_campaign=photographer-credit "Download free do whatever you want high-resolution photos from Jason Blackeye")
