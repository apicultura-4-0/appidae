# Branching Strategy

The main idea behind the Git flow branching strategy is to isolate your work into different types of branches. 

### Branches:
- **Branch main:** Contains production-level code, wich is the most consolidated code existing in the application. No team member is authorized to make commits directly to main, except commits related to documentation.
- **Branch Dev:** Has code under development and after testing and approval can merge it into the main branch.