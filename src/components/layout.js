import React from "react"
import "./layout.scss"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
<div style={{ margin: `0 auto`, maxWidth: 800 }}>
  <header style={{ marginBottom: `50px` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Paaaint</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>

  {children}
</div>
)
