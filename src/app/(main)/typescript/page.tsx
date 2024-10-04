import Compiler from "@/components/editor/compiler";
import { languageList } from "@/components/language-list";

export default function TypeScriptPage() {
  const { title, subTitle, language, version, codeSnippet } =
    languageList["typescript"];

  return (
    <Compiler
      title={title}
      subTitle={subTitle}
      language={language}
      version={version}
      codeSnippet={codeSnippet}
    />
  );
}
