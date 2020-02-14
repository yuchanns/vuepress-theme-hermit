# vuepress-theme-hermit
**An implementation of Hugo theme hermit in vuepress**

> *Star it plz if you like !*

## WHY
I really like this theme at a glance, but I think a Hugo blog is not my style though fastest it does, so I made it an implementation in Vuepress.

## STATUS
Under rapid development. Do not take any chance on produce environment.

~~Now it has stable version. Enjoy having it!~~

## CONTRIBUTE
First clone the repo:
```sh
git clone git@github.com:yuchanns/vuepress-theme-hermit.git
```
Then change directory to project root.

Now you can run with `yarn` to install dependencies directly and start your developing with `yarn dev`.

In my way I prefer to deploy a docker-compose that facilitate matters (require **DockerCE** installed):
```sh
# build image at first
docker-compose build
# then up it in daemon mode
docker-compose up -d
# stop it if you want
docker-compose stop
# don't need it anymore (shall stop it first)
docker-compose rm -f
```
Done.

## FETCH THEME
Just run `yarn add vuepress-theme-hermit`.

## MANY THANKS
* [Hugo Hermit](https://github.com/Track3/hermit)
* [Vuepress](http://vuepress.vuejs.org/)

## LICENCE
[MIT](https://github.com/yuchanns/vuepress-theme-hermit/blob/master/LICENSE)© @[yuchanns](https://github.com/yuchanns)
