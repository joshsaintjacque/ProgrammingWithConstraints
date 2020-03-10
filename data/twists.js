const DEFAULT_TWISTS = [
  { name: "no constraints", isActive: true },
  { name: "a 1 hour time limit", isActive: true },
  { name: "a 2 hour time limit", isActive: true },
  { name: "a 4 hour time limit", isActive: true },
  { name: "a max of 1kb", isActive: true },
  { name: "a max of 5kb", isActive: true },
  { name: "100% Test Coverage", isActive: true },
  { name: "Mutation Testing", isActive: true },
  {
    name: "the Pomodoro Technique",
    url: "https://medium.com/@mr_mig_by/pomodoro-for-programmers-d6568dd1e6fc",
    isActive: true
  },
  {
    name: "Domain-Driven Design (DDD)",
    url:
      "https://medium.com/the-coding-matrix/ddd-101-the-5-minute-tour-7a3037cf53b8",
    isActive: true
  },
  {
    name: "Test-Driven Development (TDD)",
    url: "https://airbrake.io/blog/sdlc/test-driven-development",
    isActive: true
  },
  { name: "no dependencies" }
];

export default DEFAULT_TWISTS;
