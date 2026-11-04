# devfolio

Personal portfolio site for Wilson Wu, served by GitHub Pages at https://wilsonwu49.github.io/devfolio/.
Plain HTML and CSS, no build step: edit the files and push.

## Layout

- `index.html`: home page with every project summary
- `projects/*.html`: full write-ups (robot, reu, viewsynth, navvehicle, rccar, cpu, snake)
- `css/site.css`, `js/site.js`: styles and the image/video viewer
- `img/`, `video/`: media; `img/web/` holds compressed copies used as thumbnails
- `docs/Resume.pdf`: the resume linked from the header (keep this filename)

## Unfinished parts

Anything not ready is wrapped in `<template data-todo="...">`, which browsers never display.
To finish one, do what the `data-todo` note says, then delete the opening `<template ...>` and the closing `</template>`.
An image block is wrapped twice: unwrap the image you added and the block around it, and leave the other image templates in place.

List everything still open:

    grep -n 'data-todo' index.html projects/*.html

## Before each push

- Facts match the resume (GPA, dates, hardware, numbers)
- New images are compressed (under ~500 KB) and have alt text
- Every link works: open the site locally and click through
