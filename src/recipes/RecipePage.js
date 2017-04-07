import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'

export class RecipePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, liked, photo } = this.props

    const style = {
      height: '1em'
    }

    const photo_style = {
      height: '200px'
    }

    return(
      <div className="recipe page">
        <Title content={ title } />
        <img style= {photo_style} src={photo} />
        <p>{ summary }</p>
        <ul>
          { vegan && <li title="vegan"><img style={style} src={Vegan} /></li> }
          { !vegan && vegetarian && <li title="vegetarian"><img style={style} src={Vegetarian} /></li> }
          { pescatarian && <li title="pescatarian"><img style={style} src={Pescatarian} /></li> }
          <LikeButton liked={liked} _id={_id} />
        </ul>
      </div>

    )
  }
}

const mapStateToProps = ({ recipes }, { params }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipePage)
