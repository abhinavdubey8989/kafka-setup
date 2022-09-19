arg_commit_msg=$1
final_commit_msg='.'

if [ -n "$arg_commit_msg" ];then
    final_commit_msg=$arg_commit_msg
fi

git add .
git commit -m $final_commit_msg
