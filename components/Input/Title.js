import * as React from "react";
import FormControl, { useFormControl } from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import FormHelperText from "@material-ui/core/FormHelperText";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);
  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl({
  onChange,
  data,
  placeholder,
  className,
}) {
  return (
    <Box>
      <Input
        className={className}
        placeholder={
          placeholder === undefined ? "Please enter text" : placeholder
        }
        onChange={onChange}
        value={data}
        inputProps={{ className: className }}
        autoFocus
      />
      {/* <MyFormHelperText focusedText={focusedText} /> */}
    </Box>
  );
}
