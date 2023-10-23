# シンとくぽんTalk
- M1後期輪講で作成したプログラム
- LangChainを使った[とくぽんtalk](https://taiwa.honbu.tokushima-u.ac.jp/taiwa/ui/)の簡易実装
- 処理の流れは以下
  1. WikipediaとYouTubeから徳島大学に関するテキストデータをスクレイピング
  2. 上記のデータをベクトルDBに格納し、LangChainを使ってRAGを実装
  3. ngrokを使ってREST API化し、Google Colabから外部公開
  4. chat ui側に上記で発行されたURLを設定し、GUIからチャットを送信
