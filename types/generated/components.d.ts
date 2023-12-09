import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonObjectsErrorMensajes extends Schema.Component {
  collectionName: 'components_common_objects_error_mensajes';
  info: {
    displayName: 'Error Menssages';
    icon: 'shield';
    description: '';
  };
  attributes: {
    INPUT_EMAIL: Attribute.String;
    INPUT_PASSWORD: Attribute.String;
    INPUT_PHONE: Attribute.String;
    INPUT_FULLNAME: Attribute.String;
    INPUT_POSTCODE: Attribute.String;
    INPUT_URL: Attribute.String;
  };
}

export interface CommonObjectsRegex extends Schema.Component {
  collectionName: 'components_common_objects_regexes';
  info: {
    displayName: 'Regexs';
    icon: 'shield';
    description: '';
  };
  attributes: {
    INPUT_EMAIL: Attribute.String;
    INPUT_PASSWORD: Attribute.String;
    INPUT_PHONE: Attribute.String;
    INPUT_FULLNAME: Attribute.String;
    INPUT_POSTCODE: Attribute.String;
    INPUT_URL: Attribute.String;
  };
}

export interface SharedComponentsAccordionItemConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_accordion_item_configurables';
  info: {
    displayName: 'Accordion Item Configurable';
    icon: 'layer';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Text;
    expanded: Attribute.Boolean;
    accordion_id: Attribute.String;
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
    type: Attribute.Enumeration<['button', 'submit', 'reset']>;
    button_id: Attribute.String;
    button_class: Attribute.Enumeration<['primary', 'secundary', 'page']>;
  };
}

export interface SharedComponentsCheckBoxConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_check_box_configurables';
  info: {
    displayName: 'CheckBox Configurable';
    icon: 'layer';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    checked: Attribute.Boolean;
    checkbox_id: Attribute.String;
    type: Attribute.Enumeration<['radio', 'checkbox']>;
    name: Attribute.String;
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
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    type: Attribute.Enumeration<
      ['text', 'password', 'email', 'number', 'date', 'checkbox', 'radio']
    >;
  };
}

export interface SharedComponentsLinkConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_link_configurables';
  info: {
    displayName: 'Link Configurable';
    icon: 'layer';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
  };
}

export interface SharedComponentsModalDialog extends Schema.Component {
  collectionName: 'components_shared_components_modal_dialogs';
  info: {
    displayName: 'ModalDialog Configurable';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    is_open: Attribute.Boolean;
    aria_modal: Attribute.String;
  };
}

export interface SharedComponentsSelectedBoxConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_selected_box_configurables';
  info: {
    displayName: 'SelectedBox Configurable';
    icon: 'layer';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    options: Attribute.JSON & Attribute.Required;
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

export interface SharedComponentsTabConfigurable extends Schema.Component {
  collectionName: 'components_shared_components_tab_configurables';
  info: {
    displayName: 'Tab Configurable';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.Text;
    selected: Attribute.Boolean;
    aria_selected: Attribute.Boolean;
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

export interface SharedComponentsVideoPlayerConfigurable
  extends Schema.Component {
  collectionName: 'components_shared_components_video_player_configurables';
  info: {
    displayName: 'VideoPlayer Configurable';
    icon: 'layer';
  };
  attributes: {
    src: Attribute.String;
    controls: Attribute.Boolean;
    aria_label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common-objects.error-mensajes': CommonObjectsErrorMensajes;
      'common-objects.regex': CommonObjectsRegex;
      'shared-components.accordion-item-configurable': SharedComponentsAccordionItemConfigurable;
      'shared-components.button-configurable': SharedComponentsButtonConfigurable;
      'shared-components.check-box-configurable': SharedComponentsCheckBoxConfigurable;
      'shared-components.date-picker-configurable': SharedComponentsDatePickerConfigurable;
      'shared-components.icon-configurable': SharedComponentsIconConfigurable;
      'shared-components.input-configurable': SharedComponentsInputConfigurable;
      'shared-components.link-configurable': SharedComponentsLinkConfigurable;
      'shared-components.modal-dialog': SharedComponentsModalDialog;
      'shared-components.selected-box-configurable': SharedComponentsSelectedBoxConfigurable;
      'shared-components.slider-configurable': SharedComponentsSliderConfigurable;
      'shared-components.tab-configurable': SharedComponentsTabConfigurable;
      'shared-components.tag-configurable': SharedComponentsTagConfigurable;
      'shared-components.toggle-switch-configurable': SharedComponentsToggleSwitchConfigurable;
      'shared-components.tooltip-configurable': SharedComponentsTooltipConfigurable;
      'shared-components.video-player-configurable': SharedComponentsVideoPlayerConfigurable;
    }
  }
}
