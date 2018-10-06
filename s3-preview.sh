PATH_NAME=$1

DOMAIN="twhackathon2018"
S3_NAME="s3://${DOMAIN}/"
PREVIEW_URL="https://${DOMAIN}.s3-website-ap-northeast-1.amazonaws.com/${PATH_NAME}"
PREVIEW_URL="https://s3-ap-northeast-1.amazonaws.com/${DOMAIN}/index.html#/"
# https://s3-ap-northeast-1.amazonaws.com/twhackathon2018/index.html#/admin
UPLOAD_PATH="${S3_NAME}${PATH_NAME}"

echo "uploading to $UPLOAD_PATH\n"
echo "---------------------------------"

aws s3 sync dist "$UPLOAD_PATH" \
  --delete \
  --cache-control max-age=31536000,public \
  --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
  --exclude '*.map'

if [ $? == 0 ]
then
  aws s3 cp "$UPLOAD_PATH/index.html" "$UPLOAD_PATH/index.html" \
    --metadata-directive REPLACE \
    --cache-control max-age=0,no-cache,no-store,must-revalidate \
    --content-type text/html --acl public-read
fi

echo "---------------------------------\n"


if [ $? == 0 ]
then
  echo "🎉  Complete Deploy to AWS S3"
  echo "🔗  Link: ${PREVIEW_URL}\n"
else
  echo "😞 Failed to Deploy\n"
fi
