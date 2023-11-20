import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

/*
フックは、関数コンポーネントの中でのみ呼び出す必要があります。
ループ、条件分岐、ネストされた関数の中で呼び出してはいけません。
代わりに、関数コンポーネントのトップレベルで呼び出してください。
これは、フックが呼び出される順序が毎回同じであることを保証するためです。
*/
