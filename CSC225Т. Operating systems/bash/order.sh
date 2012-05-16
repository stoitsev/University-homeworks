#/bin/sh

for file in $(find $1 -name "*.*");
do
  ext="${file##*.}";
  if [ ! -d "$ext" ];
  then
    mkdir $ext;
  fi; 
  cp $file $ext;
done;           
