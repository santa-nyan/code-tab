import React, { memo } from "react";

import {
  AddonPanel,
  SyntaxHighlighter,
} from "storybook/internal/components";
import { TabsState } from "storybook/internal/components";
import { useParameter } from "storybook/internal/manager-api";
import { useTheme } from "storybook/internal/theming";


interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = memo(function MyPanel(props) {
  const theme = useTheme();

  const { html, ts } = useParameter("code", {
    html: "No HTML code provided",
    ts: "No TS code provided",
  });

  const highlighterStyles = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  console.log(html, ts);

  return (
    <AddonPanel {...props}>
      <TabsState
        initial="overview"
        backgroundColor={theme.background.hoverable}
      >
        <div id="overview" title="HTML">
          <SyntaxHighlighter
            copyable
            showLineNumbers
            language="html"
            customStyle={highlighterStyles}
          >
            {html}
          </SyntaxHighlighter>
        </div>

        <div id="div" title="TS">
          <SyntaxHighlighter
            copyable
            showLineNumbers
            language="typescript"
            customStyle={highlighterStyles}
          >
            {ts}
          </SyntaxHighlighter>
        </div>
      </TabsState>
    </AddonPanel>
  );
});
