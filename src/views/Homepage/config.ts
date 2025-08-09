export const enum CheckboxType {
  PAGE_ONE = 'page_one',
  PAGE_TWO = 'page_two',
  PAGE_THREE = 'page_three',
  PAGE_FOUR = 'page_four',
}

export type TCheckbox = {
  id: number;
  label: string;
  checked: boolean;
};

export const checkboxConfigs: Record<CheckboxType, TCheckbox> = {
  [CheckboxType.PAGE_ONE]: {
    id: 1,
    label: 'Page 1',
    checked: false,
  },
  [CheckboxType.PAGE_TWO]: {
    id: 2,
    label: 'Page 2',
    checked: false,
  },
  [CheckboxType.PAGE_THREE]: {
    id: 3,
    label: 'Page 3',
    checked: false,
  },
  [CheckboxType.PAGE_FOUR]: {
    id: 4,
    label: 'Page 4',
    checked: false,
  },
};
