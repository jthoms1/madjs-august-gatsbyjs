import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Counter from '../components/counter';

const SecondPage = ({ data }) => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <br/>
    <ul>
    {data.allUsersJson.edges.map(item => (
      <li key={item.node.id}>{item.node.firstName} {item.node.lastName}</li>
    ))}
    </ul>

    <Counter startCount={parseInt(data.site.port, 10)}/>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    site {
      port
    },
    allUsersJson {
      edges {
        node {
          id,
          firstName,
          lastName,
        }
      }
    }
  }
`;