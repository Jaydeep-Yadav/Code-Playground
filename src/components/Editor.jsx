import { Box } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import '../App.css'

const Heading = styled(Box)`
  background-color: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
`;

const Editor = ({ heading, icon, color, language, value, onChange}) => {

    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) =>{
        onChange(value);
    }

  return (
    <>
      <Container style={open? null: {flexGrow: 0}}>
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                background: color,
                height: 20,
                width: 20,
                color: "#000",
                display: "flex",
                placeContent: "center",
                paddingBottom: 2,
                borderRadius: "5px",
                marginRight: "5px",
              }}
            >
              {icon}
            </Box>
            {heading}
          </Heading>
          <CloseFullscreenIcon
            fontSize="small"
            style={{ alignSelf: "center" }}
            onClick = {()=>setOpen(prevState=>!prevState)}
          />
        </Header>
        <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "material",
          }}
        />
      </Container>
    </>
  );
};

export default Editor;
