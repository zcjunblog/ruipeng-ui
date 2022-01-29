#!/usr/bin/env sh
###
 # @Date: 2022-01-27 17:12:59
 # @LastEditors: zhaozc
 # @LastEditTime: 2022-01-29 16:37:25
 # @FilePath: \ruipeng-ui\build\git-release.sh
### 
git checkout dev

# 这里主要是和远程的 dev 分支做 diff 然后合并

if test -n "$(git status --porcelain)"; then
  echo 'Unclean working tree. Commit or stash changes first.' >&2;
  exit 128;
fi

if ! git fetch --quiet 2>/dev/null; then
  echo 'There was a problem fetching your branch. Run `git fetch` to see more...' >&2;
  exit 128;
fi

if test "0" != "$(git rev-list --count --left-only @'{u}'...HEAD)"; then
  echo 'Remote history differ. Please pull changes.' >&2;
  exit 128;
fi

echo 'No conflicts.' >&2;
