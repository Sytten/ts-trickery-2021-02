import gql from 'graphql-tag';

export default gql`
  ## QUERY ##
  type TodoList {
    id: ID!
    # Relations
    items: [TodoItem!]!
  }
`;
