import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let thumbSize = 's';
  if(size > 90) {
    thumbSize = 'b';
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
    
  );
}
