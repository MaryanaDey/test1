import styled from 'styled-components';

const Header = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color:#242A37;
  box-shadow: '4px 4px 8px rgba(36, 42, 55, 0.15)';
  height: 60px;
 
`;




export default Header;