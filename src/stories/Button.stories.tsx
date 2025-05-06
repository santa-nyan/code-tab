import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { CustomContainer, CustomDocsPage } from "../components/CustomDocs";

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

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      page: CustomDocsPage,
      container: CustomContainer,
    },
    code: {
      html: `<Button>Primary</Button>`,
      ts: TS_CODE
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    code: {
      html: `<Button>Primary</Button>`,
      ts: TS_CODE
    },
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
