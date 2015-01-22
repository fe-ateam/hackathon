Workflow
--------

Workspace <===> Index <===> Local repo <===> Remote repo

Check out [this article](http://blog.osteele.com/posts/2008/05/my-git-workflow) for better illustration.


Commands
--------


Set default pull/push branch

```
git config push.default current
git config pull.default current
```


Pull from remote repo

```
git pull
```


Add changes from workspace to index

```
git add -A
```


Commit changes to local repo

```
git commit -m "my message"
```


Push to remote repo

```
git push
```


Revert changes in index

```
git checkout -- filename
```


Revert changes in local repo

```
git checkout HEAD filename
```


Merge (resolve) conflicts

```
git mergetool -t p4merge
```


Alias (optional)
----------------


Create an alias for `git status`

```
git config --global alias.st status
```

Instead of typing `git status`, now you just type `git st`.


Command `git add -A` adds both tracked and untracked changes to the index. Here is how to create a shortcut `git aa`:

```
git config --global alias.aa 'add -A'
```


The verbose commit `git commit -v` gives more diff information of the comitting changes. Besides, this command will bring up a vi editor to enter message.

To have a shortcut of this command, type

```
git config --global alias.ci 'commit -v'
```

Log in pretty format with graph:

```
git config --global alias.lg 'log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'
```
