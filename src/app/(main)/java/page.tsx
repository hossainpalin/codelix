import Compiler from "@/components/editor/compiler";
import { languageList } from "@/components/language-list";

export default function JavaPage() {
  const { title, subTitle, language, version, codeSnippet } =
    languageList["java"];

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
