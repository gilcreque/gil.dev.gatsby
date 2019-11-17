---
title: "Fixing incorrect authors in Git commits"
date: "2017-06-28"
coverImage: "jens-lelie-15662.jpg"
---

If you have multiple identities you use with Git you are bound to make a commit using the wrong one. The first step in fixing this is to find the commit hash for the commit just before the one (or more) commit you want to fix. Using the `git log` command in your repo will get you the hash you need.

commit edbd993570b8b7c9d4d2c073d254a4c139eb0d1f
Author: Gilberto Creque <gil@wrongdomain.dev>
Date: Wed Jun 21 10:43:45 2017 -0400

Third Commit

commit 33304c12b672d3c537ca25db93eb100a5f96ca11
Author: Gilberto Creque <gil@wrongdomain.dev>
Date: Wed Jun 21 10:43:28 2017 -0400

Second Commit

commit 73c4a2dac717bb7059f5d03ae586c344857d011a
Author: Gil Creque <me@gilcreque.dev>
Date: Wed Jun 21 10:43:11 2017 -0400

First Commit

I'm going to change the second and third commit so I will use the hash for the first commit (`73c4a2dac717bb7059f5d03ae586c344857d011a`). Once you have the hash these are the steps you need to run through:

1. `git rebase -i ` i.e. `git rebase -i 73c4a2dac717bb7059f5d03ae586c344857d011a`
2. In the editor replace the word `pick` with `edit` for the commit(s) you want to fix the author on (use the hashes to figure out which ones)
    
    edit 33304c1 Second Commit
    edit edbd993 Third Commit
    
    # Rebase 73c4a2d..edbd993 onto 73c4a2d (2 commands)
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    # d, drop = remove commit
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    
3. Leave the editor (if you are in vi/m hit the `Esacpe` key and then type in `:wq` and then hit the `Enter` key)
4. `git commit --amend --author="Author Name <email@address.com>"` i.e. `git commit --amend --author="Gil Creque <me@gilcreque.dev>"`
5. `git rebase --continue`
6. Repeat steps 4 and 5 as needed (it depends on how many commits you are updating)
7. `git push -f`

[Source](https://stackoverflow.com/a/32281629/332586 "short permalink to this answer")

[Jens Lelie](http://unsplash.com/@leliejens?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Jens Lelie")
