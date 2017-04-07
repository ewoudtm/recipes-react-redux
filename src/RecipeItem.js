import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool.isRequired,
    vegetarian: PropTypes.bool.isRequired,
    pescatarian: PropTypes.bool.isRequired,
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, liked, photo } = this.props

    const style = {
      height: '1em'
    }

    const photo_style = {
      height: '200px'
    }

    return (
      <article className="recipe">
        <h1><Link to={`/recipes/${_id}`}>{ title }</Link></h1>
        <div>
          <img style= {photo_style} src={photo} />
          <p>{ summary }</p>
          <ul>
            { vegan && <li title="vegan"><img style={style} src={Vegan} /></li> }
            { !vegan && vegetarian && <li title="vegetarian"><img style={style} src={Vegetarian} /></li> }
            { pescatarian && <li title="pescatarian"><img style={style} src={Pescatarian} /></li> }
            <LikeButton liked={liked} _id={_id} />
          </ul>
        </div>
      </article>
    )
  }
}

export default RecipeItem
