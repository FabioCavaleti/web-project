import styled from 'styled-components';

const BooksWrapper = styled.div`
  flex-basis: ${(props) => (props.filterArea ? '90%' : '100%')};
`;

export default BooksWrapper;