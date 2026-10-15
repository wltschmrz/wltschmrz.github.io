---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

- [Homepage]({{ '/' | relative_url }})
{% for link in site.data.navigation.main %}- [{{ link.title }}]({{ link.url | relative_url }})
{% endfor %}
{% if site.data.profile.cv and site.data.profile.cv != '' %}- [CV (PDF)]({{ site.data.profile.cv | relative_url }}){% endif %}

[XML sitemap]({{ '/sitemap.xml' | relative_url }})
