dotinstall-grunt
================

## 0. Gruntとは？

Node.jsを使用したCUIのビルドツール. CofeeScriptやSass, Lessのコンパイル, jsやcssの結合と圧縮をタスクとして設定することで自動化する. 簡易Webサーバを立ち上げたり, ファイルの更新を検知してLiveReloadを行うことも可能.

## 1. 開発環境を整える

グローバルにgruntコマンドをインストールする.<br>
今回のチュートリアルでlessの自動コンパイルも行うので入れてなければインストール.

<pre>
npm install -g grunt-cli
npm install -g less
</pre>

## 2. プロジェクトにGruntをインストール

package.jsonのひな形を作る.

<pre>
npm init
</pre>

gruntインストール. package.jsonに新たに追記する場合は

<pre>
npm install grunt --save-dev
</pre>

既存プロジェクトを他のマシンで動かす場合は下記で良い.

<pre>
npm install
</pre>

## 3. Gruntfile.jsを作って編集する

gruntのプラグインは[gruntjs.com/plugins](http://gruntjs.com/plugins)に揃っている.<br>
まずはgruntが公式にメンテナンスしているcontribから使ってみる.

<pre>
npm install grunt-contrib --save-dev
</pre>

config, pluginLoad, taskで構成されている.

<pre>
module.exports = function(grunt){
  // config
  grunt.initConfig({
    task:{
      target:{
        config
      }
    }
    .
    .
    .
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib');

  // task
  grunt.registerTask('default', 'task');
};
</pre>

例えば[こんな感じの](https://github.com/Mrk1869/dotinstall-grunt/blob/master/Gruntfile.js)Gruntfile.jsで下記の機能が使える.

* less: lessコンパイル
* csslint: css構文チェック
* cssmin: css圧縮
* watch: ファイル更新検知
* connect: 簡易サーバー(+livereload)

livereloadにはブラウザ拡張(Chromeだと[ここから](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei))を事前にインストールしておく必要がある.
