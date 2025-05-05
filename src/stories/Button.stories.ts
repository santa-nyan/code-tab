import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const TS_CODE = `@Component({
  selector: 'example-ask-confirmation-default',
  template: \`<button mat-stroked-button (click)="openDialog()">Open</button>\`,
})
export class ExampleAskConfirmationComponent {
  private readonly askConfirmationService = inject(AskConfirmationService)

  public openDialog(): void {
    this.askConfirmationService.open({ message: 'bla or not bla' }).subscribe(() => {
      console.debug('Confirmed')
    })
  }
}`;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
  parameters: {
    code: {
      html: `<Button>Hello Button</Button>`,
      ts: TS_CODE
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
  parameters: {
    code: {
      html: `<Button>Secondary</Button>`,
      ts: `const pisun = 0;`
    },
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
