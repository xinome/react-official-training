import { useState } from 'react';

export default function FeedbackForm() {

  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

/*
state は、コンポーネントのレンダー結果に影響するデータです。
state を使わないデータは、state に含める必要はありません。
例えば、ユーザーが入力した値を state に含める必要はありません。
代わりに、ユーザーが入力した値は、イベントハンドラーの中でローカル変数に保存してください。
*/
