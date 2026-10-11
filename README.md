# Tomiris Makisheva — Portfolio

**Live site:** https://makishevat.github.io/iwamad-sis1-portfolio/

## About the site
This is my personal portfolio website.
It has three sections (About Me, Projects and Contact), a theme toggle, and a contact form that shows error messages when a field is empty, when the email is incorrect, or when the message has fewer than 10 characters.
I built it with plain HTML, CSS and JavaScript, without frameworks.

## Design decisions
1. **Layout.** On a phone the projects are shown in one column, and on a
   desktop in three columns, because three boxes side by side do not fit on
   a small phone screen, and the text inside them would be squeezed into
   narrow columns and become hard to read.
   The menu is a column on mobile and a row on desktop, because the section
   names also do not fit in one row on a small screen.
2. **Colours.** I chose white and very light teal backgrounds with one teal
   accent colour, because the neutral colours keep the page calm and the
   teal only draws attention to buttons and links.
   I stored them in CSS variables, so the dark theme changes all the colours
   at once when JavaScript switches one attribute on the page.
   In both themes the text stays readable because the contrast is high: dark
   text on a light background and light text on a dark background. I also
   made the teal darker in the light theme and brighter in the dark theme,
   so it is visible on both backgrounds.

3. **After testing on a phone.** When I opened the site at 375 px, I saw that
   the menu was hidden behind a hamburger button. I decided to remove the
   button and show the menu as a column under my name, because there are only
   three sections, and when I opened the menu, it covered the main content,
   which was not convenient to see and use.
   I also noticed that the "Send message" button looked too small, so I
   increased its padding to make it easier to tap.
