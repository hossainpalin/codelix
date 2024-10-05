"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import LanguageEditor from "@monaco-editor/react";
import { MutableRefObject } from "react";

interface EditorProps {
  className?: string;
  language: string;
  version?: string;
  codeSnippet: string;
  editorRef: MutableRefObject<null>;
  sourceCode: string;
  setSourceCode: (value: string) => void;
  output?: string;
  error?: string;
  input: string;
  setInput: (value: string) => void;
  direction: "horizontal" | "vertical";
}

export default function Editor({
  className,
  language,
  codeSnippet,
  editorRef,
  sourceCode,
  setSourceCode,
  output,
  error,
  input,
  setInput,
  direction,
}: EditorProps) {
  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setSourceCode(value);
    }
  };

  return (
    <ResizablePanelGroup
      direction={direction}
      className={cn(
        "h-full w-full rounded-lg border border-neutral-800",
        className,
      )}>
      <ResizablePanel className="bg-[#1E1E1E]" defaultSize={50} minSize={25}>
        <LanguageEditor
          options={{
            fontSize: 17,
            contextmenu: false,
            minimap: { enabled: false },
            mouseWheelZoom: true,
            wordWrap: "on",
          }}
          theme="vs-dark"
          height="100%"
          defaultLanguage={language}
          defaultValue={codeSnippet}
          value={sourceCode}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
      </ResizablePanel>
      <ResizableHandle className="border border-neutral-700/50" />
      <ResizablePanel className="bg-[#1E1E1E]" defaultSize={50} minSize={25}>
        <div className="relative flex h-full flex-col justify-between overflow-y-auto p-5">
          <div>
            <div>
              {output &&
                output.split("\n").map((line, index) => (
                  <p key={index} className="font-light text-neutral-400">
                    {line}
                  </p>
                ))}
            </div>

            <div>
              {error && <p className="font-light text-red-600">{error}</p>}
            </div>

            <div>
              {!output && !error && (
                <p className="font-light text-neutral-400">
                  Output will be shown here
                </p>
              )}
            </div>
          </div>

          <div className="sticky bottom-0 left-0 flex w-full flex-col justify-center gap-y-2">
            <p className="font-semibold text-neutral-400">
              Compile with input
            </p>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              autoComplete="off"
              className="w-full rounded-lg bg-neutral-900 px-2 py-2 text-sm font-light text-neutral-400 outline-none hover:bg-neutral-800"
              type="text"
              name="input"
              placeholder="Enter input here"
            />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
