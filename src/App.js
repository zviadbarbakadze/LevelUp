import styled from "styled-components";
import Container from "./components/Container";

function App() {
  return (
    <MyApp>
      <Container />
    </MyApp>
  );
}

export default App;
const MyApp = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;
