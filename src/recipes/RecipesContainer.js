import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
// import seedRecipes from '../actions/recipes/seed'
import RecipeEditor from './RecipeEditor'
import fetchRecipes from '../actions/recipes/fetch'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
  }

  // componentWillMount() {
  //   this.props.seedRecipes()
  // }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>
        <RecipeEditor title='' summary='' vegan={false} vegetarian={false}  pescatarian={false} photo=''/>
        <main>

          { this.props.loading ? <img src = 'http://content.presentermedia.com/files/animsp/00006000/6703/chef_stiring_pot_anim_md_wm.gif' /> : null }
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>


      </div>
    )
  }
}

const mapStateToProps = ({ recipes, loading }) => ({ recipes, loading })

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)
