# Programming with Constraints

## What is it?

This app is designed to help solve the problem of sitting down at the keyboard
with a blank editor and struggling to commit to an idea to complete.

Constraints.app solves this problem by giving you a specific task (story) to
implement, including constraints that make the problem challenging or
interesting to solve.

Click "randomize" to get a new project.

### Features

- [x] Get a set of random constraints for your next side project
- [x] Lock constraints that you don't want to change when you randomize
- [x] Delete constraint options you don't want to be included
- [x] Missing language or project idea? Add a new one to any field
- [x] Restore to the initial set of constraints for any field
- [x] URLs are bookmarkable / shareable
- [x] Links to helpful resources for certain projects
- [x] A full set of tests

### Roadmap

- [ ] Dark mode

## How is it built?

When building constraints.app I gave myself some constraints of my own:

- It should run client-side only
- It should not have any dependencies
- It should be test-driven

This led to a really interesting experience solving certain problems and even
led me to make tweaks to some of the features I had in mind in order to keep
complexity down.

## Contributing

Clone and make sure tests pass (see below). You can add projects, languages,
platforms, and twists in their respective files under the `data` folder.

## Running the tests

Load the app with the `runTests` parameter, then open the console.

## Credits

- [florinpop17](https://github.com/florinpop17) for a ton of awesome project ideas
