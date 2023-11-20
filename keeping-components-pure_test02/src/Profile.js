import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

let currentPerson;

export default function Profile({ person }) {
  // currentPerson = person;
  return (
    <Panel>
      <Header target={person} />
      <Avatar target={person} />
    </Panel>
  )
}

function Header(target) {
  return <h1>{target.name}</h1>;
}

function Avatar({ target }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(target)}
      alt={target.name}
      width={50}
      height={50}
    />
  );
}

/*
ProfileのpropsをHeaderとAvatarに分割することで、
Profileのpropsが変更されたときに、HeaderとAvatarのpropsが変更されないようにする。
currentPersonを使わないようにすることで、Profileのpropsが変更されたときに、
HeaderとAvatarのpropsが変更されないようにする。
*/
