---
title: "Vagrant and Xenial Lock File Issue Finally Solved"
date: "2017-07-13"
coverImage: "ruben-bagues-135824.jpg"
---

After weeks of getting the error message `Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?` and `Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)`, I have a solution that actually works.

```
systemctl stop apt-daily.service
systemctl kill --kill-who=all apt-daily.service

# wait until `apt-get updated` has been killed
while ! (systemctl list-units --all apt-daily.service | fgrep -q dead)
do
  sleep 1;
done

```

I added this script to run early in the `Vagrantfile` and it finally allowed the process to get killed before moving on through the rest of the script. I'm surprised at how long it actually takes to actually die and now I understand why I ran into this error often.

\[1\] [Source](https://unix.stackexchange.com/a/315517/87078)

\[2\] [A different solution that did not work for me but gives more info on the problem](https://medium.com/@koalallama/vagrant-up-failing-could-not-get-lock-var-lib-dpkg-lock-13c73225782d)

[Rubén Bagüés](http://unsplash.com/@rubavi78?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Rubén Bagüés")
