# シンとくぽんTalk
- M1後期輪講で作成したプログラム
- LangChainを使った[とくぽんtalk](https://taiwa.honbu.tokushima-u.ac.jp/taiwa/ui/)の簡易実装
- シンは「新しい」という意味と、「薄い・簡易（Thin）」という意味をかけています

## 処理の流れ
1. Webから徳島大学に関するデータをスクレイピングする
2. LangChainを使って、↑のデータをベクトルDBに格納し、RAGを構築する
3. ngrokとFlaskを使って、REST API化し、フロントエンド側からアクセスできるようにする
4. フロントエンド側(chat ui)に上記で発行されたURLを設定し、GUIからチャットを送信すると、RAGで応答が生成され、フロントエンド側に回答が表示される

## 実行方法
1. `tokupon_server_rinna.ipynb`をGoogle Colab上で実行する
   1. 途中でngrokのトークンの発行が必要
2. 上記で発行されたURLを`chat_ui/src/index.js`の`API_HOME`に設定する
3. ブラウザで`chat_ui/index.html`を開く

<img width="400" src="example.png">
