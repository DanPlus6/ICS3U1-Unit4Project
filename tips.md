# tips

If you forgot to pull before pushing:

```sh
git pull --rebase
git push
```

To exit the terminal commit editor if it is vim, press esc, then type `:exit`
To exit the terminal commit editor if it is nano, press `ctrl + o` to save then press `ctrl + x` to exit

If you want to rename a commit that you haven't pushed yet:

```sh
git commit --amend
```

If you want to rename the last pushed commit in git history:

```sh
git commit --amend
git push -f
```

If you want to add a change to the last unpushed commit:

```sh
git add .
git commit --amend --no-edit
```

If you want to add a change to the last pushed commit in git history:

```sh
git add .
git commit --amend --no-edit
git push -f
```
