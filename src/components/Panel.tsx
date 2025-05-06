import React, { useEffect, useState } from "react";
import { useTheme } from "@storybook/theming";
import {
  useParameter,
} from "@storybook/manager-api";
import {
  AddonPanel,
  TabsState,
} from "@storybook/components";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const theme = useTheme();
  const code = useParameter("code", {
    html: "No HTML code provided",
    ts: "No TS code provided",
  });

  const [htmlCode, setHtmlCode] = useState(code.html);
  const [tsCode, setTsCode] = useState(code.ts);
  const [tabsKey, setTabsKey] = useState(`${code.html}:${code.ts}`);

  useEffect(() => {
    setHtmlCode(code.html);
    setTsCode(code.ts);
    setTabsKey(`${code.html}:${code.ts}`);
  }, [code.html, code.ts]);

  const highlighterStyles = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  return (
    <AddonPanel {...props}>
      <TabsState
        key={tabsKey}
        initial="overview"
        backgroundColor={theme.background.hoverable}
      >
        <div id="overview" title="HTML">
          <SyntaxHighlighter
            showLineNumbers
            language="html"
            customStyle={highlighterStyles}
            style={nord}
          >
            {htmlCode}
          </SyntaxHighlighter>
        </div>

        <div id="div" title="TS">
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
    </AddonPanel>
  );
};
