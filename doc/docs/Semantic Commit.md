# Semantic Commit Messages

To maintain an organization of the commits that will be made in the branches, follow the practices:

### Format: 
```
<type>(#issue number): subject
```

### Types: 
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

### Subject:
- Always use lowercase letters 
- Always in English
- Always in present tense 

### Example: 
```
git commit -m "feat:(#02): add hat wobble"
```

### References: 
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716