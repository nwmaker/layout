echo 'message',$1
echo 'branch',$2
git add . && git commit -m $1 && git push origin $2
