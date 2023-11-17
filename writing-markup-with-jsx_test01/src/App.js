export default function Bio() {
  return (
    <>
      <div class="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p class="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>
    </>
  );
}

/*
JSX のルール 
1. 単一のルート要素を返す 
コンポーネントから複数の要素を返すには、それを単一の親タグで囲みます。
<div>や<>（<fragment>）など

2. すべてのタグを閉じる 
HTML と同様に、すべてのタグを閉じる必要があります。

3. （ほぼ）すべてキャメルケースで！ 
*/