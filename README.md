Acal Vesão 2.0

npm run build -- --configuration production --aot
docker build . -t alexandrequeiroz/app:1.1.1
docker push alexandrequeiroz/app:1.1.1

ng build --prod --base-href="acal.online"
angular-cli-ghpages --dir=dist/
