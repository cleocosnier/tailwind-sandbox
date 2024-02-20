import React from "react";
import CodeEditor from "./CodeEditor";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogProps,
  DialogBodyProps,
} from "@material-tailwind/react";

const Btn = ({ maxHeight, children, textTransform, code }) => {
  const maxheight = maxHeight ? "max-h-[" + maxHeight + "]" : "";
  const classes =
    maxheight +
    " rounded-lg bg-primary text-white uppercase py-2 px-4 w-auto inline-block font-futura hover:brightness-110";

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  let codeValue = code ? code : "";
  return (
    <div className="">
      <a className={classes} onClick={handleOpen}>
        {children}
      </a>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <CodeEditor codeValue={codeValue} />
        </DialogBody>
        {/* <DialogFooter></DialogFooter> */}
      </Dialog>
    </div>
  );
};

export default Btn;
