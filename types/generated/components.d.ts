import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedComponentsAccordionItemConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_accordion_item_configurables';
  info: {
    displayName: 'Accordion Item Configurable';
    icon: 'layer';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Text;
    expanded: Attribute.Boolean;
  };
}

export interface SharedComponentsButtonConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_button_configurables';
  info: {
    displayName: 'Button-Configurable';
    icon: 'layer';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface SharedComponentsCheckBoxConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_check_box_configurables';
  info: {
    displayName: 'CheckBox Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    checked: Attribute.Boolean;
  };
}

export interface SharedComponentsDatePickerConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_date_picker_configurables';
  info: {
    displayName: 'DatePicker Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    selectedDate: Attribute.Enumeration<['date']>;
  };
}

export interface SharedComponentsIconConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_icon_configurables';
  info: {
    displayName: 'Icon Configurable';
    icon: 'layer';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface SharedComponentsInputConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_input_configurables';
  info: {
    displayName: 'Input Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface SharedComponentsSelectedBoxConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_selected_box_configurables';
  info: {
    displayName: 'SelectedBox Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    options: Attribute.Enumeration<['option']>;
  };
}

export interface SharedComponentsSliderConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_slider_configurables';
  info: {
    displayName: 'Slider Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
  };
}

export interface SharedComponentsTagConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_tag_configurables';
  info: {
    displayName: 'Tag Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    backgroundColor: Attribute.String;
    textColor: Attribute.String;
  };
}

export interface SharedComponentsToggleSwitchConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_toggle_switch_configurables';
  info: {
    displayName: 'Toggle Switch Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    onText: Attribute.String;
    offText: Attribute.String;
  };
}

export interface SharedComponentsTooltipConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_tooltip_configurables';
  info: {
    displayName: 'Tooltip Configurable';
    icon: 'layer';
  };
  attributes: {
    content: Attribute.String;
    position: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared-components.accordion-item-configurable': SharedComponentsAccordionItemConfigurable;
      'shared-components.button-configurable': SharedComponentsButtonConfigurable;
      'shared-components.check-box-configurable': SharedComponentsCheckBoxConfigurable;
      'shared-components.date-picker-configurable': SharedComponentsDatePickerConfigurable;
      'shared-components.icon-configurable': SharedComponentsIconConfigurable;
      'shared-components.input-configurable': SharedComponentsInputConfigurable;
      'shared-components.selected-box-configurable': SharedComponentsSelectedBoxConfigurable;
      'shared-components.slider-configurable': SharedComponentsSliderConfigurable;
      'shared-components.tag-configurable': SharedComponentsTagConfigurable;
      'shared-components.toggle-switch-configurable': SharedComponentsToggleSwitchConfigurable;
      'shared-components.tooltip-configurable': SharedComponentsTooltipConfigurable;
    }
  }
}
