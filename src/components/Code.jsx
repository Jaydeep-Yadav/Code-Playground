import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
//? Components
import Editor from "./Editor";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <>
      <Container>
        <Editor
          heading="HTML"
          icon="/"
          color="#FF3C41"
          language='xml'
          value={html}
          onChange={setHtml}
        />
        <Editor
          heading="CSS"
          icon="*"
          color="#0EBEFF"
          language='css'
          value={css}
          onChange={setCss}
        />
        <Editor
          heading="JS"
          icon="()"
          color="#FCD000"
          language='javascript'
          value={js}
          onChange={setJs}
        />
      </Container>
    </>
  );
};

export default Code;
