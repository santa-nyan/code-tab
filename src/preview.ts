import type { Renderer, ProjectAnnotations } from "@storybook/types";

import { KEY } from "./constants";

const preview: ProjectAnnotations<Renderer> = {
  decorators: [],
  globals: {
    [KEY]: false,
  },
};

export default preview;
