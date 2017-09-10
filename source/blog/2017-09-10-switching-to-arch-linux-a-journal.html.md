---

title: Switching to Arch Linux - A Journal
date: 2017-09-10 18:37 UTC
tags: arch-linux

---

I've been playing with the idea of installing Arch Linux on my PC for a while,
both fascinated and discouraged by the degree of understanding required to bend
this distribution to your will. I will update this journal of my journey to a
working installation of Arch Linux every now and then. I take these notes mainly
for myself, but I hope you may find it useful/interesting as well!

My first step was to try out Manjaro Linux, a beginner friendly arch-based Distro.
It was a pleasant experience, except from one issue during the installation of grub.
The graphical installer wasn't able to install grub, and chrooting into
the otherwise complete distro and installing grub via command line solved at.
By the time I figured that out, I had already tried fixing it using the
graphical installer, replacing my <abbr title="Master Boot Record">MBR</abbr> with
<abbr title="GUID Partition Table">GPT</abbr> (thankfully that worked
nicely), and left my PC unbootable for 2 and a half day. That gave me a first
taste of how difficult (and dangerous!) installing a distro can be if you
don't understand everything. (In case you want to try Manjaro, don't let me
discourage you. Manjaro is really beginner friendly and nice.)

