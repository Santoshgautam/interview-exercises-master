# interview-exercises 

# Candidate Notes:

I have selected 'PS-get-deep-property' and 'UI-bar-graph' from the provided assignments.

Below is a brief overview of the solutions:

1. PS-get-deep-property: I have split the dot-separated path into an array and looped over the resulting array. In each loop, if the given object contains the current path, then object is reassigned and searched, otherwise we return 'null' as the given path is invalid. I have tested the code using Mocha and Chai libraries.

2. UI-bar-graph: I have used to given data.json file to create an array of Bar components and used "flex-box" layout to create a bar-graph. The height of bars is dynamic and calculated on runtime as the percentage of the highest value. I have used React JS with Hooks and SCSS. I have also done unit tests and snapshot tests using Jest and Enzyme.

3. Each solution contains the README.md file with instructions to run the code.

## Requirement Note

You will notice that there a several directories, some prefixed with UI and others PS. These prefixes represent two types of exercises. One User Interface and the other is Problem Solving. Each directory includes a README with the instructions for that exercise.
 
## Instructions

1) Clone git repo as you will be uploading you work to your own repo later.
2) Select one UI exercise and one PS exercises you would like to work.
3) Review the instructions for each exercise in that directory's README.
4) Commit all your work into the applicable directories and push your work to any web-based git platform such as Github or Bitbucket.
5) Send in the link to your finished repo for review.

## Rules

- For UI exercises you may use any UI framework you choose or none at all if that is your style.
- For PS exercises you should not use any libraries just vanilla JS.
- All completed exercise files should reside in the applicable exercise's directory.
- Add comments to each exercise README describing how to run you code.
- Have fun!