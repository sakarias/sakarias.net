#! /bin/bash

function build {
  #jekyll build
  #/usr/local/lib/ruby/gems/2.6.0/bin/jekyll build
  /usr/local/lib/ruby/gems/3.0.0/bin/jekyll build
  if [ $? -ne 0 ];
    then
    echo "Build failed!"
    exit 1
  fi
}

function change_url {
  awk 'NR==n{$2=a}1' n=1 a="${1}" _config.yml > tmp
  mv tmp _config.yml
}

function deploy {
  URL="https://sakarias.net"
  change_url $URL
  build
  /usr/local/bin/rsync -az -e ssh --delete _site/* sakarias@web01.pve-cluster.rockstable.net:/mnt/nginx/sites/sakarias.net/www/
  open $URL
}

function localtest {
  URL="http://sakarias.home.rockstable.net"
  change_url $URL
  build
  #rsync -az -e ssh --delete _site/* web.home.rockstable.net:/home/sites/sakarias.net/www/
  open $URL
}

function local {
  URL="http://localhost:4000"
  change_url $URL
  /usr/local/lib/ruby/gems/3.0.0/bin/jekyll serve --watch --future --drafts
}

function usage {
  cat<<-EOF
  Usage of $(basename $0):

  build     Just build the site with Jekyll.
  deploy    Builds and uploads the site to production environment
  test      Builds and uploads the site to testing environment.
  local     Starts jekyll in server mode.
  
EOF
}

case "$1" in
  build | b)    build
            ;;

  deploy | d)   deploy
            ;;

  test | t)     localtest
            ;;

  local | l)    local
            ;;

  *)        usage
            ;;
esac
