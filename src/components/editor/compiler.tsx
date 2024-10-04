"use client";

import { cn } from "@/lib/utils";
import axios from "axios";
import { Share2, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import Editor from ".";
import LoadingButton from "../loading-button";
import { Button } from "../ui/button";

interface LanguageProps {
  title: string;
  subTitle: string;
  language: {
    editor: string;
    compiler: string;
  };
  version: string;
  codeSnippet: string;
  className?: string;
}

export default function Compiler({
  title,
  subTitle,
  language,
  version,
  codeSnippet,
  className,
}: LanguageProps) {
  const [sourceCode, setSourceCode] = useState<string>(codeSnippet);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const editorRef = useRef(null);

  const handleOutputClear = () => {
    setOutput("");
    setError("");
    setInput("");
  };

  const executeCode = async () => {
    const requestData = {
      language: language.compiler,
      version: version,
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin: input,
      args: [],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        requestData,
      );

      if (response.status !== 200) {
        setIsLoading(false);
        setError(response.data.message);
        setInput("");
        return;
      }

      console.log(response.data);

      setIsLoading(false);

      if (response.data.run.stderr) {
        setError(response.data.run.stderr);
        setOutput("");
        setInput("");
        return;
      }

      if (response.data.run.stdout) {
        setOutput(response.data.run.stdout);
        setError("");
        setInput("");
        return;
      }
    } catch (error) {
      setIsLoading(false);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred while running the code.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "relative h-[calc(100%-50px)] w-full p-2 pt-1 sm:h-[calc(100%-70px)]",
        className,
      )}>
      <div className="sticky left-0 top-1 z-10 mb-3 flex w-full items-center justify-between bg-neutral-950 pb-1">
        <div className="hidden xs:block">
          <h1 className="text-xl font-semibold text-neutral-300 sm:text-2xl">
            {title}
          </h1>
          <p className="hidden text-[16px] font-light text-neutral-400 sm:block">
            {subTitle}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <LoadingButton loading={isLoading} onClick={executeCode}>
            {isLoading ? "Running..." : "Run"}
          </LoadingButton>

          <Button
            onClick={() => {}}
            variant="outline"
            size="icon"
            className="text-neutral-300 transition-colors hover:border-neutral-900 hover:bg-neutral-900">
            <Share2 className="size-4" />
          </Button>

          <Button
            onClick={handleOutputClear}
            variant="outline"
            size="icon"
            className="text-neutral-300 transition-colors hover:border-neutral-900 hover:bg-neutral-900">
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>

      <div className="hidden h-full w-full md:block">
        <Editor
          editorRef={editorRef}
          language={language.editor}
          version={version}
          codeSnippet={codeSnippet}
          sourceCode={sourceCode}
          setSourceCode={setSourceCode}
          output={output}
          error={error}
          input={input}
          setInput={setInput}
          direction="horizontal"
        />
      </div>

      <div className="block h-full w-full md:hidden">
        <Editor
          editorRef={editorRef}
          language={language.editor}
          version={version}
          codeSnippet={codeSnippet}
          sourceCode={sourceCode}
          setSourceCode={setSourceCode}
          output={output}
          error={error}
          input={input}
          setInput={setInput}
          direction="vertical"
        />
      </div>
    </div>
  );
}
