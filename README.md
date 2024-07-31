[![Deploy static content to Pages](https://github.com/qualityshepherd/sparetimebluegrass/actions/workflows/deploy2pages.yml/badge.svg)](https://github.com/qualityshepherd/sparetimebluegrass/actions/workflows/deploy2pages.yml)

# [Sparetime Bluegrass](https://qualityshepherd.github.io/sparetimebluegrass/)
_we're having a good time..._

![image](assets/images/sparetime.jpeg)

## For Docken

So, because I'm an idiot, I wrote my own blog software... and you're soaking in it. Blog posts are written in [markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) or html. Each post is its own file and has metadata at the top.

- blog posts are markdown files (`.md`) in `assets/posts`
- pages are markdown files (`.md`) in `assets/pages`
- images go in `assets/images` and you use markdown or html to add them to a blog post

### Posting to Blog
1. goto [github](https://github.com/qualityshepherd/sparetimebluegrass)
1. copy the RAW file of another post as a guide
1. add a new file to `posts`
1. edit as needed
1. add/commit file and push directly to `main` branch (this automagically deploys to the public website)

YOU'RE DONE

### Metadata

This is just simple text (_technically_ YAML) that the system uses; all are necessary. Here's an example:

```
---
title: Come hear some music and stories about bluegrass...
date: 2017-10-16
tags: news
---
```

- `title` the title of your blog post
- `date` posts are displayed by newest date. **A date in the future will not display**. This is how I do drafts or tests or whatever
- `tags` are organizational and clickable... use them as you like. Make up new ones willy nilly :shrug:


