import gql from 'graphql-tag';

export default gql`
  ## QUERY ##
  type TodoItem {
    id: ID!
    content: String!
    # Relations
    list: TodoList!
  }
`;
