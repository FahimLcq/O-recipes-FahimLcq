import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles.scss';


function Menu() {
  const recipes = useSelector((state: any) => state.recipes.list);
  return (
    <nav className='menu'>
      <NavLink
        className="menu-link"
        to='/'
      >
        Accueil
      </NavLink>
      {recipes.map((recipe: any) => (
        <NavLink
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
