import Gallery from './Gallery.js';
import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}

/*
・デフォルトエクスポート: 
export default function Gallery() { ... };
import Gallery from "./Gallery";

名前付きエクスポート:
export function Profile() { ... }
import { Profile } from "./Profile";
*/
