import { recipes } from './data.js';

function Recipe({
  id, name, ingredients
}) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe
          {...recipe}
          key={recipe.id}
        />
      )}
    </div>
  );
}

/*
ここで <Recipe {...recipe} key={recipe.id} /> というのは「recipe オブジェクトのすべてのプロパティを Recipe コンポーネントの props として渡せ」という意味のショートカット構文です。
*/