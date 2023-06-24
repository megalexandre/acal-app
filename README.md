Acal Vesão 2.0

docker build . -t alexandrequeiroz/app:1.0.0
ng build --prod --base-href="acal.online"
angular-cli-ghpages --dir=dist/
