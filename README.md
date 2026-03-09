# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/Star-Mdakane/promodo-timer-app-tailwindcss.git)
- Live Site URL: [Add live site URL here](https://promodo-timer-app-tailwindcss.vercel.app/)

## My process

1. I started designing the layout first which is quite simple.
2. Designing the progress bar area was a little bit challenging. 
- I initially tried using two svgs where one was track and the other was the progress bar.
- Seeing the graddiend and box shadows I had to change the design and use one with a single svg but many layers of html elements for styling.
3. I then went to the settings page, I thought if I should make it on another html page, sibling element or just the one which I ultimately chose of an overlay type with a fixed position and scale instead of translate for simplicity.
4. To ccombat the font system I used a font on the body tag which I couldjust grab via js and change it on select.
5. The color was a bit tedious as I had to get all the instances with color and had to change them especially the timer buttons where they are in a container.

Problems
- I had no idea of what or how a promodo is and its function.
- The gradient of background also had me going for a while.
- What made it more difficult is that i thought the breaks had to interrupt the promodo timer and it had to continue after the break was done.
- Getting the time to work with the progress bar was a nightmare. I did not understand the offset, dasharray and those terms so it started at certain points, went on wrong direction, would rotate around and start again on same timer while running.
- The time display also broke on different fonts so I used nowrap and it did not reset when changig the time options.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Useful resources

- I googled Promodoro after being stuck and had an idea what it was.

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- The only AI I use is Meta AI which I like since it makes mistakes and I have to help it help me ulike making it do all the work for me.
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- We were brainstorming and debugging at times.
- What worked well? What didn't?
- There was no code which worked initially so basically it was giving me examples of how to approach a problem whenever i was stuck.

## Author

- Website - [Add your name here](https://promodo-timer-app-tailwindcss.vercel.app/)
- Frontend Mentor - [@Star-Mdakane](https://www.frontendmentor.io/profile/Star-Mdakane)
- Twitter - [@KidStarMadrad](https://www.twitter.com/KidStarMadrad)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Meta AI

