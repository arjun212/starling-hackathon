ps -ef | grep elastic | head -1 | awk '{print $2}' | xargs kill 
nohup ./elastic/bin/elasticsearch & 
echo "before sleep"
sleep 15
echo "after sleep"
./bulkUpload.sh