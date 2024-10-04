import Compiler from "@/components/editor/compiler";
import { languageList } from "@/components/language-list";

export default function GoPage() {
  const { title, subTitle, language, version, codeSnippet } =
    languageList["go"];

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
