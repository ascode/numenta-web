---
author: Joe Block
brief: Using the burnrate custom metrics script with your Grok server
date: 2014/12/15
featured: false
image: /assets/img/pages/blog/2014-12-15/image.png
org: Site Reliability Engineer
tags: grok aws ec2 custom metrics burn rate numenta machine intelligence
title: Monitoring AWS EC2 Burnrate with Grok
---

**NOTE:** Numenta has [announced a strategic partnership with Avik Partners](/press/numenta-announces-licensing-of-grok-for-it-to-avik-partners.html),
please read more about the future of
[Grok for IT Analytics](http://grokstream.com).

A few months ago, we mentioned that we're monitoring our AWS EC2 costs with
Grok. We developed a simple script to monitor our burnrate and ensure that when
our spend changed, we knew about it and could take action.  Since we posted
[Grok For Managing AWS Cost Anomalies](/blog/grok-for-managing-aws-cost-anomalies.html),
we've had requests for more details and for access to the script.

Today we're happy to announce that the script is available on Github at
[https://github.com/groksolutions/grok-burnrate](https://github.com/groksolutions/grok-burnrate).
You can run it as a standalone script or with Docker using the Dockerfile
there or by pulling from the public Docker registry.