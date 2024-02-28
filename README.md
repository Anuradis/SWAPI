# SWAPI
SWAPI App 1.0 - initial version to preview and query people

## Description
App implemented in minimal way, I've mainly focused on structuring codebase aka. if it would be real world project.
General concept was achieved but due to limited time I didn't implement all I wanted, therefore I will leave here my proposals/improvements.


### Improvements list (task supposed to take 2 hours in first place)
1. Implement memo function to cache state of already fetched data, therefore if fetch with same parameters called wouldn't need to be refetched.
2. API does not allow for data modification, therefore by edit option I do understand that we wanted to preview details of given person.
3. Improve styling of components, currently it's really minimal.
4. Map properties returned form API to camelCase(i.e. create mapping methods) in services so it's consistent
4. Add more comments/JSDocs to functions, explaining what they are responsible for.
4. Didn't use any external packages like bootstrap on purpose with predefined components/styles as understood that it wasn't the purpose of the task.
5. Possible pagination functionality to add.
6. Loader indicating fetching.
7. Previous button on Edit view returning to Home view → currently it can be achieved using previous browser button.
8. Display more person details
9. Probably some more, that can think of upon request.

#### Project Setup

```sh
npm install
```

##### Compile and Hot-Reload for Development

```sh
npm run dev
```
