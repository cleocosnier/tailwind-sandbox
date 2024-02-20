import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CodeEditor = ({ codeValue }) => {
  return (
    <div className="absolute top-2/4">
      <CodeMirror
        value={codeValue}
        height="calc(100vh - 100px)"
        theme={vscodeDark}
      />
    </div>
  );
};
export default CodeEditor;
