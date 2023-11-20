export default function StoryTray({ stories }) {
  // stories.push({
  //   id: 'create',
  //   label: 'Create Story'
  // });

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}

/*
stories.pushは、storiesの参照を変更しているので、
storiesの参照が変更されたということは、Appコンポーネントのstateが更新されたということになり、
Appコンポーネントが再レンダリングされる。
代案として、storiesの参照を変更せずに、storiesのコピーを作成して、
そのコピーに対してpushを行うという方法がある。
例）slice、filter、map など
*/
