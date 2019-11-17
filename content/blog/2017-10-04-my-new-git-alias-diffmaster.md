---
title: "My new git alias — diffmaster"
date: "2017-10-04"
coverImage: "markus-spiske-109588.jpg"
---

I'm going to admit making some mistakes lately while doing `git merge`s during pull requests. I determined one of my biggest problems was the way diffs are presented in BitBucket. It can make things look very unclear because huge chunks of code will look deleted only to be added back in at later points in bits and pieces. It is hard to realize the nuanced changes usually made in code and can cause headaches down the road. To combat this problem I wrote a quick `git alias` called `diffmaster` that will run a diff of the current branch against the master branch. The command I aliased is `git difftool master...<branch-to-compare>`. I added the following lines to my `[alias]` section of my `.gitconfig`.

    branch-name = "!git rev-parse --abbrev-ref HEAD"
    diffmaster = "!git difftool master... $(git branch-name)"

[Markus Spiske](https://unsplash.com/@markusspiske?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Markus Spiske")
