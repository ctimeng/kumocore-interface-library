## Description
Package for filter operators for kumocore project. Based on library https://www.npmjs.com/package/nestjs-paginate

## Development
All development work is commented to do through the docker.
Requirements:
- docker
- docker-compose
- make ([Windows](https://gnuwin32.sourceforge.net/packages/make.htm))
1. Create .env file and copy content of .env.dist
2. Create ssh folder and copy your `id_rsa` ssh key
3. Build and start dockers for development with command:
```bash
 make dockers-start
```
or in background mode:
```bash
 make dockers-start-d
```
you can check list and status of dockers by command:
```bash
 make dockers-status
```
4. Run tests by command:
```bash
 make yarn-test
```
For running test in debug mode (don't forget to enable 9229 port):
```bash
 make yarn-test-debug
```

## Build new version
Before the commit build new version of package with command:
```bash
 make yarn-build
```
commit changes in dist folder.

## Using package in other repositories
In package.json next line needs to be added:
```
"kumocore-interface-library": "bitbucket:kumoapp/kumocore-interface-library#<version>"
```
and then install it with
```bash
$ yarn install
```

## Test
For running all tests use command:
```bash
 make yarn-test
```
   For running test coverage use command:
```bash
 make yarn-test-cov
```

## Code style
For checking code style run command:
```bash
 make yarn-lint
```
for automatically fixing style:
```bash
 make yarn-lint-fix
```
