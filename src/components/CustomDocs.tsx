import React, { useContext, useEffect, useState } from "react";
import { DocsContainer, DocsContextProps } from "@storybook/blocks";
import { Title, Description, Primary, Stories } from "@storybook/blocks";

import { Canvas, DocsContext, Source } from "@storybook/addon-docs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TabsState } from "@storybook/components";


export const CustomSource: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState('No HTML code provided');
  const [tsCode, setTsCode] = useState('No TS code provided');

  const context = useContext(DocsContext);

  const highlighterStyles = {
    fontSize: "16px",
    lineHeight: "1.6",
  };


  useEffect(() => {
    try {
      const meta = context.resolveOf('meta', ['meta']);
      const code = meta?.preparedMeta?.parameters?.code;

      if (code) {
        setHtmlCode(code.html || 'No HTML code');
        setTsCode(code.ts || 'No TS code');
      }
    } catch (err) {
      console.log('No meta found, falling back to project annotations');
    }
  }, [context]);

  return (
    <div style={{marginTop: '-25px'}}>
      <TabsState initial="html">
        <div id="html" title="HTML">
          <SyntaxHighlighter
            showLineNumbers
            language="html"
            customStyle={highlighterStyles}
            style={nord}
          >
            {htmlCode}
          </SyntaxHighlighter>
        </div>

        <div id="ts" title="TS">
          <SyntaxHighlighter
            showLineNumbers
            language="typescript"
            customStyle={highlighterStyles}
            style={nord}
          >
            {tsCode}
          </SyntaxHighlighter>
        </div>
      </TabsState>
    </div>
  );
};

export const CustomDocsPage: React.FC = () => {
  return (
    <>
      <Title />
      <Description />
      <Canvas sourceState="none" withToolbar={true} />
      <CustomSource/>
      <Stories />
    </>
  )
};

export const CustomContainer: React.FC = ({ children, context }: { children: any; context: DocsContextProps }) => (
  <DocsContainer context={context}>{children}</DocsContainer>
);
