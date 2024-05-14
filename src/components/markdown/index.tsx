import MDEditor, { commands } from "@uiw/react-md-editor";
import { FC } from "react";

type Props = {
  value: string;
  setValue: any;
};

export const Markdown: FC<Props> = ({ value, setValue }) => {
  return (
    <MDEditor
      data-color-mode="dark"
      value={value ?? ""}
      onChange={(value) => setValue(value ?? "")}
      commands={[
        commands.bold,
        commands.italic,
        commands.image,
        commands.divider,
        commands.link,
        commands.image,
        commands.quote,
        commands.code,
        commands.divider,
        commands.unorderedListCommand,
        commands.orderedListCommand,
        commands.checkedListCommand,
        commands.divider,
        commands.title,
      ]}
      extraCommands={[commands.codeLive]}
      preview="edit"
    />
  );
};
