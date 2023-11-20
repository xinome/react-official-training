export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick = {e => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}

/*
e.stopPropagation() は、イベントの伝播を止めるメソッドです。
イベントの伝播とは、イベントが発生した要素から、その親要素、さらにその親要素と、
階層を上がっていくことをいいます。
今回の場合、button 要素でクリックイベントが発生した場合、
button 要素の親要素である div 要素にもクリックイベントが伝播してしまいます。
そのため、div 要素にもクリックイベントを設定していると、
button 要素をクリックした時にも div 要素のクリックイベントが発生してしまいます。
このような場合、e.stopPropagation() を使うことで、
イベントの伝播を止めることができます。
*/
