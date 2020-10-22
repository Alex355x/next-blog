import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: aliceblue;
  font-family: 'Roboto', sans-serif;
 
`;

export const Content = styled.ul`
  display: flex;
  list-style-type: none;
  color: black;
  width: 100%;
  height: 100px;
  flex-direction: column;
  
  a {
    text-decoration: none;
    color: black;
  } 
  a:visited {
    color: black;
  }
 
`;

export const List = styled.li`
  margin: 5px 0;
  color: #2c3e50;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  letter-spacing: 1px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 30px;
  color: white;
  background-color: black;
  width: 100%;
  heihgt: 200px;
  padding: 30px;
`;

export const StyleLink = styled.a`
 
  background: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
  border: 0;
  box-shadow: 0 3px 5px 2px rgba(218, 220, 224);
  line-height: 38px;
  transition: 0.5s;
  background-size: 200% auto;
  width: 100%;
  margin-bottom: .5rem;
  padding: 0 30px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;