import * as React from 'react';
import { IPickerItemProps, ISuggestionModel, ValidationState } from '../../Pickers';
import { Selection } from '../../Selection';

export interface IBaseSelectedItemsList<T> {
  /** Gets the current value of the input. */
  items: T[] | undefined;

  addItems: (items: T[]) => void;
}

export interface ISelectedItemProps<T> extends IPickerItemProps<T> {
  onCopyItem: (item: T) => void;
}

// Type T is the type of the item that is displayed
// For example, if the picker is displaying persona's than type T could either be of Persona or Ipersona props
// tslint:disable-next-line:no-any
export interface IBaseSelectedItemsListProps<T> extends React.Props<any> {
  componentRef?: (component?: IBaseSelectedItemsList<T> | null) => void;

  /**
   * The selection
   */
  selection?: Selection;
  /**
   * A callback for when items are copied
   */
  onCopyItems?: (items: T[]) => string;
  /**
   * Function that specifies how the selected item will appear.
   */
  onRenderItem?: (props: ISelectedItemProps<T>) => JSX.Element;
  /**
   * Initial items that have already been selected and should appear in the people picker.
   */
  defaultSelectedItems?: T[];
  /**
   * A callback for when the selected list of items changes.
   */
  onChange?: (items?: T[]) => void;
  /**
   * Function that specifies how arbitrary text entered into the well is handled.
   */
  createGenericItem?: (input: string, ValidationState: ValidationState) => ISuggestionModel<T>;
  /**
   * A callback to process a selection after the user selects something from the picker.
   */
  onItemSelected?: (selectedItem?: T) => T | PromiseLike<T>;
  /**
   * The items that the base picker should currently display as selected. If this is provided then the picker will act as a
   * controlled component.
   */
  selectedItems?: T[];

  /**
   * Aria label for the 'X' button in the selected item component.
   * @default ''
   */
  removeButtonAriaLabel?: string;
  /**
   * A callback when an item is deleted
   * @deprecated Please use onItemsDeleted
   */
  onItemDeleted?: (deletedItem: T) => void;

  /**
   * A callback when and item or items are deleted
   */
  onItemsDeleted?: (deletedItems: T[]) => void;

  /**
   * A callback on whether this item can be deleted
   */
  canRemoveItem?: (item: T) => boolean;
}
